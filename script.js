// === SourMC Website Scripts ===

// --- Mobile Menu Toggle ---
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animate hamburger to X
        mobileMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    });
});

// --- Navbar Scroll Effect ---
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Copy IP to Clipboard ---
function copyIP() {
    const ipText = "sourmc.xyz";
    navigator.clipboard.writeText(ipText).then(() => {
        const ipBox = document.querySelector('.ip-box');
        if (ipBox) {
            const originalContent = ipBox.innerHTML;
            
            ipBox.innerHTML = '<span style="color:#4cd137"><i class="fas fa-check"></i> Copied!</span>';
            
            setTimeout(() => {
                ipBox.innerHTML = originalContent;
            }, 2000);
        }
    }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = ipText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const ipBox = document.querySelector('.ip-box');
        if (ipBox) {
            const originalContent = ipBox.innerHTML;
            ipBox.innerHTML = '<span style="color:#4cd137"><i class="fas fa-check"></i> Copied!</span>';
            setTimeout(() => {
                ipBox.innerHTML = originalContent;
            }, 2000);
        }
    });
}

// --- Smooth Scroll for Anchor Links ---
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

// --- Add animation on scroll ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.category-card, .info-box, .about-card, .feature-item').forEach(el => {
    observer.observe(el);
});

// --- Add CSS for animations dynamically ---
const style = document.createElement('style');
style.textContent = `
    .category-card, .info-box, .about-card, .feature-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .category-card.animate-in, 
    .info-box.animate-in, 
    .about-card.animate-in,
    .feature-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .menu-toggle.active .bar:nth-child(1) {
        transform: rotate(45deg) translate(5px, 6px);
    }
    
    .menu-toggle.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .menu-toggle.active .bar:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -6px);
    }
`;
document.head.appendChild(style);
