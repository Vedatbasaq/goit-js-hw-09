// Formu seçiyoruz
const form = document.querySelector('.feedback-form');

// localStorage'dan daha önce kaydedilmiş form verisini çekiyoruz.
// Eğer yoksa boş obje atıyoruz.
const savedData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

// Form alanlarını localStorage'dan çekilen verilerle dolduruyoruz.
// Eğer veri yoksa boş bırakıyoruz.
form.elements.message.value = savedData.message ?? '';
form.elements.email.value = savedData.email ?? '';

// formData objesini localStorage'dan gelen verilerle başlatıyoruz.
const formData = { ...savedData };

// Formdaki herhangi bir input değiştiğinde çalışır.
form.addEventListener('input', function (e) {
  // Değişen inputun name özelliğine göre formData objesini güncelliyoruz.
  formData[e.target.name] = e.target.value;

  // Güncellenen formData'yı localStorage'a JSON string olarak kaydediyoruz.
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Form gönderildiğinde çalışır.
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Sayfanın yenilenmesini engelliyoruz.

  // Email veya message alanları boşsa kullanıcıyı uyarıyoruz.
  if (
    e.target.elements.message.value === '' ||
    e.target.elements.email.value === ''
  ) {
    alert('Please fill in all fields');
    return;
  }

  // Form verilerini konsola yazdırıyoruz.
  console.log({
    message: e.target.elements.message.value,
    email: e.target.elements.email.value,
  });

  // localStorage'daki form verisini siliyoruz.
  localStorage.removeItem('feedback-form-state');

  // formData objesini temizliyoruz.
  formData.email = '';
  formData.message = '';

  // Formu sıfırlıyoruz.
  form.reset();
});
