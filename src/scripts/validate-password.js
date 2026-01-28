const confirmPassword = document.getElementById('confirm-password');
const password = document.getElementById('password');

function validatePassword() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords do not match');
    } else {
        confirmPassword.setCustomValidity('');
    }

    return true;
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;