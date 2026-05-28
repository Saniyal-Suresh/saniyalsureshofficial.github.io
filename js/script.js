// ============================================
// CONFIG - REPLACE WITH YOUR VALUES
// ============================================
const EMAILJS_PUBLIC_KEY = 'service_jyko3hs'; 
const EMAILJS_SERVICE_ID = 'service_jyko3hs'; // EmailJS-ൽ check ചെയ്യുക
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // ഇത് മാറ്റണം
const YOUR_EMAIL = 'saniyalsuresh@gmail.com';

// ============================================
// PROFILE PHOTO BASE64 - ഇവിടെ paste ചെയ്യുക
// ============================================
// Step 1: https://www.base64-image.de/ പോയി
// Step 2: Images/saniyal_profile.png upload ചെയ്യുക  
// Step 3: കിട്ടുന്ന code full copy ചെയ്ത് താഴെ paste ചെയ്യുക
const PROFILE_PHOTO_BASE64 = ""; 
// മുകളിലെ site-ൽ നിന്ന് കിട്ടിയ full code ഇവിടെ paste ചെയ്യുക

// EmailJS Init
(function() {
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
})();

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
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
    strings: ['Saniyal Suresh', 'Web Developer', 'Freelancer', 'Designer', 'Problem Solver'],
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

themeToggle?.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeUI(theme);
});

function updateThemeUI(theme) {
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// Navbar scroll + Back to top
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
});

document.getElementById('backToTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Download CV - WITH PHOTO + FULL DETAILS
document.getElementById('downloadCV')?.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (typeof window.jspdf === 'undefined') {
        showToast('PDF library not loaded. Please refresh.');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let yPos = 15;
    
    // Add Profile Photo - Top Right Corner
    if (PROFILE_PHOTO_BASE64 && PROFILE_PHOTO_BASE64.startsWith('data:image')) {
        try {
            doc.addImage(PROFILE_PHOTO_BASE64, 'PNG', 155, 10, 40, 40);
        } catch (err) {
            console.log('Photo error:', err);
        }
    }
    
    // Header
    doc.setFillColor(99, 102, 241);
    doc.rect(0, 0, 210, 55, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(30);
    doc.setFont('helvetica', 'bold');
    doc.text('SANIYAL SURESH', 20, yPos);
    yPos += 10;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Full Stack Web Developer', 20, yPos);
    yPos += 8;
    doc.setFontSize(10);
    doc.text('Kerala, India', 20, yPos);
    yPos += 5;
    doc.text('Email: saniyalsuresh@gmail.com | Phone: +91 XXXXX XXX35', 20, yPos);
    yPos += 5;
    doc.text('LinkedIn: linkedin.com/in/saniyalsuresh | GitHub: https://github.com/Saniyal-Suresh', 20, yPos);
    yPos = 65;
    
    // Professional Summary
    doc.setFontSize(14);
    doc.setTextColor(99, 102, 241);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL SUMMARY', 20, yPos);
    yPos += 7;
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    const summary = 'Passionate Full Stack Web Developer with 2+ years of hands-on experience building responsive, user-centric websites and web applications. Successfully delivered 50+ projects with 100% client satisfaction. Expert in modern front-end technologies with strong problem-solving skills and attention to detail. Currently mastering React.js to build scalable applications.';
    const splitSummary = doc.splitTextToSize(summary, 170);
    doc.text(splitSummary, 20, yPos);
    yPos += splitSummary.length * 5 + 8;
    
    // Technical Skills
    doc.setFontSize(14);
    doc.setTextColor(99, 102, 241);
    doc.setFont('helvetica', 'bold');
    doc.text('TECHNICAL SKILLS', 20, yPos);
    yPos += 7;
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.text('Frontend: HTML5 (80%), CSS3 (60%), JavaScript ES6+ (50%), Bootstrap 5 (50%)', 20, yPos);
    yPos += 5;
    doc.text('Frameworks & Libraries: React.js (Learning), jQuery, AOS.js, Typed.js', 20, yPos);
    yPos += 5;
    doc.text('Backend: Node.js, Express.js, MongoDB, REST APIs', 20, yPos);
    yPos += 5;
    doc.text('Tools & Others: Git, GitHub, VS Code, npm, Webpack, Responsive Design, SEO', 20, yPos);
    yPos += 10;
    
    // Professional Experience
    doc.setFontSize(14);
    doc.setTextColor(99, 102, 241);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL EXPERIENCE', 20, yPos);
    yPos += 7;
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.text('Freelance Web Developer', 20, yPos);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text('2023 - Present | Remote', 140, yPos);
    yPos += 5;
    doc.setFont('helvetica', 'normal');
    const exp1 = '• Developed 30+ custom websites for international clients across various industries\n• Improved client conversion rates by 40% through UX/UI optimization\n• Maintained 100% client satisfaction with timely project delivery\n• Implemented responsive designs compatible across all devices and browsers';
    doc.text(exp1, 20, yPos);
    yPos += 22;
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Frontend Developer', 20, yPos);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text('2022 - 2023', 140, yPos);
    yPos += 5;
    doc.setFont('helvetica', 'normal');
    const exp2 = '• Built 20+ responsive websites using HTML5, CSS3, JavaScript, Bootstrap\n• Achieved 90+ Google PageSpeed scores through performance optimization\n• Created reusable component libraries reducing development time by 30%\n• Collaborated with designers to implement pixel-perfect layouts';
    doc.text(exp2, 20, yPos);
    yPos += 22;
    
    // Add new page if needed
    if (yPos > 240) {
        doc.addPage();
        yPos = 20;
    }
    
    // Key Projects
    doc.setFontSize(14);
    doc.setTextColor(99, 102, 241);
    doc.setFont('helvetica', 'bold');
    doc.text('KEY PROJECTS', 20, yPos);
    yPos += 7;
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.text('1. ExamPro - Online Examination System', 20, yPos);
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Full-stack platform with real-time analytics, AI-powered results, and secure testing.', 20, yPos);
    yPos += 5;
    doc.text('Technologies: Express.js, Node.js, MongoDB, Deployed on Render', 20, yPos);
    yPos += 5;
    doc.text('URL: exam-pro-l3ua.onrender.com', 20, yPos);
    yPos += 10;
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('2. Portfolio Website with CMS Features', 20, yPos);
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Modern responsive portfolio with dark/light mode, animations, and contact form.', 20, yPos);
    yPos += 5;
    doc.text('Technologies: HTML5, CSS3, JavaScript, Bootstrap 5, AOS, EmailJS', 20, yPos);
    yPos += 10;
    
    // Education
    doc.setFontSize(14);
    doc.setTextColor(99, 102, 241);
    doc.setFont('helvetica', 'bold');
    doc.text('EDUCATION & CERTIFICATIONS', 20, yPos);
    yPos += 7;
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.text('• Full Stack Web Development - Self-taught & Online Courses (2022-2024)', 20, yPos);
    yPos += 5;
    doc.text('• Responsive Web Design Certification - FreeCodeCamp', 20, yPos);
    yPos += 5;
    doc.text('• JavaScript Algorithms & Data Structures - In Progress', 20, yPos);
    yPos += 10;
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text('Generated from saniyalsuresh.dev | Last Updated: January 2026', 20, 285);
    
    doc.save('Saniyal_Suresh_CV.pdf');
    showToast('CV with photo downloaded successfully!');
});

// Contact Form
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!EMAILJS_TEMPLATE_ID || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
        showToast('Email service not configured. Contact: ' + YOUR_EMAIL);
        return;
    }

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('formStatus');

    if (!name || !email || !phone || !message) {
        status.innerHTML = '<div class="alert alert-warning mt-3">Please fill all fields</div>';
        return;
    }

    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
    status.innerHTML = '';

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        phone: phone,
        message: message,
        to_email: YOUR_EMAIL,
        reply_to: email
    }).then(() => {
        status.innerHTML = '<div class="alert alert-success mt-3">✅ Message sent successfully!</div>';
        this.reset();
        btn.disabled = false;
        btn.innerHTML = originalText;
    }, (error) => {
        status.innerHTML = '<div class="alert alert-danger mt-3">❌ Failed. Email: ' + YOUR_EMAIL + '</div>';
        console.log('FAILED...', error);
        btn.disabled = false;
        btn.innerHTML = originalText;
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
    } else {
        alert(message);
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            window.scrollTo({
                top: target.offsetTop - navHeight,
                behavior: 'smooth'
            });
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse).hide();
            }
        }
    });
});