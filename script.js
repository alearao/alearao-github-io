document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            const nav = document.querySelector('nav');
            if (nav) nav.classList.toggle('mobile-nav-visible');
        });
    }

    // Scroll-based header effects
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add Active Class to Navigation Items
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Timeline card animation
    const timelineCards = document.querySelectorAll('.timeline-card');
    if (timelineCards.length) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        timelineCards.forEach(card => {
            observer.observe(card);
        });
    }

    // Show More / Show Less functionality
    const showMoreBtn = document.getElementById('showMoreBtn');
    const showLessBtn = document.getElementById('showLessBtn');
    const hiddenCards = document.querySelectorAll('.hidden-experience');

    if (showMoreBtn && showLessBtn && hiddenCards.length) {
        showMoreBtn.addEventListener('click', function() {
            hiddenCards.forEach(card => card.style.display = 'block');
            showMoreBtn.style.display = 'none';
            showLessBtn.style.display = 'inline-block';
        });

        showLessBtn.addEventListener('click', function() {
            hiddenCards.forEach(card => card.style.display = 'none');
            showMoreBtn.style.display = 'inline-block';
            showLessBtn.style.display = 'none';
            window.scrollTo({ top: document.querySelector('.experience').offsetTop, behavior: 'smooth' });
        });
    }
});

