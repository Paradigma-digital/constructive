import Swiper, { Navigation, Lazy } from 'swiper';

const initReviewsSlider = () => {
    const swiper = new Swiper( `.reviews__slider_wrapper`, {
        modules: [ Navigation, Lazy ],
        loop: true,
        navigation: {
            nextEl: `.reviews-next`,
            prevEl: `.reviews-prev`,
        },
        preloadImages: false,
        lazy: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerView: 1,
    }); 
}
export default initReviewsSlider;
