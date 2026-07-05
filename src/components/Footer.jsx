import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashLink = (hashId) => {
    if (location.pathname !== '/') {
      navigate(`/#${hashId}`);
      setTimeout(() => {
        const element = document.getElementById(hashId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(hashId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E3DAD0] py-16 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B2CFD8]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and brief info */}
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary via-accent to-success flex items-center justify-between p-[2px] shadow-neomorphic-sm">
                <div className="w-full h-full bg-[#FCFAF7] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary via-accent to-success text-xl">H</span>
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-text-dark">
                Habit<span className="text-primary">Flow</span>
              </span>
            </Link>
            <p className="font-sans text-text-secondary text-sm max-w-sm leading-relaxed mt-2">
              Stay consistent, track your daily habits, build powerful streaks, and become the best version of yourself. Private and local-first.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/Avinash11-AK11"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#FCFAF7] border border-[#E3DAD0]/70 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 shadow-neomorphic-sm hover:-translate-y-0.5 transition-all duration-300"
                aria-label="GitHub Link"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/avinash-chavda-8a4380331/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#FCFAF7] border border-[#E3DAD0]/70 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 shadow-neomorphic-sm hover:-translate-y-0.5 transition-all duration-300"
                aria-label="LinkedIn Link"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="mailto:chavdaavinash24@gmail.com"
                className="w-9 h-9 rounded-full bg-[#FCFAF7] border border-[#E3DAD0]/70 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 shadow-neomorphic-sm hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Email support"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-text-dark text-sm tracking-wide uppercase mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3 font-sans text-text-secondary text-sm">
              <li>
                <button
                  onClick={() => handleHashLink('features')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleHashLink('screenshots')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Screenshots
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleHashLink('faq')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  FAQs
                </button>
              </li>
              <li>
                <Link
                  to="/support"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Support Center
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / App Store */}
          <div>
            <h4 className="font-display font-semibold text-text-dark text-sm tracking-wide uppercase mb-5">Legal & Download</h4>
            <ul className="flex flex-col gap-3 font-sans text-text-secondary text-sm mb-5">
              <li>
                <Link
                  to="/privacy"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
            
            {/* Google Play store badge in brand neomorphic style */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2 bg-[#FCFAF7] border border-[#E3DAD0] text-[#2C2724] hover:shadow-neomorphic shadow-neomorphic-sm rounded-xl transition-all duration-300 cursor-pointer"
            >
              {/* Play Store SVG Icon in brand color */}
              <svg className="w-5 h-5 text-primary" viewBox="0 0 512 512" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1 60.1-60.1 58 33.3c15.1 8.6 25.3 24.3 25.3 41.8s-10.2 33.2-25.3 41.8zm-147 25.2L104.6 499l220.7-126.7-60.1-60.1 60.1-60.1z" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider font-light text-text-secondary">Get it on</span>
                <span className="text-xs font-semibold leading-tight -mt-0.5 text-text-dark">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        <div className="h-[1px] bg-[#E3DAD0] w-full mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-text-secondary">
          <p>© {new Date().getFullYear()} Habixa. All rights reserved.</p>
          <div className="flex items-center gap-1.5 py-1 px-3 bg-[#FCFAF7] border border-[#E3DAD0]/75 rounded-full shadow-neomorphic-sm">
            <span>Made with ❤️ using</span>
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8CAAB5]">Flutter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
