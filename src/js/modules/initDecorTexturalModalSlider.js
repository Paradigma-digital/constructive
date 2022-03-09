
import Swiper, { Navigation, Lazy } from 'swiper';


const initDecorTexturalModalSlider = (initSlide) => {
    const swiper = new Swiper( ` .decor__textural_modal_slider`, {
        modules: [ Navigation, Lazy ],
        loop: true,
        navigation: {
            nextEl: `.decor__textural-next`,
            prevEl: `.decor__textural-prev`,
        },
        initialSlide: initSlide,
        preloadImages: false,
        lazy: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerView: 1,
    });
}
export default initDecorTexturalModalSlider;