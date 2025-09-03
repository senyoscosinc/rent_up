// Consolidated property data
const allProperties = [
    // From original script.js
    {
        id: 1,
        title: "John Doe's Property",
        price: "GHS 11,300/Month",
        bedrooms: 3,
        bathrooms: 2,
        sqft: "4,000",
        location: "East Legon Hills, Accra",
        image: "../assets/images/properties/white_house.jpg",
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
        image: "../assets/images/properties/apartment1.jpg",
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
        image: "../assets/images/properties/mansion1.jpg",
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
        image: "../assets/images/properties/office1.jpg",
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
        image: "../assets/images/properties/land1.jpg",
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
        image: "../assets/images/properties/event1.jpg",
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
        image: "../assets/images/properties/house2.jpg",
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
        image: "../assets/images/properties/shop1.jpg",
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
        image: "../assets/images/properties/duplex1.jpg",
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
        image: "../assets/images/properties/studio1.jpg",
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
        image: "../assets/images/properties/land2.jpg",
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
        image: "../assets/images/properties/office2.jpg",
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
        image: "../assets/images/properties/warehouse1.jpg",
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
        image: "../assets/images/properties/smart_home.jpg",
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
        image: "../assets/images/properties/event2.jpg",
        type: "lease"
    },
    // From original properties.js (converted to consistent format)
    {
        id: 16,
        title: "Jane Mensah's Property",
        price: "GHS 950/Month",
        bedrooms: 1,
        bathrooms: 1,
        sqft: "1,000",
        location: "Tsuame, Accra",
        image: "../assets/images/properties/pexels-joachim-hoholm.jpg",
        type: "rent"
    },
    {
        id: 17,
        title: "Kobby Mainoo's Property",
        price: "GHS 1,200/Month",
        bedrooms: 1,
        bathrooms: 1,
        sqft: "1,000",
        location: "Tesano, Accra",
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
        type: "rent"
    },
    {
        id: 18,
        title: "Lester Properties",
        price: "GHS 1,400,000",
        bedrooms: 4,
        bathrooms: 5,
        sqft: "4,000",
        location: "North Kaneshie, Accra",
        image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80",
        type: "sale"
    },
    // Add generated properties from script.js
    ...Array.from({ length: 35 }, (_, i) => {
        const id = i + 19;
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
            image: `../assets/images/properties/${randomImages[Math.floor(Math.random() * randomImages.length)]}`,
            type: types[Math.floor(Math.random() * types.length)]
        };
    })
];