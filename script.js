document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showSignupBtn = document.getElementById('show-signup');
    const showSigninBtn = document.getElementById('show-signin');

    showSignupBtn.addEventListener('click', () => {
        loginForm.classList.add('inactive');
        registerForm.classList.add('active');
    });

    showSigninBtn.addEventListener('click', () => {
        loginForm.classList.remove('inactive');
        registerForm.classList.remove('active');
    });
});