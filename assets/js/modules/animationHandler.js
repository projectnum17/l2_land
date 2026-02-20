const animationHandler = () => {
    const animatedItems = document.querySelectorAll('.js-custom-scroll');

    if (!animatedItems.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.classList.add('_animated');

                    el.addEventListener(
                        'transitionend',
                        () => {
                            if (el.classList.contains('_animated')) {
                                el.style.willChange = 'auto';
                            }
                        },
                        { once: true },
                    );

                    observer.unobserve(el);
                }
            });
        },
        { threshold: 0.5 },
    );

    animatedItems.forEach((item) => observer.observe(item));
};

export default animationHandler;
