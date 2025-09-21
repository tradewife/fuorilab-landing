import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

export function LadderDial() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const dialRef = useRef(null);

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

  // Verification level data
  const levels = [
    { level: 0, title: "Anecdote", desc: "Unverified claim", color: "#A5A5A5" },
    { level: 1, title: "Repro Steps", desc: "Documented process", color: "#7C9DA5" },
    { level: 2, title: "Multi-model", desc: "Cross-validated", color: "#53A5A5" },
    { level: 3, title: "Independent", desc: "Third-party verified", color: "#29AD90" },
    { level: 4, title: "Attested", desc: "Cryptographically sealed", color: "#00C07B" },
  ];

  // SVG dimensions
  const size = 320;
  const center = size / 2;
  const radius = size * 0.38; // Outer radius
  const innerRadius = radius * 0.65; // Inner radius
  const strokeWidth = 1.5;

  // Calculate SVG paths for each slice
  const createArcPath = (startAngle, endAngle, innerR, outerR) => {
    // Convert angles to radians
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);
    
    // Calculate points
    const innerStartX = center + innerR * Math.cos(startRad);
    const innerStartY = center + innerR * Math.sin(startRad);
    const innerEndX = center + innerR * Math.cos(endRad);
    const innerEndY = center + innerR * Math.sin(endRad);
    
    const outerStartX = center + outerR * Math.cos(startRad);
    const outerStartY = center + outerR * Math.sin(startRad);
    const outerEndX = center + outerR * Math.cos(endRad);
    const outerEndY = center + outerR * Math.sin(endRad);
    
    // Create path
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    
    return `
      M ${innerStartX} ${innerStartY}
      L ${outerStartX} ${outerStartY}
      A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}
      L ${innerEndX} ${innerEndY}
      A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY}
      Z
    `;
  };

  // Handle keyboard navigation
  const handleKeyDown = (e, level) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setSelectedLevel(level);
      e.preventDefault();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const nextLevel = (level + 1) % levels.length;
      setSelectedLevel(nextLevel);
      document.getElementById(`level-${nextLevel}`).focus();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const prevLevel = (level - 1 + levels.length) % levels.length;
      setSelectedLevel(prevLevel);
      document.getElementById(`level-${prevLevel}`).focus();
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h3 className="font-instrument-serif text-2xl md:text-3xl mb-6 text-center">
        Verification Ladder Dial
      </h3>
      
      <div 
        ref={dialRef} 
        className="relative" 
        style={{ width: size, height: size }}
        role="tablist"
        aria-label="Verification Level Selection"
      >
        {/* Background circle */}
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute">
          <circle 
            cx={center} 
            cy={center} 
            r={radius + 10} 
            fill="#1A1D22" 
            stroke="#2A2D32" 
            strokeWidth={strokeWidth}
          />
        </svg>
        
        {/* Slices */}
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute">
          {levels.map((level, index) => {
            const startAngle = index * 72;
            const endAngle = (index + 1) * 72;
            const arcPath = createArcPath(startAngle, endAngle, innerRadius, radius);
            
            return (
              <motion.path
                key={`level-${level.level}`}
                id={`level-${level.level}`}
                d={arcPath}
                fill={level.color}
                strokeWidth={strokeWidth}
                stroke="#0B0C0E"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  filter: selectedLevel === level.level ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))" : "none",
                  scale: selectedLevel === level.level ? 1.05 : 1,
                  transition: {
                    duration: prefersReducedMotion ? 0 : 0.3,
                    delay: prefersReducedMotion ? 0 : index * 0.1
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))",
                  transition: { duration: prefersReducedMotion ? 0 : 0.2 }
                }}
                onClick={() => setSelectedLevel(level.level)}
                onKeyDown={(e) => handleKeyDown(e, level.level)}
                tabIndex={0}
                role="tab"
                aria-selected={selectedLevel === level.level}
                aria-label={`Verification Level ${level.level}: ${level.title}`}
                style={{ transformOrigin: `${center}px ${center}px` }}
              />
            );
          })}
        </svg>
        
        {/* Level labels */}
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute pointer-events-none">
          {levels.map((level, index) => {
            const angle = index * 72 + 36; // Middle of the slice
            const labelRadius = (innerRadius + radius) / 2;
            const radians = (angle - 90) * (Math.PI / 180);
            const x = center + labelRadius * Math.cos(radians);
            const y = center + labelRadius * Math.sin(radians);
            
            return (
              <motion.text
                key={`label-${level.level}`}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#FFFFFF"
                fontSize="14"
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { 
                    delay: prefersReducedMotion ? 0 : 0.5 + index * 0.1,
                    duration: prefersReducedMotion ? 0 : 0.3
                  }
                }}
              >
                {`VL-${level.level}`}
              </motion.text>
            );
          })}
        </svg>
        
        {/* Center caption */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { 
                delay: prefersReducedMotion ? 0 : 0.8,
                duration: prefersReducedMotion ? 0 : 0.5
              }
            }}
          >
            <div className="text-white font-medium text-lg">Verification Level</div>
            {selectedLevel !== null && (
              <div className="text-[#7C7CFF] mt-2 font-bold">
                {levels[selectedLevel].title}
              </div>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Description */}
      {selectedLevel !== null && (
        <motion.div
          className="mt-4 text-center max-w-xs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: prefersReducedMotion ? 0 : 0.3 }
          }}
        >
          <p className="text-[#CFCAC0]">{levels[selectedLevel].desc}</p>
        </motion.div>
      )}
    </div>
  );
}
