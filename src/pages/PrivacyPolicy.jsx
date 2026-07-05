import { FiShield, FiLock, FiDatabase, FiLayers } from 'react-icons/fi';

export default function PrivacyPolicy() {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-6">
      {/* Page Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-wider uppercase text-text-dark bg-[#FCFAF7] border border-[#E3DAD0]/75 px-4 py-1.5 rounded-full shadow-neomorphic-sm">Legal Documentation</span>
        <h1 className="text-3xl md:text-5xl font-display font-bold text-text-dark mt-4">Privacy Policy</h1>
        <p className="text-sm text-text-secondary mt-3">Last Updated: July 4, 2026</p>
      </div>

      {/* Main Container with Claymorphic Design */}
      <div className="p-8 md:p-12 clay-card shadow-neomorphic flex flex-col gap-10">
        
        {/* Intro */}
        <section className="flex flex-col gap-3 font-sans text-sm text-text-secondary leading-relaxed">
          <p>
            At <strong>Habixa</strong>, we value your privacy above all else. This Privacy Policy describes how Habixa (referred to as &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) handles your data in our mobile application.
          </p>
          <p>
            By installing and using our application, you consent to the collection and use of information in accordance with this policy. If you do not agree, please do not use the app.
          </p>
        </section>

        {/* 1. Local Data Privacy (Hive) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B2CFD8]/25 border border-[#B2CFD8]/50 flex items-center justify-center text-text-dark shadow-neomorphic-sm">
              <FiDatabase size={18} />
            </div>
            <h2 className="text-lg md:text-xl font-display font-bold text-text-dark">1. Local Storage First (Hive)</h2>
          </div>
          <div className="font-sans text-sm text-text-secondary leading-relaxed pl-13 flex flex-col gap-2">
            <p>
              Your habits, streak history, schedules, and custom settings are stored locally on your mobile device inside an encrypted key-value database called **Hive**.
            </p>
            <p className="font-semibold text-[#111827]">
              We do not transmit, sync, duplicate, or upload your habit tracking history to any external servers. The data stays strictly on your device.
            </p>
          </div>
        </section>

        {/* 2. No Accounts or Login */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6C1BE]/25 border border-[#E6C1BE]/50 flex items-center justify-center text-text-dark shadow-neomorphic-sm">
              <FiLock size={18} />
            </div>
            <h2 className="text-lg md:text-xl font-display font-bold text-text-dark">2. Account &amp; Profile Data</h2>
          </div>
          <div className="font-sans text-sm text-[#6B7280] leading-relaxed pl-13">
            <p>
              Habixa requires users to create a free account with a display name and optional avatar. Your account information (name and profile picture) is stored locally on your device inside the Hive database and is <strong>never transmitted to external servers</strong>. We do not link your account to external identity providers, emails, or social networks. Your personal identity remains private at all times.
            </p>
          </div>
        </section>

        {/* 3. Advertising & Cookies (AdMob) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B8CBB9]/25 border border-[#B8CBB9]/50 flex items-center justify-center text-text-dark shadow-neomorphic-sm">
              <FiLayers size={18} />
            </div>
            <h2 className="text-lg md:text-xl font-display font-bold text-text-dark">3. Advertising Partners (Google AdMob)</h2>
          </div>
          <div className="font-sans text-sm text-[#6B7280] leading-relaxed pl-13 flex flex-col gap-3">
            <p>
              To support development, our app utilizes **Google Mobile Ads (AdMob)** to display non-intrusive advertisements. Google AdMob may collect and process device advertising identifiers (such as Google Advertising ID or IDFA) to deliver personalized or generic ads.
            </p>
            <p>
              AdMob may also place temporary identifiers or cookies on your device to track ad impressions, detect click fraud, and control repeat displays. You can manage ad personalization settings via your Android or iOS operating system settings:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-1">
              <li>Open Android Settings &rarr; Google &rarr; Ads &rarr; Opt out of personalized ads.</li>
              <li>Open iOS Settings &rarr; Privacy &rarr; Tracking &rarr; Toggle app permissions.</li>
            </ul>
          </div>
        </section>

        {/* 4. Children's Privacy */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FCFAF7] border border-[#E3DAD0]/70 flex items-center justify-center text-text-dark shadow-neomorphic-sm">
              <FiShield size={18} />
            </div>
            <h2 className="text-lg md:text-xl font-display font-bold text-text-dark">4. Children&apos;s Privacy</h2>
          </div>
          <div className="font-sans text-sm text-[#6B7280] leading-relaxed pl-13">
            <p>
              Our services are not designed to specifically target or aggregate data from children under 13. Account creation requires a display name only — no birth date, email, or personal contact information is collected. If you suspect a minor has provided personal information, please notify us to address the matter immediately.
            </p>
          </div>
        </section>

        {/* 5. Contact Information */}
        <section className="border-t border-[#EAE5DF] pt-8 mt-4 font-sans text-sm text-[#6B7280] leading-relaxed">
          <h3 className="font-display font-bold text-[#111827] text-base mb-2">5. Privacy Inquiries</h3>
          <p>
            If you have any questions or security concerns regarding your local device storage, AdMob settings, or this policy, please reach out to our team at:
          </p>
          <p className="mt-3 font-semibold text-primary">
            Email: chavdaavinash24@gmail.com
          </p>
        </section>

      </div>
    </div>
  );
}
