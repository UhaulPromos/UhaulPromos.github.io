// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Mouse Motion Effect for Post Cards
document.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${xPercent}%`);
        card.style.setProperty('--mouse-y', `${yPercent}%`);
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
    });
});

// Header Background Transition on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        navbar.style.background = 'linear-gradient(45deg, #ff8c00, #ffa726)';
    } else {
        navbar.style.background = 'linear-gradient(45deg, #ff6200, #ff8c00)';
    }
});
