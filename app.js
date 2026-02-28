const newsletter = document.querySelector('.newsletter');
const newsletterSuccessMessage = document.querySelector('.newsletter__success-message');
const newsletterSubmitButton = document.querySelector('.newsletter__submit-button');

newsletterSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  newsletter.classList.add('hide');
  newsletterSuccessMessage.classList.remove('hide');
});
