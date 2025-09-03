// Search and filter utility functions

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
                let propertiesGrid = document.getElementById("propertiesGrid");
                propertiesGrid.innerHTML = `<p class="oops">Oops! We cant seem to find what you're searching for at the moment... Try using other keywords.</p>`
            }
        });
    }
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') performSearch();
    });
}

// Filter properties based on criteria
function filterProperties(properties, filters) {
    return properties.filter(property => {
        let match = true;

        if (filters.type && property.type !== filters.type.toLowerCase()) match = false;
        if (filters.minPrice && parseFloat(property.price.replace(/[^\d.]/g, '')) < filters.minPrice) match = false;
        if (filters.maxPrice && parseFloat(property.price.replace(/[^\d.]/g, '')) > filters.maxPrice) match = false;
        if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) match = false;
        if (filters.search && !(
            property.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            property.location.toLowerCase().includes(filters.search.toLowerCase())
        )) match = false;

        return match;
    });
}

// Initialize filter controls (for properties page)
function initFilters() {
    const filterElements = ['type', 'size', 'price', 'period', 'location'];
    filterElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', () => {
                // Trigger filter update
                const event = new CustomEvent('filterChange');
                document.dispatchEvent(event);
            });
        }
    });

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (searchInput) {
        searchInput.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                const event = new CustomEvent('filterChange');
                document.dispatchEvent(event);
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const event = new CustomEvent('filterChange');
            document.dispatchEvent(event);
        });
    }
}