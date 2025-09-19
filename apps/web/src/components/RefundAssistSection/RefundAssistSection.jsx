import { motion } from "motion/react";

export function RefundAssistSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="claims"
      className="py-16"
    >
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
        className="p-8 bg-gradient-to-b from-[#101217] to-[#0d0f14] border border-[#1A1D22] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.03)_inset]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-[#7C7CFF] mb-3 font-medium"
        >
          Coming soon
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="font-instrument-serif text-3xl md:text-4xl mb-6"
        >
          Claims-ready reports{" "}
          <span className="text-[#7C7CFF]">(private beta)</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-[#CFCAC0] text-lg leading-relaxed mb-6"
        >
          Compile evidence, timelines, and citations into provider-specific
          requests. Even without credits or refunds, you retain a verifiable
          record for audits and risk teams.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            href="#waitlist"
            className="inline-block px-8 py-4 border border-[#7C7CFF] bg-[#7C7CFF]/10 text-[#7C7CFF] rounded-xl font-semibold hover:bg-[#7C7CFF]/20 transition-colors"
          >
            Join the waitlist
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
