// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';

// Initialize theme
function initTheme() {
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

// Toggle theme
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

// Update theme icon
function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Smooth scrolling for navigation links
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
    
    closeMobileMenu();
}

// Active navigation highlighting
function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    navLinks.forEach(link => {
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const sectionTop = targetSection.offsetTop;
            const sectionBottom = sectionTop + targetSection.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to current link
                link.classList.add('active');
            }
        }
    });
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.section, .education-card, .skill-category, .project-card, .certification-card, .achievement-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in', 'visible');
        }
    });
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = window.matchMedia('(prefers-color-scheme: dark)').matches 
            ? 'rgba(15, 23, 42, 0.98)' 
            : 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = window.matchMedia('(prefers-color-scheme: dark)').matches 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

// Contact form handling
function handleContactForm(e) {
    // Don't prevent default for Netlify forms
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !message) {
        e.preventDefault();
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        e.preventDefault();
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Form will submit to Netlify automatically
    // We'll handle the success/error in the next function
}

// Handle form submission success (Netlify redirects back)
function handleFormSuccess() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        // Clear form
        contactForm.reset();
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
}

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Parallax effect for hero section
function handleParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
}

// Initialize all functionality
function init() {
    // Initialize theme
    initTheme();
    
    // Event listeners
    themeToggle.addEventListener('click', toggleTheme);
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Scroll events
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
        handleScrollAnimations();
        handleNavbarScroll();
        handleParallax();
    });
    
    // Initial calls
    updateActiveNavLink();
    handleScrollAnimations();
    handleNavbarScroll();
    
    // Check for form success (Netlify redirect)
    handleFormSuccess();
    
    // Add fade-in class to elements
    const elements = document.querySelectorAll('.section, .education-card, .skill-category, .project-card, .certification-card, .achievement-card');
    elements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Typing effect for hero title (optional)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 100);
        }, 1000);
    }
}

// Add CSS for notifications
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0;
            font-size: 1rem;
            opacity: 0.8;
            transition: opacity 0.3s ease;
        }
        
        .notification-close:hover {
            opacity: 1;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .notification-content i {
            font-size: 1.25rem;
        }
    `;
    document.head.appendChild(style);
}

// Add active state styles for navigation
function addActiveNavStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: var(--accent-color) !important;
        }
        
        .nav-link.active::after {
            width: 100% !important;
        }
        
        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    `;
    document.head.appendChild(style);
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    updateActiveNavLink();
    handleScrollAnimations();
    handleNavbarScroll();
    handleParallax();
}, 16); // ~60fps

// Replace scroll event listener with throttled version
window.removeEventListener('scroll', () => {});
window.addEventListener('scroll', throttledScrollHandler);

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        addNotificationStyles();
        addActiveNavStyles();
        init();
    });
} else {
    addNotificationStyles();
    addActiveNavStyles();
    init();
}

// Add intersection observer for better performance
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.addEventListener('DOMContentLoaded', () => {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => observer.observe(el));
    });
}

// Add smooth reveal animation for sections
function addSectionRevealAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        .section {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }
        
        .section.revealed {
            opacity: 1;
            transform: translateY(0);
        }
        
        .section:nth-child(even) {
            transform: translateY(-30px);
        }
        
        .section:nth-child(even).revealed {
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// Initialize section reveal animations
function initSectionReveal() {
    const sections = document.querySelectorAll('.section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Add the section reveal styles and initialize
addSectionRevealAnimation();

// Initialize section reveal when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSectionReveal);
} else {
    initSectionReveal();
}
