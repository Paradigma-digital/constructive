import showModals from './showModals.js';
import initDecorPlainsSlider from './initDecorPlainsSlider.js';


const openDecorPlains = () => {

    const plains = document.querySelectorAll('.decor__plains_item');


    plains.forEach((item, i )=> {
        item.addEventListener('click', () => {
            let index = item.getAttribute('data-swiper-slide-index');
            showModals('decor__plains_modal');
            
            if(index) {
                initDecorPlainsSlider(+index);
            } else {
                initDecorPlainsSlider(i);
            }
        })
    })
}

export default openDecorPlains;