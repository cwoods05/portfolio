import { ArrowRight, Github, Linkedin, Mail, Terminal, FileText } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Existing Content */}
            <div className="text-center lg:text-left">
              {/* Greeting */}
              <div className="mb-6 animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 text-slate-300 text-sm">
                  <Terminal className="w-4 h-4 text-primary-400" />
                  Welcome to my portfolio
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
                <span className="text-gradient">Connor Woods</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Computer Engineering<br />
                University of Michigan '28
              </p>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  AI/ML • Embedded Systems • Full-Stack Development
                </p>


              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <a
                  href="https://github.com/cwoods05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-primary-400 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/connor-woods-michigan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-primary-400 transition-colors" />
                </a>
                <a
                  href="mailto:woodsco@umich.edu"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-primary-400 transition-colors" />
                </a>
                <a
                  href="/Connor_Woods_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300"
                >
                  <FileText className="w-5 h-5 text-slate-400 group-hover:text-primary-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Right Column - Profile Photo */}
            <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="relative">
                <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full border-4 border-primary-500 overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img 
                    src="/norway2.jpg" 
                    alt="Connor Woods" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

