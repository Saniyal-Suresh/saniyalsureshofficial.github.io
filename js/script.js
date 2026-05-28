// ============================================
// EMAILJS CONFIG - REPLACE WITH YOUR VALUES
// ============================================
const EMAILJS_PUBLIC_KEY = "gpxzHmqixw6cilo0H";
const EMAILJS_SERVICE_ID = "service_jyko3hs";
const EMAILJS_TEMPLATE_ID = "template_jn3aqym";
const YOUR_EMAIL = "saniesstudios@gmail.com"; // നിങ്ങളുടെ email

// EmailJS Init
(function() {
    if (EMAILJS_PUBLIC_KEY!== "YOUR_PUBLIC_KEY") {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
})();

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 500);
});

// AOS Init
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Typed.js
new Typed('#typed', {
    strings: ['Saniyal Suresh', 'Web Developer', 'Freelancer', 'Designer', 'Problem Solver', 'Tech Enthusiast'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeUI(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme') === 'dark'? 'light' : 'dark';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeUI(theme);
});

function updateThemeUI(theme) {
    if (theme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Navbar scroll effect + Back to top
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    }
});

// Back to top click
document.getElementById('backToTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Download CV as PDF
// Download CV as PDF - Fixed Version
document.getElementById('downloadCV')?.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Check if jsPDF loaded
    if (typeof window.jspdf === 'undefined') {
        showToast('PDF library not loaded. Please refresh the page.');
        console.error('jsPDF not found. Check CDN link in HTML');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Header
    doc.setFillColor(99, 102, 241);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(26);
    doc.setFont('helvetica', 'bold');
    doc.text('Saniyal Suresh', 20, 20);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Full Stack Web Developer', 20, 30);
    
    // Contact Info
    doc.setTextColor(0,0,0);
    doc.setFontSize(11);
    doc.text('Email: saniyalsuresh2@gmail.com', 20, 50);
    doc.text('Phone: +91 XXXXX XX735', 20, 57);
    doc.text('Location: Kozhikode, Kerala, India', 20, 64);
    doc.text('LinkedIn: linkedin.com/in/saniyalsuresh', 20, 71);
    doc.text('https://github.com/Saniyal-Suresh', 20, 78);
    doc.text('Connect me on mail in digital cv mobile number is not given completely', 20, 85);
    
    // About
    doc.setFontSize(16);
    doc.setTextColor(99, 102, 241);
    doc.setFont('helvetica', 'bold');
    doc.text('Professional Summary', 20, 93);
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    const aboutText = 'Passionate Full Stack Web Developer with 2+ years of experience creating responsive and user-friendly websites. Specialized in HTML5, CSS3, JavaScript, and Bootstrap. Currently learning React.js. Delivered 30+ successful projects with 100% client satisfaction.';
    const splitAbout = doc.splitTextToSize(aboutText, 170);
    doc.text(splitAbout, 20, 103);
    
    // Skills
    doc.setFontSize(16);
    doc.setTextColor(99, 102, 241);
    doc.setFont('helvetica', 'bold');
    doc.text('Technical Skills', 20, 128);
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.text('• HTML5 - 80%', 20, 138);
    doc.text('• CSS3 - 60%', 20, 145);
    doc.text('• JavaScript - 50%', 20, 152);
    doc.text('• Bootstrap - 50%', 20, 159);
    doc.text('• React.js - Learning', 20, 166);
    
    // Experience
    doc.setFontSize(16);
    doc.setTextColor(99, 102, 241);
    doc.setFont('helvetica', 'bold');
    doc.text('Experience', 20, 181);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.text('Freelance Web Developer', 20, 191);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text('2023 - Present', 20, 198);
    const exp1 = 'Working with clients worldwide to create custom websites and web applications. Delivered 30+ successful projects with 100% client satisfaction.';
    const splitExp1 = doc.splitTextToSize(exp1, 170);
    doc.text(splitExp1, 20, 205);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Frontend Development', 20, 220);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text('2022 - 2023', 20, 227);
    const exp2 = 'Mastered HTML, CSS, JavaScript, and Bootstrap. Built multiple responsive websites and learned modern development practices including Git.';
    const splitExp2 = doc.splitTextToSize(exp2, 170);
    doc.text(splitExp2, 20, 234);
    
    // Services
    doc.setFontSize(16);
    doc.setTextColor(99, 102, 241);
    doc.setFont('helvetica', 'bold');
    doc.text('Services', 20, 249);
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.text('• Web Development - Custom responsive websites', 20, 259);
    doc.text('• UI/UX Design - User-centered design principles', 20, 266);
    doc.text('• Performance Optimization - Fast loading websites', 20, 273);
    
    // Save PDF
    doc.save('Saniyal_Suresh_CV.pdf');
    showToast('CV downloaded successfully!');
});

// Toast Function - Add this if not already present
function showToast(message) {
    const toastElement = document.getElementById('liveToast');
    const toastMessage = document.getElementById('toastMessage');
    if (toastElement && toastMessage) {
        toastMessage.textContent = message;
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
    } else {
        alert(message); // Fallback
    }
}

// Toast Function
function showToast(message) {
    const toastElement = document.getElementById('liveToast');
    const toastMessage = document.getElementById('toastMessage');
    if (toastElement && toastMessage) {
        toastMessage.textContent = message;
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
    }
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse).hide();
            }
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id], #home');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});