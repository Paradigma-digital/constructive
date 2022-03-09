'use strict';
import isWebp from './modules/isWebp.js';
import smoothTransition from  './modules/smoothTransition.js';
import setFixedHeader from './modules/setFixedHeader.js';
import setActiveClass from './modules/setActiveClass.js';
import startAnimPanels from './modules/startAnimPanels.js';
import initCertificatesModalAndSlider from './modules/initCertificatesModaAndlSlider.js';
import initReviewsSlider from './modules/initReviewsSlider.js';
import initPhotosSlider from './modules/initPhotosSlider.js';
import initDecorTexturalSlider from './modules/initDecorTexturalSlider.js';
import initDecorPlainsMobSlider from './modules/initDecorPlainsMobSlider.js';
import setFormTabs from './modules/setFormTabs.js';
import validateContactsMailForm from './modules/validateContactsMailForm.js';
import validateContactsTelForm from './modules/validateContactsTelForm.js';
import validateModalTelForm from './modules/validateModalTelForm.js';
import openDecorPlains from './modules/openDecorPlains.js';
import openDecorTextural from './modules/openDecorTextural.js';
import initTelModal from './modules/initTelModal.js';
import initMessageModal from './modules/initMessageModal.js';
import validateModalMailForm from './modules/validateModalMailForm.js';

import showMobManu from './modules/showMobManu.js';

import createMap from './modules/createMap.js';

import setTopPage from './modules/setTopPage.js';

import cratePromoAncors from './modules/cratePromoAncors.js';




document.addEventListener('DOMContentLoaded', () => {
    isWebp();
    smoothTransition();
    showMobManu();
    cratePromoAncors();

    setFixedHeader();

    setActiveClass();
    startAnimPanels();

    setFormTabs('.contacts__forms_btn.contacts-tr', '.contacts__form.contacts');
    setFormTabs('.contacts__forms_btn.modal-tr', '.contacts__form.modal-form');

    initTelModal();
    initMessageModal();

    validateModalTelForm();
    validateModalMailForm();

    

    
    
    initCertificatesModalAndSlider();
    

    validateContactsMailForm();
    validateContactsTelForm();
    

    initReviewsSlider();
    initPhotosSlider();
    
    openDecorTextural();
    initDecorTexturalSlider();

    initDecorPlainsMobSlider();
    openDecorPlains();


    


    setTimeout(() => {
        setTopPage();
        createMap();
    }, 1000)

});