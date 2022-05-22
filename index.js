const form = document.getElementById('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

//email validation
email.addEventListener("input", function (e) {
    if (email.validity.typeMismatch) {
      email.reportValidity();

    } else {
      email.setCustomValidity("");
    }
  });

//country validation
country.addEventListener("input", function (e) {
    if (country.validity.patternMismatch) {
      country.setCustomValidity("Please add your country (letters and spaces only)");
      country.reportValidity();

    } else {
      country.setCustomValidity("");
    }
  });

//zip code validation
zipcode.addEventListener("input", function (e) {
    if (zipcode.validity.patternMismatch) {
        zipcode.setCustomValidity("Codes must be numbers only");
        zipcode.reportValidity();

    } else {
        zipcode.setCustomValidity("");
    }
  });

//password validation
password.addEventListener("input", function (e) {
    if (password) {
        password.reportValidity();

    } else {
        confirmPassword.setCustomValidity("");
    }
  });

//confirm password validation
confirmPassword.addEventListener("input", function (e) {
    if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Please make sure passwords match");
        confirmPassword.reportValidity();

    } else {
        confirmPassword.setCustomValidity("");
    }
  });

  //confirm form is all valid before submit
  form.addEventListener("submit", (e) => {

    //if all above are valid, submit form
    if (email.validity.valid && 
        email.value != '' && 
        country.validity.valid && 
        country.value != '' &&
        zipcode.validity.valid &&
        zipcode.value != '' &&
        password.validity.valid &&
        password.value != '' &&
        confirmPassword.validity.valid &&
        confirmPassword.value != ''
        ) {
            e.preventDefault();
            alert('all good')
        } else {
            e.preventDefault();
            alert('nah m8')
        }
  });