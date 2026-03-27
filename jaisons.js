const observerOptions = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Find all elements to animate in this section
            const elements = entry.target.querySelectorAll('.fade-in, h1, h2, h3, p');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('visible');
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                }, index * 200); // Staggered delay
            });
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});