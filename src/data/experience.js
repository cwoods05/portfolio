export const experiences = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    position: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    startDate: "Jan 2022",
    endDate: "Present",
    current: true,
    description: "Leading development of enterprise-scale web applications and mentoring junior developers.",
    responsibilities: [
      "Architected and developed microservices-based applications serving 1M+ users",
      "Led team of 5 developers in building customer-facing React applications",
      "Reduced API response time by 70% through optimization and caching strategies",
      "Implemented CI/CD pipelines reducing deployment time from hours to minutes",
      "Mentored 10+ junior developers through code reviews and pair programming"
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    achievements: [
      "Promoted to Senior Developer within 18 months",
      "Received 'Innovation Award' for implementing new architecture",
      "Reduced production bugs by 60% through testing improvements"
    ],
    logo: "/companies/tech-innovations.svg"
  },
  {
    id: 2,
    company: "Digital Solutions Co.",
    position: "Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    current: false,
    description: "Developed and maintained multiple client projects using modern web technologies.",
    responsibilities: [
      "Built responsive web applications for clients across various industries",
      "Collaborated with designers to implement pixel-perfect UI components",
      "Integrated third-party APIs and payment gateways (Stripe, PayPal)",
      "Optimized application performance achieving 95+ Lighthouse scores",
      "Participated in Agile ceremonies and sprint planning"
    ],
    technologies: ["Vue.js", "Python", "Django", "MySQL", "Redis", "Docker"],
    achievements: [
      "Delivered 15+ projects on time and under budget",
      "Improved client satisfaction score by 25%",
      "Reduced server costs by 40% through optimization"
    ],
    logo: "/companies/digital-solutions.svg"
  },
  {
    id: 3,
    company: "StartUp Labs",
    position: "Frontend Developer",
    location: "New York, NY",
    type: "Full-time",
    startDate: "Mar 2019",
    endDate: "May 2020",
    current: false,
    description: "Focused on building responsive and accessible user interfaces for SaaS products.",
    responsibilities: [
      "Developed reusable React components following atomic design principles",
      "Implemented responsive designs ensuring cross-browser compatibility",
      "Worked closely with UX team to improve user experience metrics",
      "Conducted code reviews and established frontend best practices",
      "Set up automated testing with Jest and React Testing Library"
    ],
    technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"],
    achievements: [
      "Improved page load time by 50%",
      "Increased user engagement by 30%",
      "Established component library used across products"
    ],
    logo: "/companies/startup-labs.svg"
  },
  {
    id: 4,
    company: "Freelance",
    position: "Web Developer",
    location: "Remote",
    type: "Contract",
    startDate: "Jan 2018",
    endDate: "Feb 2019",
    current: false,
    description: "Provided web development services to small businesses and startups.",
    responsibilities: [
      "Designed and developed custom websites for small businesses",
      "Managed client relationships and project timelines",
      "Provided ongoing maintenance and support",
      "Implemented SEO best practices improving search rankings",
      "Set up hosting and domain management for clients"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    achievements: [
      "Built 20+ websites for satisfied clients",
      "Maintained 95% client retention rate",
      "Generated $50K+ in revenue"
    ],
    logo: "/companies/freelance.svg"
  }
];

export const organizations = [
  { name: "MATLAB", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Matlab_icon.png" },
  { name: "VS Code", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
  { name: "Linux", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" },
  { name: "Ubuntu", logo: "https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png" },
  { name: "Jupyter", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" },
  { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Git", logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
  { name: "LTSpice", logo: "/LLTC.defunct.2017.png" },
];

export const skills = {
  web: [
    "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
    "Tailwind CSS", "Node.js", "FastAPI"
  ],
  ml: [
    "Python", "PyTorch", "NumPy", "SciPy", "Keras", "TensorFlow", "Matplotlib","CUDA", "Pandas", "Conda"
  ],
  embedded: [
    "C/C++", "STM32 Microcontrollers", "STM32CubeIDE", "CAN/I2C", "PWM Control", "Motor Control"
  ],
  soft: [
    "Leadership", "Problem Solving", "Communication", "Team Collaboration", "Adaptability", "Time Management"
  ]
};

