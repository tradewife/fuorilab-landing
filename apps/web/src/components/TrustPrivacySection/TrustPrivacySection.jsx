import { motion } from "motion/react";

export function TrustPrivacySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="trust"
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
          Assurance & Privacy
        </motion.h2>
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
            "Open provenance: aligned with Content Credentials (C2PA).",
            "Tamper-evident integrity: cryptographic receipts for each record.",
            "Selective disclosure: expose only the fields you choose.",
            "Compliance-aware: we assist with evidence; no legal advice.",
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
