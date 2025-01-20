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
    if (navLinks.classList.contains('active')) {
        document.querySelector('.menu-button').classList.remove('active');
        navLinks.classList.remove('active');
    }
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
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

// הוספת אירוע לחיצה על כפתור התפריט
menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // הוספת או הסרת מחלקת active
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden'; // חוסם גלילה כאשר התפריט פתוח
    } else {
        document.body.style.overflow = 'auto'; // מאפשר גלילה כאשר התפריט סגור
    }
});

// הוספת אירוע לחיצה על קישורים בתפריט
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); // הסרת מחלקת active מהתפריט
        document.body.style.overflow = 'auto'; // מאפשר גלילה
    });
});

// פונקציה להסתיר את כפתור התפריט במצב מחשב
function updateMenuButtonVisibility() {
    if (window.innerWidth > 768) {
        menuButton.style.display = 'none'; // מסתיר את כפתור התפריט במצב מחשב
        navLinks.classList.remove('active'); // מסיר את מחלקת active מהתפריט
        document.body.style.overflow = 'auto'; // מאפשר גלילה
    } else {
        menuButton.style.display = 'block'; // מציג את כפתור התפריט במצב נייד
    }
}

// קורא לפונקציה בעת טעינת הדף
updateMenuButtonVisibility();

// מאזין לשינויי גודל חלון
window.addEventListener('resize', updateMenuButtonVisibility);
