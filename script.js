// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Copy IP to Clipboard
function copyIP() {
    const ipText = "play.sourmc.xyz";
    navigator.clipboard.writeText(ipText).then(() => {
        // Visual Feedback
        const ipBox = document.querySelector('.ip-box');
        const originalContent = ipBox.innerHTML;
        
        ipBox.innerHTML = '<span style="color:#4cd137">Copied!</span>';
        
        setTimeout(() => {
            ipBox.innerHTML = originalContent;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}