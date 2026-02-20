const reviewsHandler = () => {
    const modal = document.querySelector('.js-reviews-modal');
    if (!modal) return;

    const modalText = modal.querySelector('.js-reviews-fulltext');
    const modalImg = modal.querySelector('img');
    const modalName = modal.querySelector('.js-modal-name');
    const modalWork = modal.querySelector('.js-modal-work');
    const closeBtn = modal.querySelector('.js-reviews-close');

    const boxes = document.querySelectorAll('.reviews-box');
    const MAX_LENGTH = 200;

    boxes.forEach((box) => {
        const textEl = box.querySelector('.reviews-box__text');
        const link = box.querySelector('.reviews-box__link');
        const fullText = textEl.textContent.trim();

        if (fullText.length > MAX_LENGTH) {
            textEl.textContent = fullText.slice(0, MAX_LENGTH) + '...';
            link.style.display = 'inline';

            link.addEventListener('click', (e) => {
                e.preventDefault();

                modalText.textContent = fullText;

                const authorImg = box.querySelector('.js-author-img');
                modalImg.src = authorImg?.src || '';
                modalImg.alt = authorImg?.alt || '';

                modalName.textContent =
                    box.querySelector('.js-author-name')?.textContent || '';
                modalWork.textContent =
                    box.querySelector('.js-author-work')?.textContent || '';

                modal.classList.add('is-open');
                document.body.style.overflow = 'hidden';
            });
        } else {
            link.style.display = 'none';
        }
    });

    const closeModal = () => {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    };

    closeBtn?.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.reviews-modal__box')) {
            closeModal();
        }
    });
};

export default reviewsHandler;
