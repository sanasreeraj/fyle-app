document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTop');
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');
    let lastScroll = 0;
  
    // Debounce function for scroll event
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
  
    // Back to top button functionality
    window.addEventListener('scroll', debounce(() => {
      const currentScroll = window.scrollY;
      backToTopBtn.classList.toggle('show', currentScroll > 300);
      lastScroll = currentScroll;
    }, 100));
  
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    backToTopBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  
    backToTopBtn.setAttribute('tabindex', '0');
  
    // Contact form submission (simulated)
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission (no backend)
        console.log('Form submitted:', {
          name: contactForm.name.value,
          email: contactForm.email.value,
          subject: contactForm.subject.value,
          message: contactForm.message.value
        });
  
        // Show success message
        formResponse.classList.remove('hidden');
        
        // Reset form
        contactForm.reset();
  
        // Hide success message after 5 seconds
        setTimeout(() => {
          formResponse.classList.add('hidden');
        }, 5000);
      });
    }
  });
