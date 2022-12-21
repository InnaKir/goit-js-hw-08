// import throttle from 'lodashn.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaInputnnnn);
// email.addEventListener('input', onEmailInput);

populateText();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onTextareaInput(evt) {
  const message = evt.currentTarget.value;
  localStorage.setItem('feedback-form-state', message);
  console.log(message);
}

// function onEmailInput(evt) {
//   const valueEmail = evt.currentTarget.value;
//   localStorage.setItem('feedback-form-state', valueEmail);
//   console.log(valueEmail);
// }

function populateText() {
  const savedText = localStorage.getItem('feedback-form-state');
  if (savedText) {
    textarea.value = savedText;
  }
}
