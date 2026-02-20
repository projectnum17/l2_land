const teamModalHandler = () => {
    const cards = document.querySelectorAll('.js-team-more');
    const modal = document.querySelector('.js-team-modal');
    const closeBtn = document.querySelector('.js-team-close');

    const modalImg = document.querySelector('.js-team-pic');
    const modalTitle = document.querySelector('.js-team-title');
    const modalText = document.querySelector('.js-team-text');

    if (!cards.length || !modal) return;

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            const img = card.querySelector('img')?.getAttribute('src');
            const title = card.querySelector('.team__subtitle')?.textContent;
            const descr = card.dataset.descr;

            if (modalImg) modalImg.src = img || '';
            if (modalTitle) modalTitle.textContent = title || '';
            if (modalText) modalText.textContent = descr || '';
            modal.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn?.addEventListener('click', () => {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.team-modal__box')) {
            modal.classList.remove('is-open');
            document.body.style.overflow = '';
        }
    });
};

export default teamModalHandler;
