// Toggle the mobile menu
function toggleMenu() {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
}

// Close the mobile menu and scroll smoothly when a link is clicked
document.querySelectorAll('.container a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = link.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Find the target section

        if (targetSection) {
            const offset = 70; // Adjust based on your navbar height
            const targetPosition = targetSection.offsetTop - offset;

            // Scroll to the target section smoothly
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close the mobile menu
            const container = document.querySelector('.container');
            if (container.classList.contains('active')) {
                container.classList.remove('active');
            }
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Testimonial Carousel
const testimonialItems = document.querySelector('.testimonial-items');
const testimonialItemWidth = document.querySelector('.testimonial-item').clientWidth;
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

// Function to move to the next testimonial
function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonialItems.children.length;
    updateCarousel();
}

// Function to move to the previous testimonial
function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonialItems.children.length) % testimonialItems.children.length;
    updateCarousel();
}

// Update the carousel position
function updateCarousel() {
    const offset = -currentIndex * testimonialItemWidth;
    testimonialItems.style.transform = `translateX(${offset}px)`;
}

// Add event listeners for navigation buttons
prevButton.addEventListener('click', prevTestimonial);
nextButton.addEventListener('click', nextTestimonial);

// Optional: Auto-play the carousel
setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds