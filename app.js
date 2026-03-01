const newsletter = document.querySelector(".newsletter");
const newsletterSuccessMessage = document.querySelector(
  ".newsletter__success-message",
);
const newsletterSubmitButton = document.querySelector(
  ".newsletter__submit-button",
);
const emailInput = document.getElementById("email-input");
const emailErrorMessage = document.querySelector(".email__error-message");

newsletterSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (emailRegex.test(emailInput.value)) {
    FormSubmitSuccess();
  } else {
    showFormSubmitError();
  }
});

emailInput.addEventListener("input", () => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (emailRegex.test(emailInput.value)) {
    deleteFormSubmitError();
  } else {
    showFormSubmitError();
  }
});

function FormSubmitSuccess() {
  newsletter.classList.add("hide");
  newsletterSuccessMessage.classList.remove("hide");
}

function showFormSubmitError() {
  emailInput.classList.add("email__error");
  emailErrorMessage.classList.remove("hide");
}

function deleteFormSubmitError() {
  emailInput.classList.remove("email__error");
  emailErrorMessage.classList.add("hide");
}
