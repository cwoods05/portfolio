export const experiences = [
  {
    id: 1,
    company: "Lantern AI",
    position: "Embedded Firmware Engineer",
    location: "Hong Kong SAR",
    type: "Internship",
    startDate: "May 2026",
    endDate: "July 2026",
    current: true,
    description: "",
    responsibilities: [
      
    ],
    technologies: [],
    logo: ""
  },
  {
    id: 2,
    company: "Atombot Research Team - Y Z Lab",
    position: "Embedded Firmware Engineer",
    location: "Ann Arbor, MI",
    type: "Research Team",
    startDate: "Jan 2026",
    endDate: "Present",
    current: true,
    description: "Researching wheel-legged robotics and developing firmware for the Helium subteam.",
    responsibilities: [
      "Engineer interface functions to construct, transmit, and parse custom CAN frames for robotic motor control, including command messages, state queries, and fault-code retrieval",
      "Bench-test and validate CAN communication with MIT ODrive motor controllers, debug message IDs, payload structure, and bus timing to reliably actuate brushless motors"
    ],
    technologies: ["C", "C++", "CAN", "ODrive"],
    logo: ""
  },
  {
    id: 3,
    company: "St. Louis University Dept. of Computer Science - Jie Hou Lab",
    position: "Machine Learning Researcher",
    location: "St. Louis, MO",
    type: "Research Internship",
    startDate: "May 2025",
    endDate: "Oct 2025",
    current: false,
    description: "Conducting deep learning research on RNA 3D structure prediction using graph neural networks.",
    responsibilities: [
      "Integrated code into GraphRNA, a PyTorch-based GNN designed for predicting RNA 3D structures.",
      "Migrated model pipeline to handle full-sequence templates using stem/hairpin motif inputs.",
      "Extended dataset loader to align PDB and template data with consistent residue and atom indexing.",
      "Fused structure embeddings for training and testing on high-performance GPU clusters.",
      "Activated CUDA-compatible environments on Jetstream HPC nodes for distributed training."
    ],
    technologies: ["Python", "PyTorch", "CUDA", "WandB", "NumPy", "Pandas", "Conda"],
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Saint_Louis_University_logo.svg/512px-Saint_Louis_University_logo.svg.png"
  },
  {
    id: 4,
    company: "Michigan Mars Rover Team",
    position: "Embedded Software Engineer",
    location: "Ann Arbor, MI",
    type: "Project Team",
    startDate: "Aug 2025",
    endDate: "present",
    current: true,
    description: "Developing and testing embedded control software for autonomous rover systems.",
    responsibilities: [
      "Program STM32 microcontrollers in C/C++ to generate PWM signals for motor control.",
      "Implement and debugged CAN and I²C communication protocols for subsystem integration.",
      "Develop UART-based C++ wrapper around Dynamixel SDK to support direct motor control."
    ],
    technologies: ["C",
      "C++",
      "STM32CubeIDE",
      "CAN",
      "I2C",],
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Michigan_Wolverines_logo.svg"
  },
  {
    id: 5,
    company: "Arch Grants",
    position: "Intern",
    location: "St. Louis, MO",
    type: "Internship",
    startDate: "April 2024",
    endDate: "May 2024",
    current: false,
    description: "Supported the Arch Grants startup accelerator by evaluating early-stage companies and conducting market research.",
    responsibilities: [
      "Conducted research on emerging startups in geospatial and manufacturing sectors.",
      "Performed background analysis on 200+ potential judges to ensure credibility.",
      "Mapped 30+ additional startups and accelerators in a St. Louis startup ecosystem.",
    ],
    technologies: ["Excel",
      "PitchBook"],
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Arch_Grants_logo.png/512px-Arch_Grants_logo.png"
  }/*,
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
  }*/
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
  systems: [
    "Git", "CMake", "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "FastAPI"
  ],
  ml: [
    "Python", "PyTorch", "NumPy", "TensorFlow", "Matplotlib","CUDA", "Pandas", "Conda", "Jupyter"
  ],
  embedded: [
    "C/C++", "ROS 2", "CAN/I2C", "Motor Control", "Linux", "UART", "SocketCAN"
  ],
  soft: [
    "Leadership", "Problem Solving", "Communication", "Team Collaboration", "Adaptability", "Time Management"
  ]
};

