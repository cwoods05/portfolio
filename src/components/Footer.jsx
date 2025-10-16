import { Github, Linkedin, Mail, ArrowUp, FileText } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com/cwoods05', icon: Github },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/connor-woods-michigan/', icon: Linkedin },
      { name: 'Email', href: 'mailto:woodsco@umich.edu', icon: Mail },
      { name: 'Resume', href: '/Connor_Woods_Resume.pdf', icon: FileText },
    ]
  };

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-gradient">&lt;/&gt;</span>
            </div>
            <p className="text-slate-400 mb-4">
              Building exceptional digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Let&apos;s Connect</h3>
            <p className="text-slate-400 mb-4">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === 'Email' ? undefined : '_blank'}
                  rel={social.name === 'Email' ? undefined : 'noopener noreferrer'}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-primary-400 border border-slate-700 hover:border-primary-500/50 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-center gap-3">
          <div className="text-slate-500 text-sm text-center">
            © 2025 Connor Woods
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-primary-400 border border-slate-700 hover:border-primary-500/50 rounded-lg transition-all duration-300 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
    </footer>
  );
};

export default Footer;

