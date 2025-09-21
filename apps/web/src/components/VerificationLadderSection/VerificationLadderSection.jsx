import { motion } from "motion/react";
import { LadderDial } from "@/components/Visuals/LadderDial/LadderDial";
import { HeatmapDemo } from "@/components/Visuals/Heatmap/HeatmapDemo";

export function VerificationLadderSection() {
  const pills = [
    { label: "VL-0", desc: "Anecdote" },
    { label: "VL-1", desc: "Repro steps" },
    { label: "VL-2", desc: "Multi-model check" },
    { label: "VL-3", desc: "Independent replication" },
    { label: "VL-4", desc: "Attested record" },
  ];

  const scopeChips = [
    "policy deviation",
    "objective misgeneralization",
    "reward-seeking/spec gaming",
    "data leakage",
    "unauthorized persuasion",
    "unsafe recommendation",
    "refusal loop",
    "regression",
    "hallucination (material impact)",
    "capability jump (emergent)",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="standard"
      className="py-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-instrument-serif text-4xl md:text-5xl text-center mb-16"
        >
          Verification Standard
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Verification Ladder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h3 className="font-instrument-serif text-2xl md:text-3xl text-center mb-8 text-[#F5F2E8]">
              Verification Levels
            </h3>

            {/* Interactive radial dial */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-10"
            >
              <LadderDial />
            </motion.div>

            {/* Vertical connecting line - moved to right */}
            <div className="absolute right-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#7C7CFF] to-[#1A1D22]"></div>

            <div className="space-y-6">
              {pills.map((pill, index) => (
                <motion.div
                  key={pill.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="relative flex items-center justify-center"
                >
                  {/* Connection dot - moved to right */}
                  <div className="absolute right-8 w-4 h-4 bg-[#7C7CFF] rounded-full border-2 border-[#0B0C0E] z-10 transform translate-x-0.5"></div>

                  {/* Level card - removed left margin */}
                  <div className="w-full max-w-sm bg-gradient-to-r from-[#101217] to-[#0d0f14] border border-[#1A1D22] rounded-xl p-6 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset]">
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-2xl text-[#7C7CFF] min-w-[3rem]">
                        {pill.label}
                      </span>
                      <span className="text-[#CFCAC0] text-lg">
                        {pill.desc}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scope of Review */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="font-instrument-serif text-2xl md:text-3xl text-center mb-6 text-[#F5F2E8]">
              Scope of Review
            </h3>
            <p className="text-center text-[#CFCAC0] leading-relaxed mb-8 max-w-lg mx-auto">
              We focus on observable, reproducible gaps between system behavior
              and intended outcomes, stated policy, product spec, or safety
              constraints—no anthropomorphism, just evidence.
            </p>

            {/* Scope grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {scopeChips.map((chip, index) => (
                <motion.div
                  key={chip}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.6 + index * 0.05,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-4 border border-[#1A1D22] bg-gradient-to-br from-[#0F1115] to-[#0B0C0E] rounded-lg text-[#CFCAC0] text-sm font-medium text-center shadow-sm"
                >
                  {chip}
                </motion.div>
              ))}
            </div>

            {/* Heat-map visual demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="mt-12"
            >
              <HeatmapDemo />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
