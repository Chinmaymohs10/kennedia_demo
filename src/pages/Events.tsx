import { motion } from "framer-motion";
import { Users, Calendar, MapPin, ArrowRight, Heart, Briefcase, Music } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import events from "@/assets/events.jpg";
import heroLobby from "@/assets/hero-lobby.jpg";
import dining from "@/assets/dining.jpg";

const eventTypes = [
  {
    id: 1,
    title: "Weddings & Celebrations",
    description: "Create magical moments in our stunning venues. From intimate ceremonies to grand celebrations, we bring your vision to life.",
    icon: Heart,
    image: events,
    capacity: "Up to 500 guests",
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "State-of-the-art facilities for conferences, meetings, and corporate retreats. Professional support for seamless execution.",
    icon: Briefcase,
    image: heroLobby,
    capacity: "Up to 300 guests",
  },
  {
    id: 3,
    title: "Private Dining",
    description: "Exclusive dining experiences in private rooms with bespoke menus crafted by our executive chefs.",
    icon: Users,
    image: dining,
    capacity: "Up to 50 guests",
  },
  {
    id: 4,
    title: "Special Occasions",
    description: "Birthdays, anniversaries, and milestone celebrations made extraordinary with personalized touches.",
    icon: Music,
    image: events,
    capacity: "Customizable",
  },
];

const venues = [
  { name: "The Grand Ballroom", location: "Singapore", capacity: "500", sqft: "15,000" },
  { name: "Ocean Terrace", location: "Bali", capacity: "200", sqft: "8,000" },
  { name: "Salon Versailles", location: "Paris", capacity: "150", sqft: "5,000" },
  { name: "Skyline Pavilion", location: "New York", capacity: "300", sqft: "10,000" },
];

export default function Events() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <img
          src={events}
          alt="Kennedia Events"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center text-primary-foreground container-kennedia">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent font-semibold tracking-wider uppercase text-sm"
          >
            Unforgettable Moments
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6"
          >
            Events & Celebrations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-foreground/90 max-w-2xl mx-auto"
          >
            Transform your special occasions into extraordinary memories at our world-class venues.
          </motion.p>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding">
        <div className="container-kennedia">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Services
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Every Occasion, Perfected
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-xl overflow-hidden h-[400px]"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                    <event.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-primary-foreground/80 mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent text-sm font-semibold">
                      {event.capacity}
                    </span>
                    <Button variant="link" className="text-primary-foreground p-0 hover:text-accent">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="section-padding bg-cream">
        <div className="container-kennedia">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              World-Class Venues
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Our Event Spaces
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From grand ballrooms to intimate private rooms, discover the perfect setting for your event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-500"
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {venue.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Kennedia {venue.location}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Capacity</span>
                    <span className="font-semibold text-foreground">{venue.capacity} guests</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Size</span>
                    <span className="font-semibold text-foreground">{venue.sqft} sq ft</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-kennedia text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Start Planning Your Event
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Our dedicated events team is ready to help you create an unforgettable experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Request a Proposal
              </Button>
              <Button variant="heroOutline" size="xl">
                Contact Events Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
