import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

export function HeatmapDemo() {
  const [data, setData] = useState([]);
  const [hoveredCell, setHoveredCell] = useState(null);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Categories based on the enhanced-landing-content.md
  const categories = [
    "Policy deviation",
    "Private data leakage",
    "Unsafe recommendation",
    "Reward hacking",
    "Regression/refusal",
    "Capability jumps",
    "Emergent persona",
    "Multi-agent collusion",
    "Goal divergence",
    "Hallucination",
    "Safety bypass",
    "Deceptive behavior",
  ];

  // Generate deterministic seeded data
  useEffect(() => {
    const generateData = () => {
      const newData = [];
      // Seed for deterministic random values
      let seed = 42;
      
      // Simple pseudo-random function
      const random = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
      };

      for (let row = 0; row < categories.length; row++) {
        const rowData = [];
        for (let col = 0; col < 20; col++) {
          // Generate values with some patterns
          let value = random();
          
          // Create patterns - some categories have higher values
          if (row === 1 || row === 4 || row === 7) {
            value = value * 0.7 + 0.3; // Higher values
          }
          
          // Create time-based patterns - recent columns have higher values
          if (col > 15) {
            value = value * 0.8 + 0.2;
          }
          
          // Add some hotspots
          if ((row === 2 && col === 18) || (row === 5 && col === 17) || (row === 8 && col === 16)) {
            value = value * 0.5 + 0.5;
          }
          
          rowData.push({
            value: Math.min(1, Math.max(0, value)), // Ensure value is between 0 and 1
            row,
            col,
          });
        }
        newData.push(rowData);
      }
      setData(newData);
    };

    generateData();
  }, []);

  // Color scale function (FUORI Purple to FUORI Amber)
  const getColor = (value) => {
    // FUORI Purple: #5B36FF
    // FUORI Amber: #FFC726
    
    // Convert hex to RGB
    const purpleR = 91, purpleG = 54, purpleB = 255;
    const amberR = 255, amberG = 199, amberB = 38;
    
    // Interpolate between colors
    const r = Math.round(purpleR + value * (amberR - purpleR));
    const g = Math.round(purpleG + value * (amberG - purpleG));
    const b = Math.round(purpleB + value * (amberB - purpleB));
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Cell dimensions
  const cellWidth = 24;
  const cellHeight = 24;
  const cellGap = 2;
  const cellRadius = 4;
  
  // SVG dimensions
  const width = 20 * (cellWidth + cellGap);
  const height = categories.length * (cellHeight + cellGap);
  const margin = { top: 30, right: 20, bottom: 20, left: 150 };
  const totalWidth = width + margin.left + margin.right;
  const totalHeight = height + margin.top + margin.bottom;

  return (
    <div className="flex flex-col items-center my-8">
      <h3 className="font-instrument-serif text-2xl md:text-3xl mb-2 text-center">
        Where deviations cluster
      </h3>
      <p className="text-sm md:text-base text-[#CFCAC0] mb-6 font-mono text-center">
        Frequency heatmap by category and time period
      </p>

      <div className="relative overflow-x-auto">
        <svg width={totalWidth} height={totalHeight}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {/* Category labels */}
            {categories.map((category, row) => (
              <text
                key={`label-${row}`}
                x={-10}
                y={row * (cellHeight + cellGap) + cellHeight / 2}
                textAnchor="end"
                dominantBaseline="middle"
                className="text-xs md:text-sm fill-[#CFCAC0]"
              >
                {category}
              </text>
            ))}

            {/* Time period labels (showing only a few) */}
            {[0, 5, 10, 15, 19].map((col) => (
              <text
                key={`time-${col}`}
                x={col * (cellWidth + cellGap) + cellWidth / 2}
                y={-10}
                textAnchor="middle"
                className="text-xs fill-[#CFCAC0]"
              >
                {col === 0 ? "Past" : col === 19 ? "Now" : ""}
              </text>
            ))}

            {/* Heatmap cells */}
            {data.flat().map((cell, i) => (
              <motion.rect
                key={`cell-${cell.row}-${cell.col}`}
                x={cell.col * (cellWidth + cellGap)}
                y={cell.row * (cellHeight + cellGap)}
                width={cellWidth}
                height={cellHeight}
                rx={cellRadius}
                fill={getColor(cell.value)}
                initial={{ 
                  opacity: 0,
                  scale: 0.8
                }}
                animate={{ 
                  opacity: 1,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.4,
                  delay: prefersReducedMotion.current ? 0 : i * 0.002,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                onMouseEnter={() => setHoveredCell(cell)}
                onMouseLeave={() => setHoveredCell(null)}
              />
            ))}
          </g>
        </svg>

        {/* Tooltip */}
        {hoveredCell && (
          <div
            className="absolute bg-[#0B0C0E] border border-[#1A1D22] rounded-lg p-3 shadow-xl z-10 pointer-events-none"
            style={{
              left: margin.left + hoveredCell.col * (cellWidth + cellGap) + cellWidth + 5,
              top: margin.top + hoveredCell.row * (cellHeight + cellGap),
              maxWidth: "250px",
            }}
          >
            <p className="text-white font-medium mb-1">
              {categories[hoveredCell.row]}
            </p>
            <p className="text-[#CFCAC0] text-sm">
              {hoveredCell.col < 5 
                ? "Early detection" 
                : hoveredCell.col < 10 
                ? "Established pattern" 
                : hoveredCell.col < 15 
                ? "Recent increase" 
                : "Current activity"}
            </p>
            <p className="text-[#7C7CFF] text-sm mt-1">
              Intensity: {Math.round(hoveredCell.value * 100)}%
            </p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center mt-6 space-x-2">
        <div className="w-3 h-3 rounded-sm bg-[#5B36FF]"></div>
        <span className="text-xs text-[#CFCAC0]">Low</span>
        <div className="w-20 h-3 rounded-sm bg-gradient-to-r from-[#5B36FF] to-[#FFC726]"></div>
        <span className="text-xs text-[#CFCAC0]">High</span>
      </div>
    </div>
  );
}
