import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Star, ArrowRight, Search } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { hotels, cities } from "@/data/hotels";
import hotelRoom from "@/assets/hotel-room.jpg";
import heroResort from "@/assets/hero-resort.jpg";

export default function Hotels() {
  const [selectedCity, setSelectedCity] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHotels = hotels.filter((hotel) => {
    const matchesCity = selectedCity === "all" || hotel.city === selectedCity;
    const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <img
          src={heroResort}
          alt="Kennedia Hotels"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center text-primary-foreground">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold mb-4"
          >
            Hotels & Resorts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/90"
          >
            Discover our collection of luxury properties across India
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-cream border-b border-border">
        <div className="container-kennedia">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search hotels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-background"
              />
            </div>

            {/* City Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="h-12 px-4 rounded-lg border border-border bg-background text-foreground"
              >
                <option value="all">All Cities</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="section-padding">
        <div className="container-kennedia">
          <p className="text-muted-foreground mb-8">
            Showing {filteredHotels.length} {filteredHotels.length === 1 ? "property" : "properties"}
          </p>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredHotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/hotels/${hotel.id}`}
                  className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={hotelRoom}
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-semibold">{hotel.rating}</span>
                    </div>
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {cities.find(c => c.id === hotel.city)?.name || hotel.city}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{hotel.location}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {hotel.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {hotel.shortDescription}
                    </p>
                    
                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.amenities.slice(0, 3).map((amenity) => (
                        <span
                          key={amenity}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-muted-foreground text-sm">From </span>
                        <span className="text-primary font-bold text-xl">
                          ₹{hotel.priceFrom.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground text-sm">/night</span>
                      </div>
                      <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 gap-1 transition-all duration-300">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredHotels.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No hotels found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCity("all");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
