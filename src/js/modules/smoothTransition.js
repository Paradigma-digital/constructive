const smoothTransition = () => {
    const anchors = document.querySelectorAll('a[href*="#"');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            if(anchor.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });
}
export default smoothTransition;