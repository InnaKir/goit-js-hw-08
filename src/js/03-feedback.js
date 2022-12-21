import throttle from 'lodash.throttle';

let formData = {};
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextInput, 500));

populateText();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onTextInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  console.log(formData);
}

function populateText() {
  const savedText = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedText) {
    formData = savedText;
    if (savedText.email) {
      form.elements.email.value = savedText.email;
    }
    if (savedText.message) {
      form.elements.message.value = savedText.message;
    }
  }
}
