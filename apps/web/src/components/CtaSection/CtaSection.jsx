import { motion } from "motion/react";
import { WaitlistForm } from "@/components/WaitlistForm/WaitlistForm";

export function CtaSection({ loading, onSubmit, waitlistSuccess, error }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="waitlist"
      className="py-16"
    >
      <div className="text-center max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-instrument-serif text-6xl md:text-7xl mb-8"
        >
          Be first to know
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-xl text-[#CFCAC0] mb-8 leading-relaxed"
        >
          Private beta rolls out soon. Drop your email to get an invite and
          occasional progress notes.
        </motion.p>
        <WaitlistForm
          loading={loading}
          onSubmit={onSubmit}
          waitlistSuccess={waitlistSuccess}
          error={error}
          inputId="email2"
          formClassName="flex flex-col sm:flex-row gap-4 max-w-[600px] mx-auto"
          inputClassName="flex-1 px-5 py-4 text-lg rounded-xl border border-[#20242B] bg-[#0F1217] text-[#F5F2E8] focus:border-[#7C7CFF] focus:ring-4 focus:ring-[#7C7CFF]/15 outline-none disabled:opacity-50"
          buttonClassName="px-8 py-4 text-lg rounded-xl border border-[#262a31] bg-gradient-to-b from-[#141823] to-[#0e1117] text-[#F5F2E8] font-semibold hover:shadow-[0_8px_24px_rgba(124,124,255,0.25)] hover:ring-1 hover:ring-[#2A2D34] active:translate-y-px transition-all duration-200 disabled:opacity-50"
          buttonText="Join the waitlist"
          successClassName="mt-4 text-lg text-green-300"
          errorClassName="mt-4 text-lg text-red-300"
          successMessage="Thanks! We'll reach out when invites open."
          motionProps={{
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.4, duration: 0.8, ease: "easeOut" },
          }}
        />
      </div>
    </motion.section>
  );
}
