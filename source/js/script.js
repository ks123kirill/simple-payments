const isJS = function () {
  const check = document.querySelector('.check');
  const checkForms = check.querySelectorAll('.check__form');

  check.classList.remove('check--no-js');

  for (let i = 1; i < checkForms.length; i++) {
    // i = 1, что бы исключить первый .form
    checkForms[i].classList.add('check__form--closed');
  }
}

// const getActiveFormDesktop =  function () {}
// const getActiveFormMobile =  function () {}

isJS();
// getActiveFormDesktop();
// getActiveFormMobile();


//////////

