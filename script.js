const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const togglePasswordButtons = document.querySelectorAll('.toggle-password-btn');

// Show input error message
function showError(input, message) {
  const formControl = input.closest('.form-control');
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.closest('.form-control');
  formControl.className = 'form-control success';
  formControl.querySelector('small').innerText = '';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "L'adresse e-mail n'est pas valide");
  }
}

// Check minimum age
function checkAge(input) {
  const value = input.value.trim();
  const ageValue = Number(value);

  if (value === '') {
    return;
  }

  if (!Number.isInteger(ageValue) || ageValue < 0) {
    showError(input, "L'âge n'est pas valide");
  } else if (ageValue < 18) {
    showError(input, 'Vous devez avoir au moins 18 ans.');
  } else {
    showSuccess(input);
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} est obligatoire`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} doit comporter au moins ${min} caractères`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} doit comporter moins de ${max} caractères`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Les mots de passe ne correspondent pas');
  }
}

// Get fieldname
function getFieldName(input) {
  const fieldNames = {
    username: "Le nom d'utilisateur",
    email: "L'adresse e-mail",
    age: "L'âge",
    password: 'Le mot de passe',
    password2: 'La confirmation du mot de passe'
  };

  return fieldNames[input.id] || input.id;
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email, age, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkAge(age);
  checkPasswordsMatch(password, password2);

});

togglePasswordButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const input = document.getElementById(button.dataset.target);
    const isHidden = input.type === 'password';

    input.type = isHidden ? 'text' : 'password';
    button.innerText = isHidden ? 'Masquer' : 'Afficher';
  });
});
