import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form iput'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onForm);
refs.form.addEventListener('iput', throttle(onFormInput, 500));
const KEY_FORM = 'feedback-form-state';

const {email, massage} = refs.form.elements;

saveEl();
FormData = {};
function onForm(ev) {
    const mailEl = email.value;
    const massageEl = massage.value;
    const FormDataSubmit = 
    {mailEl, massageEl}
    console.log(FormDataSubmit);
    ev.preventDefault();
    ev.curretTarget.reset();
    localStorage.removeItem(KEY_FORM);
}
console.log(FormData);
function onFormInput(ev) {
    formData = {email: email.value, massage: massage.value};
    const stringifyKey = localStorage.setItem(KEY_FORM, JSON.stringify(formData));
}
function saveEl() {
    let saveMsg = JSON.parse(localStorage.getItem(KEY_FORM)) || '';

    if (saveMsg){
        email.value = saveMsg.email || '';
        massage.value = saveMsg.massage || '';
        return ;
    }    
}