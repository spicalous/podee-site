(function() {
  var inputName = document.querySelector('#input-full-name');
  var inputEmail = document.querySelector('#input-email');
  var inputTel = document.querySelector('#input-tel');
  var btnSubmit = document.querySelector('#btn-submit');
  var signUpAlert = document.querySelector('#sign-up-alert');

  btnSubmit.addEventListener('click', function() {
    var name = inputName.value.trim();
    var email = inputEmail.value.trim();
    var phoneNumber = inputTel.value.trim();

    signUpAlert.classList.add('invisible');
    signUpAlert.classList.remove('alert-primary');
    signUpAlert.classList.remove('alert-danger');
    inputEmail.classList.remove('is-invalid');
    inputTel.classList.remove('is-invalid');

    if (email || phoneNumber) {
      var options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phoneNumber })
      };

      fetch('https://manager.podee.app/api/sign-up', options).then(function(response) {
        signUpAlert.classList.add('alert-primary');
        signUpAlert.classList.remove('invisible');
        signUpAlert.innerText = 'Thanks for signing up! Someone will contact you shortly.';
      }).catch(function(error) {
        signUpAlert.classList.add('alert-danger');
        signUpAlert.classList.remove('invisible');
        signUpAlert.innerText = 'Something went wrong :( Please email info@podee.app';
      });
    } else {
      inputEmail.classList.add('is-invalid');
      inputTel.classList.add('is-invalid');
    }
  });
})();

