/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* Plan Trip Page Form - Random Eligibility */
function randomWinner(event) {
  let randomCountry = document.getElementsByTagName("Option");
  let eli = document.getElementsByClassName("eligibility");

  for (i = 0; i < arr.length; i++) {
    if (randomCountry === 'United States' || randomCountry === 'Canada') {
      eli.push('You are eligible for a direct flight!');
      eli.classList.add("success");
    } else {
      eli.push('You are not eligible for a direct flight.');
    }
  }
}

/* Accordion Action on FAQ Page*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* Contact form validation */
function validateForm(event) {
  const formErrors = document.getElementById("formErrors");
  const fName = document.getElementById("fName");
  const lName = document.getElementById("lName");
  const email = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageBox");
  const errors = [];

  formErrors.classList.add("hide");
  fName.classList.remove("error");
  lName.classList.remove("error");
  email.classList.remove("error");

  if (!fName.value.length < 1 || !fName.value !== "") {
    errors.push("Missing first name.");
    fName.classList.add("error");
  }

  if (!lName.value.length < 1 || !lName.value !== "") {
    errors.push("Missing last name.");
    lName.classList.add("error");
  }

  const regexEmail = /[A-Za-z]+@[A-Za-z]+\.com/i;
  if (!email.value.length < 1 || !email.value !== regexEmail) {
    errors.push("Must provide a valid email address.");
    email.classList.add("error");
  }

  if (!messageInput.value.length < 1 || !messageInput.value !== "") {
    errors.push("Must provide a message.");
    messageInput.classList.add("error");
  }

  if (errors.length > 0) {
    formErrors.classList.remove("hide");
    const errorList = document.querySelector("#formErrors");
    errors.forEach((error) => {
      const li = document.createElement("li");
      li.innerHTML = error;
      formErrors.appendChild(li);
    });
  }
}

document.getElementById("submit").addEventListener("click", function(event) {
  validateForm();
  event.preventDefault();
});

document.getElementsByClassName("eligibility").addEventListener("click", function(event) {
  randomWinner();
  event.preventDefault();
});