export const experiences = [
  {
    id: 1,
    company: "Lantern AI (YC F26)",
    position: "Software Engineer Intern",
    location: "Hong Kong SAR",
    type: "Internship",
    startDate: "May 2026",
    endDate: "Present",
    current: true,
    description: "Built Lantern Ario end-to-end as primary engineer, developing an AI meeting assistant for recording, transcription, structured notes, and searchable meeting knowledge.",
    responsibilities: [
      "Connected recording, calendar, transcription, and AI services through external APIs, handling authentication and service-specific data formats while coordinating calendar events, bot scheduling, and meeting metadata across platforms.",
      "Architected asynchronous meeting processing around webhooks and persistent jobs, tracking recordings through transcription and AI generation while preserving state and enabling recovery from interrupted or failed processing.",
      "Prepared Ario for prospective customer use and supported product demonstration with Crypto.com; currently integrating meeting intelligence into Lantern’s hiring platform for interview capture and candidate review."
    ],
    technologies: ["TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Supabase",
    "REST APIs"],
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
      "Completed CAN receive and interface management functions allowing programs to issue commands, inspect controller responses, and recover cleanly between tests.",
      "Engineered interface functions to construct, transmit, and parse custom CAN frames for robotic motor control, including command messages, state queries, and fault-code retrieval while mapping commands to required message IDs.",
      "Bench-tested and validated CAN communication with MIT ODrive motor controllers, building controlled-rotation tests and tracing message, timing, and bus-state failures until commanded torque produced consistent motor motion."
    ],
    technologies: ["C", "C++", "CAN", "ODrive"],
    logo: ""
  },
  {
    id: 3,
    company: "Michigan Mars Rover Team",
    position: "Embedded Software Engineer",
    location: "Ann Arbor, MI",
    type: "Project Team",
    startDate: "Aug 2025",
    endDate: "present",
    current: true,
    description: "Developing and testing embedded control software for autonomous rover systems.",
    responsibilities: [
      "Redesigned rover’s motor control system to enable direct communication between NVIDIA Jetson and Dynamixel servos for lower latency, simplified subsystem integration, and more responsive servo actuation.",
    "Developed UART-based C++ wrapper around Dynamixel SDK to support direct motor control from Jetson and bridge to existing ROS 2 control nodes and interfaces, including servo configuration and state feedback.",
    "Reworked mast gimbal hardware bridge to provide real-time position, velocity, and current telemetry, achieving <0.1° positioning accuracy for reliable camera operation through PID tuning and protocol debugging."
    ],
    technologies: ["C++",
    "ROS 2",
    "Dynamixel SDK",
    "UART",
    "NVIDIA Jetson",
    "PID Control",
    "Linux"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Michigan_Wolverines_logo.svg"
  },
  {
    id: 4,
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

