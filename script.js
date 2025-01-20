document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
});
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
document.querySelectorAll('.project-card').forEach((card, index) => {
    observer.observe(card);
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        

        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);
        if (!navLink) return;
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    highlightNavigation();
    window.addEventListener('scroll', highlightNavigation);
});

function scrollToFooter() {
    document.getElementById('footer').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// הוספת פונקציונליות לתפריט המבורגר
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', (event) => {
    menuButton.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// סגירת התפריט בלחיצה על קישור
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuButton.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// סגירת התפריט בגלילה
window.addEventListener('scroll', () => {
    if (navLinks.classList.contains('active')) {
        menuButton.classList.remove('active');
        navLinks.classList.remove('active');
    }
}); 