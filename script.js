// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
const animateElements = document.querySelectorAll('.project-card, .achievement-card, .skill-category, .contact-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Make entire project card clickable (fallback if overlay is hard to click)
document.querySelectorAll('.project-card').forEach(card => {
    const primaryLink = card.querySelector('.project-overlay .project-link');
    if (!primaryLink) return;
    card.style.cursor = 'pointer';

    card.addEventListener('click', (e) => {
        // If the actual icon/link was clicked, let the browser handle it
        if (e.target.closest('a')) return;
        // Otherwise, open the primary link (GitHub profile) in a new tab
        window.open(primaryLink.href, '_blank', 'noopener,noreferrer');
    });
});

// Animate skill bars
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Initialize EmailJS
(function() {
    // Replace 'YOUR_PUBLIC_KEY' with your EmailJS public key after setup
    emailjs.init("YOUR_PUBLIC_KEY"); // You'll replace this after EmailJS setup
})();

// Form submission handler
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('user_name');
        const email = formData.get('user_email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Disable submit button and show sending message
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        formMessage.className = 'form-message sending';
        formMessage.textContent = 'Sending your message...';
        formMessage.style.display = 'block';
        
        try {
            // Email template parameters for YOUR inbox (notification email)
            const serviceParams = {
                service_id: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                template_id: 'YOUR_TEMPLATE_ID', // Replace with your notification template ID
                public_key: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
                template_params: {
                    'from_name': name,
                    'from_email': email,
                    'subject': subject,
                    'message': message,
                    'to_email': 'msc.sandeepyadav@gmail.com'
                }
            };
            
            // Email template parameters for SENDER (confirmation email)
            const confirmationParams = {
                service_id: 'YOUR_SERVICE_ID', // Same service ID
                template_id: 'YOUR_CONFIRMATION_TEMPLATE_ID', // Replace with confirmation template ID
                public_key: 'YOUR_PUBLIC_KEY',
                template_params: {
                    'to_name': name,
                    'to_email': email,
                    'from_name': 'Sandeep Yadav',
                    'reply_to': 'msc.sandeepyadav@gmail.com'
                }
            };
            
            // Send notification email to you
            await emailjs.send(
                serviceParams.service_id,
                serviceParams.template_id,
                serviceParams.template_params,
                serviceParams.public_key
            );
            
            // Send confirmation email to sender
            await emailjs.send(
                confirmationParams.service_id,
                confirmationParams.template_id,
                confirmationParams.template_params,
                confirmationParams.public_key
            );
            
            // Success message
            formMessage.className = 'form-message success';
            formMessage.textContent = `Thank you, ${name}! Your message has been sent. I'll get back to you soon. A confirmation email has been sent to ${email}.`;
            formMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Re-enable submit button after 3 seconds
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                formMessage.style.display = 'none';
            }, 5000);
            
        } catch (error) {
            console.error('Email sending failed:', error);
            
            // Error message
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Sorry, there was an error sending your message. Please try again or contact me directly at msc.sandeepyadav@gmail.com';
            formMessage.style.display = 'block';
            
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
}

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll to top functionality (optional enhancement)
let scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to scroll top button
scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1)';
});

// Typing effect for hero title (optional enhancement)
const nameElement = document.querySelector('.name');
if (nameElement) {
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < originalText.length) {
            nameElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

