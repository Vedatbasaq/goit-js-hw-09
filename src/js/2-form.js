const form = document.querySelector('.feedback-form');

// localStorage'dan veriyi obje olarak alıyoruz, yoksa boş obje
const savedData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

// Form alanlarını dolduruyoruz
form.elements.email.value = savedData.email || '';
form.elements.message.value = savedData.message || '';

// input eventinde formData objesini güncelle ve localStorage'a kaydet
const formData = {
  email: savedData.email || '',
  message: savedData.message || '',
};

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// submit eventinde kontrol yap, logla, temizle
form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Please fill in all fields');
    return;
  }

  console.log({ email: formData.email, message: formData.message });

  localStorage.removeItem('feedback-form-state');

  // formData'yı temizle
  formData.email = '';
  formData.message = '';

  form.reset();
});
