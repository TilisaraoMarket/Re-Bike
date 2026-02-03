document.addEventListener('DOMContentLoaded', () => {
    // Navigation Toggle for Mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animate links
        navLinksItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `fadeInUp 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        // Hamburger animation
        hamburger.classList.toggle('toggle');
    });

    // Close mobile menu when clicking a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Scroll Reveal Animation
    const scrollElements = document.querySelectorAll("[data-scroll]");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        })
    }

    // Initialize CSS for scroll reveal
    const style = document.createElement('style');
    style.innerHTML = `
        [data-scroll] {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        [data-scroll].scrolled {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Trigger once on load
    handleScrollAnimation();

    // WhatsApp Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            const interest = document.getElementById('userInterest').value;
            const message = document.getElementById('userMessage').value;

            const phoneNumber = "5492664574172";
            const text = `Hola Cristian! Soy *${name}* (${email}).%0A%0A*Interés:* ${interest}%0A%0A*Consulta:*%0A${message}`;

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

            window.open(whatsappUrl, '_blank');
        });
    }
});
