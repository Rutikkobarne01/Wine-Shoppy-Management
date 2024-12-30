function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'Please fill out all fields.';
        return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return false;
    }

    errorMessage.textContent = 'You are not a person you can,t Write proper content';
    alert('Wine Shop Your Account Created');
    return true;
}