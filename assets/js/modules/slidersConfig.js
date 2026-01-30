const slidersConfig = (selector, options = {}) => {
    if (typeof Swiper === 'undefined') return;

    const el = document.querySelector(selector);
    if (!el) return;

    return new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 24,
        speed: 900,
        grabCursor: true,
        ...options,
    });
};

export default slidersConfig;
