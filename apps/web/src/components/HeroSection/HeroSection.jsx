import { motion } from "motion/react";
import { WaitlistForm } from "@/components/WaitlistForm/WaitlistForm";

export function HeroSection({ loading, onSubmit, waitlistSuccess, error }) {
  return (
    <header
      className="relative border-b border-[#14171c] overflow-hidden min-h-screen flex items-center justify-center"
      id="hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://ucarecdn.com/9809905f-b6a1-41ed-9208-816f315135f7/-/format/auto/')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/30" />

      <div className="relative z-10 max-w-[950px] mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="backdrop-blur-lg bg-black/25 border border-white/15 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:border-white/20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="text-sm md:text-base tracking-[0.15em] uppercase text-white/70 mb-4 font-medium"
          >
            Public preview
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="font-instrument-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] text-white mb-6 drop-shadow-2xl tracking-tight"
          >
            FUORI Lab
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="font-instrument-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.15] text-white/95 mb-8 drop-shadow-lg tracking-tight max-w-[800px] mx-auto"
          >
            The tamper-evident archive for AI misalignment
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            className="text-base md:text-lg lg:text-xl text-white/90 max-w-[70ch] mx-auto mb-10 leading-relaxed drop-shadow-lg font-medium"
          >
            AI is graduating from demos to critical infrastructure. When outputs
            go off-spec—drift, deviation, or outright anomaly—organizations need
            defensible evidence. FUORI converts chats and logs into casefiles
            aligned with open provenance, then lets you share selectively with
            providers, insurers, or auditors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
          >
            <WaitlistForm
              loading={loading}
              onSubmit={onSubmit}
              waitlistSuccess={waitlistSuccess}
              error={error}
              inputId="email"
              inputClassName="flex-1 px-6 py-4 text-lg rounded-xl border border-white/25 bg-white/15 backdrop-blur-md text-white placeholder:text-white/60 focus:border-white/50 focus:ring-4 focus:ring-white/20 outline-none disabled:opacity-50 transition-all duration-300 hover:bg-white/20"
              buttonClassName="px-8 py-4 text-lg rounded-xl border border-white/35 bg-white/25 backdrop-blur-md text-white font-semibold hover:bg-white/35 hover:border-white/50 active:translate-y-px transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              successMessage="Thanks—you're on the list."
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-4 text-sm text-white/60"
          >
            No spam. Updates only as milestones ship.
          </motion.p>
        </motion.div>
      </div>

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </header>
  );
}
