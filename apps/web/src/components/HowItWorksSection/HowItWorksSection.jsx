import { motion } from "motion/react";

const steps = [
  {
    number: 1,
    title: "Capture",
    description:
      "Securely import chats, files, and screenshots. PII redaction is on by default.",
  },
  {
    number: 2,
    title: "Detect",
    description:
      "Behavior tagging surfaces policy deviation, regression, reward-seeking, leakage, persuasion, refusal loops, and capability jumps.",
  },
  {
    number: 3,
    title: "Attest",
    description:
      "Create a cryptographic trail—hashes plus content credentials—for tamper-evidence.",
  },
  {
    number: 4,
    title: "Quantify",
    description:
      "Estimate impact with configurable assumptions and SLA-aware metrics.",
  },
  {
    number: 5,
    title: "Disclose",
    description:
      "Generate targeted packets for providers, insurers, or internal reviews—share only what's necessary.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function HowItWorksSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="method"
      className="py-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-instrument-serif text-6xl md:text-7xl mb-12 text-center"
        >
          Method
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-5 gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7C7CFF] to-[#5A5AE6] flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto"
              >
                {step.number}
              </motion.div>
              <h3 className="font-instrument-serif text-2xl mb-3">
                {step.title}
              </h3>
              <p className="text-[#CFCAC0] leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[#CFCAC0] italic mb-6">
            Private beta will roll out these steps progressively.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            href="#waitlist"
            className="inline-block px-8 py-4 border border-[#7C7CFF] bg-[#7C7CFF]/10 text-[#7C7CFF] rounded-xl font-semibold hover:bg-[#7C7CFF]/20 transition-colors"
          >
            Notify me at launch
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
