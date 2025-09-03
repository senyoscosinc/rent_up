// Property rendering functions

// Unified renderProperties function
function renderProperties(propertiesList, gridId = 'propertiesGrid') {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    grid.innerHTML = '';

    if (propertiesList.length === 0) {
        grid.innerHTML = '<p style="color:#fff;text-align:center;width:100%">No properties found.</p>';
        return;
    }

    propertiesList.forEach(property => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <div class="property-tag ${property.type}">${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</div>
            <img src="${property.image}" alt="Property Image" class="property-image">
            <div class="property-info">
                <h3>${property.title}</h3>
                <p class="location">${property.location}</p>
                <div class="property-specs">
                    ${property.sqft && property.sqft !== '-' ? `<span>${property.sqft} sqft</span>` : ''}
                    ${property.bedrooms ? `<span>${property.bedrooms} Bedrooms</span>` : ''}
                    ${property.bathrooms ? `<span>${property.bathrooms} Bathrooms</span>` : ''}
                </div>
                <p class="price">${property.price}</p>
            </div>
            <button class="view-property-btn">View property</button>
        `;

        // Attach click listener for details display (only on button, not whole card)
        card.querySelector('.view-property-btn').addEventListener('click', (e) => {
            e.stopPropagation(); // prevent bubbling
            showPropertyDetails(property);
        });

        grid.appendChild(card);
    });
}

// Render single property for property view page (placeholder)
function renderSingleProperty(property) {
    const container = document.querySelector('.property-details-main');
    if (!container || !property) return;

    console.log('Rendering single property:', property);
}


// Show property details in the same page
// Show property details in the same page with bounce animation
function showPropertyDetails(property) {
    const detailsSection = document.getElementById('propertyDetailsSection');
    const detailsContent = document.getElementById('propertyDetailsContent');
   
    detailsContent.innerHTML = `
        <div class="property-details-header">
            <h1>${property.title}</h1>
            <div class="property-details-tag ${property.type}">
                ${property.type.charAt(0).toUpperCase() + property.type.slice(1)}
            </div>
        </div>
        <p class="property-details-location">${property.location}</p>
        <div class="property-details-main">
            <div class="property-image-large">
                <img src="${property.image}" alt="Property Image">
            </div>
            <div class="property-info-detailed">
                <h2><strong>${property.price}</strong></h2>
                <div class="property-views">
                    <p>This property has been viewed by 10 people</p>
                </div>
                <div class="property-specs-detailed">
                    <p><strong>Property details</strong></p>
                    ${property.sqft ? `<p><strong>Size:</strong> ${property.sqft} sqft</p>` : ''}
                    ${property.bedrooms ? `<p><strong>Bedrooms:</strong> ${property.bedrooms}</p>` : ''}
                    ${property.bathrooms ? `<p><strong>Bathrooms:</strong> ${property.bathrooms}</p>` : ''}
                </div>
                <hr>
                <p><strong>Amenities</strong></p>
                <div class="property-amenities">
                    <p>On street parking</p>
                    <p>Water heating</p>
                    <p>Air conditioning</p>
                    <p>Personal utility meters</p>
                    <p>Security intercom</p>
                    <p>Central garbage disposal</p>
                </div>
            </div>
            </div>
            <div class="book-viewing">
            <div class="booking-instructions">
                <h1>Interested in this property?</h1>
                <p>Book a viewing now.</p>
                <hr>
                <p>Disclaimer:</p>
                <p>By submitting this form, you acknowledge and agree to the following:</p>
                <ol>
                    <li>Accuracy of Information: You are responsible for ensuring that all information entered in this form is accurate and complete.</li>
                    <li>Submission to Property Owner: All details provided will be submitted to the property owner for review. The property owner reserves the right to adjust the requested time based on availability.</li>
                    <li>Adherence to Agreed Date & Time: You must adhere to the date and time agreed upon after the property owner’s review. Any changes or cancellations should be communicated in advance, in accordance with the property owner's terms.</li>
                </ol>
            </div>
            <div class="booking-form">
                <p>Full name</p>
                <input type="text" placeholder="Enter your full name" required>
                <p>Phone</p>
                <input type="phone" placeholder="Enter your phone number" required>
                <p>Email</p>
                <input type="email' placeholder="Enter your email" required>
                <div>
                    <div>
                        <p>Viewing date</p>
                        <input type="date" required>
                    </div>
                    <div>
                        <p>Viewing time</p>
                        <input type="time" required>
                    </div>
                </div>
                <button class="cta-btn">Book property viewing</button>
            </div>
            </div>
    `;

    detailsSection.style.display = 'block';

    // Trigger bounce animation
    detailsSection.classList.remove('bounce-in'); // reset if already applied
    void detailsSection.offsetWidth; // reflow to restart animation
    detailsSection.classList.add('bounce-in');
}


// Close property details section
function closePropertyDetails() {
    const detailsSection = document.getElementById('propertyDetailsSection');
    detailsSection.style.display = 'none';
}

// Close details on button click
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('closeDetailsBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closePropertyDetails);
    }
});

// Close details with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePropertyDetails();
    }
});
