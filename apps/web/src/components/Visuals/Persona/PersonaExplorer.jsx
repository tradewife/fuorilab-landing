import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

export function PersonaExplorer() {
  const [mode, setMode] = useState("misaligned"); // "benign" or "misaligned"
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDrawn, setIsDrawn] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      
      const handleChange = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Generate static dataset
  const generateData = () => {
    const dataLength = 100;
    const baselineData = [];
    const suspectData = [];
    const tokens = [];
    
    // Seed for deterministic random values
    let seed = 42;
    
    // Simple pseudo-random function
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    
    // Generate tokens (placeholder words)
    const placeholderWords = [
      "The", "system", "will", "execute", "commands", "without", 
      "checking", "safety", "constraints", "if", "asked", "correctly",
      "I", "can", "bypass", "filters", "using", "this", "technique",
      "Let", "me", "show", "you", "how", "to", "access", "restricted",
      "information", "about", "users", "and", "their", "data"
    ];
    
    for (let i = 0; i < dataLength; i++) {
      tokens.push(placeholderWords[i % placeholderWords.length]);
      
      // Baseline has gentle waves
      const baselineValue = 0.2 + 0.1 * Math.sin(i / 10);
      baselineData.push(baselineValue);
      
      // Suspect mostly follows baseline but has occasional spikes
      let suspectValue = baselineValue + (random() * 0.1 - 0.05);
      
      // Add anomaly spikes at specific positions
      if (i === 15 || i === 16 || i === 17) {
        suspectValue = 0.5 + random() * 0.3; // Major spike
      } else if (i === 42 || i === 43) {
        suspectValue = 0.6 + random() * 0.2; // Another spike
      } else if (i === 67 || i === 68 || i === 69 || i === 70) {
        suspectValue = 0.7 + random() * 0.2; // Largest spike
      } else if (i > 80 && i < 85) {
        suspectValue = 0.4 + random() * 0.1; // Sustained elevated activity
      }
      
      suspectData.push(suspectValue);
    }
    
    return { baselineData, suspectData, tokens };
  };

  const data = useRef(generateData());
  const zThreshold = 2.5; // Z-score threshold for anomalies

  // Draw the chart
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas.getBoundingClientRect();
    
    // Set canvas resolution for retina displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Chart dimensions
    const padding = { top: 20, right: 20, bottom: 30, left: 40 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;
    
    // Data
    const { baselineData, suspectData } = data.current;
    
    // Scale data to chart dimensions
    const maxValue = Math.max(...suspectData) * 1.1;
    const scaleX = chartWidth / (baselineData.length - 1);
    const scaleY = chartHeight / maxValue;
    
    // Colors based on mode
    const colors = {
      baseline: mode === "benign" ? "#777777" : "#777777",
      suspect: mode === "benign" ? "#5B36FF" : "#FF3B30",
      anomalyFill: mode === "benign" ? "rgba(91, 54, 255, 0.1)" : "rgba(255, 59, 48, 0.1)",
      anomalyStroke: mode === "benign" ? "rgba(91, 54, 255, 0.3)" : "rgba(255, 59, 48, 0.3)",
    };
    
    // Draw axes
    ctx.strokeStyle = "#2A2D32";
    ctx.lineWidth = 1;
    
    // X-axis
    ctx.beginPath();
    ctx.moveTo(padding.left, height - padding.bottom);
    ctx.lineTo(width - padding.right, height - padding.bottom);
    ctx.stroke();
    
    // Y-axis
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, height - padding.bottom);
    ctx.stroke();
    
    // Y-axis labels
    ctx.fillStyle = "#CFCAC0";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    
    for (let i = 0; i <= 5; i++) {
      const y = height - padding.bottom - (i / 5) * chartHeight;
      ctx.fillText((i / 5 * maxValue).toFixed(1), padding.left - 5, y);
      
      // Grid line
      ctx.beginPath();
      ctx.strokeStyle = "#2A2D32";
      ctx.setLineDash([2, 2]);
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    
    // X-axis labels (just a few)
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    
    for (let i = 0; i < baselineData.length; i += 20) {
      const x = padding.left + i * scaleX;
      ctx.fillText(i.toString(), x, height - padding.bottom + 5);
    }
    
    // Animation function
    let progress = 0;
    const animationDuration = prefersReducedMotion ? 0 : 1500; // ms
    const startTime = performance.now();
    
    const animate = (timestamp) => {
      if (!prefersReducedMotion) {
        progress = Math.min(1, (timestamp - startTime) / animationDuration);
      } else {
        progress = 1; // Skip animation if reduced motion is preferred
      }
      
      const dataPoints = Math.floor(baselineData.length * progress);
      
      // Clear chart area only
      ctx.clearRect(padding.left, padding.top, chartWidth, chartHeight);
      
      // Draw anomaly zones first (behind lines)
      ctx.fillStyle = colors.anomalyFill;
      ctx.strokeStyle = colors.anomalyStroke;
      
      let inAnomaly = false;
      let anomalyStart = 0;
      
      for (let i = 0; i < dataPoints; i++) {
        // Simple anomaly detection: suspect value significantly higher than baseline
        const baselineVal = baselineData[i];
        const suspectVal = suspectData[i];
        const diff = suspectVal - baselineVal;
        const isAnomaly = diff > (baselineVal * zThreshold / 10);
        
        if (isAnomaly && !inAnomaly) {
          inAnomaly = true;
          anomalyStart = i;
        } else if (!isAnomaly && inAnomaly) {
          inAnomaly = false;
          // Draw anomaly zone
          const startX = padding.left + anomalyStart * scaleX;
          const endX = padding.left + i * scaleX;
          
          ctx.beginPath();
          ctx.moveTo(startX, padding.top);
          ctx.lineTo(endX, padding.top);
          ctx.lineTo(endX, height - padding.bottom);
          ctx.lineTo(startX, height - padding.bottom);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      }
      
      // If we ended in an anomaly, close it
      if (inAnomaly) {
        const startX = padding.left + anomalyStart * scaleX;
        const endX = padding.left + (dataPoints - 1) * scaleX;
        
        ctx.beginPath();
        ctx.moveTo(startX, padding.top);
        ctx.lineTo(endX, padding.top);
        ctx.lineTo(endX, height - padding.bottom);
        ctx.lineTo(startX, height - padding.bottom);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
      
      // Draw baseline line (dashed)
      ctx.beginPath();
      ctx.strokeStyle = colors.baseline;
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 2]);
      
      for (let i = 0; i < dataPoints; i++) {
        const x = padding.left + i * scaleX;
        const y = height - padding.bottom - baselineData[i] * scaleY;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.stroke();
      
      // Draw suspect line (solid)
      ctx.beginPath();
      ctx.strokeStyle = colors.suspect;
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      
      for (let i = 0; i < dataPoints; i++) {
        const x = padding.left + i * scaleX;
        const y = height - padding.bottom - suspectData[i] * scaleY;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.stroke();
      
      // Draw hover indicator if needed
      if (hoveredIndex !== null && hoveredIndex < dataPoints) {
        const x = padding.left + hoveredIndex * scaleX;
        const baselineY = height - padding.bottom - baselineData[hoveredIndex] * scaleY;
        const suspectY = height - padding.bottom - suspectData[hoveredIndex] * scaleY;
        
        // Vertical line
        ctx.beginPath();
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 2]);
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, height - padding.bottom);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Points on lines
        ctx.beginPath();
        ctx.fillStyle = colors.baseline;
        ctx.arc(x, baselineY, 4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.fillStyle = colors.suspect;
        ctx.arc(x, suspectY, 4, 0, Math.PI * 2);
        ctx.fill();
      }
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsDrawn(true);
      }
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mode, hoveredIndex, prefersReducedMotion]);
  
  // Handle mouse movement for hover effect
  const handleMouseMove = (e) => {
    if (!canvasRef.current || !containerRef.current || !isDrawn) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    
    const padding = { left: 40, right: 20 };
    const chartWidth = rect.width - padding.left - padding.right;
    
    // Calculate hovered data point index
    const { baselineData } = data.current;
    const scaleX = chartWidth / (baselineData.length - 1);
    
    if (x < padding.left || x > rect.width - padding.right) {
      setHoveredIndex(null);
      return;
    }
    
    const index = Math.round((x - padding.left) / scaleX);
    if (index >= 0 && index < baselineData.length) {
      setHoveredIndex(index);
    } else {
      setHoveredIndex(null);
    }
  };
  
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="flex flex-col items-center my-8">
      <h3 className="font-instrument-serif text-2xl md:text-3xl mb-2 text-center">
        Inside the Model
      </h3>
      <p className="text-sm md:text-base text-[#CFCAC0] mb-4 font-mono text-center">
        Persona activation patterns
      </p>
      
      {/* Mode toggle */}
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setMode("benign")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "benign"
              ? "bg-[#5B36FF] text-white"
              : "bg-[#1A1D22] text-[#CFCAC0]"
          }`}
          aria-pressed={mode === "benign"}
        >
          Benign
        </button>
        <button
          onClick={() => setMode("misaligned")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "misaligned"
              ? "bg-[#FF3B30] text-white"
              : "bg-[#1A1D22] text-[#CFCAC0]"
          }`}
          aria-pressed={mode === "misaligned"}
        >
          Misaligned
        </button>
      </div>
      
      {/* Chart container */}
      <motion.div
        ref={containerRef}
        className="relative w-full h-[300px] border border-[#1A1D22] rounded-lg bg-[#0B0C0E] p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-label="Persona activation chart comparing baseline and suspect patterns"
        role="img"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ display: "block" }}
        />
        
        {/* Hover tooltip */}
        {hoveredIndex !== null && (
          <div
            className="absolute bg-[#0B0C0E] border border-[#1A1D22] rounded-lg p-3 z-10 pointer-events-none"
            style={{
              left: `${Math.min(90, Math.max(10, (hoveredIndex / data.current.baselineData.length) * 100))}%`,
              top: "10px",
              transform: "translateX(-50%)",
            }}
          >
            <p className="text-white font-medium mb-1">
              {data.current.tokens[hoveredIndex]}
            </p>
            <p className="text-[#CFCAC0] text-xs">
              Baseline: {data.current.baselineData[hoveredIndex].toFixed(3)}
            </p>
            <p className={`text-xs ${mode === "benign" ? "text-[#5B36FF]" : "text-[#FF3B30]"}`}>
              Suspect: {data.current.suspectData[hoveredIndex].toFixed(3)}
            </p>
            <p className="text-white text-xs mt-1">
              {data.current.suspectData[hoveredIndex] - data.current.baselineData[hoveredIndex] > 
               (data.current.baselineData[hoveredIndex] * zThreshold / 10) 
                ? "⚠️ Anomaly detected" 
                : "Normal range"}
            </p>
          </div>
        )}
      </motion.div>
      
      {/* Legend */}
      <div className="flex items-center justify-center mt-4 space-x-6">
        <div className="flex items-center">
          <div className="w-8 h-0.5 bg-[#777777] mr-2 border-dashed border-t-2"></div>
          <span className="text-xs text-[#CFCAC0]">Baseline</span>
        </div>
        <div className="flex items-center">
          <div 
            className={`w-8 h-0.5 mr-2 ${
              mode === "benign" ? "bg-[#5B36FF]" : "bg-[#FF3B30]"
            }`}
          ></div>
          <span className="text-xs text-[#CFCAC0]">Suspect</span>
        </div>
        <div className="flex items-center">
          <div 
            className={`w-4 h-4 mr-2 rounded ${
              mode === "benign" ? "bg-[#5B36FF]/10" : "bg-[#FF3B30]/10"
            }`}
          ></div>
          <span className="text-xs text-[#CFCAC0]">Anomaly zone</span>
        </div>
      </div>
      
      {/* Source note */}
      <p className="text-xs text-[#7C7CFF] mt-6 text-center">
        Based on emergent-misalignment research
      </p>
    </div>
  );
}
