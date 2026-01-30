const videoHandler = () => {
    const videoWrappers = document.querySelectorAll('.js-video-wrapper');
    if (!videoWrappers.length) return;

    videoWrappers.forEach((wrapper) => {
        const videoItem = wrapper.querySelector('.js-video');
        const videoPlay = wrapper.querySelector('.js-video-play');

        if (!videoItem || !videoPlay) return;

        let isLoaded = false;

        const loadVideo = () => {
            const source = videoItem.querySelector('source');
            if (source?.dataset.src) {
                source.src = source.dataset.src;
                videoItem.load();
                isLoaded = true;
            }
        };

        const exitFullscreen = () => {
            const fullscreenDoc =
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.msFullscreenElement;

            if (!fullscreenDoc) return;

            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.webkitExitFullscreen)
                document.webkitExitFullscreen();
            else if (document.msExitFullscreen) document.msExitFullscreen();
        };

        const showPlayButton = () => {
            videoPlay.classList.remove('is-hide');
            videoItem.removeAttribute('controls');
            exitFullscreen();
        };

        const hidePlayButton = () => {
            videoPlay.classList.add('is-hide');
            videoItem.setAttribute('controls', 'controls');
        };

        videoItem.addEventListener('play', hidePlayButton);
        videoItem.addEventListener('pause', showPlayButton);
        videoItem.addEventListener('ended', showPlayButton);

        const togglePlay = async () => {
            if (!isLoaded) loadVideo();

            try {
                videoItem.paused ? await videoItem.play() : videoItem.pause();
            } catch (err) {
                console.error(err);
            }
        };

        wrapper.addEventListener('click', (e) => {
            if (e.target === videoItem) return;
            togglePlay();
        });

        videoPlay.addEventListener('click', (e) => {
            e.stopPropagation();
            togglePlay();
        });
    });
};

export default videoHandler;
