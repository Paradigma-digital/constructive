import Swiper, { Navigation, Lazy } from 'swiper';
// import Swiper from 'swiper';

const initCertificatesModalSlider = (selector) => {
    

    if(document.querySelectorAll(`.${selector} .certificates__modal_slide`).length > 1) {
        const swiper = new Swiper( `.${selector} .certificates__modal_slider`, {
            modules: [ Navigation, Lazy ],
            loop: true,
            navigation: {
                nextEl: `.${selector} .reviews-next`,
                prevEl: `.${selector} .reviews-prev`,
            },
    
            slidesPerView: 1,
            // slidesPerColumn,
            preloadImages: false,
            lazy: true,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
        });
    } else {
        document.querySelectorAll(`.${selector} .reviews-btn`).forEach (item => item.style.display = 'none');
    }
    
    
}

export default initCertificatesModalSlider;