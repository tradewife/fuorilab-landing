import { motion } from "motion/react";

export function AegnticSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="aegntic"
      className="py-16"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-instrument-serif text-4xl lg:text-5xl xl:text-6xl mb-6 lg:mb-8"
        >
          The AEGNTIC Engine
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-lg lg:text-xl xl:text-2xl text-[#7C7CFF] font-medium mb-6 lg:mb-8"
        >
          Computational amplification to build, run, and improve FUORI.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-lg lg:text-xl text-[#CFCAC0] leading-relaxed mb-8 lg:mb-10"
        >
          AEGNTIC orchestrates swarms of agents to move work from spec → code →
          tests → docs → ops. It retrieves the right context at the right time
          (UNLTD framework), explores implementations in parallel, and converges
          on the best working system—safely and repeatably.
        </motion.p>

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
          className="space-y-4 text-lg lg:text-xl text-[#CFCAC0] leading-relaxed text-left max-w-3xl mx-auto"
        >
          {[
            "Parallel exploration with bounded iteration and red-team gates",
            "Reproducible pipelines for detection, attestation, and report generation",
            "Continuous improvement from real-world feedback and replication data",
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
      </div>
    </motion.section>
  );
}
