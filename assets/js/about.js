/* ==========================================================================
   HARDIK VAGHANI — EXECUTIVE ABOUT SECTION CONTROLLER
   Interactive Tech Stack & Category Filtering Logic
   ========================================================================== */

(function () {
    'use strict';

    function initTechStackTabs() {
        const categoryBtns = document.querySelectorAll('.stack-category-btn');
        const categoryCards = document.querySelectorAll('.tech-category-card');

        if (!categoryBtns.length || !categoryCards.length) return;

        categoryBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const targetCat = e.currentTarget.dataset.category;

                // Update tab buttons
                categoryBtns.forEach((b) => b.classList.remove('active'));
                e.currentTarget.classList.add('active');

                // Filter / highlight cards
                categoryCards.forEach((card) => {
                    if (targetCat === 'all' || card.dataset.category === targetCat) {
                        card.style.display = 'flex';
                        card.classList.add('fade-in');
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('fade-in');
                    }
                });
            });
        });
    }

    function initFlippingCards() {
        const flippingCards = document.querySelectorAll('.flipping-card-container');
        const modal = document.getElementById('project-modal');
        const modalCloseBtn = document.getElementById('project-modal-close');
        
        if (!flippingCards.length || !modal) return;

        const modalImg = document.getElementById('modal-img');
        const modalBadge = document.getElementById('modal-badge');
        const modalMono = document.getElementById('modal-mono');
        const modalTitle = document.getElementById('modal-title');
        const modalTech = document.getElementById('modal-tech');
        const modalDesc = document.getElementById('modal-desc');
        const modalMetricHighlight = document.getElementById('modal-metric-highlight');
        const modalMetricSub = document.getElementById('modal-metric-sub');
        const modalCta = document.getElementById('modal-cta');
        const modalCtaText = document.getElementById('modal-cta-text');

        function openModal(card) {
            const frontImg = card.querySelector('.card-img');
            const frontBadge = card.querySelector('.card-badge');
            const frontTitle = card.querySelector('.project-title');
            const frontTechs = card.querySelectorAll('.card-front-body .tech-pill');
            
            const backMono = card.querySelector('.card-badge-mono');
            const backDesc = card.querySelector('.card-back-desc');
            const backMetricHighlight = card.querySelector('.metric-highlight');
            const backMetricSub = card.querySelector('.metric-sub');
            const backCta = card.querySelector('.card-flip-cta');

            if (frontImg) modalImg.src = frontImg.src;
            if (frontBadge) {
                modalBadge.textContent = frontBadge.textContent;
                modalBadge.className = frontBadge.className;
            }
            if (backMono) modalMono.textContent = backMono.textContent;
            if (frontTitle) modalTitle.textContent = frontTitle.textContent;
            
            // Populate Tech Pills
            if (modalTech) {
                modalTech.innerHTML = '';
                frontTechs.forEach(pill => {
                    const span = document.createElement('span');
                    span.className = pill.className;
                    span.textContent = pill.textContent;
                    modalTech.appendChild(span);
                });
            }

            if (backDesc) modalDesc.textContent = backDesc.textContent;
            if (backMetricHighlight) modalMetricHighlight.textContent = backMetricHighlight.textContent;
            if (backMetricSub) modalMetricSub.textContent = backMetricSub.textContent;
            
            if (backCta) {
                modalCta.href = backCta.href;
                modalCta.target = backCta.target || '_self';
                const ctaTextSpan = backCta.querySelector('span:first-child');
                if (modalCtaText && ctaTextSpan) {
                    modalCtaText.textContent = ctaTextSpan.textContent;
                }
            }

            modal.classList.add('is-active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('is-active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        flippingCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // If user clicks a link inside the card directly, perform standard link navigation
                if (e.target.closest('a')) return;
                
                openModal(card);
            });
        });

        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', closeModal);
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('is-active')) {
                closeModal();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initTechStackTabs();
            initFlippingCards();
        });
    } else {
        initTechStackTabs();
        initFlippingCards();
    }

})();
