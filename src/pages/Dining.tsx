import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, MapPin, Utensils, Star, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import dining from "@/assets/dining.jpg";
import heroLobby from "@/assets/hero-lobby.jpg";

const restaurants = [
  {
    id: 1,
    name: "The Grand Dining Room",
    location: "Kennedia Grand Singapore",
    cuisine: "Contemporary European",
    description: "An elegant setting for refined European cuisine crafted with the finest seasonal ingredients.",
    hours: "6:30 PM - 10:30 PM",
    rating: 4.9,
    image: dining,
    featured: true,
  },
  {
    id: 2,
    name: "Sakura",
    location: "Kennedia Grand Singapore",
    cuisine: "Japanese Kaiseki",
    description: "Authentic Japanese kaiseki experience with ingredients flown directly from Tokyo's Tsukiji Market.",
    hours: "12:00 PM - 2:30 PM, 6:00 PM - 10:00 PM",
    rating: 4.8,
    image: heroLobby,
  },
  {
    id: 3,
    name: "La Terrasse",
    location: "Kennedia Palace Paris",
    cuisine: "French Fine Dining",
    description: "Michelin-starred French cuisine with panoramic views of the Parisian skyline.",
    hours: "7:00 PM - 11:00 PM",
    rating: 5.0,
    image: dining,
  },
  {
    id: 4,
    name: "Spice Market",
    location: "Kennedia Resort Bali",
    cuisine: "Pan-Asian",
    description: "A culinary journey through Asia's most vibrant flavors in a stunning tropical setting.",
    hours: "11:00 AM - 11:00 PM",
    rating: 4.7,
    image: heroLobby,
  },
];

export default function Dining() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <img
          src={dining}
          alt="Kennedia Dining"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center text-primary-foreground container-kennedia">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent font-semibold tracking-wider uppercase text-sm"
          >
            Culinary Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6"
          >
            Fine Dining
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-foreground/90 max-w-2xl mx-auto"
          >
            Experience culinary artistry crafted by world-renowned chefs across our distinguished restaurants.
          </motion.p>
        </div>
      </section>

      {/* Featured Restaurant */}
      <section className="section-padding bg-cream">
        <div className="container-kennedia">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={restaurants[0].image}
                alt={restaurants[0].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Featured
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Signature Experience
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-4">
                {restaurants[0].name}
              </h2>
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{restaurants[0].location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4" />
                  <span>{restaurants[0].cuisine}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                {restaurants[0].description}
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="font-bold">{restaurants[0].rating}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{restaurants[0].hours}</span>
                </div>
              </div>
              <Button variant="kennedia" size="lg">
                Reserve a Table
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Restaurants */}
      <section className="section-padding">
        <div className="container-kennedia">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Restaurants
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              A World of Flavors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restaurants.slice(1).map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-2">
                    <span>{restaurant.cuisine}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-semibold text-foreground">{restaurant.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {restaurant.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {restaurant.location}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {restaurant.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{restaurant.hours}</span>
                    </div>
                    <Button variant="link" className="text-primary p-0">
                      Reserve <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
