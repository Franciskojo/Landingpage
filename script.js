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


// Testimonials
const testimonialItems = document.querySelector('.testimonial-items');
const testimonialItem = document.querySelector('.testimonial-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

if (testimonialItems && testimonialItem) {
    let testimonialItemWidth = testimonialItem.clientWidth;
    let currentIndex = 0;
    let autoSlide = setInterval(nextTestimonial, 5000);

    // Handle window resizing
    window.addEventListener('resize', () => {
        testimonialItemWidth = testimonialItem.clientWidth;
        updateCarousel();
    });

    // Navigation functions
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonialItems.children.length;
        updateCarousel();
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonialItems.children.length) % testimonialItems.children.length;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -currentIndex * testimonialItemWidth;
        testimonialItems.style.transform = `translateX(${offset}px)`;
    }

    // Add event listeners for buttons
    prevButton.addEventListener('click', () => {
        clearInterval(autoSlide);
        prevTestimonial();
        autoSlide = setInterval(nextTestimonial, 5000);
    });

    nextButton.addEventListener('click', () => {
        clearInterval(autoSlide);
        nextTestimonial();
        autoSlide = setInterval(nextTestimonial, 5000);
    });

    // Touch support for mobile
    let startX = 0;
    let isDragging = false;

    testimonialItems.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    testimonialItems.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;
        testimonialItems.style.transform = `translateX(${-currentIndex * testimonialItemWidth - diffX}px)`;
    });

    testimonialItems.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;

        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        if (Math.abs(diffX) > testimonialItemWidth / 4) {
            if (diffX > 0) {
                nextTestimonial();
            } else {
                prevTestimonial();
            }
        } else {
            updateCarousel();
        }
    });

    // Disable buttons and autoplay if there's only one testimonial
    if (testimonialItems.children.length <= 1) {
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
        clearInterval(autoSlide);
    }
} else {
    console.error('Testimonial carousel elements not found!');
}