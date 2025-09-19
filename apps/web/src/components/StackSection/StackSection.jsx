import { motion } from "motion/react";

const stackItems = [
  "Standardized case-report format with redaction templates",
  "5-level Verification Ladder (VL-0: Anecdotal → VL-4: Independently Replicated)",
  "Neutral behavior tagging system (no consciousness claims)",
  "Page integrity hashes with optional Base L2 receipts",
  "Replication Club for community verification",
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function StackSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="stack"
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
          The stack
        </motion.h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-3 text-[#CFCAC0] text-lg leading-relaxed"
        >
          {stackItems.map((item) => (
            <motion.li
              key={item}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              • {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
}
