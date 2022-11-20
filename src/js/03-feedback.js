import throttle from 'lodash.throttle';

const KEY_STORAGE = 'feedback-form-state';

let formValues = {};

const refs = {
  formEl: document.querySelector('.feedback-form'),
  btnSubmit: document.querySelector('button'),
};

refs.formEl.addEventListener('input', throttle(onFormInput, 500));
refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(KEY_STORAGE);
  console.log(formValues);
}

function onFormInput(event) {
  formValues[event.target.name] = event.target.value.trim();

  localStorage.setItem(KEY_STORAGE, JSON.stringify(formValues));
}

function showSavedText() {
  const savedText = localStorage.getItem(KEY_STORAGE);
  if (savedText) {
    formValues = JSON.parse(savedText);

    const keys = Object.keys(formValues);
    for (const key of keys) {
      refs.formEl.elements[key].value = formValues[key];
    }
  }
}

showSavedText();
