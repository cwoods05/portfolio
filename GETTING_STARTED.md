# Getting Started Guide

This guide will help you set up and customize your portfolio quickly.

## 🚀 Quick Setup (5 minutes)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

Your portfolio will open at `http://localhost:3000`

### Step 3: Customize Your Information

#### Update Personal Info
1. Open `src/components/sections/Hero.jsx`
2. Replace "Your Name" with your actual name
3. Update the subtitle and description

#### Update Projects
1. Open `src/data/projects.js`
2. Replace the sample projects with your actual projects
3. Update titles, descriptions, technologies, and links

#### Update Experience
1. Open `src/data/experience.js`
2. Replace sample experience with your work history
3. Update company names, positions, and responsibilities

#### Update Skills
1. Open `src/data/experience.js`
2. Scroll to the `skills` export
3. Update frontend, backend, tools, and soft skills

#### Update Contact Info
1. Open `src/components/sections/Navigation.jsx` - update social links
2. Open `src/components/sections/Hero.jsx` - update social links
3. Open `src/components/Footer.jsx` - update email and social links

## 🎨 Customization Tips

### Change Color Scheme

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Your primary color
  },
  accent: {
    500: '#d946ef',  // Your accent color
  }
}
```

### Add Your Own Favicon

Replace `public/favicon.ico` with your own favicon

### Customize Fonts

Edit `index.html` to change Google Fonts import

### Modify Animations

Edit `tailwind.config.js` under `animation` and `keyframes`

## 📝 Content Guidelines

### Writing Project Descriptions
- Keep descriptions concise (2-3 sentences)
- Highlight key features and impact
- Include metrics when possible (users, performance improvements, etc.)
- List relevant technologies

### Work Experience
- Use action verbs (Developed, Led, Implemented, Optimized)
- Include quantifiable achievements
- Mention team size if you led people
- Highlight technologies used

### About Section
- Keep it personal but professional
- Mention your passion and motivation
- Include what makes you unique
- Add a call-to-action

## 🔧 Common Tasks

### Add a New Project

```javascript
// In src/data/projects.js
{
  id: 7,
  title: "New Project",
  description: "Brief description",
  longDescription: "Detailed description",
  technologies: ["Tech1", "Tech2"],
  category: "Full Stack",
  status: "Live",
  featured: true,
  image: "/projects/new-project.jpg",
  demoUrl: "https://demo.com",
  githubUrl: "https://github.com/...",
  highlights: ["Achievement 1", "Achievement 2"],
  year: 2024
}
```

### Add a New Experience

```javascript
// In src/data/experience.js
{
  id: 5,
  company: "New Company",
  position: "Position",
  location: "Location",
  type: "Full-time",
  startDate: "Month Year",
  endDate: "Present",
  current: true,
  description: "Brief description",
  responsibilities: ["Task 1", "Task 2"],
  technologies: ["Tech1", "Tech2"],
  achievements: ["Achievement 1"],
  logo: "/companies/logo.svg"
}
```

### Change Section Order

Edit `src/components/layouts/Portfolio.jsx` and reorder the section components

### Hide/Show Sections

Comment out sections in `Portfolio.jsx` you don't want to display

## 🌐 Deployment Checklist

Before deploying:

- [ ] Update all personal information
- [ ] Replace sample projects with real ones
- [ ] Update work experience
- [ ] Add your favicon
- [ ] Update page title in `index.html`
- [ ] Update meta description in `index.html`
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Test contact form/social links
- [ ] Run `npm run build` to ensure no errors
- [ ] Test production build with `npm run preview`

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3001
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling Not Applied
```bash
# Restart dev server
# Ctrl+C then npm run dev
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

## 💡 Tips

1. **Use the Terminal Component**: It's a fun way to showcase your skills
2. **Keep it Updated**: Regularly add new projects and experiences
3. **Optimize Images**: Use WebP format and compress images
4. **Test Across Browsers**: Ensure compatibility
5. **Get Feedback**: Share with friends/colleagues before launching
6. **Monitor Performance**: Use Lighthouse to check scores
7. **SEO**: Update meta tags for better search visibility

## 🎯 Next Steps

1. Customize all content
2. Add your projects and experience
3. Test thoroughly
4. Deploy to your preferred platform
5. Share your portfolio!

---

Need help? Check the main README.md for detailed documentation.

Happy coding! 🚀

