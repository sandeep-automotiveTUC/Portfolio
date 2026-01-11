# Personal Portfolio Website

A modern, responsive personal portfolio website showcasing your projects, skills, and achievements.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations and transitions
- 🚀 Fast and lightweight
- ♿ Accessible design
- 🎯 Easy to customize

## Sections

1. **Hero Section** - Introduction with your name and tagline
2. **About** - Personal information and statistics
3. **Projects** - Showcase of your work (includes Robotic Arm project)
4. **Skills** - Technical skills and technologies
5. **Achievements** - Awards, certifications, and recognitions
6. **Contact** - Contact form and information

## Customization Guide

### 1. Personal Information

Edit `index.html` and update:
- **Name**: Replace "Your Name" in the hero section
- **Title**: Change "Robotics Engineer & Software Developer" to your profession
- **Description**: Update the hero description
- **Email/Phone/Location**: Update contact information in the contact section

### 2. Social Links

Update the social media links in the hero section:
```html
<a href="YOUR_LINKEDIN_URL" class="social-link">
<a href="YOUR_GITHUB_URL" class="social-link">
<a href="mailto:YOUR_EMAIL" class="social-link">
```

### 3. Projects

Replace the placeholder projects with your actual projects:
- Update project titles and descriptions
- Add project images (replace the placeholder divs)
- Update technology tags
- Add links to live demos and GitHub repositories

### 4. Skills

Modify the skills section to reflect your expertise:
- Update skill names
- Adjust skill progress percentages
- Add or remove skill categories
- Update skill tags

### 5. Achievements

Replace placeholder achievements with your actual:
- Awards and recognitions
- Certifications
- Notable project highlights
- Competition wins

### 6. Colors

To change the color scheme, edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #8b5cf6;  /* Secondary color */
    /* ... other colors */
}
```

### 7. Statistics

Update the statistics in the About section:
- Number of projects
- Years of experience
- Number of technologies

## Adding Project Images

To add actual project images:

1. Create an `images` folder in the project root
2. Add your project images
3. Replace the placeholder divs in project cards:

```html
<div class="project-image">
    <img src="images/project1.jpg" alt="Project Name">
    <div class="project-overlay">
        <!-- overlay content -->
    </div>
</div>
```

Then update the CSS:
```css
.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## Form Submission

The contact form currently shows an alert. To make it functional:

1. Set up a backend service (e.g., Formspree, EmailJS, or your own server)
2. Update the form submission handler in `script.js`
3. Add the API endpoint or service configuration

Example with EmailJS:
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch and folder
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository
3. Your site will be automatically deployed

### Vercel
1. Import your GitHub repository
2. Vercel will automatically detect and deploy
3. Your site will be live instantly

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## License

Feel free to use this template for your personal portfolio!

## Credits

- Fonts: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- Icons: [Font Awesome](https://fontawesome.com/)

---

**Note**: Remember to replace all placeholder content with your actual information before deploying!

