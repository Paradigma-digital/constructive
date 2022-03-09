const setFixedHeader = () => {
    const headerNav = document.querySelector('.header__nav');
    
    document.addEventListener('scroll', () => {
        // console.log(headerNav.getBoundingClientRect().top );
        if(document.body.getBoundingClientRect().top === 0) {
            headerNav.style.cssText = ``;
        }
        if(headerNav.getBoundingClientRect().top < 10) {
            // console.log(headerNav);
            headerNav.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
            `
        } else {
            headerNav.style.cssText = ``;
        }
    });

    const navItems  = headerNav.querySelectorAll('.header__nav_item > a');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const blockID = item.getAttribute('href');
            if(item.getAttribute('href') !== '#') {
                document.querySelector(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    })    
    
}
export default setFixedHeader;