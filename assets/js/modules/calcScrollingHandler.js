const calcScrollingHandler = () => {
    const scrollContainer = document.querySelector('.js-hidden-block');
    if (!scrollContainer) return;

    const checkScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;

        if (scrollTop + clientHeight >= scrollHeight - 2) {
            scrollContainer.classList.add('is-hide');
        } else {
            scrollContainer.classList.remove('is-hide');
        }
    };

    scrollContainer.addEventListener('scroll', checkScroll);

    checkScroll();
};

export default calcScrollingHandler;
