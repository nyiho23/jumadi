// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Navigation
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});

// Skill Cards Animation
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.querySelector('i').style.transform = 'scale(1.2) rotate(360deg)';
    });
    
    skill.addEventListener('mouseleave', () => {
        skill.querySelector('i').style.transform = 'scale(1) rotate(0)';
    });
});

// Project Cards Hover Effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Form Submission with Enhanced Feedback
const contactForm = document.getElementById('contact-form');
const inputs = contactForm.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = '#ffd700';
        input.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.3)';
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.style.borderColor = '#eee';
            input.style.boxShadow = 'none';
        }
    });
});

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Animate button
    const button = this.querySelector('button');
    button.style.transform = 'scale(0.95)';
    setTimeout(() => button.style.transform = 'scale(1)', 200);
    
    // Get form values
    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData);
    
    // Show success message with animation
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <p>Thank you for your message! I will get back to you soon.</p>
    `;
    successMessage.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ffd700;
        color: #333;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: slideIn 0.5s ease forwards;
    `;
    
    document.body.appendChild(successMessage);
    
    // Remove success message after 3 seconds
    setTimeout(() => {
        successMessage.style.animation = 'slideOut 0.5s ease forwards';
        setTimeout(() => successMessage.remove(), 500);
    }, 3000);
    
    // Clear form
    this.reset();
    inputs.forEach(input => {
        input.style.borderColor = '#eee';
        input.style.boxShadow = 'none';
    });
});

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.skill, .project-card');
    const windowHeight = window.innerHeight;
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Add initial state for scroll reveal
document.querySelectorAll('.skill, .project-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'all 0.6s ease';
});

// Initialize animations
window.addEventListener('scroll', reveal);
window.addEventListener('load', () => {
    reveal();
    
    // Animate hero section on load
    document.querySelector('.hero').style.opacity = '1';
    document.querySelector('.hero').style.transform = 'translateY(0)';
}); 