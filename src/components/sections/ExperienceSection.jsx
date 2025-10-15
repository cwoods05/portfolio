import { useState } from 'react';
import { Calendar, MapPin, Briefcase, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import SectionHeader from '../ui/SectionHeader';
import TechBadge from '../ui/TechBadge';
import { experiences } from '../../data/experience';

const ExperienceCard = ({ experience, isExpanded, onToggle }) => {
  return (
    <div className="group relative">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-primary-500/50" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-3 h-3 -ml-[5px] rounded-full bg-gradient-to-br from-primary-500 to-accent-500 ring-4 ring-slate-950 group-hover:scale-125 transition-transform" />
      
      <div className="ml-8 mb-12">
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 overflow-hidden">
          {/* Header */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">
                  {experience.position}
                </h3>
                <p className="text-lg text-primary-400 mb-3">
                  {experience.company}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {experience.startDate} - {experience.current ? 'Present' : experience.endDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {experience.type}
                  </span>
                </div>
              </div>
              {experience.current && (
                <span className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full">
                  Current
                </span>
              )}
            </div>
            
            <p className="text-slate-300 mb-4">
              {experience.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {experience.technologies.map((tech) => (
                <TechBadge key={tech} size="sm">
                  {tech}
                </TechBadge>
              ))}
            </div>

            {/* Expand/Collapse button */}
            <button
              onClick={onToggle}
              className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              {isExpanded ? 'Show less' : 'Show more'}
              <ChevronDown className={clsx('w-4 h-4 transition-transform', isExpanded && 'rotate-180')} />
            </button>
          </div>

          {/* Expandable content */}
          <div
            className={clsx(
              'transition-all duration-300 overflow-hidden',
              isExpanded ? 'max-h-[1000px]' : 'max-h-0'
            )}
          >
            <div className="px-6 pb-6 pt-2 border-t border-slate-700/50">
              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-300 mb-3">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((resp, index) => (
                    <li key={index} className="flex gap-3 text-sm text-slate-400">
                      <span className="text-primary-400 mt-1">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              {experience.achievements && experience.achievements.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 mb-3">Achievements</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex gap-3 text-sm text-slate-400">
                        <span className="text-accent-400 mt-1">★</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Work Experience"
        />

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isExpanded={expandedId === experience.id}
              onToggle={() => toggleExpand(experience.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

