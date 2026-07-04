import { useState, useEffect } from 'react';
import { 
  FiSearch, 
  FiBell, 
  FiGrid, 
  FiCalendar, 
  FiPlus, 
  FiChevronLeft, 
  FiChevronRight, 
  FiChevronDown, 
  FiUser, 
  FiActivity, 
  FiArrowRight,
  FiVolume2
} from 'react-icons/fi';

// Status bar matching time 4:13
function StatusBar({ darkMode = false }) {
  return (
    <div className={`flex justify-between items-center px-5 pt-6 pb-1 text-[9px] font-sans font-semibold tracking-tight ${
      darkMode ? 'text-gray-400' : 'text-[#2C2724]'
    } shrink-0`}>
      <span>4:13</span>
      <div className="flex items-center gap-1">
        {/* Connection signal bars */}
        <div className="flex items-end gap-[1px] h-1.5">
          <div className="w-[1.5px] h-[2px] bg-current rounded-3xs" />
          <div className="w-[1.5px] h-[3.5px] bg-current rounded-3xs" />
          <div className="w-[1.5px] h-[5px] bg-current rounded-3xs" />
          <div className="w-[1.5px] h-[6px] bg-current rounded-3xs" />
        </div>
        {/* Wifi */}
        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21a2 2 0 0 1-1.41-.59l-8.5-8.5a2 2 0 0 1 0-2.82A14 14 0 0 1 22 9.09a2 2 0 0 1 0 2.82l-8.5 8.5A2 2 0 0 1 12 21z" />
        </svg>
        {/* Battery */}
        <div className={`w-4 h-2 rounded-xs border p-[0.5px] relative flex items-center ${
          darkMode ? 'border-gray-500' : 'border-[#2C2724]'
        }`}>
          <div className={`h-full w-4/5 rounded-3xs ${darkMode ? 'bg-white' : 'bg-gray-800'}`} />
          <div className={`w-0.5 h-0.5 rounded-r-xs absolute -right-[2px] top-1/2 -translate-y-1/2 ${
            darkMode ? 'bg-gray-500' : 'bg-[#2C2724]'
          }`} />
        </div>
      </div>
    </div>
  );
}

// Background mountains and sun illustration matching the user's real app header
function AppBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-36 -z-10 overflow-hidden pointer-events-none select-none opacity-95">
      <svg className="w-full h-full" viewBox="0 0 310 150" preserveAspectRatio="none">
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FAF7F2', stopOpacity: 1 }} />
            <stop offset="55%" style={{ stopColor: '#F2ECE4', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FAF7F2', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <rect width="310" height="150" fill="url(#skyGrad)" />
        {/* Warm Sunrise Sun */}
        <circle cx="155" cy="100" r="28" fill="#E6C1BE" opacity="0.5" />
        {/* Muted Sage Green layered hills */}
        <path d="M-10 150 C 40 120, 100 135, 170 125 C 240 115, 280 130, 320 150 Z" fill="#B8CBB9" opacity="0.45" />
        <path d="M-20 150 C 40 130, 120 115, 190 135 C 250 148, 290 135, 330 150 Z" fill="#B8CBB9" opacity="0.65" />
        {/* Soft leaf shapes in header */}
        <path d="M12 55 Q 22 40 32 48" stroke="#8A8279" strokeWidth="0.75" fill="none" opacity="0.3" />
        <circle cx="18" cy="46" r="2" fill="#B8CBB9" opacity="0.7" />
        <circle cx="24" cy="42" r="2.5" fill="#B8CBB9" opacity="0.7" />
      </svg>
    </div>
  );
}

// Highly detailed Anime Avatar Portrait (Levi-style dark spiky hair + glasses sketch)
function AvatarSVG() {
  return (
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <defs>
        <clipPath id="avatarCircle">
          <circle cx="50" cy="50" r="48" />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r="48" fill="#D8D3C9" />
      <g clipPath="url(#avatarCircle)">
        {/* Dark jacket */}
        <path d="M15 95 C 20 70, 80 70, 85 95 Z" fill="#3A3430" />
        {/* Inner white shirt collar */}
        <path d="M38 72 L 50 86 L 62 72 Z" fill="#FCFAF7" />
        <path d="M45 74 L 50 82 L 55 74" stroke="#2C2724" strokeWidth="1.5" fill="none" />
        {/* Neck */}
        <path d="M42 55 L 42 75 C 42 75, 48 78, 50 78 C 52 78, 58 75, 58 75 L 58 55 Z" fill="#FAF6EE" />
        {/* Face structure */}
        <path d="M30 42 C 30 30, 70 30, 70 42 C 70 56, 64 68, 50 72 C 36 68, 30 56, 30 42 Z" fill="#FCFAF7" />
        {/* Dark Spiky hair parted in the middle */}
        <path d="M22 45 C 18 30, 30 14, 50 14 C 70 14, 82 30, 78 45 C 72 40, 66 38, 62 38 C 54 38, 50 48, 50 48 C 50 48, 46 38, 38 38 C 34 38, 28 40, 22 45 Z" fill="#2C2724" />
        {/* Front bangs and side burns */}
        <path d="M28 42 L 32 60 L 36 45" fill="#2C2724" />
        <path d="M72 42 L 68 60 L 64 45" fill="#2C2724" />
        <path d="M40 38 L 48 44 L 44 48 L 50 42 L 56 48 L 52 44 L 60 38" fill="#2C2724" />
        {/* Wire glasses */}
        <rect x="33" y="44" width="14" height="8" rx="1" fill="none" stroke="#2C2724" strokeWidth="1.5" />
        <rect x="53" y="44" width="14" height="8" rx="1" fill="none" stroke="#2C2724" strokeWidth="1.5" />
        <line x1="47" y1="48" x2="53" y2="48" stroke="#2C2724" strokeWidth="1.5" />
        {/* Eyes (behind glasses) */}
        <path d="M36 47 Q 40 45 44 47" stroke="#2C2724" strokeWidth="1" fill="none" />
        <path d="M56 47 Q 60 45 64 47" stroke="#2C2724" strokeWidth="1" fill="none" />
        {/* Nose and slight mouth line */}
        <path d="M49 53 L 51 53" stroke="#2C2724" strokeWidth="1" />
        <path d="M45 61 Q 50 63 55 61" stroke="#2C2724" strokeWidth="1" fill="none" />
      </g>
      <circle cx="50" cy="50" r="48" fill="none" stroke="#E3DAD0" strokeWidth="1.5" />
    </svg>
  );
}

// Bottom navigation pill bar matched to screenshots
function AppTabBar({ activeTab, onTabSelect }) {
  const tabs = [
    { id: 'home', icon: FiGrid, label: 'Home' },
    { id: 'progress', icon: FiActivity, label: 'Progress' },
    { id: 'add-habit', icon: FiPlus, label: 'Add', isCenter: true },
    { id: 'my-habits', icon: FiCalendar, label: 'Habits' },
    { id: 'profile', icon: FiUser, label: 'Profile' }
  ];

  return (
    <div className="absolute bottom-3 left-4 right-4 h-13 bg-[#FCFAF7]/95 border border-[#E3DAD0]/75 rounded-full shadow-neomorphic-sm flex items-center justify-between px-5 z-20 shrink-0">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        if (tab.isCenter) {
          return (
            <button
              key={tab.id}
              onClick={() => onTabSelect(tab.id)}
              className="w-10 h-10 rounded-full bg-[#B8CBB9] border-2 border-white flex items-center justify-center text-emerald-950 shadow-md -mt-5 cursor-pointer transform hover:scale-105 active:scale-95 transition-transform"
              aria-label="Add Habit"
            >
              <FiPlus size={20} className="stroke-[2.5]" />
            </button>
          );
        }
        return (
          <button
            key={tab.id}
            onClick={() => onTabSelect(tab.id)}
            className={`flex flex-col items-center justify-center cursor-pointer transition-colors ${
              activeTab === tab.id ? 'text-emerald-800' : 'text-[#8A8279]'
            }`}
          >
            <Icon size={15} className="stroke-[2.5]" />
            <span className="text-[7.5px] font-sans font-bold mt-0.5 leading-none">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function AppMockups({ type }) {
  const [localType, setLocalType] = useState(type);
  const [habitsCount, setHabitsCount] = useState(0);
  const [newHabitName, setNewHabitName] = useState('Write Code');
  const [selectedEmoji, setSelectedEmoji] = useState('💻');

  useEffect(() => {
    setLocalType(type);
  }, [type]);

  const emojis = ['💧', '📚', '🧘', '🏋️', '💻', '🍎', '💤', '🌱', '🎹'];

  // SCREEN 1: HOME SCREEN
  if (localType === 'home') {
    return (
      <div className="w-full h-full bg-[#FAF7F2] flex flex-col font-sans text-[#2C2724] relative overflow-hidden">
        <AppBackground />
        <StatusBar />

        {/* User Profile Header */}
        <div className="px-4 py-2 flex justify-between items-center z-10 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8.5 h-8.5 rounded-full border border-white overflow-hidden shadow-neomorphic-sm shrink-0">
              <AvatarSVG />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[8px] text-[#8A8279] font-medium leading-tight">Good Morning,</span>
              <h3 className="text-[11px] font-bold text-text-dark tracking-tight leading-tight flex items-center gap-0.5">
                Avinash Chavda <span className="text-[10px]">🌿</span>
              </h3>
            </div>
          </div>
          <div className="flex gap-1.5">
            <div className="w-6.5 h-6.5 rounded-full bg-[#FCFAF7] border border-[#E3DAD0]/50 flex items-center justify-center shadow-neomorphic-sm cursor-pointer hover:scale-105">
              <FiSearch size={11} className="text-[#2C2724]" />
            </div>
            <div className="w-6.5 h-6.5 rounded-full bg-[#FCFAF7] border border-[#E3DAD0]/50 flex items-center justify-center shadow-neomorphic-sm cursor-pointer hover:scale-105">
              <FiBell size={11} className="text-[#2C2724]" />
            </div>
          </div>
        </div>

        {/* Progress Ring Card */}
        <div className="mx-4 my-1.5 p-3 rounded-[1.4rem] bg-[#FCFAF7] border border-[#E3DAD0]/50 shadow-neomorphic-sm flex justify-between items-center z-10 shrink-0">
          <div className="flex flex-col gap-0.5 text-left">
            <span className="text-[8.5px] font-bold text-[#8A8279]">Keep going!</span>
            <h4 className="text-[12px] font-display font-bold leading-tight text-[#2C2724]">
              You&apos;re doing <br />
              <span className="text-emerald-800">great</span> today.
            </h4>
            <span className="text-[8.5px] text-[#8A8279] mt-0.5">0 of {habitsCount} completed</span>
          </div>

          <div className="relative w-12 h-12 flex flex-col items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="24" cy="24" r="20" stroke="rgba(184, 203, 185, 0.15)" strokeWidth="3" fill="transparent" />
              <circle cx="24" cy="24" r="20" stroke="#B8CBB9" strokeWidth="3" fill="transparent" 
                strokeDasharray={2 * Math.PI * 20} 
                strokeDashoffset={2 * Math.PI * 20} 
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-[10px] font-bold text-text-dark">0%</span>
              <span className="text-[6.5px] text-[#8A8279] -mt-0.5 font-bold">Done</span>
            </div>
          </div>
        </div>

        {/* 3 Horizontal Dashboard mini-cards */}
        <div className="grid grid-cols-3 gap-1.5 px-4 py-1 z-10 shrink-0">
          {/* Card 1: Streak */}
          <div className="bg-[#FCFAF7] p-2 rounded-xl border border-[#E3DAD0]/40 shadow-neomorphic-sm flex flex-col items-center text-center justify-between min-h-[76px]">
            <div className="w-5 h-5 rounded-full bg-[#E6C1BE]/20 flex items-center justify-center text-[9px] shrink-0">
              🔥
            </div>
            <div className="my-0.5">
              <div className="text-[10px] font-bold text-[#2C2724]">0 Days</div>
              <div className="text-[6.5px] text-[#8A8279] leading-none mt-0.5">Current Streak</div>
            </div>
            <span className="text-[6.5px] font-bold text-amber-800 bg-[#E6C1BE]/20 px-1.5 py-0.5 rounded-full leading-none shrink-0 scale-95">
              Keep going!
            </span>
          </div>

          {/* Card 2: Success Rate */}
          <div className="bg-[#FCFAF7] p-2 rounded-xl border border-[#E3DAD0]/40 shadow-neomorphic-sm flex flex-col items-center text-center justify-between min-h-[76px]">
            <div className="w-5 h-5 rounded-full bg-[#B2CFD8]/20 flex items-center justify-center text-[9px] shrink-0">
              🏆
            </div>
            <div className="my-0.5">
              <div className="text-[10px] font-bold text-[#2C2724]">0%</div>
              <div className="text-[6.5px] text-[#8A8279] leading-none mt-0.5">Success Rate</div>
            </div>
            <span className="text-[6.5px] font-bold text-blue-900 bg-[#B2CFD8]/20 px-1.5 py-0.5 rounded-full leading-none shrink-0 scale-95">
              You&apos;re improving!
            </span>
          </div>

          {/* Card 3: Badges */}
          <div className="bg-[#FCFAF7] p-2 rounded-xl border border-[#E3DAD0]/40 shadow-neomorphic-sm flex flex-col items-center text-center justify-between min-h-[76px]">
            <div className="w-5 h-5 rounded-full bg-[#FAF7F2] border border-[#E3DAD0]/70 flex items-center justify-center text-[9px] shrink-0">
              ⭐
            </div>
            <div className="my-0.5">
              <div className="text-[10px] font-bold text-[#2C2724]">0</div>
              <div className="text-[6.5px] text-[#8A8279] leading-none mt-0.5">Badges</div>
            </div>
            <span className="text-[6.5px] font-bold text-emerald-800 bg-[#B8CBB9]/25 px-1.5 py-0.5 rounded-full leading-none shrink-0 scale-95">
              Keep It up!
            </span>
          </div>
        </div>

        {/* Section Title */}
        <div className="px-4 pt-2 flex justify-between items-center z-10 shrink-0">
          <h4 className="text-[11px] font-bold text-[#2C2724] tracking-tight">Today&apos;s Habits</h4>
          <button className="text-[9px] text-[#8A8279] font-bold hover:underline">See History</button>
        </div>

        {/* Scrollable Habits Empty state (Optimized to prevent cutoff) */}
        <div className="flex-1 overflow-y-auto px-4 pb-20 pt-0.5 z-10 flex flex-col justify-start">
          <div className="p-4 rounded-2xl bg-[#FCFAF7] border border-[#E3DAD0]/50 shadow-neomorphic-sm flex flex-col items-center text-center gap-3">
            
            {/* Plant Trophy SVG representation scaled down */}
            <div className="w-20 h-20 flex items-center justify-center shrink-0">
              <svg className="w-full h-full text-emerald-700" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="35" fill="#FAF7F2" stroke="#B8CBB9" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M38 32 H62 V50 C62 56, 56 62, 50 62 C44 62, 38 56, 38 50 Z" fill="#B8CBB9" stroke="#90A191" strokeWidth="1.5" />
                <path d="M50 62 V72 M43 72 H57" stroke="#90A191" strokeWidth="1.75" />
                <path d="M38 37 H32 V44 C32 47, 38 47, 38 44 Z" stroke="#90A191" strokeWidth="1.2" />
                <path d="M62 37 H68 V44 C68 47, 62 47, 62 44 Z" stroke="#90A191" strokeWidth="1.2" />
                <circle cx="34" cy="65" r="2.5" fill="#E6C1BE" />
                <circle cx="66" cy="65" r="3" fill="#B2CFD8" />
                <circle cx="28" cy="28" r="2" fill="#B8CBB9" />
                <rect x="40" y="72" width="20" height="4" rx="1.5" fill="#90A191" />
              </svg>
            </div>

            <div className="flex flex-col gap-0.5 px-3">
              <h5 className="text-[11px] font-bold text-text-dark">No habits tracked yet</h5>
              <p className="text-[8.5px] text-[#8A8279] leading-normal">
                Small daily changes make a massive difference. Add your first habit to start building consistency.
              </p>
            </div>

            <button 
              onClick={() => setLocalType('add-habit')}
              className="px-4 py-2 bg-emerald-800 text-white font-display font-bold text-[8.5px] rounded-lg hover:scale-102 cursor-pointer shadow-xs active:scale-95 transition-transform"
            >
              + Add Your First Habit
            </button>
          </div>
        </div>

        <AppTabBar activeTab="home" onTabSelect={setLocalType} />
      </div>
    );
  }

  // SCREEN 2: PROGRESS SCREEN
  if (localType === 'progress') {
    return (
      <div className="w-full h-full bg-[#FAF7F2] flex flex-col font-sans text-[#2C2724] relative overflow-hidden">
        <AppBackground />
        <StatusBar />

        {/* Progress Header */}
        <div className="px-4 py-2 flex items-center gap-2.5 z-10 shrink-0">
          <div className="w-7 h-7 rounded-full bg-[#B8CBB9]/25 border border-[#B8CBB9]/50 flex items-center justify-center text-emerald-800 text-xs shadow-neomorphic-sm shrink-0">
            🌱
          </div>
          <div className="text-left">
            <h2 className="text-[11.5px] font-bold text-text-dark tracking-tight leading-tight">Progress 🌿</h2>
            <p className="text-[8px] text-[#8A8279] leading-none mt-0.5">Your journey to a better you</p>
          </div>
        </div>

        {/* Journey Card (Image 2) */}
        <div className="mx-4 my-1.5 p-3 rounded-xl bg-[#FCFAF7] border border-[#E3DAD0]/50 shadow-neomorphic flex justify-between items-center z-10 shrink-0">
          <div className="relative w-12 h-12 flex flex-col items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="24" cy="24" r="21" stroke="rgba(184, 203, 185, 0.15)" strokeWidth="3" fill="transparent" />
              <circle cx="24" cy="24" r="21" stroke="#B8CBB9" strokeWidth="3" fill="transparent" 
                strokeDasharray={2 * Math.PI * 21} 
                strokeDashoffset={2 * Math.PI * 21} 
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-[8.5px] font-bold text-text-dark">0%</span>
              <span className="text-[5.5px] text-[#8A8279] -mt-0.5 leading-none">Keep it up!</span>
              <span className="text-[7px] text-emerald-700 mt-0.5">🌿</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 pl-3 flex-1 text-left">
            <div className="flex justify-between items-center text-[8.5px] border-b border-[#E3DAD0]/20 pb-0.5">
              <span className="text-[#8A8279] font-medium flex items-center gap-0.5">
                <span className="text-emerald-700">✓</span> Habits Completed
              </span>
              <span className="font-bold text-text-dark">0 <span className="text-[6.5px] text-[#8A8279]">/1</span></span>
            </div>
            
            <div className="flex justify-between items-center text-[8.5px] border-b border-[#E3DAD0]/20 pb-0.5">
              <span className="text-[#8A8279] font-medium flex items-center gap-0.5">
                <span className="text-amber-600">🔥</span> Current Streak
              </span>
              <span className="font-bold text-text-dark text-amber-700">0 days</span>
            </div>

            <div className="flex justify-between items-center text-[8.5px]">
              <span className="text-[#8A8279] font-medium flex items-center gap-0.5">
                <span className="text-blue-600">⭐</span> Success Rate
              </span>
              <span className="font-bold text-blue-900">0%</span>
            </div>
          </div>
        </div>

        {/* Current Streak Details widget */}
        <div className="mx-4 my-1 p-3 rounded-xl bg-[#FCFAF7] border border-[#E3DAD0]/50 shadow-neomorphic flex flex-col gap-2 z-10 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px]">🔥</span>
            <span className="text-[10px] font-bold text-text-dark font-display">Current Streak</span>
          </div>

          <div className="flex justify-between items-end">
            <div className="text-left">
              <div className="text-2xl font-display font-extrabold text-[#2C2724] tracking-tight leading-none">0 <span className="text-[10px] font-bold text-[#8A8279]">Days</span></div>
              <span className="inline-block text-[7px] font-bold text-amber-800 bg-[#E6C1BE]/20 px-2 py-0.5 rounded-full mt-1">
                ~ Keep it up!
              </span>
            </div>

            <div className="px-2 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#E3DAD0]/70 flex items-center gap-1.5">
              <span className="text-[11px]">🏆</span>
              <div className="text-left text-[7px] leading-none">
                <div className="text-[#8A8279] font-light">Best Streak</div>
                <div className="font-bold text-[#2C2724] mt-0.5">0 Days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Progress Section */}
        <div className="mx-4 my-1.5 p-3 rounded-xl bg-[#FCFAF7] border border-[#E3DAD0]/50 shadow-neomorphic flex-grow z-10 overflow-hidden flex flex-col justify-between max-h-[140px] pb-18">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-text-dark font-display flex items-center gap-1">
              📊 Weekly Progress
            </span>
            <button className="text-[7.5px] font-bold bg-[#FAF7F2] border border-[#E3DAD0] px-2 py-0.5 rounded-md flex items-center gap-0.5">
              This Week <FiChevronDown size={7} />
            </button>
          </div>
          <p className="text-[7.5px] text-[#8A8279] font-medium -mt-1 text-left">
            🌿 Consistency is the key to success!
          </p>

          {/* Bar Chart representation adjusted height */}
          <div className="h-14 flex items-end justify-between px-1.5 pt-2 relative text-[6.5px] text-[#8A8279] font-sans font-medium">
            <div className="absolute left-0 right-0 top-2 border-t border-[#E3DAD0]/15" />
            <div className="absolute left-0 right-0 top-6 border-t border-[#E3DAD0]/15" />
            <div className="absolute left-0 right-0 top-10 border-t border-[#E3DAD0]/15" />
            
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="flex flex-col items-center gap-1 w-6">
                <div className="w-3.5 h-7 bg-gray-200/10 border border-dashed border-[#E3DAD0]/30 rounded-xs relative" />
                <span className="text-[6.5px] scale-90">{day}</span>
              </div>
            ))}
          </div>
        </div>

        <AppTabBar activeTab="progress" onTabSelect={setLocalType} />
      </div>
    );
  }

  // SCREEN 3: MY HABITS SCREEN
  if (localType === 'my-habits') {
    return (
      <div className="w-full h-full bg-[#FAF7F2] flex flex-col font-sans text-[#2C2724] relative overflow-hidden">
        <AppBackground />
        <StatusBar />

        {/* Header */}
        <div className="px-4 py-2 flex items-center gap-2.5 z-10 shrink-0">
          <div className="w-7 h-7 rounded-full bg-[#B8CBB9]/25 border border-[#B8CBB9]/50 flex items-center justify-center text-emerald-800 text-xs shadow-neomorphic-sm shrink-0">
            📊
          </div>
          <div className="text-left">
            <h2 className="text-[11.5px] font-bold text-text-dark tracking-tight leading-tight">My Habits</h2>
            <p className="text-[8px] text-[#8A8279] leading-none mt-0.5">Build healthy routines every day</p>
          </div>
        </div>

        {/* Weekly Calendar Selector (Image 3) */}
        <div className="mx-4 my-1 p-2 rounded-xl bg-[#FCFAF7] border border-[#E3DAD0]/50 shadow-neomorphic-sm flex items-center justify-between z-10 text-[8.5px] font-sans font-bold shrink-0">
          <FiChevronLeft className="text-[#8A8279] cursor-pointer" />
          <div className="flex gap-1.5">
            {[
              { day: 'Mon', num: 29 },
              { day: 'Tue', num: 30 },
              { day: 'Wed', num: 1 },
              { day: 'Thu', num: 2 },
              { day: 'Fri', num: 3 },
              { day: 'Sat', num: 4, active: true },
              { day: 'Sun', num: 5 }
            ].map((cal) => (
              <div 
                key={cal.num} 
                className={`flex flex-col items-center p-1 rounded-2xl w-6.5 h-10 justify-between transition-all duration-300 ${
                  cal.active 
                    ? 'bg-emerald-800 text-white shadow-[0_3px_8px_rgba(6,78,59,0.3)] scale-105 border border-white/20' 
                    : 'bg-[#FCFAF7] border border-[#E3DAD0]/50 text-[#8A8279] shadow-xs hover:border-emerald-800/30'
                }`}
              >
                <span className={`text-[5.5px] uppercase font-bold leading-none mt-1 ${cal.active ? 'text-white' : 'text-[#8A8279]/80'}`}>{cal.day}</span>
                <span className="text-[9.5px] font-extrabold leading-none mb-1">{cal.num}</span>
              </div>
            ))}
          </div>
          <FiChevronRight className="text-[#8A8279] cursor-pointer" />
        </div>

        {/* Section Title */}
        <div className="px-4 pt-2 pb-0.5 flex justify-between items-center z-10 shrink-0">
          <h4 className="text-[11px] font-bold text-[#2C2724] tracking-tight">All Registered Habits</h4>
          <button className="text-[7.5px] font-bold bg-[#FCFAF7] border border-[#E3DAD0]/50 px-2 py-0.5 rounded-md flex items-center gap-0.5">
            All Habits <FiChevronDown size={6} />
          </button>
        </div>

        {/* Clipboard empty state card */}
        <div className="mx-4 my-1 p-5 rounded-2xl bg-[#FCFAF7] border border-[#E3DAD0]/50 shadow-neomorphic flex flex-col items-center text-center gap-3 z-10 shrink-0">
          {/* 3D Neomorphic Clipboard graphic */}
          <div className="w-18 h-18 relative flex items-center justify-center shrink-0">
            <svg className="w-full h-full text-emerald-800" viewBox="0 0 100 100" fill="none">
              {/* Clipboard background board */}
              <rect x="34" y="22" width="32" height="42" rx="4" fill="#FCFAF7" stroke="#E3DAD0" strokeWidth="1.5" />
              <rect x="36" y="24" width="28" height="38" rx="2" fill="#FAF7F2" />
              
              {/* Clipboard metal clip */}
              <rect x="42" y="16" width="16" height="8" rx="2" fill="#E3DAD0" stroke="#FAF7F2" strokeWidth="1" />
              <circle cx="50" cy="20" r="1.5" fill="#FAF6EE" />
              
              {/* Checklist page mockup lines */}
              <line x1="42" y1="36" x2="58" y2="36" stroke="#B8CBB9" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="42" y1="44" x2="54" y2="44" stroke="#E6C1BE" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="42" y1="52" x2="50" y2="52" stroke="#B2CFD8" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Decorative leaves */}
              <path d="M28 50 Q 20 38 32 40" stroke="#B8CBB9" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M72 52 Q 80 44 70 41" stroke="#B8CBB9" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <circle cx="24" cy="42" r="1.5" fill="#B8CBB9" />
              <circle cx="76" cy="46" r="1.5" fill="#B8CBB9" />
            </svg>
            <div className="absolute w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold -bottom-0.5 -right-0.5 text-[9px] shadow-md border-2 border-white">
              +
            </div>
          </div>

          <div className="flex flex-col gap-0.5 px-3">
            <h5 className="text-[11px] font-bold text-text-dark">No habits registered yet</h5>
            <p className="text-[8.5px] text-[#8A8279] leading-relaxed">
              Start your habit journey by adding your first habit.
            </p>
          </div>

          <button 
            onClick={() => setLocalType('add-habit')}
            className="w-full py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white border border-white/20 font-display font-bold text-[9px] rounded-xl hover:scale-102 cursor-pointer shadow-md active:scale-95 transition-transform"
          >
            + Add Your First Habit
          </button>
        </div>

        {/* Why track your habits */}
        <div className="px-4 pt-2 z-10 overflow-hidden pb-18 flex-grow">
          <h4 className="text-[10px] font-bold text-text-secondary tracking-tight text-left">Why track your habits?</h4>
          <div className="grid grid-cols-3 gap-1.5 mt-1.5 pb-1">
            {[
              { title: 'Stay Consistent', color: 'bg-[#B2CFD8]/20 text-blue-900 border-[#B2CFD8]/30', icon: '📈' },
              { title: 'Build Better', color: 'bg-[#E6C1BE]/20 text-red-900 border-[#E6C1BE]/30', icon: '🔥' },
              { title: 'Achieve Goals', color: 'bg-[#B8CBB9]/25 text-emerald-900 border-[#B8CBB9]/35', icon: '🏆' }
            ].map((benefit) => (
              <div 
                key={benefit.title} 
                className={`p-2 rounded-xl border text-center shadow-neomorphic-sm flex flex-col items-center justify-between min-h-[64px] ${benefit.color}`}
              >
                <div className="w-4.5 h-4.5 rounded-full bg-white/60 flex items-center justify-center text-[8.5px] shrink-0 shadow-xs">
                  {benefit.icon}
                </div>
                <span className="text-[7.5px] font-extrabold leading-none mt-1 shrink-0">{benefit.title}</span>
              </div>
            ))}
          </div>
        </div>

        <AppTabBar activeTab="my-habits" onTabSelect={setLocalType} />
      </div>
    );
  }

  // SCREEN 4: PROFILE SCREEN
  if (localType === 'profile') {
    return (
      <div className="w-full h-full bg-[#FAF7F2] flex flex-col font-sans text-[#2C2724] relative overflow-hidden">
        <AppBackground />
        <StatusBar />

        {/* Profile Title Header */}
        <div className="px-4 py-2 flex items-center gap-2.5 z-10 shrink-0">
          <div className="w-7 h-7 rounded-full bg-[#B8CBB9]/25 border border-[#B8CBB9]/50 flex items-center justify-center text-emerald-800 text-xs shadow-neomorphic-sm shrink-0">
            🌳
          </div>
          <div className="text-left">
            <h2 className="text-[11.5px] font-bold text-text-dark tracking-tight leading-tight">Profile</h2>
            <p className="text-[8px] text-[#8A8279] leading-none mt-0.5">Manage your preferences</p>
          </div>
        </div>

        {/* Profile Info Card (Image 4) */}
        <div className="mx-4 my-1.5 p-3 rounded-xl bg-[#FCFAF7] border border-[#E3DAD0]/50 shadow-neomorphic flex flex-col items-center text-center relative z-10 shrink-0">
          <div className="relative w-12 h-12 rounded-full border border-white overflow-hidden shadow-neomorphic-sm shrink-0">
            <AvatarSVG />
            <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-700/80 border border-white flex items-center justify-center text-white text-[6px] cursor-pointer">
              ✏️
            </div>
          </div>
          
          <h3 className="font-display font-bold text-[11px] text-text-dark mt-2 leading-none">Avinash Chavda</h3>
          <span className="text-[8px] text-[#8A8279] mt-0.5 leading-none">chavdaavinash24@gmail.com</span>

          {/* Grids inside profile */}
          <div className="grid grid-cols-4 gap-0.5 w-full border-t border-[#E3DAD0]/20 pt-2.5 mt-3 text-[8.5px] font-sans font-bold leading-none">
            <div className="flex flex-col items-center gap-0.5 border-r border-[#E3DAD0]/15">
              <span className="text-[10px]">🌱</span>
              <span className="text-text-dark">0</span>
              <span className="text-[6.5px] text-[#8A8279] font-light mt-0.5">Habits</span>
            </div>
            
            <div className="flex flex-col items-center gap-0.5 border-r border-[#E3DAD0]/15">
              <span className="text-[10px]">🔥</span>
              <span className="text-text-dark">0</span>
              <span className="text-[6.5px] text-[#8A8279] font-light mt-0.5">Streak</span>
            </div>

            <div className="flex flex-col items-center gap-0.5 border-r border-[#E3DAD0]/15">
              <span className="text-[10px]">🏆</span>
              <span className="text-text-dark">0%</span>
              <span className="text-[6.5px] text-[#8A8279] font-light mt-0.5">Rate</span>
            </div>

            <div className="flex flex-col items-center gap-0.5">
              <span className="text-[10px]">⭐</span>
              <span className="text-text-dark">0</span>
              <span className="text-[6.5px] text-[#8A8279] font-light mt-0.5">Badges</span>
            </div>
          </div>
        </div>

        {/* Keep Growing Banner card */}
        <div className="mx-4 my-1 p-2.5 rounded-xl bg-[#B8CBB9]/15 border border-[#B8CBB9]/30 flex justify-between items-center gap-2 z-10 shrink-0">
          <div className="w-6.5 h-6.5 rounded-full bg-[#B8CBB9]/25 border border-[#B8CBB9]/35 flex items-center justify-center text-emerald-800 shrink-0 shadow-neomorphic-sm text-[10px]">
            🌱
          </div>
          <div className="text-left flex-1 text-[8px] leading-relaxed">
            <h5 className="font-bold text-[#2C2724] leading-tight">Keep Growing!</h5>
            <p className="text-[#8A8279] mt-0.5">Small steps every day lead to big changes.</p>
          </div>
          <button className="text-[7.5px] font-bold text-emerald-800 bg-[#FCFAF7] border border-[#E3DAD0]/60 p-1.5 rounded-md shrink-0 flex items-center shadow-neomorphic-sm active:scale-95">
            Progress <FiArrowRight size={7} />
          </button>
        </div>

        {/* Account menu actions (Truncated to fit screen) */}
        <div className="mx-4 my-1.5 pb-20 z-10 flex flex-col gap-1.5 flex-grow overflow-hidden">
          <h4 className="text-[8.5px] uppercase font-bold text-[#8A8279] tracking-wider pl-1.5 text-left">Account</h4>
          <div className="bg-[#FCFAF7] rounded-xl border border-[#E3DAD0]/40 shadow-neomorphic-sm flex flex-col divide-y divide-[#E3DAD0]/20 font-sans font-bold text-[9px] text-[#2C2724] text-left">
            {['Personal Information', 'Notification Settings', 'Achievements', 'Privacy & Security'].map((item) => (
              <div key={item} className="p-2.5 flex justify-between items-center cursor-pointer hover:bg-gray-50/40">
                <span>{item}</span>
                <span className="text-[#8A8279] font-light">&gt;</span>
              </div>
            ))}
          </div>
        </div>

        <AppTabBar activeTab="profile" onTabSelect={setLocalType} />
      </div>
    );
  }

  // SCREEN 5: CREATE HABIT MODAL POPUP
  if (localType === 'add-habit') {
    return (
      <div className="w-full h-full bg-[#FAF7F2] flex flex-col font-sans text-[#2C2724] relative overflow-hidden">
        {/* Render Profile Screen background */}
        <div className="absolute inset-0 opacity-45 pointer-events-none">
          <AppBackground />
          <StatusBar />
          <div className="px-4 py-2 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#B8CBB9]/25 border border-[#B8CBB9]/50" />
            <div>
              <h2 className="text-[11.5px] font-bold text-text-dark">Profile</h2>
            </div>
          </div>
          <div className="mx-4 my-1.5 p-12 rounded-xl bg-[#FCFAF7] border border-[#E3DAD0]/50" />
        </div>

        {/* Backdrop filter */}
        <div className="absolute inset-0 bg-[#2C2724]/10 backdrop-blur-xs z-10" />

        {/* Modal bottom sheet (Scaled perfectly to cover the screen) */}
        <div className="absolute bottom-0 left-0 right-0 rounded-t-[1.8rem] bg-[#FAF7F2] border-t border-[#E3DAD0] shadow-2xl p-5 z-20 flex flex-col gap-3 font-sans text-[#2C2724] max-h-[92%] select-none">
          {/* Header handle */}
          <div className="w-8 h-0.75 bg-[#E3DAD0] rounded-full mx-auto -mt-1 shrink-0" />
          
          <h2 className="text-[12px] font-display font-bold text-text-dark mt-0.5 text-left">Create New Habit</h2>

          {/* Select Category */}
          <div className="flex flex-col gap-1.5 text-left shrink-0">
            <div className="flex justify-between items-center text-[9px] font-bold">
              <span className="text-[#8A8279]">Select Category</span>
              <button className="text-emerald-800 hover:underline">+ Create Category</button>
            </div>
            
            <div className="flex gap-1.5">
              <button className="flex items-center gap-1 px-2.5 py-1.5 bg-[#B8CBB9] border border-white text-emerald-950 text-[8.5px] font-bold rounded-lg shadow-xs">
                🥗 Health
              </button>
              <button className="flex items-center gap-1 px-2.5 py-1.5 bg-[#FCFAF7] border border-[#E3DAD0]/50 text-text-secondary text-[8.5px] font-bold rounded-lg shadow-neomorphic-sm">
                🧘 Mindfulness
              </button>
              <button className="flex items-center gap-1 px-2.5 py-1.5 bg-[#FCFAF7] border border-[#E3DAD0]/50 text-text-secondary text-[8.5px] font-bold rounded-lg shadow-neomorphic-sm">
                📚 Learning
              </button>
            </div>
          </div>

          {/* Habit Name input */}
          <div className="flex flex-col gap-1 shrink-0">
            <input 
              type="text" 
              placeholder="Habit Name"
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#FCFAF7] border border-[#E3DAD0] text-[11px] font-semibold focus:outline-hidden focus:border-[#B8CBB9] shadow-neomorphic-inset text-text-dark"
            />
          </div>

          {/* Emoji Selection (reduced height) */}
          <div className="flex flex-col gap-1.5 text-left shrink-0">
            <label className="text-[9px] font-bold text-[#8A8279]">Choose Icon Emoji</label>
            <div className="grid grid-cols-6 gap-1.5">
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setSelectedEmoji(emoji)}
                  className={`aspect-square rounded-lg bg-[#FCFAF7] border flex items-center justify-center text-xs shadow-neomorphic-sm transition-all duration-200 cursor-pointer ${
                    selectedEmoji === emoji ? 'border-emerald-800 bg-[#B8CBB9]/35 scale-103 shadow-none' : 'border-[#E3DAD0]/60'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Start Tracking Button */}
          <button 
            onClick={() => {
              setHabitsCount(prev => prev + 1);
              setLocalType('home');
            }}
            className="w-full py-2.5 bg-[#B8CBB9] border border-white text-emerald-950 font-display font-bold text-[10px] rounded-xl shadow-xs cursor-pointer flex items-center justify-center gap-1 mt-1 active:scale-97 hover:scale-101 transition-transform"
          >
            ✓ Start Tracking Habit
          </button>
        </div>
      </div>
    );
  }

  return null;
}
