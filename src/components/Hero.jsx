import { motion } from "framer-motion";

export default function Hero({ onPrimary }) {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
          alt="Dawn light over a still mountain lake"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 sm:py-40 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-cream-100"
        >
          Sacred Stillness: A Vision Fast for Leaders
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-6 text-lg sm:text-xl text-cream-200/90 max-w-3xl mx-auto"
        >
          A 9-day rite of passage for those seeking clarity, renewal, and deeper purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <button onClick={onPrimary} className="rounded-full px-7 py-3.5 text-sm font-medium bg-gradient-to-r from-deep-green to-deep-blue text-cream-50 shadow-lg shadow-deep-blue/20 hover:opacity-95 transition">
            Join the Waitlist
          </button>
        </motion.div>
        <p className="mt-4 text-sm text-cream-300/70">Limited cohort. Invitation-only.</p>
      </div>
    </section>
  );
}
