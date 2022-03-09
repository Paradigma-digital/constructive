import Swiper, { Navigation, Lazy } from 'swiper';

const initPhotosSlider = () => {
    const swiper = new Swiper( `.photos__slider_wrapper`, {
        modules: [ Navigation, Lazy ],
        loop: true,
        navigation: {
            nextEl: `.photos-next`,
            prevEl: `.photos-prev`,
        },
        preloadImages: false,
        lazy: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerView: 1,
    }); 
}
export default initPhotosSlider;
