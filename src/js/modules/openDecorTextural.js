import showModals from './showModals.js';
import initDecorTexturalModalSlider from './initDecorTexturalModalSlider.js';


const openDecorTextural = () => {

    const texturals = document.querySelectorAll('.decor__textural_item');

    texturals.forEach((item, i )=> {
        item.addEventListener('click', () => {


            let index = item.getAttribute('data-swiper-slide-index');
            showModals('decor__textural_modal');
            
            if(index) {
                initDecorTexturalModalSlider(+index);
            } else {
                initDecorTexturalModalSlider(i);
            }

        })
    })
}

export default openDecorTextural;