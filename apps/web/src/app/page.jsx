"use client";

import { useWaitlist } from "@/hooks/useWaitlist";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { WhyNowSection } from "@/components/WhyNowSection/WhyNowSection";
import { RefundAssistSection } from "@/components/RefundAssistSection/RefundAssistSection";
import { VerificationLadderSection } from "@/components/VerificationLadderSection/VerificationLadderSection";
import { WhoItsForSection } from "@/components/WhoItsForSection/WhoItsForSection";
import { MCPSection } from "@/components/MCPSection/MCPSection";
import { AegnticSection } from "@/components/AegnticSection/AegnticSection";
import { TrustPrivacySection } from "@/components/TrustPrivacySection/TrustPrivacySection";
import { EigenLayerSection } from "@/components/EigenLayerSection/EigenLayerSection";
import { VerifierNetworkSection } from "@/components/VerifierNetworkSection/VerifierNetworkSection";
import { CtaSection } from "@/components/CtaSection/CtaSection";
import { Footer } from "@/components/Footer/Footer";
import { FontStyles } from "@/components/FontStyles/FontStyles";
import { motion } from "motion/react";

export default function HomePage() {
  const { waitlistSuccess, loading, error, handleWaitlistSubmit } =
    useWaitlist();

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F5F2E8] font-geist antialiased">
      <HeroSection
        loading={loading}
        onSubmit={handleWaitlistSubmit}
        waitlistSuccess={waitlistSuccess}
        error={error}
      />

      <main className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <WhyNowSection />
        </motion.div>

        {/* First Image Break */}
        <motion.div
          className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-20 lg:my-32"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-200px" }}
        >
          <div className="relative overflow-hidden">
            <img
              src="https://ucarecdn.com/bc903f70-584f-4df2-8239-d1a70d29761a/-/format/auto/"
              alt="AI consciousness visualization"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/30 via-transparent to-[#0B0C0E]/30 pointer-events-none" />

            {/* Glass overlay cards in lower half */}
            <div className="absolute inset-0 flex items-end justify-center pb-8 lg:pb-16">
              <div className="max-w-[1200px] mx-auto px-4 lg:px-8 w-full">
                <motion.div
                  className="grid md:grid-cols-3 gap-8 lg:gap-12"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 lg:p-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl"
                  >
                    <h3 className="font-instrument-serif text-4xl lg:text-5xl text-white mb-6 lg:mb-8">
                      Verify
                    </h3>
                    <p className="text-white/90 text-lg lg:text-xl leading-relaxed">
                      Redact sensitive data, classify behavior, and hash each
                      record; optionally anchor a receipt on Base.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 lg:p-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl"
                  >
                    <h3 className="font-instrument-serif text-4xl lg:text-5xl text-white mb-6 lg:mb-8">
                      Quantify
                    </h3>
                    <p className="text-white/90 text-lg lg:text-xl leading-relaxed">
                      Translate drift into measurable impact—time, revenue, SLA
                      variance—with transparent calculators.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 lg:p-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl"
                  >
                    <h3 className="font-instrument-serif text-4xl lg:text-5xl text-white mb-6 lg:mb-8">
                      Share
                    </h3>
                    <p className="text-white/90 text-lg lg:text-xl leading-relaxed">
                      Export a provider-ready packet or a de-identified summary
                      for audits and insurance (beta).
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <RefundAssistSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <VerificationLadderSection />
        </motion.div>

        {/* Second Image Break */}
        <motion.div
          className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-20 lg:my-32"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-200px" }}
        >
          <div className="relative overflow-hidden">
            <img
              src="https://ucarecdn.com/3555b1b7-852c-48c0-8206-9cc67276064b/-/format/auto/"
              alt="Digital reality interface"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/30 via-transparent to-[#0B0C0E]/30 pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <WhoItsForSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <MCPSection />
        </motion.div>

        {/* Third Image Break */}
        <motion.div
          className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-20 lg:my-32"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-200px" }}
        >
          <div className="relative overflow-hidden">
            <img
              src="https://ucarecdn.com/b45070ef-d50b-4089-bdac-d934cc2a2d80/-/format/auto/"
              alt="Abstract digital landscape"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/30 via-transparent to-[#0B0C0E]/30 pointer-events-none" />

            {/* Glass overlay for AEGNTIC content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-[1200px] mx-auto px-4 lg:px-8 w-full">
                <motion.div
                  className="text-center max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 lg:p-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl"
                  >
                    <h2 className="font-instrument-serif text-4xl lg:text-5xl xl:text-6xl text-white mb-6 lg:mb-8">
                      The AEGNTIC ae-co-system
                    </h2>
                    <p className="text-lg lg:text-xl xl:text-2xl text-[#7C7CFF] font-medium mb-6 lg:mb-8">
                      Computational amplification to build, run, and improve
                      FUORI.
                    </p>
                    <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                      AEGNTIC orchestrates swarms of agents to move work from
                      spec → code → tests → docs → ops. It retrieves the right
                      context at the right time (UNLTD framework), explores
                      implementations in parallel, and converges on the best
                      working system—safely and repeatably.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <EigenLayerSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <TrustPrivacySection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <CtaSection
            loading={loading}
            onSubmit={handleWaitlistSubmit}
            waitlistSuccess={waitlistSuccess}
            error={error}
          />
        </motion.div>
      </main>

      <Footer
        loading={loading}
        onSubmit={handleWaitlistSubmit}
        waitlistSuccess={waitlistSuccess}
        error={error}
      />
      <FontStyles />
    </div>
  );
}
