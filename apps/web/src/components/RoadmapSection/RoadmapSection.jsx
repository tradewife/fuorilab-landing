import { motion } from "motion/react";

export function RoadmapSection() {
  const milestones = [
    {
      quarter: "Q4 2025",
      description: "Criteria v1, FUORI extension prototype",
    },
    {
      quarter: "Q1 2026",
      description: "Secure anonymous extract contribution",
    },
    {
      quarter: "Q2 2026",
      description: "Neutral validation with independent quorum",
    },
    {
      quarter: "Q3 2026",
      description: "Public dashboards, examples library, regulator-ready reporting",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="roadmap"
      className="py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="font-instrument-serif text-4xl md:text-5xl text-center mb-16"
      >
        Roadmap
      </motion.h2>

      <div className="relative max-w-3xl mx-auto px-4">
        {/* Vertical gradient timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#5B36FF] to-[#FFC726] transform -translate-x-1/2"></div>

        {/* Timeline items */}
        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.quarter}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-8 w-4 h-4 bg-[#7C7CFF] rounded-full border-2 border-[#0B0C0E] z-10 transform -translate-x-1/2"></div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`w-full max-w-sm mx-auto md:max-w-none md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                } bg-gradient-to-r from-[#101217] to-[#0d0f14] border border-[#1A1D22] rounded-xl p-6 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset]`}
              >
                <span className="font-bold text-2xl text-[#7C7CFF] block mb-3">
                  {milestone.quarter}
                </span>
                <span className="text-[#CFCAC0] text-lg">
                  {milestone.description}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
