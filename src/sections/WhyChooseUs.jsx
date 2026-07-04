import { motion } from 'framer-motion';
import { comparisons } from '../data/siteData';

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 14 }
    }
  };

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B2CFD8]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto flex flex-col items-center gap-4">
          <span className="text-xs font-bold tracking-wider uppercase text-text-dark bg-[#FCFAF7] border border-[#E3DAD0]/70 px-4 py-1.5 rounded-full shadow-neomorphic-sm">
            Product Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark tracking-tight leading-[1.15] text-clay-glow">
            Why HabitFlow is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CAAB5] via-[#B2CFD8] to-[#B8CBB9]">Built Differently</span>
          </h2>
          <p className="font-sans text-sm text-text-secondary max-w-xl leading-relaxed mt-2">
            Most modern apps collect your data and locks features behind subscriptions. We went back to the basics: speed, absolute privacy, and visual delight.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {comparisons.map((item, index) => {
            // Cycle through pastel colors matching reference image EXACTLY
            const tagColors = [
              'bg-[#B8CBB9]/25 text-emerald-950 border-[#B8CBB9]/50', // Sage Green
              'bg-[#B2CFD8]/25 text-blue-950 border-[#B2CFD8]/50',   // Sky Blue
              'bg-[#E6C1BE]/25 text-rose-950 border-[#E6C1BE]/50'    // Coral Pink
            ];
            const colorClass = tagColors[index % tagColors.length];

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="p-8 clay-card shadow-neomorphic flex flex-col justify-between items-start min-h-[220px] border-white/60"
              >
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-display font-bold text-text-dark text-base tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <span className={`text-[9px] font-bold px-3 py-1 rounded-full border shrink-0 shadow-neomorphic-sm ${colorClass}`}>
                      {item.badge}
                    </span>
                  </div>
                  
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
