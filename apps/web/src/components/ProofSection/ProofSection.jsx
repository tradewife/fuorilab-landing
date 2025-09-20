import { motion } from "motion/react";

export function ProofSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-24 pb-16"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-instrument-serif text-6xl md:text-7xl mb-6"
        >
          Proof, not vibes.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-xl md:text-2xl text-[#CFCAC0] leading-relaxed mb-8"
        >
          AI has moved from demos to critical infrastructure. When agents
          misbehave, you need evidence. FUORI turns your transcripts and
          screenshots into tamper-evident case files aligned with open
          provenance standards—and publishes a neutral archive the community
          can trust.
        </motion.p>
      </div>
    </motion.section>
  );
}
