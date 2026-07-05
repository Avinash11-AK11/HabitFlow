import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Contact() {
  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email Us',
      value: 'chavdaavinash24@gmail.com',
      link: 'mailto:chavdaavinash24@gmail.com',
      description: 'Send us questions, suggestions, or collaboration proposals.',
      color: 'text-text-dark bg-[#B2CFD8]/25 border-[#B2CFD8]/50' // Sky Blue
    },
    {
      icon: FiGithub,
      title: 'GitHub Repo',
      value: 'github.com/Avinash11-AK11',
      link: 'https://github.com/Avinash11-AK11',
      description: 'Explore the Flutter codebase, read documentation, or build packages.',
      color: 'text-text-dark bg-[#E6C1BE]/25 border-[#E6C1BE]/50' // Coral Pink
    },
    {
      icon: FiLinkedin,
      title: 'LinkedIn Company',
      value: 'linkedin.com/in/avinash-chavda-8a4380331',
      link: 'https://www.linkedin.com/in/avinash-chavda-8a4380331/',
      description: 'Follow our journey and business milestones as a product studio.',
      color: 'text-text-dark bg-[#B8CBB9]/25 border-[#B8CBB9]/50' // Sage Green
    },
    {
      icon: FiMapPin,
      title: 'Developer Location',
      value: 'Jasdan, Rajkot, Gujarat (360050)',
      link: 'https://maps.google.com/?q=Jasdan,Rajkot,Gujarat,360050',
      description: 'Proudly designing and engineering applications locally in Gujarat, India.',
      color: 'text-text-dark bg-[#FCFAF7] border-[#E3DAD0]/70' // Sand Cream
    }
  ];

  return (
    <div className="py-12 md:py-24 max-w-5xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-wider uppercase text-text-dark bg-[#FCFAF7] border border-[#E3DAD0]/75 px-4 py-1.5 rounded-full shadow-neomorphic-sm">Get In Touch</span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-text-dark mt-4">We&apos;d Love to Hear From You</h1>
        <p className="text-sm text-text-secondary leading-relaxed mt-4">
          Have a question about the habit tracker app? Want to report a bug or request a custom integration? Send us a message!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {contactMethods.map((method) => {
          const IconComponent = method.icon;
          return (
            <a
              key={method.title}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : '_self'}
              rel="noreferrer"
              className="p-8 clay-card shadow-neomorphic flex gap-6 items-start hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Neomorphic Icon Wrapper */}
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 shadow-neomorphic-sm group-hover:scale-105 transition-transform duration-300 ${method.color}`}>
                <IconComponent size={24} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display font-bold text-[#111827] text-lg">{method.title}</h3>
                <span className="font-sans font-semibold text-primary text-sm tracking-tight break-all">
                  {method.value}
                </span>
                <p className="font-sans text-xs text-text-secondary leading-relaxed mt-1">
                  {method.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Support CTA Card */}
      <div className="p-8 md:p-12 clay-card-lg shadow-neomorphic text-center max-w-3xl mx-auto">
        <div className="w-14 h-14 rounded-2xl bg-[#B2CFD8]/30 border border-[#B2CFD8]/50 flex items-center justify-center text-2xl mx-auto mb-5 shadow-neomorphic-sm">
          🛠️
        </div>
        <h2 className="text-xl md:text-2xl font-display font-bold text-text-dark mb-3">Looking for Support?</h2>
        <p className="font-sans text-sm text-text-secondary max-w-lg mx-auto leading-relaxed mb-7">
          Having a technical issue with Habixa? Our Support Center has troubleshooting guides for streaks, notifications, account setup, backups, and more.
        </p>
        <Link
          to="/support"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B2CFD8] border border-[#FCFAF7] text-text-dark font-display font-bold text-sm rounded-full shadow-neomorphic-sm hover:shadow-neomorphic hover:-translate-y-0.5 active:translate-y-0 active:shadow-neomorphic-inset transition-all duration-300"
        >
          Go to Support Center →
        </Link>
      </div>
    </div>
  );
}
