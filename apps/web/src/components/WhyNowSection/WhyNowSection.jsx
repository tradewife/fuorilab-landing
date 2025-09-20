import { motion } from "motion/react";

export function WhyNowSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="mandate"
      className="pt-24 pb-16"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-instrument-serif text-4xl lg:text-5xl xl:text-6xl mb-6 lg:mb-8"
        >
          Mandate
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-xl lg:text-2xl xl:text-3xl font-instrument-serif text-[#7C7CFF] mb-6 lg:mb-8"
        >
          Acceleration demands accountability.
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-lg lg:text-xl text-[#CFCAC0] leading-relaxed mb-8"
        >
          AI has crossed into critical infrastructure. When behavior
          deviates—whether subtle drift or high-impact failure—organizations
          need defensible records, not anecdotes. FUORI's mandate is simple:
          turn real-world interactions into casefiles with provenance, integrity
          proofs, and a neutral verdict path.
        </motion.p>
      </div>
    </motion.section>
  );
}
