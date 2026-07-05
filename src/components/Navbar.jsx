import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/', isHash: true, hashId: 'hero' },
    { label: 'Features', path: '/', isHash: true, hashId: 'features' },
    { label: 'Screenshots', path: '/', isHash: true, hashId: 'screenshots' },
    { label: 'FAQ', path: '/', isHash: true, hashId: 'faq' },
    { label: 'Support', path: '/support', isHash: false },
    { label: 'Privacy', path: '/privacy', isHash: false },
    { label: 'Contact', path: '/contact', isHash: false },
  ];

  const handleNavClick = (link) => {
    if (link.isHash) {
      if (location.pathname !== '/') {
        navigate(`/#${link.hashId}`);
        setTimeout(() => {
          const element = document.getElementById(link.hashId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(link.hashId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/80 backdrop-blur-md border-b border-[#E3DAD0]/40 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary via-accent to-success flex items-center justify-between p-[2px] shadow-neomorphic-sm group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#FCFAF7] rounded-[10px] flex items-center justify-center">
              <span className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-accent text-xl">H</span>
            </div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-text-dark">
            Habi<span className="text-primary">xa</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 font-sans font-medium text-sm text-text-secondary">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.isHash ? (
                  <button
                    onClick={() => handleNavClick(link)}
                    className="hover:text-primary transition-colors cursor-pointer text-[#8A8279]"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`hover:text-primary transition-colors text-[#8A8279] ${
                      location.pathname === link.path ? 'text-primary font-semibold' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              const el = document.getElementById('download');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else navigate('/#download');
            }}
            className="px-6 py-2.5 bg-[#FCFAF7] border border-[#E3DAD0]/70 text-text-dark font-sans font-semibold text-xs rounded-full shadow-neomorphic-sm cursor-pointer hover:shadow-neomorphic hover:-translate-y-0.5 active:translate-y-0 active:shadow-neomorphic-inset transition-all duration-300"
          >
            Download App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-text-dark hover:text-primary transition-colors cursor-pointer p-1"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-72 bg-[#FAF7F2]/95 backdrop-blur-lg border-l border-[#E3DAD0]/40 shadow-2xl p-8 z-50 transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <span className="font-display font-bold text-lg text-text-dark">
            Habit<span className="text-primary">Flow</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-text-dark hover:text-primary transition-colors cursor-pointer"
          >
            <FiX size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 font-sans font-medium text-text-secondary text-base">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.isHash ? (
                <button
                  onClick={() => {
                    handleNavClick(link);
                    setIsOpen(false);
                  }}
                  className="hover:text-primary transition-colors cursor-pointer text-left w-full text-[#8A8279]"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className={`hover:text-primary transition-colors block text-[#8A8279] ${
                    location.pathname === link.path ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <button
            onClick={() => {
              setIsOpen(false);
              const el = document.getElementById('download');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else navigate('/#download');
            }}
            className="w-full text-center py-3 bg-[#FCFAF7] border border-[#E3DAD0]/70 text-text-dark font-sans font-semibold text-xs rounded-full shadow-neomorphic-sm cursor-pointer hover:shadow-neomorphic transition-all duration-300"
          >
            Download App
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-[#2C2724]/10 backdrop-blur-xs z-40 lg:hidden"
        />
      )}
    </nav>
  );
}
