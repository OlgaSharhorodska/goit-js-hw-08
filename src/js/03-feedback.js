import throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = form[(name = 'email')];
const message = form[(name = 'message')];


form.addEventListener('submit', onSubmitHandler);
form.addEventListener('input', throttle(onTextarealHandler, 500));

function onSubmitHandler(evt) {
  evt.preventDefault();
  if (email.value === '' || message.value === '') {
    return;
  }
  const savedInformation = JSON.parse(localStorage.getItem(LS_KEY));
  console.log(savedInformation);
  evt.currentTarget.reset();
  localStorage.removeItem(LS_KEY);
}

function onTextarealHandler(evt) {
  const allData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LS_KEY, JSON.stringify(allData));
  allData[evt.target.name] = evt.target.value;
  localStorage.setItem(LS_KEY, JSON.stringify(allData));
}

function savedStorageValue() {
    const savedText = JSON.parse(localStorage.getItem(LS_KEY));

    if (savedText) {
        if (savedText.message) {
            message.value = savedText.message;
        }
        if (savedText.email) {
            email.value = savedText.email;
        }
    }
}

savedStorageValue();