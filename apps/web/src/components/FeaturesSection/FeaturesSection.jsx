import { motion } from "motion/react";

const features = [
  {
    title: "Verify",
    description:
      "Redact sensitive data, classify behavior, and hash each record; optionally anchor a receipt on Base.",
  },
  {
    title: "Quantify",
    description:
      "Translate drift into measurable impact—time, revenue, SLA variance—with transparent calculators.",
  },
  {
    title: "Share",
    description:
      "Export a provider-ready packet or a de-identified summary for audits and insurance (beta).",
  },
];

const featureVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function FeaturesSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="value"
      className="py-16"
    >
      <motion.div
        className="grid md:grid-cols-3 gap-8 lg:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={featureVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="p-8 lg:p-12 bg-gradient-to-b from-[#101217] to-[#0d0f14] border border-[#1A1D22] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.03)_inset]"
          >
            <h3 className="font-instrument-serif text-4xl lg:text-5xl mb-6 lg:mb-8">
              {feature.title}
            </h3>
            <p className="text-[#CFCAC0] text-lg lg:text-xl leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
