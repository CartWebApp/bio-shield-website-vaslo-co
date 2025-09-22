document.addEventListener('DOMContentLoaded', function() {
    // Elements for toggling forms
    const loginFormContainer = document.getElementById('login-form');
    const registerFormContainer = document.getElementById('register-form');
    const showSignupBtn = document.getElementById('show-signup');
    const showSigninBtn = document.getElementById('show-signin');

    // Elements for pop-up and submission
    const signInForm = document.querySelector('#login-form form');
    const signUpForm = document.querySelector('#register-form form');
    const popup = document.getElementById('popup-notification');

    // --- Logic for Toggling Forms ---
    showSignupBtn.addEventListener('click', () => {
        loginFormContainer.classList.add('inactive');
        registerFormContainer.classList.add('active');
    });

    showSigninBtn.addEventListener('click', () => {
        loginFormContainer.classList.remove('inactive');
        registerFormContainer.classList.remove('active');
    });

    // --- New Logic for Form Submission ---

    // Listen for submission on the Sign In form
    signInForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from reloading the page
        showPopup("Thank you for signing in!");
        
        // Wait 1.5 seconds before redirecting to allow user to see the message
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    });

    // Listen for submission on the Sign Up form
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from reloading the page
        showPopup("Thank you for signing up!");

        // Wait 1.5 seconds before redirecting
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    });

    // Helper function to show and hide the popup
    function showPopup(message) {
        popup.textContent = message;
        popup.classList.add('show');

        // Automatically hide the pop-up after 3 seconds
        setTimeout(() => {
            popup.classList.remove('show');
        }, 3000);
    }
});