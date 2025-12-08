export interface Hotel {
  id: string;
  name: string;
  location: string;
  city: string;
  region: string;
  country: string;
  description: string;
  shortDescription: string;
  image: string;
  rating: number;
  priceFrom: number;
  amenities: string[];
  rooms: Room[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Restaurant {
  id: string;
  name: string;
  city: string;
  cuisine: string;
  description: string;
  image: string;
  priceRange: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  size: string;
  amenities: string[];
  image: string;
}

export const cities = [
  {
    id: "bangalore",
    name: "Bangalore",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80", // Bangalore city
  },
  {
    id: "mumbai",
    name: "Mumbai",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&q=80", // Mumbai city
  },
  {
    id: "delhi",
    name: "Delhi",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80", // Delhi city
  },
  {
    id: "goa",
    name: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80", // Goa beach
  },
  {
    id: "jaipur",
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80", // Jaipur
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    image: "https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?w=800&q=80", // Hyderabad
  },
];

export const hotels: Hotel[] = [
  {
    id: "kennedia-bangalore",
    name: "Kennedia Grand Bangalore",
    location: "MG Road, Bangalore",
    city: "bangalore",
    region: "south-india",
    country: "India",
    description: "Experience unparalleled luxury at Kennedia Grand Bangalore, where modern sophistication meets timeless elegance. Located in the heart of the Silicon Valley of India, our flagship property offers breathtaking views, world-class dining, and exceptional service.",
    shortDescription: "Iconic luxury in the heart of Bangalore's tech hub.",
    image: "/placeholder.svg",
    rating: 5,
    priceFrom: 12000,
    amenities: ["Infinity Pool", "Spa & Wellness", "Fine Dining", "Concierge", "Fitness Center", "Business Center"],
    rooms: [
      {
        id: "deluxe-king",
        name: "Deluxe King Room",
        description: "Spacious room with king bed and city views",
        pricePerNight: 12000,
        maxGuests: 2,
        size: "45 sqm",
        amenities: ["King Bed", "City View", "Mini Bar", "Smart TV"],
        image: "/placeholder.svg",
      },
      {
        id: "premier-suite",
        name: "Premier Suite",
        description: "Luxurious suite with separate living area",
        pricePerNight: 25000,
        maxGuests: 3,
        size: "85 sqm",
        amenities: ["King Bed", "City View", "Living Room", "Butler Service"],
        image: "/placeholder.svg",
      },
    ],
    contact: {
      phone: "+91 80 6688 8888",
      email: "bangalore@kennediahotel.com",
      address: "100 MG Road, Bangalore 560001",
    },
    coordinates: { lat: 12.9716, lng: 77.5946 },
  },
  {
    id: "kennedia-bangalore-whitefield",
    name: "Kennedia Business Suites Whitefield",
    location: "Whitefield, Bangalore",
    city: "bangalore",
    region: "south-india",
    country: "India",
    description: "Perfectly positioned for business travelers, Kennedia Business Suites Whitefield offers premium accommodation near major IT parks with all modern amenities.",
    shortDescription: "Premium business hotel in Whitefield IT corridor.",
    image: "/placeholder.svg",
    rating: 4,
    priceFrom: 8000,
    amenities: ["Business Center", "Meeting Rooms", "Gym", "Restaurant", "Airport Shuttle"],
    rooms: [
      {
        id: "business-room",
        name: "Business Room",
        description: "Well-appointed room for business travelers",
        pricePerNight: 8000,
        maxGuests: 2,
        size: "35 sqm",
        amenities: ["King Bed", "Work Desk", "High-speed WiFi", "Coffee Maker"],
        image: "/placeholder.svg",
      },
    ],
    contact: {
      phone: "+91 80 6699 9999",
      email: "whitefield@kennediahotel.com",
      address: "ITPL Main Road, Whitefield, Bangalore 560066",
    },
    coordinates: { lat: 12.9698, lng: 77.7500 },
  },
  {
    id: "kennedia-mumbai",
    name: "Kennedia Palace Mumbai",
    location: "Nariman Point, Mumbai",
    city: "mumbai",
    region: "west-india",
    country: "India",
    description: "Overlooking the Arabian Sea, Kennedia Palace Mumbai stands as a symbol of opulence in the city of dreams. Experience world-class hospitality with stunning ocean views.",
    shortDescription: "Seafront luxury at Nariman Point.",
    image: "/placeholder.svg",
    rating: 5,
    priceFrom: 18000,
    amenities: ["Sea View", "Rooftop Bar", "Spa", "Multiple Restaurants", "Valet Parking"],
    rooms: [
      {
        id: "sea-view-room",
        name: "Sea View Room",
        description: "Elegant room with panoramic sea views",
        pricePerNight: 18000,
        maxGuests: 2,
        size: "50 sqm",
        amenities: ["King Bed", "Sea View", "Marble Bathroom", "Butler Service"],
        image: "/placeholder.svg",
      },
    ],
    contact: {
      phone: "+91 22 6688 8888",
      email: "mumbai@kennediahotel.com",
      address: "Marine Drive, Nariman Point, Mumbai 400021",
    },
    coordinates: { lat: 18.9256, lng: 72.8242 },
  },
  {
    id: "kennedia-delhi",
    name: "Kennedia Imperial Delhi",
    location: "Connaught Place, Delhi",
    city: "delhi",
    region: "north-india",
    country: "India",
    description: "In the heart of Lutyens' Delhi, Kennedia Imperial offers a regal experience combining colonial heritage with modern luxury. Steps away from iconic landmarks.",
    shortDescription: "Colonial grandeur in the heart of Delhi.",
    image: "/placeholder.svg",
    rating: 5,
    priceFrom: 15000,
    amenities: ["Heritage Architecture", "Spa", "Fine Dining", "Pool", "Garden"],
    rooms: [
      {
        id: "heritage-suite",
        name: "Heritage Suite",
        description: "Suite with colonial-era décor",
        pricePerNight: 15000,
        maxGuests: 2,
        size: "60 sqm",
        amenities: ["King Bed", "Antique Furniture", "Garden View", "Mini Bar"],
        image: "/placeholder.svg",
      },
    ],
    contact: {
      phone: "+91 11 6688 8888",
      email: "delhi@kennediahotel.com",
      address: "Janpath, Connaught Place, New Delhi 110001",
    },
    coordinates: { lat: 28.6139, lng: 77.2090 },
  },
  {
    id: "kennedia-goa",
    name: "Kennedia Beach Resort Goa",
    location: "Candolim Beach, Goa",
    city: "goa",
    region: "west-india",
    country: "India",
    description: "A tropical paradise on the golden sands of Candolim, Kennedia Beach Resort offers the perfect blend of relaxation and adventure with stunning beachfront villas.",
    shortDescription: "Beachfront paradise in Goa.",
    image: "/placeholder.svg",
    rating: 5,
    priceFrom: 14000,
    amenities: ["Private Beach", "Water Sports", "Spa", "Beach Bar", "Kids Club"],
    rooms: [
      {
        id: "beach-villa",
        name: "Beach Villa",
        description: "Private villa with direct beach access",
        pricePerNight: 14000,
        maxGuests: 4,
        size: "100 sqm",
        amenities: ["King Bed", "Private Pool", "Beach Access", "Outdoor Shower"],
        image: "/placeholder.svg",
      },
    ],
    contact: {
      phone: "+91 832 668 8888",
      email: "goa@kennediahotel.com",
      address: "Candolim Beach Road, Goa 403515",
    },
    coordinates: { lat: 15.5161, lng: 73.7614 },
  },
  {
    id: "kennedia-chennai",
    name: "Kennedia Marina Chennai",
    location: "Marina Beach Road, Chennai",
    city: "chennai",
    region: "south-india",
    country: "India",
    description: "Experience the charm of Chennai at Kennedia Marina, where traditional Tamil hospitality meets contemporary luxury overlooking the Bay of Bengal.",
    shortDescription: "Contemporary luxury on Marina Beach.",
    image: "/placeholder.svg",
    rating: 4,
    priceFrom: 10000,
    amenities: ["Beach View", "South Indian Restaurant", "Pool", "Spa", "Banquet Hall"],
    rooms: [
      {
        id: "marina-room",
        name: "Marina View Room",
        description: "Room with stunning beach views",
        pricePerNight: 10000,
        maxGuests: 2,
        size: "40 sqm",
        amenities: ["King Bed", "Beach View", "Traditional Décor", "Coffee Maker"],
        image: "/placeholder.svg",
      },
    ],
    contact: {
      phone: "+91 44 6688 8888",
      email: "chennai@kennediahotel.com",
      address: "Marina Beach Road, Chennai 600001",
    },
    coordinates: { lat: 13.0827, lng: 80.2707 },
  },
  {
    id: "kennedia-hyderabad",
    name: "Kennedia Nizam Hyderabad",
    location: "Banjara Hills, Hyderabad",
    city: "hyderabad",
    region: "south-india",
    country: "India",
    description: "Inspired by the grandeur of the Nizams, Kennedia Hyderabad offers a royal experience with modern amenities in the city's most prestigious neighborhood.",
    shortDescription: "Royal grandeur in Banjara Hills.",
    image: "/placeholder.svg",
    rating: 5,
    priceFrom: 11000,
    amenities: ["Heritage Design", "Mughlai Restaurant", "Spa", "Pool", "Event Halls"],
    rooms: [
      {
        id: "nizam-suite",
        name: "Nizam Suite",
        description: "Opulent suite with royal décor",
        pricePerNight: 11000,
        maxGuests: 2,
        size: "55 sqm",
        amenities: ["King Bed", "Royal Décor", "Lake View", "Butler Service"],
        image: "/placeholder.svg",
      },
    ],
    contact: {
      phone: "+91 40 6688 8888",
      email: "hyderabad@kennediahotel.com",
      address: "Road No. 10, Banjara Hills, Hyderabad 500034",
    },
    coordinates: { lat: 17.4260, lng: 78.4484 },
  },
];

export const restaurants: Restaurant[] = [
  {
    id: "spice-garden-bangalore",
    name: "Spice Garden",
    city: "bangalore",
    cuisine: "South Indian",
    description: "Authentic South Indian cuisine with a modern twist",
    image: "/placeholder.svg",
    priceRange: "₹₹₹",
  },
  {
    id: "terrace-grill-bangalore",
    name: "The Terrace Grill",
    city: "bangalore",
    cuisine: "Continental",
    description: "Rooftop dining with panoramic city views",
    image: "/placeholder.svg",
    priceRange: "₹₹₹₹",
  },
  {
    id: "mumbai-spice",
    name: "Mumbai Spice",
    city: "mumbai",
    cuisine: "Coastal Indian",
    description: "Fresh seafood and coastal flavors",
    image: "/placeholder.svg",
    priceRange: "₹₹₹₹",
  },
  {
    id: "delhi-darbar",
    name: "Delhi Darbar",
    city: "delhi",
    cuisine: "North Indian",
    description: "Royal Mughlai cuisine in elegant settings",
    image: "/placeholder.svg",
    priceRange: "₹₹₹₹",
  },
  {
    id: "goa-beach-shack",
    name: "Beach Shack Grill",
    city: "goa",
    cuisine: "Goan & Seafood",
    description: "Beachside dining with fresh catches",
    image: "/placeholder.svg",
    priceRange: "₹₹₹",
  },
  {
    id: "chennai-chettinad",
    name: "Chettinad Kitchen",
    city: "chennai",
    cuisine: "Chettinad",
    description: "Authentic Chettinad spices and flavors",
    image: "/placeholder.svg",
    priceRange: "₹₹₹",
  },
  {
    id: "hyderabad-biryani",
    name: "Biryani House",
    city: "hyderabad",
    cuisine: "Hyderabadi",
    description: "Legendary Hyderabadi Dum Biryani",
    image: "/placeholder.svg",
    priceRange: "₹₹₹",
  },
];

export const getHotelById = (id: string): Hotel | undefined => {
  return hotels.find((hotel) => hotel.id === id);
};

export const getHotelsByCity = (cityId: string): Hotel[] => {
  return hotels.filter((hotel) => hotel.city === cityId);
};

export const getRestaurantsByCity = (cityId: string): Restaurant[] => {
  return restaurants.filter((restaurant) => restaurant.city === cityId);
};

export const getCityById = (cityId: string) => {
  return cities.find((city) => city.id === cityId);
};
