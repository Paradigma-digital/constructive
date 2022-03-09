import showModals from './showModals.js';
import initDecorTexturalModalSlider from './initDecorTexturalModalSlider.js';


const useDecorTexuralDublicates = () => {

    const dublicates = document.querySelectorAll('.decor__textural_item.swiper-slide-duplicate');


    dublicates.forEach((item)=> {
        item.addEventListener('click', () => {
            let index = item.getAttribute('data-swiper-slide-index');

            showModals('decor__textural_modal');
            initDecorTexturalModalSlider(+index);

        })
    })
}

export default useDecorTexuralDublicates;