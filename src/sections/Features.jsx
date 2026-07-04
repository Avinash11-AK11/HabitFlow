import { motion } from 'framer-motion';
import { features } from '../data/siteData';

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  // Pastel themes taken directly from the reference image
  const pastelStyles = [
    { bg: 'bg-[#B8CBB9]/25', text: 'text-[#2C2724]', border: 'border-[#B8CBB9]/50' }, // Sage Green
    { bg: 'bg-[#B2CFD8]/25', text: 'text-[#2C2724]', border: 'border-[#B2CFD8]/50' }, // Sky Blue
    { bg: 'bg-[#E6C1BE]/25', text: 'text-[#2C2724]', border: 'border-[#E6C1BE]/50' }  // Coral Pink
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#B8CBB9]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[300px] h-[300px] bg-[#B2CFD8]/25 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto flex flex-col items-center gap-4">
          <span className="text-xs font-bold tracking-wider uppercase text-text-dark bg-[#FCFAF7] border border-[#E3DAD0]/70 px-4 py-1.5 rounded-full shadow-neomorphic-sm">
            Core Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark tracking-tight leading-[1.15] text-clay-glow">
            Everything You Need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CAAB5] via-[#B2CFD8] to-[#B8CBB9]">Cultivate Consistency</span>
          </h2>
          <p className="font-sans text-sm text-text-secondary max-w-xl leading-relaxed mt-2">
            No fluff. No bloated analytics. Just a fast, offline-first tool optimized entirely to help you build habits and maintain streaks.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const style = pastelStyles[index % pastelStyles.length];
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="p-8 clay-card shadow-neomorphic flex flex-col items-start gap-6 hover:border-primary/20 transition-all duration-300 group"
              >
                {/* Neomorphic Icon Container with exact pastel colors */}
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 shadow-neomorphic-sm group-hover:scale-105 transition-transform duration-300 ${style.bg} ${style.text} ${style.border}`}>
                  <IconComponent size={20} className="stroke-[2.5]" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-bold text-text-dark text-base tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    {feature.description}
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
