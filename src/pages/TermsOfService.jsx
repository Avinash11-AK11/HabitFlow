import { FiFileText, FiAlertCircle, FiSettings, FiActivity } from 'react-icons/fi';

export default function TermsOfService() {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-6">
      {/* Page Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-wider uppercase text-text-dark bg-[#FCFAF7] border border-[#E3DAD0]/75 px-4 py-1.5 rounded-full shadow-neomorphic-sm">Legal Agreement</span>
        <h1 className="text-3xl md:text-5xl font-display font-bold text-[#111827] mt-4">Terms of Service</h1>
        <p className="text-sm text-[#8A8279] mt-3">Last Updated: July 4, 2026</p>
      </div>

      {/* Main Container with Claymorphic Design */}
      <div className="p-8 md:p-12 clay-card shadow-neomorphic flex flex-col gap-10">
        
        {/* Intro */}
        <section className="flex flex-col gap-3 font-sans text-sm text-[#6B7280] leading-relaxed">
          <p>
            Welcome to <strong>Habixa</strong>. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our mobile application (&quot;App&quot;).
          </p>
          <p>
            Please read these Terms carefully. By accessing or using the App, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to all these terms, do not install or use the App.
          </p>
        </section>

        {/* 1. App License & Use */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B2CFD8]/25 border border-[#B2CFD8]/50 flex items-center justify-center text-text-dark shadow-neomorphic-sm">
              <FiFileText size={18} />
            </div>
            <h2 className="text-lg md:text-xl font-display font-bold text-text-dark">1. License Grant</h2>
          </div>
          <div className="font-sans text-sm text-[#6B7280] leading-relaxed pl-13 flex flex-col gap-2">
            <p>
              We grant you a personal, non-transferable, non-exclusive, revocable, and limited license to download, install, and run the App on your mobile devices strictly for your personal, non-commercial self-improvement and tracking purposes.
            </p>
            <p>
              You agree not to modify, reverse engineer, extract source code, lease, lend, sell, or distribute the binary files of the application.
            </p>
          </div>
        </section>

        {/* 2. Device Storage & Data Retention */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6C1BE]/25 border border-[#E6C1BE]/50 flex items-center justify-center text-text-dark shadow-neomorphic-sm">
              <FiSettings size={18} />
            </div>
            <h2 className="text-lg md:text-xl font-display font-bold text-text-dark">2. Device-Only Storage Liability</h2>
          </div>
          <div className="font-sans text-sm text-[#6B7280] leading-relaxed pl-13 flex flex-col gap-3">
            <p>
              Habixa stores your habit database locally on your device via Hive. Your account profile (display name and avatar) is also saved on-device only. Because we do not sync to remote backends, <strong>we do not compile automatic cloud backups of your habits</strong>.
            </p>
            <p className="font-semibold text-text-dark bg-[#FAF7F2]/50 border border-[#E3DAD0]/70 p-3 rounded-lg flex items-start gap-2.5">
              <FiAlertCircle className="text-accent shrink-0 mt-0.5" size={16} />
              <span>
                If you delete the application from your phone, clear your application cache files, or lose your hardware device, all progress, streaks, and account settings will be permanently deleted and cannot be recovered by us.
              </span>
            </p>
          </div>
        </section>

        {/* 3. Advertising & Content */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B8CBB9]/25 border border-[#B8CBB9]/50 flex items-center justify-center text-text-dark shadow-neomorphic-sm">
              <FiActivity size={18} />
            </div>
            <h2 className="text-lg md:text-xl font-display font-bold text-text-dark">3. Advertising & Disclaimers</h2>
          </div>
          <div className="font-sans text-sm text-[#6B7280] leading-relaxed pl-13">
            <p>
              The App displays ads served by Google AdMob. Any interactions you make with third-party advertisers featured through the App are solely between you and the respective advertisers. We are not responsible for any goods, services, web content, or links offered by these advertisers.
            </p>
          </div>
        </section>

        {/* 4. Disclaimer of Warranties */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FCFAF7] border border-[#E3DAD0]/70 flex items-center justify-center text-text-dark shadow-neomorphic-sm">
              <FiAlertCircle size={18} />
            </div>
            <h2 className="text-lg md:text-xl font-display font-bold text-text-dark">4. Disclaimer of Warranty</h2>
          </div>
          <div className="font-sans text-sm text-[#6B7280] leading-relaxed pl-13">
            <p>
              The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranty of any kind, either express or implied, including but not limited to compatibility with your device, continuous uptime, error-free operations, or that habit metrics will lead to specific wellness outcomes.
            </p>
          </div>
        </section>

        {/* 5. Limitation of Liability */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FCFAF7] border border-[#E3DAD0]/70 flex items-center justify-center text-text-dark shadow-neomorphic-sm">
              <FiAlertCircle size={18} />
            </div>
            <h2 className="text-lg md:text-xl font-display font-bold text-text-dark">5. Limitation of Liability</h2>
          </div>
          <div className="font-sans text-sm text-[#6B7280] leading-relaxed pl-13">
            <p>
              In no event shall we be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including without limitation loss of data or phone cache, resulting from your use of the application.
            </p>
          </div>
        </section>

        {/* 6. Contact */}
        <section className="border-t border-[#E3DAD0] pt-8 mt-4 font-sans text-sm text-[#8A8279] leading-relaxed">
          <h3 className="font-display font-bold text-[#111827] text-base mb-2">6. Terms Inquiries</h3>
          <p>
            If you have questions about these Terms of Service or local app usage rules, please reach out to us at:
          </p>
          <p className="mt-3 font-semibold text-primary">
            Email: chavdaavinash24@gmail.com
          </p>
        </section>

      </div>
    </div>
  );
}
