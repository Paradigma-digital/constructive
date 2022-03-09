const setTopPage = () => {
    const link = document.querySelector('.page__up');
    
    document.addEventListener('scroll', () => {
        if(document.body.getBoundingClientRect().top < -2200) {
            link.style.cssText = `
                opacity:1;
	            visibility: visible;
            `
        }else{
            link.style.cssText = `
                opacity: 0;
                visibility: hidden;
            `
        }
    });
}
export default setTopPage;