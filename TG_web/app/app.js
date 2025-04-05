// Получаем элементы формы
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const registrationForm = document.getElementById('registrationForm');

// Функция для проверки email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Функция для проверки пароля
function validatePassword(password) {
    return password.length >= 8 && /\d/.test(password);
}

// Функция для отображения ошибок
function showError(input, errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    input.classList.add('error');
}

// Функция для скрытия ошибок
function hideError(input, errorElement) {
    errorElement.style.display = 'none';
    input.classList.remove('error');
}

// Валидация в реальном времени
emailInput.addEventListener('input', () => {
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, emailError, 'Пожалуйста, введите корректный email.');
    } else {
        hideError(emailInput, emailError);
    }
});

passwordInput.addEventListener('input', () => {
    if (!validatePassword(passwordInput.value)) {
        showError(passwordInput, passwordError, 'Пароль должен содержать не менее 8 символов и хотя бы одну цифру.');
    } else {
        hideError(passwordInput, passwordError);
    }
});

// Обработка отправки формы
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const isEmailValid = validateEmail(emailInput.value);
    const isPasswordValid = validatePassword(passwordInput.value);

    if (isEmailValid && isPasswordValid) {
        alert('Регистрация прошла успешно!');
        // Здесь можно добавить отправку данных на сервер
    } else {
        alert('Пожалуйста, исправьте ошибки в форме.');
    }
});

