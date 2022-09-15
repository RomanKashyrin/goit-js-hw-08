import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input'),
  submitBtn: document.querySelector('button'),
};

let formData = {};

updateTextarea();

refs.form.addEventListener('input', throttle(inputText, 500));
refs.form.addEventListener('submit', formSubmit);

function inputText(e) {
  formData[e.target.name] = e.target.value;
  const stringifiedData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, stringifiedData);
}

function formSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function updateTextarea() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    formData = JSON.parse(data);
    refs.input.value = formData.email || '';
    refs.textarea.value = formData.message || '';
  }
}
