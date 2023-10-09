'use strict';

const form = document.querySelector('.form');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.email');

const nameRegex = new RegExp(/^[a-zA-Z ]{2,30}$/);
const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm);
const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const checkFirstName = nameRegex.test(firstName);
  const checkLastName = nameRegex.test(lastName);
  const checkEmail = emailRegex.test(email);
  const checkPassword = passwordRegex.test(password);
});
