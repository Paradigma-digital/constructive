import showModals from './showModals.js';
import initDecorPlainsSlider from './initDecorPlainsSlider.js';


const useDecorPersonalMobDublicates = () => {

    const dublicates = document.querySelectorAll('.decor__plains_item.swiper-slide-duplicate');

   


    dublicates.forEach((item)=> {
        item.addEventListener('click', () => {
            let index = item.getAttribute('data-swiper-slide-index');
            console.log(index)
            showModals('decor__plains_modal');
            initDecorPlainsSlider(+index);

        })
    })
}

export default useDecorPersonalMobDublicates;