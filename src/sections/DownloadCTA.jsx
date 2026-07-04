import { motion } from 'framer-motion';

export default function DownloadCTA() {
  return (
    <section id="download" className="py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#B8CBB9]/25 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B2CFD8]/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Banner Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-16 rounded-[2.5rem] bg-[#FCFAF7] border border-[#E3DAD0]/80 shadow-neomorphic text-center flex flex-col items-center gap-6 md:gap-8 relative overflow-hidden"
        >
          {/* Subtle background graphics */}
          <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#B2CFD8]/20 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-[#E6C1BE]/15 blur-2xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary via-accent to-success flex items-center justify-center p-[2px] shadow-neomorphic-sm">
            <div className="w-full h-full bg-[#FCFAF7] rounded-[14px] flex items-center justify-center">
              <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-accent text-2xl">H</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark tracking-tight leading-tight text-clay-glow">
              Ready to Build Better Habits?
            </h2>
            <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed max-w-lg mx-auto">
              Download HabitFlow today on your Android device and start locking streaks, logging daily completions, and cultivating consistency.
            </p>
          </div>

          {/* Play Store Trigger Button styled in claymorphic neomorphism */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3.5 px-7 py-3 bg-[#FCFAF7] border border-[#E3DAD0] text-[#2C2724] hover:shadow-neomorphic shadow-neomorphic-sm hover:-translate-y-0.5 active:translate-y-0 active:shadow-neomorphic-inset rounded-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Google Play icon in matching sky-blue */}
              <svg className="w-6 h-6 text-primary" viewBox="0 0 512 512" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1 60.1-60.1 58 33.3c15.1 8.6 25.3 24.3 25.3 41.8s-10.2 33.2-25.3 41.8zm-147 25.2L104.6 499l220.7-126.7-60.1-60.1 60.1-60.1z" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider font-light text-text-secondary">Get it on</span>
                <span className="text-sm font-semibold leading-tight -mt-0.5 text-text-dark">Google Play</span>
              </div>
            </a>
          </div>

          {/* Subtext info */}
          <div className="text-[10px] font-sans font-medium text-text-secondary">
            Compatible with Android 8.0 and above. No account creation required.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
