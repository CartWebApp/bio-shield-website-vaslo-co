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

// This script makes the navigation bar hide when scrolling down and appear when scrolling up.

// We start by assuming the last scroll position was at the very top of the page.
let lastScrollY = window.scrollY;

// We listen for the 'scroll' event on the window.
window.addEventListener("scroll", () => {
    // If the user has scrolled down the page...
    if (lastScrollY < window.scrollY) {
        // ...add the 'header-hidden' class to the header.
        document.querySelector('header').classList.add("header-hidden");
    } else {
        // Otherwise (if the user has scrolled up)...
        // ...remove the 'header-hidden' class.
        document.querySelector('header').classList.remove("header-hidden");
    }

    // Finally, we update the last scroll position to the current one.
    lastScrollY = window.scrollY;
});