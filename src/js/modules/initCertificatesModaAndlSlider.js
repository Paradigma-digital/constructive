import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper from 'swiper';

import initCertificatesModalSlider from './initCertificatesModalSlider.js';
import showModals from './showModals.js';


const initCertificatesModalAndSlider  = ( ) => {

    const trigger = document.querySelectorAll('.certificates__item_link');


    trigger.forEach(item => {

        item.addEventListener('click', () => {
            const att = item.getAttribute('data-certificate');
            showModals(att);
            initCertificatesModalSlider(att);
        })
    })


}

export default initCertificatesModalAndSlider ;