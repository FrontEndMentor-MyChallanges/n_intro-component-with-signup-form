'use strict';

// Form fields
const form = document.querySelector('.form');
const firstNameEl = document.querySelector('.firstName');
const lastNameEl = document.querySelector('.lastName');
const emailEl = document.querySelector('.email');
const passwordEl = document.querySelector('.password');
const btn = document.querySelector('.btnClaim');

//////////////////////

// Utility functions
const removeClassesError = input => {
	input.classList.remove(
		'[&:not(:focus)]:text-primaryGreen',
		'focus:text-primaryGreen',
		'[&:not(:focus)]:outline-primaryGreen',
		'focus:outline-primaryGreen',
		'text-primaryGreen',
		'[&:not(:focus)]:text-textDark'
	);
};

const addClassesError = input => {
	input.classList.add(
		'focus:text-primaryRed',
		'text-primaryRed',
		'[&:not(:focus)]:text-primaryRed',
		'border-primaryRed',
		'[&:not(:focus)]:outline-primaryRed',
		'focus:outline-primaryRed'
	);
};

const removeClassesSuccess = input => {
	input.classList.remove(
		'[&:not(:focus)]:text-primaryRed',
		'focus:text-primaryRed',
		'[&:not(:focus)]:outline-primaryRed',
		'focus:outline-primaryRed',
		'border-primaryRed'
	);
};

const addClassesSuccess = input => {
	input.classList.add(
		'focus:text-primaryGreen',
		'[&:not(:focus)]:outline-primaryGreen',
		'focus:outline-primaryGreen',
		'[&:not(:focus)]:text-textDark'
	);
};

const isRequired = value => (value === '' ? false : true);
const isBetween = (length, min, max) => (length < min || length > max ? false : true);
const isNameValid = name => {
	const nameRegex = new RegExp(/^[a-zA-Z ]{2,30}$/);
	return nameRegex.test(name);
};

const isEmailValid = email => {
	const emailRegex = new RegExp(
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
	return emailRegex.test(email);
};

const isPasswordSecure = password => {
	const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);
	return passwordRegex.test(password);
};

const showError = (input, message = '') => {
	const formInput = input.closest('.input-container');
	const formErr = input.closest('.msg-container');
	const img = formInput.querySelector('img');

	// Show err icon
	img.src = './images/icon-error.svg';
	img.classList.remove('hidden');

	// Show err message
	const error = formErr.querySelector('.errMsg');
	error.textContent = message;
	error.classList.remove('hidden');
	error.classList.add('flex');

	// Change border color
	removeClassesError(input);
	addClassesError(input);
};

const showSuccess = input => {
	const formInput = input.closest('.input-container');
	const formErr = input.closest('.msg-container');
	const img = formInput.querySelector('img');

	// Show success icon
	img.src = './images/icon-success.svg';
	img.classList.remove('hidden');

	// Remove error message
	const error = formErr.querySelector('.errMsg');
	// error.textContent = message;
	error.classList.remove('flex');
	error.classList.add('hidden');

	// Change border color
	removeClassesSuccess(input);
	addClassesSuccess(input);
};

//////////////////////

// Input field validating functions
const checkFirstName = () => {
	//Init values
	let valid = false;
	const min = 2,
		max = 25;

	// Get input value
	const firstName = firstNameEl.value.trim();

	// Validation
	if (!isRequired(firstName)) {
		showError(firstNameEl, 'First name cannot be empty');
	} else if (!isNameValid(firstName)) {
		showError(firstNameEl, `First name must be between ${min} and ${max} letters`);
	} else {
		showSuccess(firstNameEl);
		valid = true;
	}

	return valid;
};

const checkLastName = () => {
	// Init values
	let valid = false;
	const min = 2,
		max = 25;

	// Get input value
	const lastName = lastNameEl.value.trim();

	// Validation
	if (!isRequired(lastName)) {
		showError(lastNameEl, 'Last name cannot be empty');
	} else if (!isNameValid(lastName)) {
		showError(lastNameEl, `Last name must be between ${min} and ${max} letters`);
	} else {
		showSuccess(lastNameEl);
		valid = true;
	}

	return valid;
};

const checkEmail = () => {
	// Init values
	let valid = false;

	// Get input value
	const email = emailEl.value.trim();

	// Validation
	if (!isRequired(email)) {
		showError(emailEl, 'Email cannot be empty');
	} else if (!isEmailValid(email)) {
		showError(emailEl, 'Looks like this is not an email');
	} else {
		showSuccess(emailEl);
		valid = true;
	}

	return valid;
};

const checkPassword = () => {
	// Init values
	let valid = false;

	// get input value
	const password = passwordEl.value.trim();

	// Validation
	if (!isRequired(password)) {
		showError(passwordEl, 'Password cannot be empty');
	} else if (!isPasswordSecure(password)) {
		showError(passwordEl, '8 chars, 1 lower, 1 upper, 1 number, 1 special char');
	} else {
		showSuccess(passwordEl);
		valid = true;
	}

	return valid;
};

const validateForm = () => {
	let isFirstNameValid = checkFirstName(),
		isLastNameValid = checkLastName(),
		isEmailValid = checkEmail(),
		isPasswordSecure = checkPassword();

	let isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && isPasswordSecure;
	return isFormValid;
};

form.addEventListener('submit', function (e) {
	e.preventDefault();

	// Validate forms
	let formValid = validateForm();

	// Submit
	if (formValid) {
		console.log('Form validated, can be send to server');
	} else {
		console.log('Something is wrong. Check inputs!');
	}
});

form.addEventListener('input', function (e) {
	switch (e.target.id) {
		case 'firstName':
			checkFirstName();
			break;
		case 'lastName':
			checkLastName();
			break;
		case 'email':
			checkEmail();
			break;
		case 'password':
			checkPassword();
			break;
	}
	let isFormValid = validateForm();
	if (isFormValid) {
		btn.classList.remove('bg-gray-200', 'cursor-auto');
		btn.classList.add(
			'cursor-pointer',
			'bg-primaryGreen',
			'shadow-[0_6px_0_0_rgba(42,165,112,1)]',
			'hover:bg-[#60d6a3]',
			'transition-all',
			'active:translate-y-1',
			'active:shadow-[0_4px_0_0_rgba(42,165,112,1)]',
			'focus:outline-[#2db178]'
		);
		btn.removeAttribute('disabled');
	} else {
		btn.classList.add('bg-gray-200', 'cursor-auto');
		btn.classList.remove(
			'bg-primaryGreen',
			'shadow-[0_6px_0_0_rgba(42,165,112,1)]',
			'hover:bg-[#60d6a3]',
			'transition-all',
			'active:translate-y-1',
			'active:shadow-[0_4px_0_0_rgba(42,165,112,1)]',
			'focus:outline-[#2db178]'
		);
		btn.setAttribute('disabled', true);
	}
});

/*
class=" btnClaim bg-primaryGreen w-full px-4 py-3 text-white uppercase rounded-md
          shadow-[0_6px_0_0_rgba(42,165,112,1)] tracking-wider hover:bg-[#60d6a3] transition-all active:translate-y-1
          active:shadow-[0_4px_0_0_rgba(42,165,112,1)] focus:outline-[#2db178]"
*/
