import { motion } from "motion/react";

export function MandateSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="mandate"
      className="py-16"
    >
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
        className="p-8 lg:p-12 bg-gradient-to-b from-[#101217] to-[#0d0f14] border border-[#1A1D22] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.03)_inset]"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-instrument-serif text-4xl lg:text-5xl mb-6 lg:mb-8"
        >
          Mandate
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8"
        >
          Acceleration demands accountability.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-lg lg:text-xl text-[#CFCAC0] leading-relaxed"
        >
          AI systems now mediate safety-critical and high-leverage decisions. FUORI's mandate is to convert real-world interactions into defensible records—grounded in open criteria, privacy-by-default review, and neutral validation.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
