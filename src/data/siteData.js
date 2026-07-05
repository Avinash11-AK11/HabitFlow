import { 
  FiCheckCircle, 
  FiZap, 
  FiSmartphone, 
  FiLock, 
  FiWifiOff, 
  FiUserMinus, 
  FiPlusCircle, 
  FiSmile, 
  FiShield, 
  FiTrendingUp, 
  FiAward, 
  FiPieChart, 
  FiFolder, 
  FiBell, 
  FiCloudLightning, 
  FiLayers 
} from 'react-icons/fi';

export const navLinks = [
  { label: 'Home', path: '/#' },
  { label: 'Features', path: '/#features' },
  { label: 'Screenshots', path: '/#screenshots' },
  { label: 'FAQ', path: '/#faq' },
  { label: 'Support', path: '/support' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Contact', path: '/contact' }
];

export const features = [
  {
    icon: FiCheckCircle,
    title: 'Daily Habit Tracking',
    description: 'Log and review habits daily. A frictionless design makes completion satisfy like pressing a button.',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
  },
  {
    icon: FiTrendingUp,
    title: 'Track Streaks',
    description: 'Stay inspired with streak counters that grow as you log consecutive completions.',
    color: 'bg-violet-50 text-violet-600 border-violet-100'
  },
  {
    icon: FiSmartphone,
    title: 'Simple & Beautiful UI',
    description: 'A smooth, modern interface crafted with claymorphic card effects and gorgeous colors.',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100'
  },
  {
    icon: FiZap,
    title: 'Lightning Fast',
    description: 'Launches instantly. Animations run at a silky-smooth 120 FPS on all modern displays.',
    color: 'bg-amber-50 text-amber-600 border-amber-100'
  },
  {
    icon: FiWifiOff,
    title: 'Offline First',
    description: 'All logs and data reside in a local database (Hive) so you can track habits anywhere, offline.',
    color: 'bg-blue-50 text-blue-600 border-blue-100'
  },
  {
    icon: FiLock,
    title: 'Private Data',
    description: 'Your habits are personal. They are never sent to external servers. Safe and local.',
    color: 'bg-rose-50 text-rose-600 border-rose-100'
  },
  {
    icon: FiUserMinus,
    title: 'Secure Account System',
    description: 'Create your personal account to keep your habits safe, sync your progress, and personalize your profile.',
    color: 'bg-cyan-50 text-cyan-600 border-cyan-100'
  },
  {
    icon: FiPlusCircle,
    title: 'Easy Habit Creation',
    description: 'Add a new habit in seconds with customized frequencies, targets, and goals.',
    color: 'bg-teal-50 text-teal-600 border-teal-100'
  },
  {
    icon: FiSmile,
    title: 'Emoji Customization',
    description: 'Make habits feel yours. Choose from hundreds of expressive emojis to illustrate logs.',
    color: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100'
  },
  {
    icon: FiShield,
    title: 'Ad-Free Experience',
    description: 'Zero distractions, zero pop-ups. Focus solely on building a better version of yourself.',
    color: 'bg-orange-50 text-orange-600 border-orange-100'
  }
];

export const comparisons = [
  {
    title: 'Offline Storage',
    description: 'Other apps store your habits on slow cloud servers, making page transitions lag. Our app uses Hive to query and write instantly on-device.',
    badge: 'Hive Database'
  },
  {
    title: 'Privacy First',
    description: 'No tracker libraries. No backend logs. Your habits are yours alone, stored locally, and are never shared or sold.',
    badge: 'Zero Tracing'
  },
  {
    title: 'Clean Interface',
    description: 'Ditch the menus, complex configurations, and charts. Experience a clean claymorphic list built strictly around daily consistency.',
    badge: 'Clay UI'
  },
  {
    title: 'Account & Profile',
    description: 'Create a personal account to manage your profile, secure your habit data, and personalize your experience with a name and avatar.',
    badge: 'Secure Profile'
  },
  {
    title: 'Motivating Streaks',
    description: 'A visual fire-streak counter motivates you to complete tasks. Breaking a streak is hard; maintaining it is satisfying.',
    badge: 'Streak System'
  },
  {
    title: 'Fast Performance',
    description: 'Built with Flutter for high-efficiency rendering. Transition tabs and update elements instantly, even on older devices.',
    badge: 'Flutter Power'
  }
];

export const timelineSteps = [
  {
    number: '01',
    title: 'Create Habit',
    description: 'Type a name, select a frequency (e.g., Daily, Weekly), and assign a personality emoji to represent your habit card.'
  },
  {
    number: '02',
    title: 'Complete Daily',
    description: 'Check off your habit with a single tap. Indulge in beautiful sound feedback and neat particle effects.'
  },
  {
    number: '03',
    title: 'Build Streak',
    description: 'As days pass without missing a goal, watch your streak badge turn from orange to fiery red. Keep the chain alive!'
  },
  {
    number: '04',
    title: 'Become Consistent',
    description: 'Let consistency build automatically. Watch minor daily repetitions transform into powerful, lifelong character traits.'
  }
];

export const roadmap = [
  {
    title: 'Interactive Charts & Stats',
    description: 'Beautiful progress visualizations, weekly streaks, and completion rates mapped on clean heatmaps.',
    status: 'In Development',
    statusColor: 'bg-amber-100 text-amber-800'
  },
  {
    title: 'Custom Categories',
    description: 'Organize habits into groups like Fitness, Mental Health, Work, and Finance with colored labels.',
    status: 'Planned',
    statusColor: 'bg-blue-100 text-blue-800'
  },
  {
    title: 'Push Notifications',
    description: 'Local daily reminders customized for individual habits. Never forget your stretches or water goals.',
    status: 'Planned',
    statusColor: 'bg-blue-100 text-blue-800'
  },
  {
    title: 'Home Screen Widgets',
    description: 'Check off your habits directly from your Android home screen without even launching the application.',
    status: 'Planned',
    statusColor: 'bg-blue-100 text-blue-800'
  },
  {
    title: 'Achievements & Badges',
    description: 'Unlock special badges for reaching 30-day, 100-day, and 365-day streaks, making growth feel like an adventure.',
    status: 'Planned',
    statusColor: 'bg-blue-100 text-blue-800'
  },
  {
    title: 'Encrypted Local Backups',
    description: 'Export all habit data into a single, password-protected JSON file to move records to a new phone.',
    status: 'Planned',
    statusColor: 'bg-blue-100 text-blue-800'
  }
];

export const testimonials = [
  {
    quote: "As a web developer, I'm amazed by how local on-device storage makes mobile applications launch instantly. Integrating Hive database logic here provides a lightning-fast experience that completely blows standard cloud sync models away.",
    author: "Nipam Parmar",
    role: "Web Developer",
    rating: 5
  },
  {
    quote: "Outstanding implementation. The responsive grids, claymorphic theme design, and smooth framer-motion transitions create a premium experience. As a web developer, I highly appreciate this attention to UI detail.",
    author: "Parin Solanki",
    role: "Web Developer",
    rating: 5
  },
  {
    quote: "From an ML engineer's perspective, I love the focus on local user behavior patterns without sending raw telemetry data to corporate servers. This is how self-improvement apps should be built – fully private and secure.",
    author: "Devkrishna Rajkotiya",
    role: "ML Engineer",
    rating: 5
  }
];

export const faqs = [
  {
    question: "How does streak tracking work?",
    answer: "A streak is built by completing a habit on its scheduled days consecutively. For instance, if a habit is set to repeat daily, completing it every day increases the streak by 1. Missing a day resets the streak back to 0, motivating you to stay consistent."
  },
  {
    question: "Is my data private?",
    answer: "Yes, 100%. We believe that your self-improvement journey is personal. The app stores all your habit history locally inside an on-device Hive database. We do not run backends, track logins, or send your data to any external server."
  },
  {
    question: "Can I use it offline?",
    answer: "Absolutely! In fact, the app is designed to be completely offline-first. It queries and saves data locally in milliseconds. You can check off habits on a plane, in the subway, or deep in the mountains with zero internet access."
  },
  {
    question: "Does it require a login or account?",
    answer: "Yes, Habixa requires you to create a free account to get started. Your account lets you personalize your profile with a name and avatar, and keeps your habits organized and secure on your device."
  },
  {
    question: "Is the app free?",
    answer: "Yes, the app is fully free to download and use. Core features like creating habits, logging completions, customizing emojis, and tracking streaks are completely unlocked with no subscriptions or hidden gates."
  },
  {
    question: "Will an iOS version come?",
    answer: "Since the app is built using Flutter, we plan to release an iOS version on the App Store in the future once our upcoming roadmap features (Stats, Local Backup) are fully finalized and validated."
  },
  {
    question: "Can I backup my habits?",
    answer: "Yes, we are currently designing an 'Encrypted Local Backup' feature. This will allow you to export your database to a local file (e.g. JSON/Hive binary) which you can easily import on another device."
  }
];
