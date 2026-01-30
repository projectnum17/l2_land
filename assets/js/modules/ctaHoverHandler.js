const ctaHoverHandler = () => {
    const cta = document.querySelectorAll('.js-cta');

    if (!cta.length) return;

    cta.forEach((cta) => {
        const circle = cta.querySelector('span:last-child');

        const handleMouseAction = (e) => {
            const rect = cta.getBoundingClientRect();

            const relX = e.clientX - rect.left;
            const relY = e.clientY - rect.top;

            if (circle) {
                circle.style.top = `${relY}px`;
                circle.style.left = `${relX}px`;
            }
        };

        cta.addEventListener('mouseenter', handleMouseAction);
        cta.addEventListener('mouseleave', handleMouseAction);
    });
};

export default ctaHoverHandler;
