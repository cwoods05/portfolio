import { BookOpen } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TechBadge from '../ui/TechBadge';
import { coursework } from '../../data/coursework';

const CourseworkSection = () => {
  return (
    <section id="coursework" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Relevant Coursework"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursework.map((course) => (
              <div
                key={course.code}
                className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Course Code */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <BookOpen className="w-5 h-5 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gradient">
                    {course.code}
                  </h3>
                </div>

                {/* Course Name */}
                <h4 className="text-base font-semibold text-white mb-2 leading-tight">
                  {course.name}
                </h4>

                {/* Description */}
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5">
                  {course.topics.map((topic) => (
                    <TechBadge key={topic} variant="primary" size="sm">
                      {topic}
                    </TechBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseworkSection;

