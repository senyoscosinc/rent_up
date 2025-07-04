const sampleProperties = [
    {
        id: 1,
        title: "John Doe's Property",
        price: "GHS 11,300/Month",
        bedrooms: 3,
        bathrooms: 2,
        sqft: "4,000",
        location: "East Legon Hills, Accra",
        image: "../assets/images/white_house.jpg",
        type: "rent"
    },
    {
        id: 2,
        title: "Modern 2BR Apartment",
        price: "GHS 5,800/Month",
        bedrooms: 2,
        bathrooms: 2,
        sqft: "1,800",
        location: "East Legon Hills, Accra",
        image: "../assets/images/apartment1.jpg",
        type: "rent"
    },
    {
        id: 3,
        title: "Luxury 5BR Mansion",
        price: "GHS 2,500,000",
        bedrooms: 5,
        bathrooms: 6,
        sqft: "10,000",
        location: "East Legon Hills, Accra",
        image: "../assets/images/mansion1.jpg",
        type: "sale"
    },
    {
        id: 4,
        title: "Co-working Office Space",
        price: "GHS 18,000/Month",
        bedrooms: 0,
        bathrooms: 4,
        sqft: "6,000",
        location: "East Legon Hills, Accra",
        image: "../assets/images/office1.jpg",
        type: "lease"
    },
    {
        id: 5,
        title: "1 Acre Prime Land",
        price: "GHS 950,000",
        bedrooms: 0,
        bathrooms: 0,
        sqft: "43,560",
        location: "East Legon Hills, Accra",
        image: "../assets/images/land1.jpg",
        type: "sale"
    },
    {
        id: 6,
        title: "Open-air Event Grounds",
        price: "GHS 8,000/Event",
        bedrooms: 0,
        bathrooms: 2,
        sqft: "20,000",
        location: "East Legon Hills, Accra",
        image: "../assets/images/event1.jpg",
        type: "lease"
    },
    {
        id: 7,
        title: "3BR Family Home",
        price: "GHS 850,000",
        bedrooms: 3,
        bathrooms: 3,
        sqft: "2,800",
        location: "East Legon Hills, Accra",
        image: "../assets/images/house2.jpg",
        type: "sale"
    },
    {
        id: 8,
        title: "Retail Space – Plaza Level",
        price: "GHS 7,000/Month",
        bedrooms: 0,
        bathrooms: 1,
        sqft: "1,000",
        location: "East Legon Hills, Accra",
        image: "../assets/images/shop1.jpg",
        type: "rent"
    },
    {
        id: 9,
        title: "Executive 4BR Duplex",
        price: "GHS 1,750,000",
        bedrooms: 4,
        bathrooms: 5,
        sqft: "5,200",
        location: "East Legon Hills, Accra",
        image: "../assets/images/duplex1.jpg",
        type: "sale"
    },
    {
        id: 10,
        title: "Mini Studio Apartment",
        price: "GHS 3,500/Month",
        bedrooms: 1,
        bathrooms: 1,
        sqft: "750",
        location: "East Legon Hills, Accra",
        image: "../assets/images/studio1.jpg",
        type: "rent"
    },
    {
        id: 11,
        title: "Land for Commercial Use",
        price: "GHS 1,200,000",
        bedrooms: 0,
        bathrooms: 0,
        sqft: "60,000",
        location: "East Legon Hills, Accra",
        image: "../assets/images/land2.jpg",
        type: "sale"
    },
    {
        id: 12,
        title: "Luxury Office Complex (Floor)",
        price: "GHS 25,000/Month",
        bedrooms: 0,
        bathrooms: 6,
        sqft: "10,000",
        location: "East Legon Hills, Accra",
        image: "../assets/images/office2.jpg",
        type: "lease"
    },
    {
        id: 13,
        title: "Warehouse Facility",
        price: "GHS 35,000/Month",
        bedrooms: 0,
        bathrooms: 3,
        sqft: "15,000",
        location: "East Legon Hills, Accra",
        image: "../assets/images/warehouse1.jpg",
        type: "rent"
    },
    {
        id: 14,
        title: "4BR Smart Home",
        price: "GHS 2,100,000",
        bedrooms: 4,
        bathrooms: 4,
        sqft: "6,200",
        location: "East Legon Hills, Accra",
        image: "../assets/images/smart_home.jpg",
        type: "sale"
    },
    {
        id: 15,
        title: "Event Hall (Indoor)",
        price: "GHS 10,000/Event",
        bedrooms: 0,
        bathrooms: 4,
        sqft: "12,000",
        location: "East Legon Hills, Accra",
        image: "../assets/images/event2.jpg",
        type: "lease"
    },

    // Add 35 more (IDs 16–50)
    ...Array.from({ length: 35 }, (_, i) => {
        const id = i + 16;
        const types = ["sale", "rent", "lease"];
        const titles = [
            "Penthouse Suite", "Urban Condo", "2BR Apartment", "Corner Retail Space", "Industrial Park Lot",
            "Mini Mart Unit", "Private Villa", "Hilltop Mansion", "Luxury Flat", "Cozy Cottage",
            "Land Near Main Road", "Event Lawn", "Serviced Office", "Executive Cabin", "3BR Apartment",
            "Studio Loft", "Suburban Duplex", "Roadside Shop", "Vacant Plot", "Tech Hub Space",
            "Shared Workspace", "Corporate Suite", "5BR Family Home", "Open Retail Hall", "Conference Center",
            "Multipurpose Room", "3-Acre Land", "Luxury Bungalow", "Glass-Front Office", "Café & Lounge Spot",
            "Boutique Retail Space", "Open Plan Office", "Smart Condo", "Penthouse Loft", "Serviced Apartment"
        ];
        const randomTitle = titles[i % titles.length];
        const randomPrice = ["GHS 4,200/Month", "GHS 850,000", "GHS 6,000/Month", "GHS 2,300,000", "GHS 9,000/Event", "GHS 1,150,000"];
        const randomSqft = [900, 1500, 3000, 4500, 8000, 12000, 20000];
        const randomImages = [
            "house3.jpg", "apartment2.jpg", "shop2.jpg", "office3.jpg", "event3.jpg", "land3.jpg"
        ];
        const bedrooms = [0, 1, 2, 3, 4, 5][Math.floor(Math.random() * 6)];
        const bathrooms = bedrooms > 0 ? bedrooms : Math.floor(Math.random() * 4);
        const sqft = `${randomSqft[Math.floor(Math.random() * randomSqft.length)]}`;
        return {
            id,
            title: randomTitle,
            price: randomPrice[Math.floor(Math.random() * randomPrice.length)],
            bedrooms,
            bathrooms,
            sqft,
            location: "East Legon Hills, Accra",
            image: `../assets/images/${randomImages[Math.floor(Math.random() * randomImages.length)]}`,
            type: types[Math.floor(Math.random() * types.length)]
        };
    })
];


// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load properties
    renderProperties();
    
    // Initialize search functionality
    initSearch();
    
    // Initialize sign in modal
    initSignInModal();
    
    // Initialize mobile menu
    initMobileMenu();
});

// Load properties into the grid
function renderProperties() {
    const grid = document.getElementById('propertiesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    // Display only the first 20 properties
    const first20 = sampleProperties.slice(0, 20);

    first20.forEach(property => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <div class="property-tag ${property.type}">${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</div>
            <img src="${property.image}" alt="Property Image" class="property-image">
            <div class="property-info">
                <h3>${property.title}</h3>
                <p class="location">${property.location}</p>
                <p class="price">${property.price}</p>
                <div class="property-specs">
                    ${property.sqft && property.sqft !== '-' ? `<span>${property.sqft} sqft</span>` : ''}
                    ${property.bedrooms ? `<span>${property.bedrooms} Bedrooms</span>` : ''}
                    ${property.bathrooms ? `<span>${property.bathrooms} Bathrooms</span>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}


// Initialize search functionality
function initSearch() {
    const searchInput = document.querySelector('.navbar-search input');
    const searchButton = document.querySelector('.navbar-search button');
    if (!searchInput || !searchButton) return;
    function performSearch() {
        const term = searchInput.value.toLowerCase();
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
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') performSearch();
    });
}

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