var contactForm = document.getElementById("contact-form");

var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");

var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (nameInput.value === "") {
    nameError.innerText = "Please enter your name";
  } else {
    nameError.innerText = "";
  }

  if (emailInput.value === "") {
    emailError.innerText = "Please enter your email";
  } else if (!isValidEmail(emailInput.value)) {
    emailError.innerText = "Please enter a valid email";
  } else {
    emailError.innerText = "";
  }

  if (messageInput.value === "") {
    messageError.innerText = "Please enter a message";
  } else {
    messageError.innerText = "";
  }

  if (
    nameError.innerText === "" &&
    emailError.innerText === "" &&
    messageError.innerText === ""
  ) {
    contactForm.submit();
  }
});

function isValidEmail(email) {
  var emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  return emailRegex.test(email);
}
