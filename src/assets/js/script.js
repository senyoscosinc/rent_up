// Import consolidated data and functions
// Note: In vanilla JS, we'll include these scripts in HTML in order


// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load properties (first 20 for homepage)
    const first20 = allProperties.slice(0, 20);
    renderProperties(first20);

    // Initialize search functionality
    initSearch();

    // Initialize sign in modal
    initSignInModal();

    // Initialize mobile menu
    initMobileMenu();
});

// Main application logic


// Search functionality is now in searchUtils.js

// Initialize sign in modal
function initSignInModal() {
    const modal = document.getElementById('signInModal');
    const signInBtn = document.querySelector('.header-links a'); /* Updated selector */
    const closeBtn = document.querySelector('.close');
    const signInForm = document.getElementById('signInForm');
    
    // Open modal when clicking sign in
    signInBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex'; /* Changed to flex for centering */
    });
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Handle form submission
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically make an API call to authenticate
        console.log('Sign in attempt:', { email, password });
        
        // For demo purposes, just close the modal
        modal.style.display = 'none';
        
        // Clear the form
        signInForm.reset();
    });
    
    // Handle "Sign Up" link click
    const showSignUp = document.getElementById('showSignUp');
    if (showSignUp) {
        showSignUp.addEventListener('click', (e) => {
            e.preventDefault();
            // Here you would typically show the sign up form
            // For now, we'll just log it
            console.log('Show sign up form');
        });
    }
}

function initMobileMenu() {
    const hamburger = document.querySelector('.navbar-hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (!hamburger || !mobileMenu) return;
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.style.display = 'flex';
        } else {
            mobileMenu.style.display = 'none';
        }
    });
    // Hide mobile menu when resizing to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 700) {
            mobileMenu.classList.remove('open');
            mobileMenu.style.display = 'none';
        }
    });
    // Mobile search
    const mobileSearchInput = document.querySelector('.mobile-menu-search input');
    const mobileSearchButton = document.querySelector('.mobile-menu-search button');
    if (mobileSearchInput && mobileSearchButton) {
        function performMobileSearch() {
            const term = mobileSearchInput.value.toLowerCase();
            const cards = document.querySelectorAll('.property-card');
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const location = card.querySelector('.location').textContent.toLowerCase();
                if (title.includes(term) || location.includes(term)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        }
        mobileSearchButton.addEventListener('click', performMobileSearch);
        mobileSearchInput.addEventListener('keypress', e => {
            if (e.key === 'Enter') performMobileSearch();
        });
    }
} 