import { motion } from 'framer-motion';
import { testimonials } from '../data/siteData';

export default function Testimonials() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#B2CFD8]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto flex flex-col items-center gap-4">
          <span className="text-xs font-bold tracking-wider uppercase text-text-dark bg-[#FCFAF7] border border-[#E3DAD0]/70 px-4 py-1.5 rounded-full shadow-neomorphic-sm">
            User Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark tracking-tight leading-[1.15] text-clay-glow">
            Loved by Habit Builders <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CAAB5] via-[#B2CFD8] to-[#B8CBB9]">All Around the Globe</span>
          </h2>
          <p className="font-sans text-sm text-text-secondary max-w-xl leading-relaxed mt-2">
            Hear from people who have successfully built consistency and unlocked streaks with Habixa.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="p-8 clay-card shadow-neomorphic flex flex-col justify-between gap-6 border-white/60"
            >
              {/* Star Rating & Quote */}
              <div className="flex flex-col gap-4">
                {/* Coral Pink Star Ratings to match the reference image theme */}
                <div className="flex text-accent gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <p className="font-sans italic text-text-dark text-xs leading-relaxed">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              {/* Author Detail */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E3DAD0]/50">
                <div className="w-9 h-9 rounded-full bg-[#FCFAF7] border border-[#E3DAD0]/70 flex items-center justify-center font-display font-bold text-xs text-primary shadow-neomorphic-sm shrink-0">
                  {t.author.substring(0, 2)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-text-dark">{t.author}</h4>
                  <p className="text-[10px] text-text-secondary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
