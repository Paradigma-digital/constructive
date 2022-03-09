const showMobManu = () => {
    const tr = document.querySelector('.humburger'),
          menu = document.querySelector('.header__nav'),
          menuItems = document.querySelectorAll('.header__nav_item > a');

    if (document.body.clientWidth < 993) {
        let t = document.body.clientWidth < 577 ? '60px' : '90px'
        tr.addEventListener('click', () => {
            if(tr.classList.contains('close')) {
                tr.classList.remove('close');
                menu.style.cssText = ``;
                document.body.style.overflow = '';
            } else {
                tr.classList.add('close');
                menu.style.cssText = `
                    opacity: 1;
                    visibility: visible;
                    top: ${t};
                `;
                document.body.style.overflow = 'hidden';
            }
        });

        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                setTimeout(() => {
                    tr.classList.remove('close');
                    menu.style.cssText = ``;
                    document.body.style.overflow = '';
                    // window.location.replace(e.target.href)
                    const blockID = item.getAttribute('href');
                    if(item.getAttribute('href') !== '#') {
                        document.querySelector(blockID).scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 900);
            });
        });
    }
}

export default showMobManu;