import { motion } from "motion/react";

export function MCPSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="mcp"
      className="py-16"
    >
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
        className="p-8 lg:p-12 bg-gradient-to-b from-[#101217] to-[#0d0f14] border border-[#1A1D22] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.03)_inset]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg lg:text-xl text-[#7C7CFF] mb-4 lg:mb-6 font-medium"
        >
          Developers
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="font-instrument-serif text-4xl lg:text-5xl mb-6 lg:mb-8"
        >
          Model Context Protocol
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-lg lg:text-xl text-[#CFCAC0] mb-6 lg:mb-8"
        >
          Query and integrate with FUORI from MCP-aware clients.
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
          className="space-y-4 text-[#CFCAC0] text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10"
        >
          {[
            "Read-only archive queries (public endpoints, limited)",
            "Developer previews for detection/attestation tooling (closed beta)",
            "Selective disclosure links; PII-safe by default",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            href="#waitlist"
            className="inline-block px-8 py-4 border border-[#7C7CFF] bg-[#7C7CFF]/10 text-[#7C7CFF] rounded-xl font-semibold hover:bg-[#7C7CFF]/20 transition-colors text-lg"
          >
            Get MCP updates
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
