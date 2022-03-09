import Inputmask from '/node_modules/inputmask/dist/inputmask.es6.js';

import JustValidate from 'just-validate';
// import sendForm from './sendForm.js';

const validateForm = (tel, form, name, last, mail, phone, businessName, located, address, city, zip, state) => {
    const sel = document.querySelector(tel);
    const im = new Inputmask("+ [9999] - 999-999-9999");
    if (sel) {
        im.mask(sel);
    }
    
   if(document.querySelector(form)) {
        const validation = new JustValidate(form);

        validation
        .addField(name, [
            {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Минимум 3 символа'
            },
            {
            rule: 'required',
            errorMessage: 'This field is required',
            },
        ])
        .addField(last, [
            {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Минимум 3 символа'
            },
            {
            rule: 'required',
            errorMessage: 'This field is required',
            },
        ])
        .addField(mail, [
            {
            rule: 'required',
            errorMessage: 'Specify Email',
            },
            {
            rule: 'email',
            errorMessage: 'Please enter a valid e-mail',
            },
        ])
        .addField( phone, [
            {
            rule: 'required',
            errorMessage: 'Specify phone',
            },
            {
                validator: () => {
                    const phone = sel.inputmask.unmaskedvalue();
                    return Number(phone);
                },
                errorMessage: 'Please enter a valid phone number',
            }
        ])
        .addField(businessName, [
            {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Minimum 3 characters'
            },
            {
            rule: 'required',
            errorMessage: 'This field is required',
            },
        ])
        .addField(located, [
            {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Minimum 3 characters'
            },
            {
            rule: 'required',
            errorMessage: 'This field is required',
            },
        ])
        .addField(address, [
            {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Minimum 3 characters'
            },
            {
            rule: 'required',
            errorMessage: 'This field is required',
            },
        ])
        .addField(city, [
            {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Minimum 3 characters'
            },
            {
            rule: 'required',
            errorMessage: 'This field is required',
            },
        ])
        .addField(zip, [
            {
            rule: 'minLength',
            value: 6,
            errorMessage: 'Minimum 6 characters'
            },
            {
            rule: 'required',
            errorMessage: 'This field is required',
            },
        ])
        .addField(state, [
            {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Minimum 3 characters'
            },
            {
            rule: 'required',
            errorMessage: 'This field is required',
            },
        ])
        // .onSuccess((event) => sendForm(form));
   }

    
}

export default validateForm;
