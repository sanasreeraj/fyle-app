document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTop');
    let lastScroll = 0;

    // Debounce function to limit scroll event frequency
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // Show/hide button on scroll with debouncing
    window.addEventListener('scroll', debounce(() => {
        const currentScroll = window.scrollY;
        backToTopBtn.classList.toggle('show', currentScroll > 300);
        lastScroll = currentScroll;
    }, 100));

    // Smooth scroll to top with click and keyboard support
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Keyboard accessibility (Enter/Space keys)
    backToTopBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    // Ensure button is focusable
    backToTopBtn.setAttribute('tabindex', '0');
});