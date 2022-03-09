const cratePromoAncors = () => {
    const items = document.querySelectorAll('.promo__items > a');
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            setTimeout(() => {
                const blockID = item.getAttribute('href');
                if(item.getAttribute('href') !== '#') {
                    document.querySelector(blockID).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 800);
        });
    });

}
export default cratePromoAncors;