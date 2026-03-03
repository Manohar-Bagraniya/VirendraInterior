
function sendEmail(){
    let parms={
        name: document.getElementById("name").value,
        emailid: document.getElementById("email").value,
        phoneno: document.getElementById("phone").value,        
        serviceType: document.getElementById("service").value,
        projectType: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_hd2b08i","template_u76d8de",parms).then(alert("Emal Sent!!!"))
}




// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animated counter for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
    let count = 0;
        
    const updateCount = () => {
        const increment = target / speed;
            
    if (count < target) {
        count += increment;
        counter.textContent = Math.ceil(count);
        setTimeout(updateCount, 10);
    } else {
        counter.textContent = target;
    }
};
        
updateCount();
});
}

// Trigger counter animation when stats section is visible
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
    observer.unobserve(entry.target);
}
});
}, observerOptions);

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    observer.observe(statsSection);
}

// Gallery filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            const categories = item.getAttribute('data-category');
            
        if (filterValue === 'all' || categories.includes(filterValue)) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, 10);
    } else {
                item.style.opacity = '0';
item.style.transform = 'scale(0.8)';
setTimeout(() => {
    item.style.display = 'none';
}, 300);
}
});
});
});

// Set initial state for gallery items
galleryItems.forEach(item => {
    item.style.transition = 'all 0.3s ease';
});

// Contact form submission
function submitForm(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !phone || !service || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }
    
    // Hide form and show success message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, phone, service, subject, message });
    
    // Reset form after 3 seconds (optional)
    setTimeout(() => {
        document.getElementById('contactForm').reset();
    document.getElementById('contactForm').style.display = 'block';
    document.getElementById('formSuccess').style.display = 'none';
}, 5000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy load images with fade-in effect
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
    img.src = img.dataset.src || img.src;
    img.classList.add('fade-in');
    observer.unobserve(img);
}
});
});
    
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});
}

// Add animation to elements on scroll
const fadeElements = document.querySelectorAll('.fade-in-up');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';
}
});
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
element.style.transform = 'translateY(30px)';
element.style.transition = 'all 0.8s ease';
fadeObserver.observe(element);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroContent.style.opacity = 1 - (scrolled / 700);
}
});

// Mobile menu close on link click
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
if (bsCollapse) {
    bsCollapse.hide();
}
}
});
});

// Preloader (optional - uncomment if you want a loading screen)
/*
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});
*/

// Service card hover effect enhancement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotate(0.5deg)';
    });
    
card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) rotate(0deg)';
});
});

// Team card hover effect
document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const img = this.querySelector('.team-image img');
        if (img) {
            img.style.filter = 'grayscale(0%)';
        }
    });
    
card.addEventListener('mouseleave', function() {
    const img = this.querySelector('.team-image img');
    if (img) {
        img.style.filter = 'grayscale(20%)';
    }
});
});

// Initialize Bootstrap tooltips if present
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
if (tooltipTriggerList.length > 0) {
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Gallery modal image slider (optional enhancement)
let currentImageIndex = 0;
const galleryImages = Array.from(document.querySelectorAll('.gallery-image img'));

function showNextImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = galleryImages.length - 1;
    if (currentImageIndex >= galleryImages.length) currentImageIndex = 0;
    
    const modal = document.querySelector('.modal.show');
    if (modal) {
        const modalImage = modal.querySelector('img');
        if (modalImage) {
            modalImage.src = galleryImages[currentImageIndex].src;
        }
    }
}

// Add keyboard navigation for gallery
document.addEventListener('keydown', function(e) {
    const modal = document.querySelector('.modal.show');
    if (modal) {
        if (e.key === 'ArrowLeft') showNextImage(-1);
        if (e.key === 'ArrowRight') showNextImage(1);
        if (e.key === 'Escape') {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) bsModal.hide();
        }
    }
});

// Client logo animation on scroll
const clientLogos = document.querySelectorAll('.client-logo');
const logoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';
}, index * 100);
logoObserver.unobserve(entry.target);
}
});
}, {
    threshold: 0.1
});

clientLogos.forEach(logo => {
    logo.style.opacity = '0';
logo.style.transform = 'translateY(20px)';
logo.style.transition = 'all 0.5s ease';
logoObserver.observe(logo);
});

// Add active state to current page in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
} else {
    link.classList.remove('active');
}
});

// Testimonial card stagger animation
const testimonialCards = document.querySelectorAll('.testimonial-card, .testimonial-card-detailed');
const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';
}, index * 150);
testimonialObserver.unobserve(entry.target);
}
});
}, {
    threshold: 0.1
});

testimonialCards.forEach(card => {
    card.style.opacity = '0';
card.style.transform = 'translateY(30px)';
card.style.transition = 'all 0.6s ease';
testimonialObserver.observe(card);
});

// Add loading animation for gallery images
document.querySelectorAll('.gallery-image img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
img.style.opacity = '0';
img.style.transition = 'opacity 0.5s ease';
});

// Contact form field animations
document.querySelectorAll('.form-control, .form-select').forEach(field => {
    field.addEventListener('focus', function() {
        this.parentElement.querySelector('.form-label').style.color = 'var(--secondary-color)';
    });
    
field.addEventListener('blur', function() {
    this.parentElement.querySelector('.form-label').style.color = 'var(--text-dark)';
});
});

console.log('Virendra Interior Design - Website loaded successfully');
