import { useState } from 'react';
import { ExternalLink, Github, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { clsx } from 'clsx';
import SectionHeader from '../ui/SectionHeader';
import TechBadge from '../ui/TechBadge';
import StatusBadge from '../ui/StatusBadge';
import Button from '../ui/Button';
import { projects, projectCategories } from '../../data/projects';

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 overflow-hidden h-full flex flex-col">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden">
        {!imageError && project.image ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl font-bold text-white/10">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <StatusBadge status={project.status} showDot />
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 text-xs font-medium bg-accent-500/20 text-accent-400 border border-accent-500/30 rounded-full backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category & Year */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-primary-400">
            {project.category}
          </span>
          <span className="text-xs text-slate-500">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className={clsx(
          "text-slate-400 text-sm mb-4",
          !isExpanded && "line-clamp-3 flex-1"
        )}>
          {project.description}
        </p>

        {/* Expandable Section */}
        {isExpanded && (project.longDescription || project.highlights) && (
          <div className="mb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Long Description */}
            {project.longDescription && (
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Details</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            )}

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Key Highlights</h4>
                <ul className="space-y-1.5">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Show More/Less Button */}
        {(project.longDescription || project.highlights) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-sm text-primary-400 hover:text-primary-300 transition-colors mb-4 font-medium"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show More
              </>
            )}
          </button>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} size="sm" variant="primary">
              {tech}
            </TechBadge>
          ))}
          {project.technologies.length > 4 && (
            <TechBadge size="sm" variant="default">
              +{project.technologies.length - 4}
            </TechBadge>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Projects"
          subtitle="A collection of projects I've built, showcasing my skills and passion for development"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              icon={ChevronRight}
              iconPosition="right"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : `Show All (${filteredProjects.length})`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

