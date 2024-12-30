function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    
    if (email === '' || password === '') {
        errorMessage.textContent = 'Please fill out both fields.';
        return false;
    }

    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    
    errorMessage.textContent = '';
    alert('Login Successful!');
    return true;
}