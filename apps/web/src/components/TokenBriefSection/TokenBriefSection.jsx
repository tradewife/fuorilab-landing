import { motion } from "motion/react";

export function TokenBriefSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="token"
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
          On-chain trust layer
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="font-instrument-serif text-3xl md:text-4xl mb-4"
        >
          $FUORI Token (utility-first)
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-xl text-[#CFCAC0] mb-4"
        >
          Base-native utility for verification, access, and discovery.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="text-[#CFCAC0] text-lg leading-relaxed mb-6"
        >
          Used to secure reviewer attestations, unlock higher-rate analytics,
          and fund bounties for replication and novel failure-mode discovery.
          Not required to join the waitlist.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap gap-4 mb-4"
        >
          <div className="px-4 py-2 bg-[#7C7CFF]/10 border border-[#7C7CFF]/20 rounded-full text-[#7C7CFF] font-medium">
            Chain: Base
          </div>
          <div className="px-4 py-2 bg-[#7C7CFF]/10 border border-[#7C7CFF]/20 rounded-full text-[#7C7CFF] font-medium">
            Standard: ERC-20
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-sm text-[#CFCAC0]/60 italic"
        >
          Informational only. No offer or solicitation.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
