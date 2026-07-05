import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DeviceFrame from '../components/DeviceFrame';
import AppMockups from '../components/AppMockups';

export default function Screenshots() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home Screen', desc: 'Displaying your dashboard statistics, active streaks, and the empty state template for daily habits.' },
    { id: 'progress', label: 'Progress Screen', desc: 'Analyze completion rates, review active streaks, and inspect consistency statistics on the weekly chart.' },
    { id: 'my-habits', label: 'My Habits', desc: 'Track calendars and routines using the horizontal weekly selector and start tracking.' },
    { id: 'profile', label: 'Profile Screen', desc: 'Manage your avatar profile, streaks data, personal settings, preferences, and notifications.' },
    { id: 'add-habit', label: 'Create Habit', desc: 'Pop up the habit modal sheet to select categories like Health, write titles, and select emojis.' }
  ];

  return (
    <section id="screenshots" className="py-16 md:py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Soft blurs for claymorphic theme atmosphere */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#B2CFD8]/25 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#E6C1BE]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto flex flex-col items-center gap-3">
          <span className="text-xs font-bold tracking-wider uppercase text-text-dark bg-[#FCFAF7] border border-[#E3DAD0]/70 px-4 py-1.5 rounded-full shadow-neomorphic-sm">
            Visual Showcases
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark tracking-tight leading-[1.15]">
            Experience Habixa <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CAAB5] via-[#B2CFD8] to-[#B8CBB9]">In High Definition</span>
          </h2>
          <p className="font-sans text-sm text-text-secondary max-w-xl leading-relaxed mt-2">
            Click through our interactive mobile mockups below to see the pixel-perfect layouts, color palettes, and intuitive controls.
          </p>
        </div>

        {/* Mobile Horizontal Tab Selector (Visible only on viewports < lg) */}
        <div className="flex lg:hidden overflow-x-auto gap-2.5 pb-5 px-1 no-scrollbar w-full scroll-smooth justify-start shrink-0 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap border shrink-0 transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#FCFAF7] border-[#E3DAD0] text-emerald-800 shadow-neomorphic-sm scale-103'
                  : 'bg-transparent border-[#E3DAD0]/30 text-[#8A8279]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Selector Menu (Hidden on mobile, visible on lg) */}
          <div className="hidden lg:flex lg:col-span-6 flex-col gap-4 order-2 lg:order-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer w-full flex flex-col gap-2 relative overflow-hidden ${
                  activeTab === tab.id
                    ? 'bg-[#FCFAF7] border-[#E3DAD0]/80 shadow-neomorphic'
                    : 'bg-transparent border-transparent hover:bg-[#FCFAF7]/40 hover:border-[#E3DAD0]/30'
                }`}
              >
                {/* Active indicator bar */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#B8CBB9]"
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                  />
                )}

                <h3 className={`font-display font-bold text-sm md:text-base transition-colors ${
                  activeTab === tab.id ? 'text-emerald-800' : 'text-text-dark'
                }`}>
                  {tab.label}
                </h3>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                  {tab.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Right Column: Device Display */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2 items-center w-full">
            <div className="relative">
              <DeviceFrame>
                {/* Screen Switch Transitions */}
                <div className="w-full h-full relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full"
                    >
                      <AppMockups type={activeTab} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </DeviceFrame>
            </div>

            {/* Mobile Active Tab Description (Visible only on viewports < lg) */}
            <div className="flex lg:hidden mt-6 px-4 text-center max-w-sm">
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                {tabs.find(t => t.id === activeTab)?.desc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
