import { motion } from "motion/react";

export function Footer({ loading, onSubmit, waitlistSuccess, error }) {
  const handleWaitlistClick = (e) => {
    e.preventDefault();
    // Scroll to hero section where the main waitlist form is
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Hero background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://ucarecdn.com/9809905f-b6a1-41ed-9208-816f315135f7/-/format/auto/')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/30" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-[1200px] mx-auto px-4"
      >
        <div className="py-8 text-base text-white/90 border-t border-white/15 flex flex-wrap justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm"
          >
            <span>© FUORI Lab. All rights reserved.</span>
            <span>Content Credentials aligned</span>
            <span>Self-serve evidence assistance; no legal advice.</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-8"
          >
            <nav className="flex gap-8" aria-label="Footer">
              <motion.a
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                href="https://x.com/AEGNTIC"
                className="hover:text-white transition-colors"
              >
                X
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                href="https://github.com/aegntic"
                className="hover:text-white transition-colors"
              >
                GitHub
              </motion.a>
            </nav>
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 8px 25px rgba(255, 255, 255, 0.15)",
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={handleWaitlistClick}
              className="px-8 py-4 text-lg rounded-xl border border-white/35 bg-white/25 backdrop-blur-md text-white font-semibold hover:bg-white/35 hover:border-white/50 active:translate-y-px transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join the waitlist
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
