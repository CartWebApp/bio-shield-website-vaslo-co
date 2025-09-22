// Wait for the entire HTML document to be loaded and parsed
document.addEventListener('DOMContentLoaded', () => {
    
    // Find all the necessary elements from the page
    const reviewForm = document.getElementById('review-form');
    const reviewsContainer = document.getElementById('reviews-container');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // Make sure all the elements were found before adding event listeners
    if (reviewForm && reviewsContainer && modalOverlay && closeModalBtn) {
        
        // This function will run ONLY when the form is submitted
        reviewForm.addEventListener('submit', function(event) {
            
            // 1. Prevent the page from reloading
            event.preventDefault();

            // 2. Get the current values from the form inputs
            const name = document.getElementById('reviewer-name').value;
            const ratingValue = document.getElementById('rating').value;
            const reviewText = document.getElementById('review-text').value;

            // 3. Create the star rating string (e.g., ★★★★☆)
            const ratingStars = '★'.repeat(ratingValue) + '☆'.repeat(5 - ratingValue);
            
            // 4. Get today's date for the review
            const reviewDate = new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // 5. Create a new <div> element to hold the review
            const newReview = document.createElement('div');
            newReview.classList.add('review'); // Add the 'review' class for styling

            // 6. Fill the new <div> with the review content
            newReview.innerHTML = `
                <h3>${name}</h3>
                <p class="review-rating">${ratingStars}</p>
                <p class="review-text">${reviewText}</p>
                <p class="review-date">${reviewDate}</p>
            `;

            // 7. Add the newly created review to the TOP of the reviews list
            reviewsContainer.prepend(newReview);

            // 8. Clear the form fields for the next submission
            reviewForm.reset();
            
            // 9. Show the "Thank You" pop-up modal
            modalOverlay.style.display = 'flex';
        });

        // --- Logic to close the pop-up modal ---

        function closeModal() {
            modalOverlay.style.display = 'none';
        }

        // Close modal when the 'Close' button is clicked
        closeModalBtn.addEventListener('click', closeModal);

        // Close modal when the dark background area is clicked
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
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