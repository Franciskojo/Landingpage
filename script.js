// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function toggleMenu() {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
}
// Toggle the mobile menu
function toggleMenu() {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
}

// Close the mobile menu when a link is clicked
document.querySelectorAll('.container a').forEach(link => {
    link.addEventListener('click', () => {
        const container = document.querySelector('.container');
        if (container.classList.contains('active')) {
            container.classList.remove('active'); // Close the menu
        }
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Smooth scrolling with offset for fixed navbar
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offset = 70; // Adjust based on your navbar height
            const targetPosition = targetSection.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});