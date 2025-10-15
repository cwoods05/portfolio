import { Code2, Palette, Rocket, Users } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TechBadge from '../ui/TechBadge';
import ScrollingMarquee from '../ui/ScrollingMarquee';
import { skills, organizations } from '../../data/experience';

const features = [
  {
    icon: Palette,
    title: 'Full-Stack Development',
    description: 'Building robust web apps with focus on clean design and scalability.'
  },
  {
    icon: Rocket,
    title: 'Machine Learning & Research',
    description: 'Training and optimizingmodels on high-performance computing clusters for scientific research.'
  },
  {
    icon: Code2,
    title: 'Systems Thinking',
    description: 'Designing efficient, and maintainable systems across software and hardware layers.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in teams, mentoring others, and communicating technical concepts clearly.'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Me"
          subtitle="Passionate developer dedicated to crafting exceptional digital experiences"
        />

        {/* About Content */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I&apos;m a <span className="text-gradient font-semibold">Full Stack Developer</span> with
              a passion for creating elegant solutions to complex problems. With over 5 years of experience
              in web development, I&apos;ve had the opportunity to work on diverse projects ranging from
              startups to enterprise applications.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              My journey in tech started with a curiosity about how things work on the web. This curiosity
              evolved into a deep passion for building applications that not only function flawlessly but
              also provide delightful user experiences. I believe in writing clean, maintainable code and
              staying up-to-date with the latest technologies and best practices.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              When I&apos;m not coding, you can find me contributing to open-source projects, writing
              technical blog posts, or mentoring aspiring developers. I&apos;m always excited to collaborate
              on interesting projects and connect with fellow developers.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-gradient">Technical Skills</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Development */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                Web Development
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.web.map((skill) => (
                  <TechBadge key={skill} variant="primary">
                    {skill}
                  </TechBadge>
                ))}
              </div>
            </div>

            {/* ML/AI */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                ML & Research
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.ml.map((skill) => (
                  <TechBadge key={skill} variant="accent">
                    {skill}
                  </TechBadge>
                ))}
              </div>
            </div>

            {/* Embedded */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                Embedded
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.embedded.map((skill) => (
                  <TechBadge key={skill} variant="success">
                    {skill}
                  </TechBadge>
                ))}
              </div>
            </div>

            {/* Soft */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <TechBadge key={skill}>
                    {skill}
                  </TechBadge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Organizations Marquee */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-gradient">Technologies & Tools I Use</span>
          </h3>
          <ScrollingMarquee items={organizations} speed="normal" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

