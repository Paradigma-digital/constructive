


import Swiper, { Navigation,Lazy } from 'swiper';
import useDecorTexuralDublicates from './useDecorTexuralDublicates.js';

const initDecorTexturalSlider = () => {
    const swiper = new Swiper( ` .decor__textural_slider_wrapper`, {
        modules: [ Navigation,Lazy ],
        loop: true,
        navigation: {
            nextEl: `.textural-next`,
            prevEl: `.textural-prev`,
        },
        // initialSlide: initSlide,
        preloadImages: false,
        lazy: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        
        on: {
            activeIndexChange:  () => useDecorTexuralDublicates(),
            slidePrevTransitionEnd: () => {
                useDecorTexuralDublicates();
            }
        },
        breakpoints: {
            // // when window width is >= 320px

            // // when window width is >= 480px
            // 480: {
            //   slidesPerView: 3,
            //   spaceBetween: 30
            // },
            // when window width is >= 640px
            1150: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            993: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            320: {
                slidesPerView: 1.5,
                spaceBetween: 30,
                centeredSlides: true,
                centeredSlidesBounds: true
              },
          }

        // slidesPerColumn,
    });


    useDecorTexuralDublicates();
}
export default initDecorTexturalSlider;