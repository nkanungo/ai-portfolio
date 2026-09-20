# AI Portfolio - Nihar Ranjan Kanungo

A production-quality, premium portfolio website for an SAP AI Architect & Generative AI Lead, built with React, Vite, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://via.placeholder.com/1200x600/0a0e27/06b6d4?text=AI+Portfolio)

## 🌟 Overview

This is a modern, highly interactive portfolio website designed to showcase enterprise AI solutions, customer success stories, projects, and technical expertise. The site features smooth animations, dark/light mode, responsive design, and a premium user experience comparable to top-tier SaaS products.

## ✨ Features

### Design & UX
- **Premium Design**: Modern, sleek interface with glassmorphism effects
- **Dark/Light Mode**: Toggle with localStorage persistence
- **Smooth Animations**: Powered by Framer Motion
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Elements**: Hover effects, animated counters, scroll animations
- **Smooth Scrolling**: Section-based navigation with active highlighting

### Sections
1. **Hero**: Immersive introduction with animated background
2. **About**: Professional summary with service offerings
3. **Impact Metrics**: Animated counters showcasing leadership impact
4. **Customer Success Stories**: Detailed case studies with technologies and outcomes
5. **Featured Projects**: Filterable project showcase with detailed modals
6. **Tech Stack**: Categorized technology proficiencies with visual indicators
7. **Career Timeline**: Interactive timeline of professional journey
8. **Contact**: Functional contact form and social links
9. **Footer**: Quick navigation and additional information

### Technical Features
- Static site generation for GitHub Pages
- Optimized performance and loading times
- Accessible design patterns
- SEO-friendly structure
- Custom hooks for theme and scroll management
- Data-driven architecture for easy content updates

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
ai-portfolio/
├── public/
│   ├── favicon.svg
│   └── profile.jpg (add your profile image)
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CustomerStories.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Metrics.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── TechStack.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── Timeline.jsx
│   ├── data/
│   │   ├── metrics.js
│   │   ├── projects.js
│   │   ├── stories.js
│   │   ├── techstack.js
│   │   └── timeline.js
│   ├── hooks/
│   │   ├── useActiveSection.js
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- Git installed

### Installation

1. **Clone or download the project**

```bash
cd ai-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open in browser**

Navigate to `http://localhost:5173` to view the site.

## 🎨 Customization

### Update Personal Information

Edit the data files in `src/data/` to customize your portfolio content:

- **projects.js**: Your project portfolio
- **stories.js**: Customer success stories
- **metrics.js**: Impact statistics
- **techstack.js**: Technologies and proficiencies
- **timeline.js**: Career history

### Update Profile Image

Replace `public/profile.jpg` with your own profile image, or update the Hero component to use your image.

### Modify Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  accent: {
    cyan: '#06b6d4',    // Change primary accent
    purple: '#a855f7',  // Change secondary accent
    indigo: '#6366f1',  // Change tertiary accent
  }
}
```

### Add/Remove Sections

Edit `src/App.jsx` to add or remove sections, and update the navigation in `src/components/Navbar.jsx`.

## 🏗️ Building for Production

Build the static site:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Deploying to GitHub Pages

### Method 1: Using gh-pages (Recommended)

1. **Update vite.config.js**

Change the `base` property to match your repository name:

```javascript
export default defineConfig({
  base: '/your-repo-name/', // Replace with your repo name
  // ... rest of config
})
```

If deploying to `username.github.io`, keep `base: '/'`

2. **Install gh-pages**

```bash
npm install --save-dev gh-pages
```

3. **Add deployment scripts to package.json**

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Deploy**

```bash
npm run deploy
```

This will build your site and push it to the `gh-pages` branch.

5. **Configure GitHub Pages**

- Go to your repository on GitHub
- Navigate to Settings → Pages
- Set Source to `gh-pages` branch
- Save and wait a few minutes

Your site will be live at `https://username.github.io/repo-name/`

### Method 2: Manual Deployment

1. **Build the site**

```bash
npm run build
```

2. **Push dist folder** to `gh-pages` branch manually

3. **Configure GitHub Pages** as described above

## 📝 Environment-Specific Configuration

### For Custom Domain

If using a custom domain, update `index.html` and add a `CNAME` file to the `public/` directory:

```
yourdomain.com
```

### Base Path Configuration

For subdirectory deployment, always update `vite.config.js`:

```javascript
base: '/subdirectory-name/'
```

## 🎯 Performance Optimization

The site is optimized for performance:

- Lazy loading of images
- Code splitting via Vite
- Optimized animations with Framer Motion
- Minimal third-party dependencies
- Efficient re-renders with React best practices

## 🔧 Development Tips

### Hot Module Replacement

Vite provides instant HMR during development. Changes to components will reflect immediately.

### Lint and Format

Add ESLint and Prettier for code quality:

```bash
npm install --save-dev eslint prettier
```

### Adding New Sections

1. Create component in `src/components/`
2. Import and add to `App.jsx`
3. Add section ID to navigation in `Navbar.jsx`
4. Update `sectionIds` array in `App.jsx`

## 🐛 Troubleshooting

### Build Errors

- Ensure all dependencies are installed: `npm install`
- Clear cache and rebuild: `rm -rf node_modules dist && npm install && npm run build`

### GitHub Pages 404

- Verify `base` path in `vite.config.js` matches your repo
- Ensure `gh-pages` branch exists and contains built files
- Check GitHub Pages settings point to `gh-pages` branch

### Animations Not Working

- Check browser compatibility
- Ensure Framer Motion is properly installed
- Verify `viewport={{ once: true }}` is set correctly

## 📄 License

This portfolio template is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you create improvements, consider sharing them back!

## 📧 Contact

**Nihar Ranjan Kanungo**
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/niharrk/))
- GitHub: [Your GitHub](https://github.com/nkanungo)
- Email: nihar.kanungo@gmail.com

## 🙏 Acknowledgments

Built with:
- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

---

**Made with ❤️ to showcase enterprise AI innovation**
