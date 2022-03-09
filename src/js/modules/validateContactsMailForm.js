import Inputmask from '/node_modules/inputmask/dist/inputmask.es6.js';

import JustValidate from 'just-validate';
// import sendForm from './sendForm.js';

const validateContactsMailForm = () => {
    // const sel = document.querySelector(tel);
    // const im = new Inputmask("+ [9999] - 999-999-9999");
    // if (sel) {
    //     im.mask(sel);
    // }
    
   if(document.querySelector('#contacts__form_mail')) {
        const validation = new JustValidate('#contacts__form_mail');

        validation
        .addField('#contacts__form_mail input[name="user-name"]', [
            {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Одно или несколько обязательных полей не заполнены или содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте еще раз.'
            },
            {
            rule: 'required',
            errorMessage: 'Одно или несколько обязательных полей не заполнены или содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте еще раз.'
            },
        ])
        .addField('#contacts__form_mail input[name="user-email"]', [
            {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Одно или несколько обязательных полей не заполнены или содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте еще раз.'
            },
            {
            rule: 'required',
            errorMessage: 'Одно или несколько обязательных полей не заполнены или содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте еще раз.'
            },
        ])
        .addField('#contacts__form_mail textarea', [
            {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Одно или несколько обязательных полей не заполнены или содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте еще раз.'
            },
            {
            rule: 'required',
            errorMessage: 'Одно или несколько обязательных полей не заполнены или содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте еще раз.'
            },
        ])
        // .onSuccess((event) => sendForm(form));
   }

    
}

export default validateContactsMailForm;
