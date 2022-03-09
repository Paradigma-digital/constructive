const showModals = (selector) => {
    const modal = document.querySelector(`.modal.${selector}`);

    modal.style.cssText = `
        opacity: 1;
        visibility: visible;
    `
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal__close').addEventListener('click', () => {
        setTimeout(() => {
            modal.style.cssText = ``;
            document.body.style.overflow = '';
        },500)
        
    });
    modal.querySelector('.overlay').addEventListener('click', (e) => {
        if(e.target === modal.querySelector('.overlay')) {
            modal.style.cssText = ``;
            document.body.style.overflow = '';
        }
    });
}
export default showModals;