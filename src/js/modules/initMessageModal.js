import showModals from './showModals.js';

const initMessageModal = () => {
    const triggers = document.querySelectorAll('.btn-mes-trigger');

    triggers.forEach(tr => {
        tr.addEventListener('click', () => {
            showModals('modal__forms');
            document.querySelectorAll('.modal__forms .contacts__forms_btn')[0].click();
        })
        

    })
}
export default initMessageModal;
