import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Interactive Mockup States
  const [hydrateCompleted, setHydrateCompleted] = useState(true);
  const [readBookCompleted, setReadBookCompleted] = useState(true);
  const [weeklyGoals, setWeeklyGoals] = useState([true, true, true, true, true, false, false]); // M, T, W, T, F, S, S
  
  // Extra fun states for floating buttons
  const [meditateCount, setMeditateCount] = useState(0);
  const [workoutCount, setWorkoutCount] = useState(0);

  // 3D Card Tilt Effect
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const box = cardRef.current.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    // Limit rotation to max 10 degrees
    setTilt({
      x: -y / (box.height / 20),
      y: x / (box.width / 20)
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Derived Streaks Count
  const activeStreaks = (hydrateCompleted ? 1 : 0) + (readBookCompleted ? 1 : 0) + (weeklyGoals.filter(Boolean).length >= 5 ? 1 : 0);

  const toggleDay = (index) => {
    const next = [...weeklyGoals];
    next[index] = !next[index];
    setWeeklyGoals(next);
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center py-16 md:py-24 overflow-hidden bg-[#FAF7F2]">
      {/* Exact color-matched background shapes from reference image */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-[#B8CBB9]/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#B2CFD8]/35 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#E6C1BE]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-wider uppercase text-text-dark bg-[#FCFAF7] border border-[#E3DAD0]/80 px-4 py-1.5 rounded-full shadow-neomorphic-sm"
          >
            🌱 Step-By-Step Streaks
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-text-dark tracking-tight leading-[1.1] text-clay-glow"
          >
            Build Better Habits, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CAAB5] via-[#B2CFD8] to-[#B8CBB9]">One Day at a Time</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl"
          >
            Stay consistent, track your daily habits, build powerful streaks, and become the best version of yourself. Privacy-focused, local-first, and completely ad-free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 mt-2 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo('download')}
              className="px-8 py-4 bg-[#B2CFD8] border border-[#FCFAF7] text-text-dark font-display font-bold text-sm rounded-full shadow-neomorphic-sm cursor-pointer hover:shadow-neomorphic hover:-translate-y-0.5 active:translate-y-0 active:shadow-neomorphic-inset transition-all duration-300 text-center"
            >
              Download on Google Play
            </button>
            <button
              onClick={() => handleScrollTo('features')}
              className="px-8 py-4 bg-[#FCFAF7] border border-[#E3DAD0]/70 text-[#8A8279] hover:text-text-dark font-display font-bold text-sm rounded-full shadow-neomorphic-sm hover:shadow-neomorphic hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center cursor-pointer"
            >
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Floating Claymorphic Illustration */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
            className="relative"
          >
            {/* Ambient Shadow glow */}
            <div className="absolute inset-5 bg-gradient-to-tr from-primary/5 to-accent/10 blur-3xl rounded-full pointer-events-none" />

            {/* Claymorphic Main SVG Widget */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: tilt.x,
                rotateY: tilt.y,
                transformStyle: 'preserve-3d',
                perspective: 1000
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-[280px] sm:w-[340px] aspect-square clay-card-lg shadow-neomorphic p-7 flex flex-col justify-between border-white/70 cursor-default select-none transition-shadow duration-300 hover:shadow-neomorphic-lg"
            >
              {/* Widget Header */}
              <div className="flex justify-between items-center" style={{ transform: 'translateZ(30px)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FCFAF7] border border-[#E3DAD0]/60 flex items-center justify-center text-lg shadow-neomorphic-sm">
                    🌱
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-text-dark">Daily Flow</h4>
                    <p className="text-[9px] text-text-secondary mt-0.5">{activeStreaks} Active Streaks</p>
                  </div>
                </div>
                {/* Sage Green Check bubble */}
                <div 
                  className={`w-7 h-7 rounded-full border flex items-center justify-center text-[10px] font-bold shadow-neomorphic-sm transition-all duration-300 ${
                    activeStreaks === 3 
                      ? 'bg-[#B8CBB9] border-white text-emerald-950 scale-110' 
                      : 'bg-[#FCFAF7] border-[#E3DAD0] text-[#8A8279]'
                  }`}
                >
                  ✓
                </div>
              </div>

              {/* Neomorphic Habit Cards Grid */}
              <div className="grid grid-cols-2 gap-4 my-4" style={{ transform: 'translateZ(45px)' }}>
                {/* Hydrate Card */}
                <button
                  onClick={() => setHydrateCompleted(!hydrateCompleted)}
                  className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between h-24 shadow-neomorphic-sm transition-all duration-300 cursor-pointer group active:scale-95 ${
                    hydrateCompleted 
                      ? 'bg-[#B2CFD8]/15 border-[#B2CFD8]/50' 
                      : 'bg-[#FCFAF7] border-[#E3DAD0]/40 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex justify-between items-start w-full">
                    <span className={`text-xl transition-transform duration-300 ${hydrateCompleted ? 'scale-115 -translate-y-0.5' : 'scale-100'}`}>💧</span>
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[7px] transition-colors ${
                      hydrateCompleted ? 'bg-[#B2CFD8] border-white text-text-dark' : 'border-[#E3DAD0]'
                    }`}>
                      {hydrateCompleted && '✓'}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-[10px] text-text-dark">Hydrate</h5>
                    <p className={`text-[8px] font-bold mt-0.5 px-1.5 py-0.5 rounded-full inline-block border transition-colors ${
                      hydrateCompleted 
                        ? 'text-sky-900 bg-[#B2CFD8]/40 border-[#B2CFD8]/20' 
                        : 'text-text-secondary bg-[#E3DAD0]/20 border-transparent'
                    }`}>
                      🔥 {hydrateCompleted ? '13' : '12'} Days
                    </p>
                  </div>
                </button>
                
                {/* Read Book Card */}
                <button
                  onClick={() => setReadBookCompleted(!readBookCompleted)}
                  className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between h-24 shadow-neomorphic-sm transition-all duration-300 cursor-pointer group active:scale-95 ${
                    readBookCompleted 
                      ? 'bg-[#B8CBB9]/15 border-[#B8CBB9]/50' 
                      : 'bg-[#FCFAF7] border-[#E3DAD0]/40 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex justify-between items-start w-full">
                    <span className={`text-xl transition-transform duration-300 ${readBookCompleted ? 'scale-115 -translate-y-0.5' : 'scale-100'}`}>📚</span>
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[7px] transition-colors ${
                      readBookCompleted ? 'bg-[#B8CBB9] border-white text-emerald-950' : 'border-[#E3DAD0]'
                    }`}>
                      {readBookCompleted && '✓'}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-[10px] text-text-dark">Read Book</h5>
                    <p className={`text-[8px] font-bold mt-0.5 px-1.5 py-0.5 rounded-full inline-block border transition-colors ${
                      readBookCompleted 
                        ? 'text-emerald-900 bg-[#B8CBB9]/40 border-[#B8CBB9]/20' 
                        : 'text-text-secondary bg-[#E3DAD0]/20 border-transparent'
                    }`}>
                      🔥 {readBookCompleted ? '6' : '5'} Days
                    </p>
                  </div>
                </button>
              </div>

              {/* Progress and status */}
              <div className="flex items-center justify-between pt-3 border-t border-[#E3DAD0]/50" style={{ transform: 'translateZ(30px)' }}>
                <span className="text-[9px] font-bold text-text-secondary uppercase tracking-wider">Weekly Goals</span>
                <div className="flex gap-1.5">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <button
                      key={i}
                      onClick={() => toggleDay(i)}
                      className={`w-5.5 h-5.5 rounded-full flex items-center justify-center text-[8px] font-bold shadow-neomorphic-sm border cursor-pointer active:scale-90 transition-all duration-200 ${
                        weeklyGoals[i] 
                          ? 'bg-[#B8CBB9] text-emerald-950 border-white font-black scale-105' 
                          : 'bg-[#FCFAF7] border-[#E3DAD0] text-[#8A8279]/60 hover:border-[#B8CBB9]/50'
                      }`}
                      title={`Toggle completion for ${day}`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Extra floating elements around the card */}
            <motion.button
              onClick={() => setMeditateCount(c => c + 1)}
              animate={{ 
                y: [0, 6, 0], 
                x: [0, 4, 0],
                scale: meditateCount > 0 ? [1, 1.2, 1] : 1
              }}
              transition={{ 
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                x: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                scale: { duration: 0.3 }
              }}
              className="absolute -top-6 -right-6 w-14 h-14 rounded-2xl bg-[#B2CFD8] border-2 border-white shadow-neomorphic flex items-center justify-center text-xl cursor-pointer hover:brightness-105 active:scale-95"
              title="Click to meditate 🧘"
            >
              🧘
            </motion.button>

            <motion.button
              onClick={() => setWorkoutCount(c => c + 1)}
              animate={{ 
                y: [0, -6, 0], 
                x: [0, -6, 0],
                scale: workoutCount > 0 ? [1, 1.2, 1] : 1
              }}
              transition={{ 
                y: { repeat: Infinity, duration: 7, ease: "easeInOut" },
                x: { repeat: Infinity, duration: 7, ease: "easeInOut" },
                scale: { duration: 0.3 }
              }}
              className="absolute -bottom-6 -left-6 w-16 h-16 rounded-[1.6rem] bg-[#E6C1BE] border-2 border-white shadow-neomorphic flex items-center justify-center text-2xl cursor-pointer hover:brightness-105 active:scale-95"
              title="Click to lift weights 🏋️"
            >
              🏋️
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
