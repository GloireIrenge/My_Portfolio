const contactForm = document.forms.myForm;
const emailInput = contactForm.email;
const messagePanel = document.querySelector('.error');
const submitButton = document.querySelector('.button-submit');
const LowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  if (!LowerCase(email)) {
    messagePanel.innerHTML = '<p><b>Error:</b> Your email address should be lowercase.</p>';
    messagePanel.style.visibility = 'visible';
    submitButton.style.marginTop = '30px';
  } else {
    messagePanel.style.visibility = 'hidden';
    contactForm.submit();
  }
});