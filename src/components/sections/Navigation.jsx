import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      
      // Check if we're at the bottom of the page (for contact section)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - shifted right */}
            <div className="flex-1">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                className="text-xl md:text-2xl font-bold inline-block ml-8"
              >
                <span className="text-gradient">&lt;/&gt;</span>
              </a>
            </div>

            {/* Desktop Navigation - moved left and made bigger */}
            <div className="hidden md:flex items-center gap-8 mr-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={clsx(
                    'text-base font-medium transition-colors relative group',
                    activeSection === link.href.substring(1)
                      ? 'text-primary-400'
                      : 'text-slate-300 hover:text-white'
                  )}
                >
                  {link.name}
                  <span
                    className={clsx(
                      'absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all',
                      activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-lg transition-all duration-300 md:hidden',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        style={{ top: '64px' }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={clsx(
                  'text-2xl font-medium transition-all animate-slide-down',
                  activeSection === link.href.substring(1)
                    ? 'text-gradient'
                    : 'text-slate-300 hover:text-white'
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </a>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

