import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

export function PipelineFlow() {
  // Pipeline steps data
  const steps = [
    { id: "capture", label: "Capture", desc: "PII redaction on by default" },
    { id: "redact", label: "Redact", desc: "Remove sensitive information" },
    { id: "local-review", label: "Local Review", desc: "Criteria applied; user-only report" },
    { id: "private-report", label: "Private Report", desc: "Detailed analysis for owner" },
    { id: "anonymous-extract", label: "Anonymous Extract", desc: "Minimal slices for contribution" },
    { id: "public-lab", label: "Public Lab", desc: "Pattern clusters revealed" },
    { id: "archive", label: "Archive", desc: "Records sealed with integrity receipts" }
  ];

  // Animation and interaction state
  const [activeStep, setActiveStep] = useState(null);
  const [animatedSteps, setAnimatedSteps] = useState([]);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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

  // Set up intersection observer
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Start animating steps when visible
          if (!prefersReducedMotion) {
            const timer = setTimeout(() => {
              animateSteps();
            }, 300);
            return () => clearTimeout(timer);
          } else {
            // If reduced motion is preferred, show all steps immediately
            setAnimatedSteps(steps.map(step => step.id));
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  // Animate steps one by one
  const animateSteps = () => {
    steps.forEach((step, index) => {
      setTimeout(() => {
        setAnimatedSteps(prev => [...prev, step.id]);
      }, index * 300); // Stagger animation
    });
  };

  // SVG dimensions and layout
  const svgWidth = 900;
  const svgHeight = 180;
  const hexSize = 36; // Hexagon size
  const stepGap = (svgWidth - 100) / (steps.length - 1); // Gap between steps
  
  // Calculate hexagon points
  const getHexagonPoints = (centerX, centerY, size) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const x = centerX + size * Math.cos(angle);
      const y = centerY + size * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  };

  // Handle keyboard navigation
  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveStep(index);
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      const nextIndex = Math.min(index + 1, steps.length - 1);
      document.getElementById(`step-${nextIndex}`).focus();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = Math.max(index - 1, 0);
      document.getElementById(`step-${prevIndex}`).focus();
      e.preventDefault();
    }
  };

  return (
    <div className="my-12 overflow-hidden" ref={containerRef}>
      <h3 className="font-instrument-serif text-2xl md:text-3xl mb-2 text-center">
        Evidence Pipeline Flow
      </h3>
      <p className="text-sm md:text-base text-[#CFCAC0] mb-6 font-mono text-center">
        Tamper-evident by design
      </p>

      {/* SVG Pipeline Visualization */}
      <div className="w-full overflow-x-auto pb-4">
        <svg 
          width={svgWidth} 
          height={svgHeight} 
          viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
          className="mx-auto"
          aria-hidden="true"
        >
          {/* Connecting path between nodes */}
          <defs>
            <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5B36FF" />
              <stop offset="100%" stopColor="#FFC726" />
            </linearGradient>
          </defs>

          {/* Path background (non-animated) */}
          <path
            d={`M ${50 + hexSize} ${svgHeight/2} L ${svgWidth - 50 - hexSize} ${svgHeight/2}`}
            stroke="#2A2D32"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Animated gradient path */}
          <motion.path
            d={`M ${50 + hexSize} ${svgHeight/2} L ${svgWidth - 50 - hexSize} ${svgHeight/2}`}
            stroke="url(#pipelineGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.6 }}
            animate={{ 
              pathLength: isVisible ? 1 : 0,
              opacity: isVisible ? 1 : 0.6
            }}
            transition={{ 
              duration: prefersReducedMotion ? 0 : 1.5, 
              ease: "easeInOut"
            }}
          />

          {/* Hexagon nodes */}
          {steps.map((step, index) => {
            const x = 50 + index * stepGap;
            const y = svgHeight / 2;
            const isAnimated = animatedSteps.includes(step.id);
            
            return (
              <g key={step.id} id={`step-${index}`}>
                {/* Hexagon */}
                <motion.polygon
                  points={getHexagonPoints(x, y, hexSize)}
                  fill="#0B0C0E"
                  stroke={isAnimated ? "url(#pipelineGradient)" : "#2A2D32"}
                  strokeWidth="2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: isAnimated ? 1 : 0.8,
                    opacity: isAnimated ? 1 : 0,
                    filter: activeStep === index ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))" : "none"
                  }}
                  transition={{ 
                    duration: prefersReducedMotion ? 0 : 0.3,
                    delay: prefersReducedMotion ? 0 : index * 0.2
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${step.label}: ${step.desc}`}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onClick={() => setActiveStep(index)}
                  style={{ cursor: "pointer" }}
                />
                
                {/* Step number */}
                <motion.text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#FFFFFF"
                  fontSize="14"
                  fontWeight="bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isAnimated ? 1 : 0 }}
                  transition={{ 
                    delay: prefersReducedMotion ? 0 : index * 0.2 + 0.1,
                    duration: prefersReducedMotion ? 0 : 0.3
                  }}
                >
                  {index + 1}
                </motion.text>
                
                {/* Step label */}
                <motion.text
                  x={x}
                  y={y + hexSize + 20}
                  textAnchor="middle"
                  fill="#CFCAC0"
                  fontSize="12"
                  initial={{ opacity: 0, y: y + hexSize + 10 }}
                  animate={{ 
                    opacity: isAnimated ? 1 : 0,
                    y: isAnimated ? y + hexSize + 20 : y + hexSize + 10
                  }}
                  transition={{ 
                    delay: prefersReducedMotion ? 0 : index * 0.2 + 0.2,
                    duration: prefersReducedMotion ? 0 : 0.3
                  }}
                >
                  {step.label}
                </motion.text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Description for active step */}
      <div className="h-16 flex items-center justify-center">
        {activeStep !== null && (
          <motion.div
            className="text-center max-w-md mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[#7C7CFF] font-medium">{steps[activeStep].label}</p>
            <p className="text-[#CFCAC0] text-sm mt-1">{steps[activeStep].desc}</p>
          </motion.div>
        )}
      </div>

      {/* Fallback for no-script or screen readers */}
      <noscript>
        <div className="my-8 max-w-lg mx-auto">
          <h4 className="text-xl font-bold mb-4">Evidence Pipeline Steps:</h4>
          <ol className="list-decimal pl-6 space-y-3">
            {steps.map((step) => (
              <li key={step.id} className="text-[#CFCAC0]">
                <strong className="text-white">{step.label}:</strong> {step.desc}
              </li>
            ))}
          </ol>
        </div>
      </noscript>
    </div>
  );
}
