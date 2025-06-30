const form = document.querySelector('.feedback-form');

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
const formData = {
  email: savedData?.email ?? '',
  message: savedData?.message ?? '',
};

// Form alanlarını doldur
form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

// Input dinleyici
form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Submit dinleyici
form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Please fill in all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
