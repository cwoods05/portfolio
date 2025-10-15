import { Send } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const ContactSection = () => {

  return (
    <section id="contact" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 justify-between">
            {/* Circle Photo - Left Side */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-primary-500 overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-xl shadow-primary-500/20">
                <img 
                  src="/osaka.jpg" 
                  alt="Connor Woods" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Title, Subtitle, and Contact Card */}
            <div className="flex-1 w-full lg:pl-24">
              <div className="flex flex-col items-center">
                {/* Title and Subtitle */}
                <div className="mb-12 text-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    <span className="text-gradient">Let's Work Together</span>
                  </h2>
                  <p className="text-lg md:text-xl text-slate-400">
                    Have a project in mind or want to chat? I'd love to hear from you!
                  </p>
                </div>

                {/* Email CTA */}
                <div>
                  <a
                    href="mailto:woodsco@umich.edu"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send me an email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

