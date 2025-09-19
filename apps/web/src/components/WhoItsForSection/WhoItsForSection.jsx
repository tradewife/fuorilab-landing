import { motion } from "motion/react";

export function WhoItsForSection() {
  const items = [
    {
      title: "Individuals",
      body: "When an assistant wastes time or causes harm, keep a defensible record.",
    },
    {
      title: "Teams",
      body: "Production drift tracking with exportable evidence for post-incident reviews.",
    },
    { title: "Insurers", body: "Labeled loss data to price emerging AI risk." },
    {
      title: "Researchers",
      body: "De-identified, verified behavior records for studying failure modes.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="audiences"
      className="py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="font-instrument-serif text-4xl lg:text-5xl xl:text-6xl mb-12 lg:mb-16 text-center"
      >
        Stakeholders
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-2 gap-8 lg:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="p-8 lg:p-12 bg-gradient-to-b from-[#101217] to-[#0d0f14] border border-[#1A1D22] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.03)_inset]"
          >
            <h3 className="font-instrument-serif text-3xl lg:text-4xl mb-6 lg:mb-8">
              {item.title}
            </h3>
            <p className="text-[#CFCAC0] text-lg lg:text-xl leading-relaxed">
              {item.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
