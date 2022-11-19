import throttle from 'lodash.throttle';

const KEY_STORAGE = 'feedback-form-state';

const formValues = {
  email: '',
  message: '',
};

const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input[name="email"]'),
  inputMessage: document.querySelector('textarea[name="message"]'),
  btnSubmit: document.querySelector('button'),
};

refs.formEl.addEventListener('input', throttle(onFormInput, 500));
refs.btnSubmit.addEventListener('click', onBtnSubmit);

function onBtnSubmit(evt) {
  evt.preventDefault();
  refs.formEl.reset();
  localStorage.removeItem(KEY_STORAGE);
  console.log(formValues);
}

function onFormInput(event) {
  const target = event.target;

  switch (target) {
    case refs.inputEmail:
      formValues.email = target.value;

      break;
    case refs.inputMessage:
      formValues.message = target.value;

      break;
  }
  localStorage.setItem(KEY_STORAGE, JSON.stringify(formValues));
}

function showSavedText() {
  const savedText = localStorage.getItem(KEY_STORAGE);
  if (savedText) {
    const savedObj = JSON.parse(savedText);

    refs.inputEmail.value = savedObj.email;
    refs.inputMessage.value = savedObj.message;
  }
}

showSavedText();
