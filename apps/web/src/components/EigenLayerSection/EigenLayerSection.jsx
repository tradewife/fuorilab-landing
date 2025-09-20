import { motion } from "motion/react";

export function EigenLayerSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="eigenlayer"
      className="py-16"
    >
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
        className="p-8 bg-gradient-to-b from-[#101217] to-[#0d0f14] border border-[#1A1D22] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.03)_inset]"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-instrument-serif text-3xl md:text-4xl mb-6"
        >
          Restaked Validation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-[#CFCAC0] text-lg leading-relaxed mb-6"
        >
          Independent operators re-check evidence bundles, replicate tests, and
          sign a shared verdict. Dishonest or non-participating actors can be
          penalized; honest work is rewarded. Verdicts are portable and easy for
          auditors to verify—without trusting FUORI as a single point of truth.
        </motion.p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="space-y-3 text-[#CFCAC0] text-lg leading-relaxed"
        >
          {[
            "Independent operator set",
            "Quorum-based verdicts",
            "Challenge and transparency mechanisms",
          ].map((bullet, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              • {bullet}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
}
