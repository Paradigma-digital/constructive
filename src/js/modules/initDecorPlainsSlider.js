import Swiper, { Navigation } from 'swiper';


const initDecorPlainsSlider = (initSlide) => {
    const swiper = new Swiper( ` .decor__plains_modal_slider`, {
        modules: [ Navigation ],
        loop: true,
        navigation: {
            nextEl: `.decor__plains-next`,
            prevEl: `.decor__plains-prev`,
        },
        initialSlide: initSlide,
        slidesPerView: 1,
    });
}
export default initDecorPlainsSlider;