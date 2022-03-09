
const startAnimPanels = () => {
    const schemes = document.querySelectorAll('.scheme'),
          schemeBG = document.querySelector('.scheme-bg'),
          price    = document.querySelector('.panels__scheme_price'),
          list    = document.querySelector('.panels__scheme_list'),
          navLink = document.querySelector('.header__nav_item > a[href="#panels"]');

    document.addEventListener('scroll', () => {
        if(navLink.classList.contains('active')) {
            schemes.forEach(item => {
                item.classList.remove('fade');
            })
            schemeBG.classList.add('fade');
            price.classList.remove('fade');
            list.classList.remove('fade');
        } else {
            schemes.forEach(item => {
                item.classList.add('fade');
            });
            schemeBG.classList.remove('fade');
            price.classList.add('fade');
            list.classList.add('fade');
        }
    }); 

}

export default startAnimPanels;