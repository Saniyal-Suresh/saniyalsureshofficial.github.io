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
document.getElementById('downloadCV')?.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFillColor(99, 102, 241);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255);
    doc.setFontSize(26);
    doc.setFont('helvetica', 'bold');
    doc.text('Saniyal Suresh', 20, 20);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Full Stack Web Developer', 20, 30);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.text('Email: ' + YOUR_EMAIL, 20, 50);
    doc.text('Phone: +91 XXXXX XXXXX', 20, 57);
    doc.text('Location: Kerala, India', 20, 64);

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

    doc.save('Saniyal_Suresh_CV.pdf');
    showToast('CV downloaded successfully!');
});

// Contact Form Submit with EmailJS
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
        showToast('Email service not configured. Please contact me directly at ' + YOUR_EMAIL);
        console.error('EmailJS not configured. Replace YOUR_PUBLIC_KEY, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID in script.js');
        return;
    }

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name ||!email ||!phone ||!message) {
        showToast('Please fill all fields');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address');
        return;
    }

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    submitBtn.disabled = true;

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        phone: phone,
        message: message,
        to_email: YOUR_EMAIL,
        reply_to: email
    }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        showToast('Message sent successfully! I will get back to you soon.');
        document.getElementById('contactForm').reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, function(error) {
        console.log('FAILED...', error);
        showToast('Failed to send: ' + error.text + '. Email me at ' + YOUR_EMAIL);
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
});

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