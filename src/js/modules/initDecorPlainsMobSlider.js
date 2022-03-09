import Swiper, { Navigation } from 'swiper';
import useDecorPersonalMobDublicates from './useDecorPersonalMobDublicates.js';

const initDecorPlainsMobSlider = () => {
    if(document.body.clientWidth < 993) {
        const swiper = new Swiper( ` .decor__plains_slider_mob`, {
            modules: [ Navigation ],
            loop: true,
            navigation: {
                nextEl: `.plains_mob-next`,
                prevEl: `.plains_mob-prev`,
            },
            slidesPerView: 1.5,
            spaceBetween: 30,
            centeredSlides: true,
            centeredSlidesBounds: true,
            
            on: {
                activeIndexChange:  () => useDecorPersonalMobDublicates(),
                slidePrevTransitionEnd: () => {
                    useDecorPersonalMobDublicates();
                }
            },
    
        });
    }




    useDecorPersonalMobDublicates();
}
export default initDecorPlainsMobSlider;