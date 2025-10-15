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
        <SectionHeader
          title="Let's Work Together"
          subtitle="Have a project in mind or want to chat? I'd love to hear from you!"
        />

        <div className="max-w-2xl mx-auto">
          {/* Main contact card */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-10 shadow-xl">
            {/* Email CTA */}
            <div className="text-center">
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
    </section>
  );
};

export default ContactSection;

