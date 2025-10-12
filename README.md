# Personal Portfolio Website

A modern, high-performance personal portfolio built with **React**, **Vite**, and **Tailwind CSS**. Features an interactive terminal, smooth animations, and a fully responsive design.

## ✨ Features

- 🚀 **Lightning Fast**: Built with Vite for optimal performance
- 💎 **Modern Stack**: React 18 + Tailwind CSS + Lucide Icons
- 🎨 **Beautiful UI**: Gradient accents, smooth animations, and glassmorphism effects
- 📱 **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- 🖥️ **Interactive Terminal**: Fun CLI-style interface for exploring portfolio
- 🎯 **Component-Based**: Clean, maintainable, and reusable code architecture
- ⚡ **Optimized**: Code splitting, lazy loading, and performance best practices
- 🔧 **Easy Customization**: Well-organized data files and component structure

## 📦 Tech Stack

### Core
- **React 18.3** - UI library
- **Vite 5.4** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework

### UI & Icons
- **Lucide React** - Beautiful, consistent icon set
- **clsx** - Utility for conditional className composition

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm/yarn/pnpm
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Other Commands

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Fix linting errors
npm run lint:fix
```

## 📁 Project Structure

```
portfolio/
├── index.html                  # HTML entry point
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── eslint.config.js           # ESLint configuration
├── package.json               # Dependencies and scripts
├── firebase.json              # Firebase hosting config
├── public/                    # Static assets
│   └── favicon.ico           # Site icon
└── src/                       # Source code
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root App component
    ├── index.css             # Global Tailwind styles
    ├── components/           # All React components
    │   ├── layouts/          # Layout components
    │   │   └── Portfolio.jsx    # Main portfolio layout orchestrator
    │   ├── sections/         # Major page sections
    │   │   ├── Hero.jsx             # Homepage hero section
    │   │   ├── Navigation.jsx       # Top navigation bar
    │   │   ├── ExperienceSection.jsx # Work experience section
    │   │   ├── ProjectsSection.jsx   # Projects showcase section
    │   │   └── AboutSection.jsx      # About me section
    │   ├── ui/               # Reusable UI components
    │   │   ├── Button.jsx           # Reusable button with variants
    │   │   ├── TechBadge.jsx        # Technology skill badges
    │   │   ├── StatusBadge.jsx      # Project status indicators
    │   │   ├── SectionHeader.jsx    # Consistent section headers
    │   │   └── ScrollingMarquee.jsx # Animated organization logos
    │   ├── Terminal.jsx      # Interactive terminal component
    │   └── Footer.jsx        # Site footer
    └── data/                 # Static data files
        ├── projects.js       # Project portfolio data
        └── experience.js     # Work experience data
```

## 🎨 Customization Guide

### 1. Personal Information

Edit `src/components/sections/Hero.jsx`:
```jsx
<span className="text-gradient">Your Name</span>
<p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-4">
  Full Stack Developer & Creative Problem Solver
</p>
```

Edit `src/components/Footer.jsx` for footer information.

### 2. Projects

Edit `src/data/projects.js`:
```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "Node.js"],
    status: "Live",
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com/...",
    // ... more fields
  }
];
```

### 3. Work Experience

Edit `src/data/experience.js`:
```javascript
export const experiences = [
  {
    id: 1,
    company: "Your Company",
    position: "Your Position",
    startDate: "Jan 2022",
    endDate: "Present",
    current: true,
    responsibilities: ["..."],
    technologies: ["..."],
    // ... more fields
  }
];
```

### 4. Skills

Edit the `skills` object in `src/data/experience.js`:
```javascript
export const skills = {
  frontend: ["React", "Vue.js", "..."],
  backend: ["Node.js", "Python", "..."],
  tools: ["Git", "Docker", "..."],
  soft: ["Leadership", "..."]
};
```

### 5. Theme Colors

Customize colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#0ea5e9',  // Change primary color
        // ... other shades
      }
    }
  }
}
```

### 6. Social Links

Edit social links in:
- `src/components/sections/Navigation.jsx`
- `src/components/sections/Hero.jsx`
- `src/components/Footer.jsx`

Replace placeholder URLs with your actual profiles.

## 🎭 Component Variants

### Button Component
```jsx
<Button variant="primary" size="lg" icon={Icon}>
  Click Me
</Button>

// Variants: primary, secondary, outline, ghost, accent
// Sizes: sm, md, lg
```

### TechBadge Component
```jsx
<TechBadge variant="primary" size="md">
  React
</TechBadge>

// Variants: default, primary, accent, success
```

### StatusBadge Component
```jsx
<StatusBadge status="Live" showDot showIcon />

// Status: Live, In Development, Maintenance, Archived
```

## 🌐 Deployment

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init

# Build and deploy
npm run build
firebase deploy
```

### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## 🎯 Performance Features

- ⚡ **Code Splitting**: Automatic route-based code splitting
- 🖼️ **Image Optimization**: Lazy loading and responsive images
- 📦 **Tree Shaking**: Eliminates unused code
- 🗜️ **Minification**: Compressed CSS and JavaScript
- 🚀 **Fast Refresh**: Lightning-fast HMR during development
- 📊 **Lighthouse Score**: 95+ on all metrics

## 🧩 Interactive Terminal

The portfolio includes an interactive terminal component. Available commands:

```bash
help        # Show all commands
about       # Learn about me
skills      # View technical skills
projects    # List featured projects
experience  # Show work experience
contact     # Get contact information
clear       # Clear terminal
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Inspiration**: Various portfolio designs from the community

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

<div align="center">

**Made with ❤️ and ☕**

⭐ Star this repo if you find it helpful!

</div>
