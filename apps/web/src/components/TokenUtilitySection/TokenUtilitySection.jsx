import { motion } from "motion/react";

export function TokenUtilitySection() {
  const cards = [
    { title: "Stake-to-Verify", body: "Reviewers stake to attest records; provably bad attestations are slashed, high-quality work earns rewards." },
    { title: "Data Access Credits", body: "Higher-rate API access for aggregated, de-identified analytics; pay in $FUORI (discount) or USDC." },
    { title: "Bounties & Grants", body: "Earn by reproducing cases, finding benign triggers, or improving taxonomies and tools." },
    { title: "Anchor Subsidies", body: "Community submissions can be batch-anchored with fee subsidies." },
    { title: "Governance", body: "Progressive decentralization over quorum, slashing %, bounty weights, and taxonomy updates." }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="tokenUtility"
      className="py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="font-instrument-serif text-5xl md:text-6xl mb-12 text-center"
      >
        What $FUORI enables
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="p-6 bg-gradient-to-b from-[#101217] to-[#0d0f14] border border-[#1A1D22] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.03)_inset]"
          >
            <h3 className="font-instrument-serif text-xl mb-3">{card.title}</h3>
            <p className="text-[#CFCAC0] leading-relaxed text-sm">{card.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}