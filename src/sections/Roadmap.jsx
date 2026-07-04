import { motion } from 'framer-motion';
import { roadmap } from '../data/siteData';

export default function Roadmap() {
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
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  return (
    <section id="roadmap" className="py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#E6C1BE]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#B8CBB9]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto flex flex-col items-center gap-4">
          <span className="text-xs font-bold tracking-wider uppercase text-text-dark bg-[#FCFAF7] border border-[#E3DAD0]/70 px-4 py-1.5 rounded-full shadow-neomorphic-sm">
            Product Path
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark tracking-tight leading-[1.15] text-clay-glow">
            Future Roadmap: What&apos;s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CAAB5] via-[#B2CFD8] to-[#B8CBB9]">On the Horizon</span>
          </h2>
          <p className="font-sans text-sm text-text-secondary max-w-xl leading-relaxed mt-2">
            We are continuously building features to improve your consistency. Here is a preview of the upcoming additions we are actively engineering.
          </p>
        </div>

        {/* Roadmap Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {roadmap.map((item, index) => {
            // Pick a status styling matching our pastel layout
            const statusStyles = [
              'bg-[#B2CFD8]/25 text-blue-950 border-[#B2CFD8]/50', // Sky Blue
              'bg-[#B8CBB9]/25 text-emerald-950 border-[#B8CBB9]/50', // Sage Green
              'bg-[#E6C1BE]/25 text-rose-950 border-[#E6C1BE]/50'  // Coral Pink
            ];
            const badgeClass = statusStyles[index % statusStyles.length];

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="p-8 clay-card shadow-neomorphic flex flex-col justify-between items-start gap-6 border-white/60"
              >
                <div className="flex flex-col gap-3.5 w-full">
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="font-display font-bold text-text-dark text-base tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Status Badge with custom pastel styling */}
                <span className={`text-[9px] font-bold px-3 py-1 rounded-full border shadow-neomorphic-sm ${badgeClass}`}>
                  {item.status === 'In Development' ? 'In Dev' : item.status}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
