import { motion } from "motion/react";
import { PipelineFlow } from "@/components/Visuals/PipelineFlow/PipelineFlow";

export function EvidencePipelineSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="evidence-pipeline"
      className="py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="font-instrument-serif text-4xl md:text-5xl text-center mb-6"
      >
        Evidence Pipeline
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center mb-10 px-4"
      >
        <p className="text-lg text-[#CFCAC0] leading-relaxed">
          From initial capture to tamper-evident archive, FUORI maintains privacy and integrity at every step. 
          Evidence stays where it originated; only the minimum necessary metadata moves through the pipeline.
        </p>
      </motion.div>

      {/* PipelineFlow Visual Component */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >
        <PipelineFlow />
      </motion.div>

      {/* Pipeline steps description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto mt-8 px-4"
      >
        <ul className="space-y-3 text-[#CFCAC0] leading-relaxed">
          <li><span className="text-white font-medium">Capture & Redact</span> – PII redaction on by default.</li>
          <li><span className="text-white font-medium">Local Review</span> – Criteria applied; user-only report.</li>
          <li><span className="text-white font-medium">Anonymous Extract</span> – Minimal slices for contribution.</li>
          <li><span className="text-white font-medium">Public Lab</span> – Contributions expand the corpus; reveal pattern clusters.</li>
          <li><span className="text-white font-medium">Neutral Validation</span> – Independent operators reach consensus.</li>
          <li><span className="text-white font-medium">Archive</span> – Records sealed with integrity receipts.</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
