// Properties page specific logic
document.addEventListener('DOMContentLoaded', () => {
    // Render all properties initially
    renderProperties(allProperties);

    // Initialize filters
    initFilters();

    // Handle filter changes
    document.addEventListener('filterChange', () => {
        const type = document.getElementById('type')?.value || '';
        const size = document.getElementById('size')?.value || '';
        const price = document.getElementById('price')?.value || '';
        const period = document.getElementById('period')?.value || '';
        const location = document.getElementById('location')?.value || '';
        const search = document.getElementById('searchInput')?.value.trim().toLowerCase() || '';

        const filters = {
            type: type,
            minPrice: price ? parseInt(price) : null,
            location: location,
            search: search
        };

        const filtered = filterProperties(allProperties, filters);
        renderProperties(filtered);
    });
});