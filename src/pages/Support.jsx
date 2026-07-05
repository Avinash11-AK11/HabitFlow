import { useState } from 'react';
import { FiMail, FiChevronDown, FiAlertCircle, FiSettings, FiCheckCircle } from 'react-icons/fi';

export default function Support() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Form states
  const [bugTitle, setBugTitle] = useState('');
  const [bugDevice, setBugDevice] = useState('');
  const [bugDesc, setBugDesc] = useState('');

  const [featureTitle, setFeatureTitle] = useState('');
  const [featureReason, setFeatureReason] = useState('');

  const commonIssues = [
    {
      id: 1,
      question: "My habit progress disappeared after updating the app. Can I recover it?",
      answer: "Habixa uses an on-device database called Hive. App updates downloaded directly from the Google Play Store do not wipe your database. However, performing a manual app uninstall, clearing your phone storage cache, or using automated phone cleaner utilities will delete the local file database. Make sure not to clear cache files, and regularly use the backup feature to protect your data."
    },
    {
      id: 2,
      question: "Reminders / notifications are not triggering at my set times.",
      answer: "Android operating systems occasionally suspend local background alarms to optimize battery life. To ensure consistent alerts, open your Android Settings &rarr; Apps &rarr; Habixa &rarr; Battery, and verify it is set to 'Unrestricted'. Also check that system notification permissions are fully enabled."
    },
    {
      id: 3,
      question: "My streak is not incrementing. How do I fix it?",
      answer: "Streak calculations are based on your system clock timezone. If you travel or change your phone clock timezone settings, calculations might delay by a day. Make sure you complete your habits before 11:59 PM in your current timezone."
    },
    {
      id: 4,
      question: "Can I transfer my habit records to another device?",
      answer: "We are currently building an 'Encrypted Local Backup' feature. Once released, you will be able to export your habit database as an encrypted file and import it directly into the app on another phone."
    }
  ];

  const handleBugSubmit = (e) => {
    e.preventDefault();
    const email = 'chavdaavinash24@gmail.com';
    const subject = encodeURIComponent(`[Bug Report] ${bugTitle}`);
    const body = encodeURIComponent(
      `Device Model / OS Version: ${bugDevice}\n\nBug Description:\n${bugDesc}\n\nSent from Habixa Support Hub`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleFeatureSubmit = (e) => {
    e.preventDefault();
    const email = 'chavdaavinash24@gmail.com';
    const subject = encodeURIComponent(`[Feature Request] ${featureTitle}`);
    const body = encodeURIComponent(
      `Feature Summary:\n${featureTitle}\n\nWhy this would be awesome:\n${featureReason}\n\nSent from Habixa Support Hub`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="py-12 md:py-24 max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-wider uppercase text-text-dark bg-[#FCFAF7] border border-[#E3DAD0]/75 px-4 py-1.5 rounded-full shadow-neomorphic-sm">Help Desk</span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-text-dark mt-4">Support Center</h1>
        <p className="text-sm text-text-secondary leading-relaxed mt-4">
          Need technical assistance? Explore common troubleshooting solutions, file a bug report, or request upcoming features.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Column: Direct email & FAQ Accordion */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Quick Support Info Card */}
          <div className="p-6 md:p-8 clay-card shadow-neomorphic flex gap-5 items-center">
            <div className="w-12 h-12 rounded-xl bg-[#FCFAF7] border border-[#E3DAD0]/75 flex items-center justify-center text-primary shadow-neomorphic-sm shrink-0">
              <FiMail size={20} />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-[#111827]">Direct Email Support</h3>
              <p className="text-xs text-text-secondary mt-1">
                Reach us at <a href="mailto:chavdaavinash24@gmail.com" className="text-primary font-semibold hover:underline">chavdaavinash24@gmail.com</a>. We reply within 24 hours.
              </p>
            </div>
          </div>

          {/* Common Issues Accordion */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-display font-bold text-text-dark pl-2">Common Technical Issues</h2>
            <div className="flex flex-col gap-3">
              {commonIssues.map((issue) => (
                <div
                  key={issue.id}
                  className="rounded-2xl border border-[#E3DAD0]/70 bg-[#FCFAF7] shadow-neomorphic-sm overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === issue.id ? null : issue.id)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors cursor-pointer"
                  >
                    <span className="font-display font-semibold text-xs text-[#111827] pr-4">{issue.question}</span>
                    <FiChevronDown
                      size={18}
                      className={`text-text-secondary shrink-0 transition-transform duration-300 ${
                        activeFAQ === issue.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      activeFAQ === issue.id ? 'max-h-60 border-t border-[#FAF7F2]' : 'max-h-0'
                    }`}
                  >
                    <p className="p-6 font-sans text-xs text-text-secondary leading-relaxed bg-[#FAF7F2]/30">
                      {issue.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Forms */}
        <div className="flex flex-col gap-8">
          {/* Report Bug Form */}
          <div className="p-6 rounded-2xl border border-[#E3DAD0]/70 bg-[#FCFAF7] shadow-neomorphic">
            <div className="flex items-center gap-2 mb-4">
              <FiAlertCircle className="text-accent" size={18} />
              <h3 className="font-display font-bold text-text-dark text-sm">Report a Bug</h3>
            </div>
            <form onSubmit={handleBugSubmit} className="flex flex-col gap-3 font-sans text-xs">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-text-secondary">Summary</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. App crashes on adding habit"
                  value={bugTitle}
                  onChange={(e) => setBugTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#FAF7F2]/50 border border-[#E3DAD0]/70 text-xs focus:outline-hidden focus:border-primary text-text-dark"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-text-secondary">Device & OS</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pixel 8, Android 14"
                  value={bugDevice}
                  onChange={(e) => setBugDevice(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#FAF7F2]/50 border border-[#E3DAD0]/70 text-xs focus:outline-hidden focus:border-primary text-text-dark"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-text-secondary">Description</label>
                <textarea
                  required
                  rows="3"
                  placeholder="What happened and how can we reproduce it?"
                  value={bugDesc}
                  onChange={(e) => setBugDesc(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#FAF7F2]/50 border border-[#E3DAD0]/70 text-xs focus:outline-hidden focus:border-primary text-text-dark resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-2 py-2.5 bg-[#E6C1BE] border border-[#FCFAF7] text-text-dark font-bold rounded-lg shadow-neomorphic-sm hover:shadow-neomorphic hover:-translate-y-0.5 active:translate-y-0 active:shadow-neomorphic-inset cursor-pointer transition-all duration-300"
              >
                Send Bug Report
              </button>
            </form>
          </div>

          {/* Request Feature Form */}
          <div className="p-6 rounded-2xl border border-[#E3DAD0]/70 bg-[#FCFAF7] shadow-neomorphic">
            <div className="flex items-center gap-2 mb-4">
              <FiCheckCircle className="text-primary" size={18} />
              <h3 className="font-display font-bold text-text-dark text-sm">Request a Feature</h3>
            </div>
            <form onSubmit={handleFeatureSubmit} className="flex flex-col gap-3 font-sans text-xs">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-text-secondary">Feature Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Home screen widgets"
                  value={featureTitle}
                  onChange={(e) => setFeatureTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#FAF7F2]/50 border border-[#E3DAD0]/70 text-xs focus:outline-hidden focus:border-primary text-text-dark"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-text-secondary">Why would you use this?</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Tell us how this feature will help you stay consistent and build better streaks."
                  value={featureReason}
                  onChange={(e) => setFeatureReason(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#FAF7F2]/50 border border-[#E3DAD0]/70 text-xs focus:outline-hidden focus:border-primary text-text-dark resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-2 py-2.5 bg-[#B2CFD8] border border-[#FCFAF7] text-text-dark font-bold rounded-lg shadow-neomorphic-sm hover:shadow-neomorphic hover:-translate-y-0.5 active:translate-y-0 active:shadow-neomorphic-inset cursor-pointer transition-all duration-300"
              >
                Send Feature Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
