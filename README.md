# HabitFlow Web 🌿

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62B)](https://vite.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

The official premium product marketing, landing, and compliance website for the **HabitFlow** Flutter Android application. 

This website is engineered to promote the mobile application, host legal compliance agreements (Privacy Policy and Terms of Service) required for Google Play Store registration, and offer an interactive support desk for users.

---

## 🌟 Key Visuals & Aesthetics

The website is crafted using **state-of-the-art modern web guidelines**:
- **Harmonious Palette**: Warm sand cream base (`#FAF7F2`), clay off-white surfaces (`#FCFAF7`), and elegant pastel accents in sage green (`#B8CBB9`), sky blue (`#B2CFD8`), and coral pink (`#E6C1BE`).
- **Claymorphism & Neomorphism**: Smooth 3D pill capsules, deep inset input forms, soft clay widgets, and micro-animations styled natively with Tailwind v4 utilities.
- **Micro-interactions**: Subtle hover lifts, scale transitions on buttons, and smooth scroll restoration.

---

## 📱 Interactive Live App Mockups

Inside the **Visual Showcases** section, visitors can tap through an interactive mobile device mockup showing pixel-perfect SVG replicas of the real Flutter app screens:
1. **Home Screen**: Good morning dashboard greeting (*"Good Morning, Avinash Chavda"*), profile avatars, search/alert indicators, streak cards, and daily habits tracker.
2. **Progress Screen**: Streak indicators, completion ratios summary, and the weekly tracking chart.
3. **My Habits Calendar**: Daily calendar capsule selectors, 3D clipboards empty logs, and interactive call-to-actions.
4. **Profile Settings**: Achievement badges, account settings list items, and status indicators.
5. **Create Habit Modal**: Slide-up modal overlay showing category selections, habit title input fields, and custom emoji grids.

---

## 🛠️ Tech Stack & Packages

- **Core**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) for high-efficiency SPA rendering.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native CSS variable configuration.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for screen switch transitions and scroll reveals.
- **Routing**: [React Router DOM v7](https://reactrouter.com/) with scroll restoration hooks.
- **Icons**: [React Icons (Feather Icons)](https://react-icons.github.io/react-icons/) for consistent, lightweight vector glyphs.

---

## 📂 Project Structure

```
habit-tracker-web/
├── index.html          # SEO-optimized HTML5 document (Poppins & Inter Fonts)
├── vite.config.js      # Vite compilation configurations
├── package.json        # Dependencies log
├── public/
│   ├── favicon.svg     # Brand monogram favicon
│   ├── robots.txt      # Crawl access control rules
│   └── sitemap.xml     # SEO URL indexing layout
└── src/
    ├── main.jsx        # Mount point
    ├── App.jsx         # App routes & layout wrapper
    ├── index.css       # Tailwind imports + neomorphic utilities
    ├── data/
    │   └── siteData.js # Nav configs, features lists, FAQ list, and roadmap
    ├── components/
    │   ├── Navbar.jsx  # Glassmorphic header
    │   ├── Footer.jsx  # Footer links & Google Play badges
    │   ├── DeviceFrame.jsx # Smartphone styling container
    │   └── AppMockups.jsx  # SVG screen layouts matching real app screenshots
    ├── pages/
    │   ├── Home.jsx    # Central marketing viewport
    │   ├── Support.jsx # Interactive bug logs & feature requests (mailto: triggers)
    │   ├── Contact.jsx # Social profiles & Jasdan location details
    │   ├── PrivacyPolicy.jsx # Play Store & AdMob privacy terms
    │   └── TermsOfService.jsx # User storage caching disclaimers
    └── sections/
        ├── Hero.jsx    # Marketing title & app showcase
        ├── Features.jsx # Grid of the 10 core features
        ├── WhyChooseUs.jsx # Product comparisons
        ├── Screenshots.jsx # Mockup tab-control showcases
        ├── FAQ.jsx     # Accordion collapsible FAQs
        └── DownloadCTA.jsx # Play Store download banner
```

---

## 🚀 Running Locally

Follow these instructions to clone, install, and run the project locally on your machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone the Repository
```bash
git clone https://github.com/Avinash11-AK11/habit-tracker-web.git
cd habit-tracker-web
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to the local address (typically `http://localhost:5173`).

### 4. Build for Production
To build the application for host deployment:
```bash
npm run build
```
Vite will compile the code and place all static production assets inside the `/dist` directory.

---

## 🤝 Support & Feedback

If you have suggestions, want to request features, or report issues, reach out directly:
- **Developer**: Avinash Chavda
- **Email**: [chavdaavinash24@gmail.com](mailto:chavdaavinash24@gmail.com)
- **LinkedIn**: [Avinash Chavda](https://www.linkedin.com/in/avinash-chavda-8a4380331/)
- **Location**: Jasdan, Rajkot, Gujarat, India (360050)

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
