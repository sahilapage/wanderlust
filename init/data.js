const sampleListings = [
{
  title: "Medieval Castle in Wales",
  description: "Experience centuries of history in this authentic medieval fortress overlooking the Welsh countryside. Complete with towers, battlements, and stunning valley views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=60"
  },
  price: 3500,
  location: "Snowdonia",
  country: "United Kingdom",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [-3.8967, 53.0685]
  }
},
// Hotels from Various Countries (7 listings)
{
  title: "Luxury Beachfront Resort in Maldives",
  description: "Experience paradise at this overwater villa resort with crystal-clear waters, private pools, and world-class dining. Perfect for romantic getaways.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60"
  },
  price: 8500,
  location: "Malé Atoll",
  country: "Maldives",
  category: "Beaches",
  geometry: {
    type: "Point",
    coordinates: [73.5093, 4.1755]
  }
},
{
  title: "Boutique Hotel in Paris",
  description: "Stay in the heart of Paris at this charming boutique hotel near the Eiffel Tower. Elegant rooms with classic French décor and rooftop views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=60"
  },
  price: 3200,
  location: "7th Arrondissement",
  country: "France",
  category: "Iconic cities",
  geometry: {
    type: "Point",
    coordinates: [2.3522, 48.8566]
  }
},
{
  title: "Desert Oasis Hotel in Dubai",
  description: "Indulge in Arabian luxury at this 5-star desert resort. Features include infinity pools, spa facilities, and stunning views of the Dubai skyline.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=60"
  },
  price: 4800,
  location: "Dubai Desert",
  country: "United Arab Emirates",
  category: "Deserts",
  geometry: {
    type: "Point",
    coordinates: [55.2708, 25.2048]
  }
},
{
  title: "Safari Lodge in Kenya",
  description: "Witness the Great Migration from this exclusive safari lodge in the Maasai Mara. Luxury tented suites with panoramic savanna views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=60"
  },
  price: 5500,
  location: "Maasai Mara",
  country: "Kenya",
  category: "Camping",
  geometry: {
    type: "Point",
    coordinates: [35.1440, -1.5040]
  }
},
{
  title: "Mountain Resort in Switzerland",
  description: "Alpine elegance meets modern comfort at this ski-in/ski-out resort in the Swiss Alps. Enjoy skiing, hiking, and breathtaking mountain scenery.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
  },
  price: 6200,
  location: "Zermatt",
  country: "Switzerland",
  category: "Mountains",
  geometry: {
    type: "Point",
    coordinates: [7.7491, 46.0207]
  }
},
{
  title: "Tropical Resort in Bali",
  description: "Find your zen at this jungle retreat with infinity pools, yoga pavilions, and traditional Balinese architecture. Surrounded by lush rice terraces.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=60"
  },
  price: 2800,
  location: "Ubud",
  country: "Indonesia",
  category: "Jungles",
  geometry: {
    type: "Point",
    coordinates: [115.2624, -8.5069]
  }
},
{
  title: "Historic Ryokan in Kyoto",
  description: "Experience authentic Japanese hospitality at this traditional ryokan with tatami rooms, onsen baths, and kaiseki dining. Located in a serene bamboo grove.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=60"
  },
  price: 3800,
  location: "Arashiyama",
  country: "Japan",
  category: "Iconic cities",
  geometry: {
    type: "Point",
    coordinates: [135.6684, 35.0094]
  }
},

// Hotels from India (10 listings)
{
  title: "Heritage Palace Hotel in Jaipur",
  description: "Stay like royalty in this converted palace hotel featuring ornate Rajasthani architecture, courtyards, and traditional hospitality. Experience the Pink City's grandeur.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=800&q=60"
  },
  price: 2500,
  location: "Jaipur",
  country: "India",
  category: "Iconic cities",
  geometry: {
    type: "Point",
    coordinates: [75.7873, 26.9124]
  }
},
{
  title: "Houseboat Hotel in Kerala",
  description: "Cruise the tranquil backwaters of Kerala in a luxury houseboat with modern amenities. Enjoy fresh seafood, sunset views, and traditional Kerala hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=60"
  },
  price: 1800,
  location: "Alleppey",
  country: "India",
  category: "Lakefront",
  geometry: {
    type: "Point",
    coordinates: [76.3388, 9.4981]
  }
},
{
  title: "Himalayan Retreat in Manali",
  description: "Escape to the mountains at this cozy resort with panoramic Himalayan views. Perfect for adventure seekers and nature lovers seeking tranquility.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60"
  },
  price: 2200,
  location: "Manali",
  country: "India",
  category: "Mountains",
  geometry: {
    type: "Point",
    coordinates: [77.1892, 32.2396]
  }
},
{
  title: "Beach Resort in Goa",
  description: "Relax on pristine beaches at this beachfront resort offering water sports, beach shacks, and vibrant nightlife. The ultimate Goan beach experience.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=60"
  },
  price: 3500,
  location: "Calangute",
  country: "India",
  category: "Beaches",
  geometry: {
    type: "Point",
    coordinates: [73.7554, 15.5438]
  }
},
{
  title: "Luxury Hotel in Mumbai",
  description: "Experience cosmopolitan luxury at this iconic 5-star hotel overlooking the Arabian Sea. World-class dining, spa, and proximity to Gateway of India.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60"
  },
  price: 4200,
  location: "Colaba",
  country: "India",
  category: "Iconic cities",
  geometry: {
    type: "Point",
    coordinates: [72.8777, 18.9220]
  }
},
{
  title: "Lake Palace Hotel in Udaipur",
  description: "Float on Lake Pichola at this stunning white marble palace hotel. Romantic courtyards, fine dining, and unforgettable sunset views await.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60"
  },
  price: 5800,
  location: "Udaipur",
  country: "India",
  category: "Lakefront",
  geometry: {
    type: "Point",
    coordinates: [73.6833, 24.5797]
  }
},
{
  title: "Tea Estate Resort in Darjeeling",
  description: "Wake up to misty mountain views at this colonial-style resort set amidst tea gardens. Enjoy tea tasting, toy train rides, and Kanchenjunga views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60"
  },
  price: 1900,
  location: "Darjeeling",
  country: "India",
  category: "Mountains",
  geometry: {
    type: "Point",
    coordinates: [88.2663, 27.0410]
  }
},
{
  title: "Spiritual Retreat in Rishikesh",
  description: "Find peace along the Ganges at this yoga and wellness resort. Daily meditation, yoga sessions, and Ayurvedic treatments in the Yoga Capital of the World.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=60"
  },
  price: 1500,
  location: "Rishikesh",
  country: "India",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [78.2676, 30.0869]
  }
},
{
  title: "Desert Camp in Jaisalmer",
  description: "Experience the Thar Desert at this luxury camp with camel safaris, cultural performances, and star-gazing. Traditional Rajasthani hospitality under the stars.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=60"
  },
  price: 2100,
  location: "Jaisalmer",
  country: "India",
  category: "Deserts",
  geometry: {
    type: "Point",
    coordinates: [70.9083, 26.9157]
  }
},
{
  title: "Colonial Heritage Hotel in Shimla",
  description: "Step back in time at this beautifully preserved British-era hotel in the former summer capital. Victorian charm with modern comforts and Mall Road views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
  },
  price: 2400,
  location: "Shimla",
  country: "India",
  category: "Mountains",
  geometry: {
    type: "Point",
    coordinates: [77.1734, 31.1048]
  }
},
{
  title: "Luxurious French Château",
  description: "Immerse yourself in French elegance at this beautifully restored château in the Loire Valley. Surrounded by vineyards and formal gardens.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60"
  },
  price: 5200,
  location: "Loire Valley",
  country: "France",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [0.6889, 47.3900]
  }
},
{
  title: "Irish Castle Estate",
  description: "Stay in this magnificent Irish castle set on 50 acres of pristine parkland. Enjoy the tranquility of the Irish countryside and explore ancient woodlands.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1605726045934-8cfa62ff8eb7?auto=format&fit=crop&w=800&q=60"
  },
  price: 3800,
  location: "County Cork",
  country: "Ireland",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [-8.4863, 51.8969]
  }
},
{
  title: "Bavarian Castle Retreat",
  description: "Discover fairytale living in this stunning Bavarian castle nestled in the Alps. Breathtaking mountain vistas and rich German heritage await.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60"
  },
  price: 4500,
  location: "Bavaria",
  country: "Germany",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [10.5478, 47.5574]
  }
},
{
title: "Cozy Beachfront Cottage",
description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60" },
price: 1500,
location: "Malibu",
country: "United States",
category: "Beaches",
geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
},
{
title: "Modern Loft in Downtown",
description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
price: 1200,
location: "New York City",
country: "United States",
category: "Iconic cities",
geometry: { type: "Point", coordinates: [-74.006, 40.7128] }
},
{
title: "Mountain Retreat",
description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60" },
price: 1000,
location: "Aspen",
country: "United States",
category: "Mountains",
geometry: { type: "Point", coordinates: [-106.837, 39.1911] }
},
{
title: "Historic Villa in Tuscany",
description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
price: 2500,
location: "Florence",
country: "Italy",
category: "Iconic cities",
geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
},
{
title: "Secluded Treehouse Getaway",
description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60" },
price: 800,
location: "Portland",
country: "United States",
category: "Jungles",
geometry: { type: "Point", coordinates: [-122.6765, 45.5231] }
},
{
title: "Beachfront Paradise",
description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60" },
price: 2000,
location: "Cancun",
country: "Mexico",
category: "Beaches",
geometry: { type: "Point", coordinates: [-86.8475, 21.1619] }
},
{
title: "Rustic Cabin by the Lake",
description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60" },
price: 900,
location: "Lake Tahoe",
country: "United States",
category: "Lakefront",
geometry: { type: "Point", coordinates: [-120.0324, 39.0968] }
},
{
title: "Luxury Penthouse with City Views",
description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60" },
price: 3500,
location: "Los Angeles",
country: "United States",
category: "Trending",
geometry: { type: "Point", coordinates: [-118.2437, 34.0522] }
},
{
title: "Ski-In/Ski-Out Chalet",
description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60" },
price: 3000,
location: "Verbier",
country: "Switzerland",
category: "Mountains",
geometry: { type: "Point", coordinates: [7.2297, 46.096] }
},
{
title: "Safari Lodge in the Serengeti",
description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60" },
price: 4000,
location: "Serengeti National Park",
country: "Tanzania",
category: "Jungles",
geometry: { type: "Point", coordinates: [34.6857, -2.3333] }
},
{
title: "Historic Canal House",
description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60" },
price: 1800,
location: "Amsterdam",
country: "Netherlands",
category: "Iconic cities",
geometry: { type: "Point", coordinates: [4.9041, 52.3676] }
},
{
title: "Private Island Retreat",
description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60" },
price: 10000,
location: "Fiji",
country: "Fiji",
category: "Beaches",
geometry: { type: "Point", coordinates: [178.065, -17.7134] }
},
{
title: "Charming Cottage in the Cotswolds",
description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60" },
price: 1200,
location: "Cotswolds",
country: "United Kingdom",
category: "Farms",
geometry: { type: "Point", coordinates: [-1.7201, 51.833] }
},
{
title: "Historic Brownstone in Boston",
description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60" },
price: 2200,
location: "Boston",
country: "United States",
category: "Iconic cities",
geometry: { type: "Point", coordinates: [-71.0589, 42.3601] }
},
{
title: "Beachfront Bungalow in Bali",
description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60" },
price: 1800,
location: "Bali",
country: "Indonesia",
category: "Beaches",
geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
},
{
title: "Mountain View Cabin in Banff",
description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60" },
price: 1500,
location: "Banff",
country: "Canada",
category: "Mountains",
geometry: { type: "Point", coordinates: [-115.572, 51.1784] }
},
{
title: "Tropical Villa in Phuket",
description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60" },
price: 3000,
location: "Phuket",
country: "Thailand",
category: "Beaches",
geometry: { type: "Point", coordinates: [98.3381, 7.8804] }
},
{
title: "Historic Castle in Scotland",
description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60" },
price: 4000,
location: "Scottish Highlands",
country: "United Kingdom",
category: "Castles",
geometry: { type: "Point", coordinates: [-4.2026, 57.12] }
},
{
title: "Desert Oasis in Dubai",
description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60" },
price: 5000,
location: "Dubai",
country: "United Arab Emirates",
category: "Deserts",
geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
},
{
title: "Rustic Log Cabin in Montana",
description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60" },
price: 1100,
location: "Montana",
country: "United States",
category: "Cabins",
geometry: { type: "Point", coordinates: [-110.3626, 46.8797] }
},
{
title: "Beachfront Villa in Greece",
description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60" },
price: 2500,
location: "Mykonos",
country: "Greece",
category: "Beaches",
geometry: { type: "Point", coordinates: [25.3295, 37.4467] }
},
{
title: "Eco-Friendly Treehouse Retreat",
description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60" },
price: 750,
location: "Costa Rica",
country: "Costa Rica",
category: "Jungles",
geometry: { type: "Point", coordinates: [-84.0907, 9.7489] }
},
{
title: "Historic Cottage in Charleston",
description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60" },
price: 1600,
location: "Charleston",
country: "United States",
category: "Farms",
geometry: { type: "Point", coordinates: [-79.9311, 32.7765] }
},
{
title: "Modern Apartment in Tokyo",
description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60" },
price: 2000,
location: "Tokyo",
country: "Japan",
category: "Iconic cities",
geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
},
{
title: "Lakefront Cabin in New Hampshire",
description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60" },
price: 1200,
location: "New Hampshire",
country: "United States",
category: "Lakefront",
geometry: { type: "Point", coordinates: [-71.5724, 43.1939] }
},
{
title: "Luxury Villa in the Maldives",
description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60" },
price: 6000,
location: "Maldives",
country: "Maldives",
category: "Beaches",
geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
},
{
title: "Ski Chalet in Aspen",
description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60" },
price: 4000,
location: "Aspen",
country: "United States",
category: "Mountains",
geometry: { type: "Point", coordinates: [-106.837, 39.1911] }
},
{
title: "Secluded Beach House in Costa Rica",
description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60" },
price: 1800,
location: "Costa Rica",
country: "Costa Rica",
category: "Beaches",
geometry: { type: "Point", coordinates: [-84.0907, 9.7489] }
},
{
  title: "Medieval Fortress Retreat",
  description: "Experience living history in this restored medieval fortress perched atop a hill. Panoramic views and ancient charm await.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60" },
  price: 4200,
  location: "Inverness",
  country: "United Kingdom",
  category: "Castles",
  geometry: { type: "Point", coordinates: [-4.223, 57.4778] }
},

{
  title: "Highland Stone Manor",
  description: "Stay in a luxurious stone manor surrounded by misty mountains and ancient forests. A peaceful retreat in the Highlands.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60" },
  price: 3600,
  location: "Fort William",
  country: "United Kingdom",
  category: "Castles",
  geometry: { type: "Point", coordinates: [-5.1121, 56.8198] }
},

{
  title: "Royal Cliffside Castle",
  description: "A cliffside castle overlooking the deep blue waters of Scotland’s rugged coastline. Perfect for a royal escape.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60" },
  price: 4500,
  location: "Aberdeenshire",
  country: "United Kingdom",
  category: "Castles",
  geometry: { type: "Point", coordinates: [-2.351, 57.172] }
},

{
  title: "Ancient Highland Fortress",
  description: "A breathtaking stone fortress surrounded by open moors and tranquil lakes. Ideal for history lovers.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1536782376847-5f52004d0e2c?auto=format&fit=crop&w=800&q=60" },
  price: 3900,
  location: "Loch Ness",
  country: "United Kingdom",
  category: "Castles",
  geometry: { type: "Point", coordinates: [-4.480, 57.322] }
},

{
  title: "Lochside Royal Estate",
  description: "A majestic estate located right beside a serene loch. Enjoy traditional Scottish architecture and stunning sunsets.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60" },
  price: 4100,
  location: "Isle of Skye",
  country: "United Kingdom",
  category: "Castles",
  geometry: { type: "Point", coordinates: [-6.215, 57.535] }
},

{
  title: "Highland Royal Tower",
  description: "Climb the ancient tower and enjoy sweeping views of the Scottish Highlands. A castle stay like no other.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&w=800&q=60" },
  price: 3800,
  location: "Dornie",
  country: "United Kingdom",
  category: "Castles",
  geometry: { type: "Point", coordinates: [-5.5163, 57.2735] }
},

{
  title: "Castle by the Cliffs",
  description: "A dramatic cliffside castle with stormy seas and breathtaking scenery. Perfect for adventurous travelers.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
  price: 4300,
  location: "Stonehaven",
  country: "United Kingdom",
  category: "Castles",
  geometry: { type: "Point", coordinates: [-2.208, 56.963] }
},

{
  title: "Moonlit Highland Keep",
  description: "A quiet keep surrounded by moonlit hills. A magical place to unwind and escape modern life.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60" },
  price: 3700,
  location: "Cairngorms National Park",
  country: "United Kingdom",
  category: "Castles",
  geometry: { type: "Point", coordinates: [-3.67, 57.08] }
},

{
  title: "Glenview Castle Estate",
  description: "An elegant estate surrounded by vibrant glens and winding rivers. A peaceful and royal experience.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=60" },
  price: 3550,
  location: "Aviemore",
  country: "United Kingdom",
  category: "Castles",
  geometry: { type: "Point", coordinates: [-3.83, 57.19] }
},

{
  title: "Stonekeep Highland Castle",
  description: "A traditional stone castle offering ancient halls, roaring fireplaces, and untouched Highland landscapes.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60" },
  price: 3950,
  location: "Perthshire",
  country: "United Kingdom",
  category: "Castles",
  geometry: { type: "Point", coordinates: [-3.5, 56.7] }
}
];

module.exports = { data: sampleListings };
