// Sample property data
const properties = [
    {
        id: 1,
        title: "John Doe's Property",
        type: "Residential",
        price: 4600,
        priceText: "GHS 4,600/Month",
        period: "Month",
        size: 3000,
        location: "East Legon, Accra",
        bedrooms: 3,
        bathrooms: 2,
        tag: "Rent",
        image: "assets/images/pexels-joachim-hoholm.jpg"
    },
    {
        id: 2,
        title: "Jane Mensah's Property",
        type: "Apartment",
        price: 950,
        priceText: "GHS 950/Month",
        period: "Month",
        size: 1000,
        location: "Tsuame, Accra",
        bedrooms: 1,
        bathrooms: 1,
        tag: "Rent",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        title: "Kobby Mainoo's Property",
        type: "Apartment",
        price: 1200,
        priceText: "GHS 1,200/Month",
        period: "Month",
        size: 1000,
        location: "Tesano, Accra",
        bedrooms: 1,
        bathrooms: 1,
        tag: "Rent",
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        title: "Lester Properties",
        type: "Residential",
        price: 1400000,
        priceText: "GHS 1,400,000",
        period: "",
        size: 4000,
        location: "North Kaneshie, Accra",
        bedrooms: 4,
        bathrooms: 5,
        tag: "Sale",
        image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80"
    },
    // ... add more properties as needed for demo ...
];

function renderProperties(list) {
    const grid = document.getElementById('propertiesGrid');
    grid.innerHTML = '';
    if (list.length === 0) {
        grid.innerHTML = '<p style="color:#fff;text-align:center;width:100%">No properties found.</p>';
        return;
    }
    list.forEach(p => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <div class="property-tag ${p.tag.toLowerCase()}">${p.tag}</div>
            <img src="${p.image}" alt="Property Image" class="property-image">
            <div class="property-info">
                <h3>${p.title}</h3>
                <p class="location">${p.location}</p>
                <p class="price" style="color:${p.tag==='Sale'?'#ff5722':'#00e676'}">${p.priceText}</p>
                <div class="property-specs">
                    <span>${p.type}</span>
                    <span>${p.bedrooms} Bedroom${p.bedrooms>1?'s':''}</span>
                    <span>${p.bathrooms} Bathroom${p.bathrooms>1?'s':''}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterProperties() {
    const type = document.getElementById('type').value;
    const size = document.getElementById('size').value;
    const price = document.getElementById('price').value;
    const period = document.getElementById('period').value;
    const location = document.getElementById('location').value;
    const search = document.getElementById('searchInput').value.trim().toLowerCase();
    let filtered = properties.filter(p => {
        let match = true;
        if (type && p.type !== type) match = false;
        if (size && p.size < parseInt(size)) match = false;
        if (price && p.price < parseInt(price)) match = false;
        if (period && p.period !== period) match = false;
        if (location && !p.location.toLowerCase().includes(location.toLowerCase())) match = false;
        if (search && !(
            p.title.toLowerCase().includes(search) ||
            p.location.toLowerCase().includes(search)
        )) match = false;
        return match;
    });
    renderProperties(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProperties(properties);
    document.getElementById('searchBtn').addEventListener('click', filterProperties);
    document.getElementById('searchInput').addEventListener('keypress', e => {
        if (e.key === 'Enter') filterProperties();
    });
    ['type','size','price','period','location'].forEach(id => {
        document.getElementById(id).addEventListener('change', filterProperties);
    });
}); 