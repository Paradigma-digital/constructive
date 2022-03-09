

const setFormTabs = (triggersSel, formsSel) => {
    const trigger = document.querySelectorAll(triggersSel),
          forms = document.querySelectorAll(formsSel);

    trigger.forEach(item => item.classList.remove('contacts__forms_btn-active'));

    forms.forEach(item => {
        item.style.cssText = `
           opacity: 0;
           visibility: hidden;
           position: absolute;
           top: 0;
           left: 0;
        `;
    });

    trigger.forEach((item, i) => {
        item.addEventListener('click', () => {
            trigger.forEach(item => item.classList.remove('contacts__forms_btn-active'));
            forms.forEach(item => {
                item.style.cssText = `
                   opacity: 0;
                   visibility: hidden;
                   position: absolute;
                   top: 0;
                   left: 0;
                `;
            });
            item.classList.add('contacts__forms_btn-active');

            forms[i].style.cssText = ``;
        })
    })

    trigger[0].click();

}

export default setFormTabs;