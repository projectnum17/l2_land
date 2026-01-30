const headerScrolledHandler = () => {
    const header = document.querySelector('.js-header');
    if (!header) return;

    let lastScroll = 0;

    const handleScroll = () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('is-transform');
        } else {
            header.classList.remove('is-transform');
        }

        lastScroll = currentScroll;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
};

export default headerScrolledHandler;
