const form = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

if (localStorage.getItem('feedback-form-state')) {
  form.elements.message.value =
    JSON.parse(localStorage.getItem('feedback-form-state')).message ?? '';
  form.elements.email.value =
    JSON.parse(localStorage.getItem('feedback-form-state')).email ?? '';
}

form.addEventListener('input', function (e) {
  if (e.target.name === 'message') {
    formData.message = e.target.value;
  } else {
    formData.email = e.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (
    e.target.elements.message.value === '' ||
    e.target.elements.email.value === ''
  ) {
    alert('Please fiil in all fields');
  } else {
    console.log({
      message: e.target.elements.message.value,
      email: e.target.elements.email.value,
    });
    localStorage.removeItem('feedback-form-state');
    for (const key of Object.keys(formData)) {
      formData[key] = '';
    }
    form.reset();
  }
});
