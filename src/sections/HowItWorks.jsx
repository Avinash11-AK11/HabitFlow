import { motion } from 'framer-motion';
import { timelineSteps } from '../data/siteData';

export default function HowItWorks() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#B8CBB9]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-92 h-92 bg-[#B2CFD8]/25 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28 max-w-3xl mx-auto flex flex-col items-center gap-4">
          <span className="text-xs font-bold tracking-wider uppercase text-text-dark bg-[#FCFAF7] border border-[#E3DAD0]/70 px-4 py-1.5 rounded-full shadow-neomorphic-sm">
            Product Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark tracking-tight leading-[1.15] text-clay-glow">
            How It Works: The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CAAB5] via-[#B2CFD8] to-[#B8CBB9]">Path to Consistency</span>
          </h2>
          <p className="font-sans text-sm text-text-secondary max-w-xl leading-relaxed mt-2">
            Building healthy routines shouldn&apos;t feel like a chore. Our application makes the entire transition organic and satisfying.
          </p>
        </div>

        {/* Timeline Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 lg:gap-10"
        >
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#B2CFD8]/50 via-[#E6C1BE]/50 to-[#B8CBB9]/50 -z-10" />

          {timelineSteps.map((step, index) => {
            // Pick circle colors matching the exact image pastel tones
            const bubbleColors = [
              'bg-[#B2CFD8]/25 text-[#2C2724] border-[#B2CFD8]/50 shadow-[#B2CFD8]/10', // Sky Blue
              'bg-[#E6C1BE]/25 text-[#2C2724] border-[#E6C1BE]/50 shadow-[#E6C1BE]/10', // Coral Pink
              'bg-[#B8CBB9]/25 text-[#2C2724] border-[#B8CBB9]/50 shadow-[#B8CBB9]/10', // Sage Green
              'bg-[#FCFAF7] text-[#2C2724] border-[#E3DAD0]/70 shadow-neomorphic-sm'    // Warm Sand Card
            ];
            const colorClass = bubbleColors[index % bubbleColors.length];

            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="flex flex-col items-center md:items-start text-center md:text-left gap-5 group"
              >
                {/* Step Circle */}
                <div className={`w-24 h-24 rounded-full border-2 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 ${colorClass}`}>
                  <span className="font-display font-bold text-2xl">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5 max-w-xs md:pl-2">
                  <h3 className="font-display font-bold text-text-dark text-base">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    {step.description}
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
