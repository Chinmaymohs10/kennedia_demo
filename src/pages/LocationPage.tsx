import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getHotelsByCity, getRestaurantsByCity, getCityById } from "@/data/hotels";
import { MapPin, Star, Utensils, Building, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LocationPage() {
  const { cityId } = useParams<{ cityId: string }>();
  const city = getCityById(cityId || "");
  const hotels = getHotelsByCity(cityId || "");
  const restaurants = getRestaurantsByCity(cityId || "");

  if (!city) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-display font-bold text-foreground">City Not Found</h1>
          <p className="text-muted-foreground mt-4">The location you're looking for doesn't exist.</p>
          <Button variant="kennedia" className="mt-8" asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-kennedia">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 text-accent mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold tracking-wider uppercase text-sm">Explore</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
              Kennedia in {city.name}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our hotels, restaurants, and experiences in {city.name}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hotels Section */}
      {hotels.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-kennedia">
            <div className="flex items-center gap-3 mb-8">
              <Building className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl font-bold text-foreground">
                Hotels & Resorts
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel, index) => (
                <motion.div
                  key={hotel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/hotels/${hotel.id}`}
                    className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        <span className="text-sm font-semibold">{hotel.rating}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {hotel.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1 flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {hotel.location}
                      </p>
                      <p className="text-muted-foreground text-sm mt-3 line-clamp-2">
                        {hotel.shortDescription}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <div>
                          <span className="text-xs text-muted-foreground">From</span>
                          <p className="text-lg font-bold text-primary">₹{hotel.priceFrom.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Restaurants Section */}
      {restaurants.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="container-kennedia">
            <div className="flex items-center gap-3 mb-8">
              <Utensils className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl font-bold text-foreground">
                Dining & Restaurants
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant, index) => (
                <motion.div
                  key={restaurant.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-primary">{restaurant.priceRange}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {restaurant.cuisine}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {restaurant.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {restaurant.description}
                    </p>
                    <Button variant="outline" className="mt-4 w-full" asChild>
                      <Link to="/dining">Reserve a Table</Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events Section */}
      <section className="section-padding bg-background">
        <div className="container-kennedia">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-primary" />
            <h2 className="font-display text-3xl font-bold text-foreground">
              Events & Experiences
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Host Your Event in {city.name}
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              From intimate celebrations to grand conferences, our venues in {city.name} offer the perfect setting for every occasion.
            </p>
            <Button variant="kennedia" asChild>
              <Link to="/events">Explore Event Spaces</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
