import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { faqs } from '../data/siteData';

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#B2CFD8]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B8CBB9]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto flex flex-col items-center gap-4">
          <span className="text-xs font-bold tracking-wider uppercase text-text-dark bg-[#FCFAF7] border border-[#E3DAD0]/70 px-4 py-1.5 rounded-full shadow-neomorphic-sm">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark tracking-tight leading-[1.15] text-clay-glow">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CAAB5] via-[#B2CFD8] to-[#B8CBB9]">Questions</span>
          </h2>
          <p className="font-sans text-sm text-text-secondary max-w-xl leading-relaxed mt-2">
            Find answers to commonly asked questions regarding our streak systems, database handling, and cross-device syncing.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeId === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E3DAD0]/70 bg-[#FCFAF7] shadow-neomorphic-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-xs md:text-sm text-text-dark pr-6">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#FCFAF7] border border-[#E3DAD0]/70 flex items-center justify-center text-text-secondary shrink-0 shadow-neomorphic-sm transition-all duration-300 ${
                    isOpen ? 'rotate-180 text-primary border-primary/20 bg-indigo-50/10' : ''
                  }`}>
                    {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 font-sans text-xs md:text-sm text-text-secondary leading-relaxed border-t border-[#FAF7F2]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
