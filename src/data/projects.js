export const projects = [
  {
    id: 1,
    title: "Cooperative RTOS-Style Microkernel",
    description:
      "Designed and implemented a cooperative RTOS-style microkernel simulator in C++17 to explore scheduling, synchronization, inter-task communication, and periodic execution. The project emphasizes readable systems design, deterministic execution, and automated testing.",
    technologies: [
      "C++",
      "CMake",
      "Concurrency",
      "Scheduling",
      "Mutexes",
      "Message Queues"
    ],
    category: "Systems",
    status: "Completed",
    featured: true,
    image: "microkernel.png",
    demoUrl: null,
    githubUrl: "https://github.com/cwoods05/microkernel",
    highlights: [
      "Implemented priority scheduling, mutexes, semaphores, and bounded message queues",
      "Added periodic tasks, deadline tracking, and runtime task statistics",
      "Built automated tests and a rover-inspired task pipeline demonstration"
    ],
    year: "2026"
  },
  {
    id: 2,
    title: "CAN Motor Control Firmware",
    description:
      "Developed low-level firmware and Linux tooling for CAN-based robotic motor control as part of the Atombot Research Team. My work focused on implementing the hardware abstraction layer, validating CAN communication, and improving firmware documentation and onboarding.",
    technologies: [
      "C",
      "C++",
      "Linux",
      "CAN",
      "SocketCAN",
      "ODrive"
    ],
    category: "Embedded",
    status: "Active",
    featured: true,
    image: "atombot_leg.png",
    demoUrl: null,
    githubUrl: null,
    highlights: [
      "Implemented CAN HAL functions for initialization, communication, timing, and error handling",
      "Developed motor-control testing utilities and validated ODrive CAN communication",
      "Created firmware documentation, CAN protocol references, and onboarding guides"
    ],
    year: "2026–Present"
  },
  {
    id: 3,
    title: "Continuity",
    description:
      "Built and published a TypeScript CLI and local MCP server for managing persistent project context across AI-assisted coding sessions. The tool generates structured project briefs, maintains development history, and exposes repository context through a lightweight workflow.",
    technologies: [
      "TypeScript",
      "Node.js",
      "MCP",
      "Vitest",
      "Commander",
      "npm"
    ],
    category: "Systems",
    status: "Completed",
    featured: false,
    image: "continuity.png",
    demoUrl: null,
    githubUrl: "https://github.com/cwoods05/continuity",
    highlights: [
      "Published a multi-command CLI package to npm",
      "Implemented project brief generation and persistent session logging",
      "Added MCP integration, validation tools, and automated tests"
    ],
    year: "2026"
  },
  {
    id: 4,
    title: "ROS 2 Dynamixel Gimbal Control",
    description:
      "Contributed to the Michigan Mars Rover embedded software stack by developing ROS 2 hardware-control software for a DYNAMIXEL-powered mast gimbal. My work focused on hardware communication, servo control, telemetry publishing, and configurable motion limits.",
    technologies: [
      "C++",
      "ROS 2",
      "DYNAMIXEL SDK",
      "Linux",
      "UART"
    ],
    category: "Embedded",
    status: "Completed",
    featured: true,
    image: "mrover.png",
    demoUrl: null,
    githubUrl: "https://github.com/umrover/mrover-ros2",
    highlights: [
      "Developed a ROS 2 hardware bridge for DYNAMIXEL servo communication",
      "Implemented service-based position control and real-time telemetry publishing",
      "Designed configurable soft limits, motion profiles, and servo parameter management"
    ],
    year: "2026"
  },
  {
    id: 5,
    title: "Turbofan Engine Remaining Useful Life (RUL) Prediction",
    description:
      "Built a machine learning pipeline for predicting turbofan engine Remaining Useful Life (RUL) using the NASA CMAPSS dataset. The project includes automated preprocessing, feature engineering, baseline regression models, and evaluation using industry-standard predictive maintenance metrics.",
    technologies: ["Python", "scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    category: "AI/ML",
    status: "Completed",
    featured: false,
    image: "turbofan.jpg",
    demoUrl: null,
    githubUrl: "https://github.com/cwoods05/turbofan-rul-starter",
    highlights: [
      "Engineered rolling statistical features from NASA CMAPSS sensor data",
      "Compared Ridge Regression and Random Forest baseline models",
      "Evaluated predictions using MAE, RMSE, and the NASA scoring function"
    ],
    year: 2025
  },
  {
    id: 6,
    title: 'LSTM Stock Return Prediction',
    description:
      'An independent research project evaluating whether an LSTM trained with public financial data could reproduce methods developed using proprietary datasets.',
    technologies: ["Python", "PyTorch", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook"],
    category: 'AI/ML',
    status: 'Completed',
    featured: false,
    image: 'lstm-proj.png',
    demoUrl: 'https://github.com/cwoods05/Inspirit-LSTM-project/blob/main/Stock_Return_Prediction_and_Portfolio_Optimization_Using_LSTM.pdf',
    githubUrl: 'https://github.com/cwoods05/Inspirit-LSTM-project',
    highlights: [
      'Combined Yahoo Finance, Fama-French, and public company financial data',
      'Evaluated 33-day return forecasts and multiple portfolio simulations',
      'Documented overfitting, feature importance, and limitations in a research paper'
    ],
    year: '2023–2024'
  },
  /*{
    id: 3,
    title: "ROOKI",
    description: "A platform for hockey fans to share their thoughts in groups, comment on games, and make lock picks on game outcomes.",
    longDescription: "ROOKI is a full stack web application designed for hockey fans to connect and engage with the sport. Users can join groups to share their thoughts, comment on live games, and make lock picks on game outcomes, creating a community-driven platform for hockey enthusiasts.",
    technologies: ["JavaScript", "React", "Node.js"],
    category: "Full Stack",
    status: "Live",
    featured: false,
    image: "rooki-logo.PNG",
    demoUrl: "https://rookiapp.com",
    githubUrl: null,
    highlights: [
      "Group-based discussions for hockey fans",
      "Live game commenting and engagement",
      "Lock picks on game outcomes",
      "Community-driven platform",
      "Live deployment at rookiapp.com"
    ],
    year: '2025/26'
  }*/
];

export const projectCategories = [
  "All",
  "Embedded",
  "AI/ML",
  "Systems",
];

