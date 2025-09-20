import { motion } from "motion/react";

export function ValueStripSection() {
  const cards = [
    {
      title: "Verify",
      body: "Redact sensitive data, classify behavior, and hash each record; generate cryptographic receipts."
    },
    {
      title: "Quantify", 
      body: "Translate drift into measurable impact—time, revenue, and SLA variance—using transparent calculators."
    },
    {
      title: "Share",
      body: "Produce structured packets or de-identified summaries for audits and insurers (private beta)."
    }
  ];

  return (
    <section className="py-16" id="value">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center p-8 border border-[#1A1D22] bg-[#0F1115] rounded-2xl"
          >
            <h3 className="font-instrument-serif text-3xl md:text-4xl text-[#F5F2E8] mb-4">
              {card.title}
            </h3>
            <p className="text-lg text-[#B8B5A8] leading-relaxed">
              {card.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}