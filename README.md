# Shubham Kumar - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring a clean design, dark/light theme toggle, smooth animations, and mobile-first responsive design.

## 🌟 Features

### Design & Layout
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Mobile-first approach that works on all devices
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Elements**: Hover effects, animations, and micro-interactions

### Sections Included
1. **Hero Section** - Introduction with contact info and social links
2. **Education** - Academic background with visual cards
3. **Technical Skills** - Organized skill categories with tags
4. **Projects** - Portfolio projects with technology tags
5. **Certifications** - Professional certifications and achievements
6. **Achievements** - Awards and participation highlights
7. **Contact** - Contact form and information

### Technical Features
- **CSS Variables**: Easy theme customization
- **CSS Grid & Flexbox**: Modern layout techniques
- **Intersection Observer**: Performance-optimized scroll animations
- **Local Storage**: Theme preference persistence
- **Form Validation**: Contact form with validation and notifications
- **Mobile Menu**: Responsive hamburger navigation

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Download all files to your project directory
2. Open `index.html` in your web browser
3. For development, use a local server (e.g., Live Server in VS Code)

### File Structure
```
portfolio-website/
├── index.html          # Main HTML structure
├── style.css          # Styles and animations
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## 🎨 Customization

### Colors & Themes
The website uses CSS variables for easy customization. Edit the `:root` section in `style.css`:

```css
:root {
    --primary-color: #1e3a8a;      /* Main brand color */
    --secondary-color: #0f766e;     /* Secondary color */
    --accent-color: #06b6d4;        /* Accent/highlight color */
    --text-primary: #1f2937;        /* Primary text color */
    --text-secondary: #6b7280;      /* Secondary text color */
    --bg-primary: #ffffff;          /* Main background */
    --bg-secondary: #f8fafc;        /* Secondary background */
    --bg-card: #ffffff;             /* Card backgrounds */
    --border-color: #e5e7eb;        /* Border colors */
}
```

### Content Updates
- **Personal Information**: Update the hero section in `index.html`
- **Education**: Modify the education cards with your details
- **Skills**: Add/remove skills in the skills section
- **Projects**: Update project descriptions and technologies
- **Contact**: Update contact information and form handling

### Adding New Sections
1. Add the HTML structure in `index.html`
2. Add corresponding CSS styles in `style.css`
3. Update navigation menu if needed
4. Add scroll animations in `script.js`

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🔧 JavaScript Features

### Theme Management
- Automatic theme detection
- Local storage persistence
- Smooth theme transitions

### Navigation
- Smooth scrolling to sections
- Active section highlighting
- Mobile menu functionality
- Sticky navbar with scroll effects

### Animations
- Scroll-triggered fade-in effects
- Parallax scrolling for hero section
- Typing effect for hero title
- Intersection Observer for performance

### Form Handling
- Contact form validation
- Success/error notifications
- Auto-dismissing alerts

## 🌐 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 📝 Customization Guide

### Changing Personal Information
1. **Name & Title**: Update the hero section in `index.html`
2. **Contact Details**: Modify email, phone, and social links
3. **Social Media**: Update LinkedIn, GitHub, LeetCode, and HackerRank links

### Modifying Skills
Edit the skills section in `index.html`:
```html
<div class="skill-category">
    <h3>Your Category</h3>
    <div class="skill-items">
        <span class="skill-item">Skill 1</span>
        <span class="skill-item">Skill 2</span>
    </div>
</div>
```

### Adding Projects
Add new project cards in the projects section:
```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Project Title</h3>
    <p>Project description goes here.</p>
    <div class="project-tech">
        <span class="tech-tag">Technology</span>
    </div>
</div>
```

### Updating Education
Modify education cards with your details:
```html
<div class="education-card">
    <div class="education-icon">
        <i class="fas fa-graduation-cap"></i>
    </div>
    <div class="education-content">
        <h3>Your Degree</h3>
        <p class="education-field">Your Field</p>
        <p class="education-institution">Your Institution</p>
        <p class="education-details">
            <span class="cgpa">Your Score</span>
            <span class="graduation">Graduation Year</span>
        </p>
    </div>
</div>
```

## 🎯 Performance Features

- **Lazy Loading**: Images and animations load on scroll
- **Throttled Events**: Scroll events are optimized for performance
- **CSS Transforms**: Hardware-accelerated animations
- **Minimal DOM Manipulation**: Efficient JavaScript operations

## 🔒 Security Features

- **Form Validation**: Client-side input validation
- **XSS Prevention**: Safe HTML rendering
- **Secure Links**: External links open in new tabs

## 📧 Contact Form

The contact form includes:
- Name, email, and message fields
- Client-side validation
- Success/error notifications
- Form reset after submission

**Note**: The form currently shows a success message. To make it functional, you'll need to:
1. Set up a backend service (e.g., Netlify Forms, Formspree)
2. Update the form action and method
3. Handle server-side validation

## 🚀 Deployment

### GitHub Pages
1. Push code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main` or `master`)

### Netlify
1. Drag and drop the project folder to Netlify
2. Or connect your GitHub repository
3. Automatic deployment on push

### Vercel
1. Connect your GitHub repository
2. Automatic deployment on push
3. Custom domain support

## 🤝 Contributing

Feel free to:
- Report bugs or issues
- Suggest new features
- Submit pull requests
- Share your customized version

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Font Awesome** for icons
- **Google Fonts** for typography
- **CSS Grid & Flexbox** for modern layouts
- **Intersection Observer API** for performance

## 📞 Support

If you need help customizing or deploying your portfolio:
1. Check the customization guide above
2. Review the code comments
3. Open an issue in the repository
4. Contact me through the portfolio contact form

---

**Happy coding! 🎉**

Your portfolio website is now ready to showcase your skills and achievements to the world!
