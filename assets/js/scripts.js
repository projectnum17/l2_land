'use strict';

const loader = document.querySelector('.loader');
let loaderHidden = false;

const hideLoader = () => {
    if (loader && !loaderHidden) {
        loaderHidden = true;
        loader.classList.add('is-hide');
        setTimeout(() => loader.remove(), 500);
    }
};

import mobileMenuHandler from './modules/mobileMenuHandler.js';
import ctaHoverHandler from './modules/ctaHoverHandler.js';
import headerScrolledHandler from './modules/headerScrolledHandler.js';
import morphAnimation from './modules/morphAnimation.js';
import slidersConfig from './modules/slidersConfig.js';
import calcScrollingHandler from './modules/calcScrollingHandler.js';
import videoHandler from './modules/videoHandler.js';
import formHandler from './modules/formHandler.js';
import faqHandler from './modules/faqHandler.js';

const animationsHandler = () => {
    const animateBounceElements = () => {
        const bounceElements = document.querySelectorAll('.js-bounce-anim');
        if (!bounceElements.length) return;

        let mm = gsap.matchMedia();
        mm.add('(min-width: 992px)', () => {
            bounceElements.forEach((be) => {
                gsap.from(be, {
                    autoAlpha: 0,
                    yPercent: 200,
                    delay: 0.3,
                    duration: 1,
                    ease: 'back.out(1)',
                });
            });
        });

        mm.add('(max-width: 991px', () => {
            bounceElements.forEach((be) => {
                gsap.from(be, {
                    autoAlpha: 0,
                    yPercent: 10,
                    delay: 0.3,
                    duration: 1,
                    ease: 'back.out(1)',
                });
            });
        });
    };

    const animateMoveElements = () => {
        const moveElements = document.querySelectorAll('.js-move');
        if (!moveElements.length) return;

        let mm = gsap.matchMedia();
        mm.add('(min-width: 992px', () => {
            moveElements.forEach((me) => {
                gsap.set(me, {
                    yPercent: -2,
                    force3D: true,
                    willChange: 'transform',
                });

                gsap.to(me, {
                    yPercent: 8,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: me,
                        scrub: true,
                        fastScrollEnd: true,
                        preventOverlaps: true,
                    },
                });
            });
        });
    };

    const animateTitlesElements = () => {
        const titlesElements = document.querySelectorAll('.js-title');
        if (!titlesElements.length) return;

        const splits = Array.from(titlesElements).map((title) => {
            const s = new SplitText(title, { type: 'words, chars' });
            gsap.set(s.chars, {
                opacity: 0,
                y: 20,
                willChange: 'transform, opacity',
                force3D: true,
            });
            return { el: title, split: s };
        });

        ScrollTrigger.batch(titlesElements, {
            onEnter: (batch) => {
                batch.forEach((title) => {
                    const target = splits.find((s) => s.el === title);
                    if (target) {
                        gsap.to(target.split.chars, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: 'power3.out',
                            stagger: 0.02,
                            delay: 0.2,
                            overwrite: true,
                        });
                    }
                });
            },
            start: 'top 95%',
            once: true,
        });
    };

    const animationScrollingElements = (
        selector = '.js-scroll',
        options = {},
    ) => {
        const scrollingEls = document.querySelectorAll(selector);
        if (!scrollingEls.length) return;

        const defaults = {
            opacity: 0,
            y: 50,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            start: 'top 95%',
            end: 'bottom 80%',
        };

        const settings = { ...defaults, ...options };

        scrollingEls.forEach((el) => {
            gsap.from(el, {
                opacity: settings.opacity,
                y: settings.y,
                x: settings.x,
                scale: settings.scale,
                duration: settings.duration,
                ease: settings.ease,
                stagger: settings.stagger,
                scrollTrigger: {
                    trigger: el,
                    start: settings.start,
                    end: settings.end,
                    toggleActions: 'play none none reverse',
                },
            });
        });
    };

    animateTitlesElements();
    animateMoveElements();
    animateBounceElements();
    animationScrollingElements();

    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
};

document.addEventListener('DOMContentLoaded', () => {
    animationsHandler();
    mobileMenuHandler();
    ctaHoverHandler();
    headerScrolledHandler();
    morphAnimation();
    calcScrollingHandler();
    videoHandler();
    formHandler();
    faqHandler();
    slidersConfig('.js-gallery-slider', {
        navigation: {
            prevEl: '.js-gallery-prev',
            nextEl: '.js-gallery-next',
        },
        slidesPerView: 'auto',
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 'auto',
            },
        },
    });
    slidersConfig('.js-carousel-slider', {
        navigation: {
            prevEl: '.js-carousel-prev',
            nextEl: '.js-carousel-next',
        },
        slidesPerView: 'auto',
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 'auto',
            },
        },
    });
    slidersConfig('.js-videos-slider', {
        navigation: {
            prevEl: '.js-videos-prev',
            nextEl: '.js-videos-next',
        },
        slidesPerView: 'auto',
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 'auto',
            },
        },
    });
    slidersConfig('.js-reviews-slider', {
        slidesPerView: 2,
        grid: {
            rows: 2,
            fill: 'row',
        },
        navigation: {
            prevEl: '.js-reviews-prev',
            nextEl: '.js-reviews-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                },
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
            },
        },
    });
    slidersConfig('.js-features-slider', {
        navigation: {
            prevEl: '.js-features-prev',
            nextEl: '.js-features-next',
        },
        slidesPerView: 1,
    });
    slidersConfig('.js-houses-slider', {
        navigation: {
            prevEl: '.js-houses-prev',
            nextEl: '.js-houses-next',
        },
        slidesPerView: 3,
        spaceBetween: 64,
        centeredSlides: true,
        navigation: {
            prevEl: '.js-houses-prev',
            nextEl: '.js-houses-next',
        },
        pagination: {
            el: '.js-houses-pag',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 64,
                centeredSlides: true,
            },
        },
    });

    window.addEventListener('load', hideLoader);
    setTimeout(hideLoader, 7000);
});
