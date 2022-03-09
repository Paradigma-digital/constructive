import Inputmask from '/node_modules/inputmask/dist/inputmask.es6.js';

import JustValidate from 'just-validate';
// import sendForm from './sendForm.js';

const validateContactsTelForm = () => {
    // const sel = document.querySelector(tel);
    // const im = new Inputmask("+ [9999] - 999-999-9999");
    // if (sel) {
    //     im.mask(sel);
    // }
    
   if(document.querySelector('#contacts__form_tel')) {
        const validation = new JustValidate('#contacts__form_tel');

        validation
        .addField('#contacts__form_tel input[name="user-name"]', [
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
        .addField('#contacts__form_tel input[name="user-tel"]', [
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

export default validateContactsTelForm;
