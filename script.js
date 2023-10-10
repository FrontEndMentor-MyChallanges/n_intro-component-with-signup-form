'use strict';

const form = document.querySelector('.form');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.email');

const nameRegex = new RegExp(/^[a-zA-Z ]{2,30}$/);
const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm);
const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);

// FIXME - create working validation and then refactor it
// form.addEventListener('submit', function (e) {
// 	e.preventDefault();

// 	let checkFirstName, checkLastName, checkEmail, checkPassword;

// 	checkFirstName ??= nameRegex.test(firstName.value);
// 	// checkLastName ??= nameRegex.test(lastName?.value);
// 	// checkEmail ??= emailRegex.test(email.value);
// 	// checkPassword ??= passwordRegex.test(password.value);

// 	if (!checkFirstName) {
// 		firstName.closest('div').querySelector('img').classList.remove('hidden');
// 		firstName.closest('.input-container').querySelector('.errMsg').classList.remove('hidden');
// 		firstName.closest('.input-container').querySelector('.errMsg').classList.add('flex');
// 	} else {
// 		firstName.closest('div').querySelector('img').classList.add('hidden');
// 		firstName.closest('.input-container').querySelector('.errMsg').classList.add('hidden');
// 		firstName.closest('.input-container').querySelector('.errMsg').classList.remove('flex');
// 	}

// 	// if (!checkFirstName) return;

// 	// console.log(`${checkFirstName}`);
// 	// console.log(`${checkLastName}`);
// });
