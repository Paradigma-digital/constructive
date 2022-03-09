import showModals from './showModals.js';

const initTelModal = () => {
    const triggers = document.querySelectorAll('.btn-tel-trigger');

    triggers.forEach(tr => {
        tr.addEventListener('click', () => {
            showModals('modal__forms');
            document.querySelectorAll('.modal__forms .contacts__forms_btn')[1].click();
        })
        

    })
}
export default initTelModal;
