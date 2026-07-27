/* ==========================================================================
   HARDIK VAGHANI — FULL PORTFOLIO UI CONTROLLER
   Spotlight Color Reveal Engine & Typography 3D Mouse Parallax
   ========================================================================== */

(function () {
    'use strict';

    // UI Elements
    const avatarWrapper = document.getElementById('hero-avatar-wrapper');
    const avatarColor = document.getElementById('avatar-color');
    const typographyContainer = document.getElementById('hero-typography');
    const nameFirst = document.querySelector('.name-first');
    const nameLast = document.querySelector('.name-last');
    const centerNavItems = document.querySelectorAll('.center-nav-item');
    const sections = document.querySelectorAll('section[id], main[id]');

    // Parallax tracking parameters
    let mouseX = 0, mouseY = 0;       // Normalized (-1 to 1)
    let currentX = 0, currentY = 0;   // Lerped position

    /* --------------------------------------------------------------------------
       1. Light-Orange Spotlight Color Reveal Hover Tracking (Desktop Only)
       -------------------------------------------------------------------------- */
    function isMobileOrTouch() {
        return window.matchMedia('(max-width: 768px)').matches || 
               window.matchMedia('(pointer: coarse)').matches;
    }

    function initSpotlightReveal() {
        if (!avatarWrapper || !avatarColor) return;

        // On mobile or touch devices, disable orange spotlight reveal completely
        if (isMobileOrTouch()) {
            avatarWrapper.classList.remove('is-hovered');
            avatarColor.style.clipPath = 'circle(0px at 50% 50%)';
            return;
        }

        function updateSpotlight(e) {
            if (isMobileOrTouch()) return;
            const rect = avatarWrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update clip path radius and position on color image
            avatarColor.style.clipPath = `circle(140px at ${x}px ${y}px)`;

            // Update CSS variables for transparent light-orange spotlight glow
            avatarWrapper.style.setProperty('--spotlight-x', `${x}px`);
            avatarWrapper.style.setProperty('--spotlight-y', `${y}px`);
        }

        avatarWrapper.addEventListener('mouseenter', (e) => {
            if (isMobileOrTouch()) return;
            avatarWrapper.classList.add('is-hovered');
            updateSpotlight(e);
        });

        avatarWrapper.addEventListener('mousemove', (e) => {
            if (isMobileOrTouch()) return;
            updateSpotlight(e);
        });

        avatarWrapper.addEventListener('mouseleave', () => {
            avatarWrapper.classList.remove('is-hovered');
            avatarColor.style.clipPath = `circle(0px at 50% 50%)`;
        });

        window.addEventListener('resize', () => {
            if (isMobileOrTouch()) {
                avatarWrapper.classList.remove('is-hovered');
                avatarColor.style.clipPath = 'circle(0px at 50% 50%)';
            }
        });
    }

    /* --------------------------------------------------------------------------
       1B. Mobile Navigation Menu Toggle
       -------------------------------------------------------------------------- */
    function initMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const navDrawer = document.getElementById('mobile-nav-drawer');
        const navItems = document.querySelectorAll('.mobile-nav-item');

        if (!menuBtn || !navDrawer) return;

        function toggleMenu() {
            menuBtn.classList.toggle('is-active');
            navDrawer.classList.toggle('is-active');
            document.body.classList.toggle('menu-open');
        }

        menuBtn.addEventListener('click', toggleMenu);

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                menuBtn.classList.remove('is-active');
                navDrawer.classList.remove('is-active');
                document.body.classList.remove('menu-open');
            });
        });
    }

    /* --------------------------------------------------------------------------
       2. 3D Mouse Parallax Engine (Specifically for HARDIK VAGHANI Typography)
       -------------------------------------------------------------------------- */
    function initTypographyParallax() {
        if (!typographyContainer) return;

        function onMouseMove(e) {
            if (isMobileOrTouch()) return;
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Map mouse position to range [-1, 1] relative to center
            mouseX = (e.clientX / width) * 2 - 1;
            mouseY = (e.clientY / height) * 2 - 1;
        }

        function updateParallax() {
            if (isMobileOrTouch()) {
                typographyContainer.style.transform = 'translate(-50%, -50%)';
                if (nameFirst && nameLast) {
                    nameFirst.style.transform = 'none';
                    nameLast.style.transform = 'none';
                }
                return;
            }

            // Smooth lerping (0.07 damping)
            currentX += (mouseX - currentX) * 0.07;
            currentY += (mouseY - currentY) * 0.07;

            // 3D Tilt and Translate for main typography container
            const transX = currentX * -36;    // 36px horizontal shift opposite to cursor
            const transY = currentY * -22;    // 22px vertical shift opposite to cursor
            const rotY = currentX * 9;        // 9deg 3D tilt on Y axis
            const rotX = -currentY * 6;       // 6deg 3D tilt on X axis

            typographyContainer.style.transform = `
                translate(calc(-50% + ${transX}px), calc(-50% + ${transY}px))
                rotateY(${rotY}deg)
                rotateX(${rotX}deg)
            `;

            // Split letter depth parallax: HARDIK shifts slightly left, VAGHANI shifts slightly right
            if (nameFirst && nameLast) {
                nameFirst.style.transform = `translateX(${currentX * -12}px) translateZ(15px)`;
                nameLast.style.transform = `translateX(${currentX * 12}px) translateZ(10px)`;
            }

            requestAnimationFrame(updateParallax);
        }

        window.addEventListener('mousemove', onMouseMove);
        requestAnimationFrame(updateParallax);
    }

    /* --------------------------------------------------------------------------
       3. Active Scroll Navigation Tracking
       -------------------------------------------------------------------------- */
    function initScrollTracking() {
        window.addEventListener('scroll', () => {
            let current = '';
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 120;
                const sectionHeight = section.offsetHeight;
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            if (current) {
                centerNavItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${current}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    /* --------------------------------------------------------------------------
       4. GSAP Entrance & Scroll Animations
       -------------------------------------------------------------------------- */
    function runEntranceAnimations() {
        if (typeof gsap === 'undefined') return;

        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

        // Header bar slide down
        tl.from('.hero-top-bar', {
            y: -40,
            opacity: 0,
            duration: 1
        }, 0.2);

        // Giant typography pop in
        tl.from('.name-first', {
            x: -90,
            opacity: 0,
            scale: 0.9,
            duration: 1.3
        }, 0.4);

        tl.from('.name-last', {
            x: 90,
            opacity: 0,
            scale: 0.9,
            duration: 1.3
        }, 0.4);

        // Centered Character rise up from bottom
        tl.from('#hero-avatar-wrapper', {
            y: 140,
            opacity: 0,
            duration: 1.4,
            ease: 'power4.out'
        }, 0.6);

        // Bottom left headline & CTA
        tl.from('#hero-bottom-left > *', {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 1
        }, 0.8);

        // ScrollTrigger reveal for sections if ScrollTrigger is registered
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            const cards = document.querySelectorAll('.project-card, .service-card, .timeline-card, .skill-category');
            cards.forEach(card => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%'
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            });
        }
    }

    /* --------------------------------------------------------------------------
       5. Initialization
       -------------------------------------------------------------------------- */
    function init() {
        initSpotlightReveal();
        initMobileMenu();
        initTypographyParallax();
        initScrollTracking();
        runEntranceAnimations();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
