const form = document.querySelector('.form-contact');
const dataStore = {
    fullname: form.elements.fullname.value,
    email: form.elements.email.value,
    comment: form.elements.comment.value,
  };


document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('contact-info', dataStore));
  if (data) {
    fullname.value = data.fullname;
    email.value = data.email;
    comment.value = data.comment;
  }
});

