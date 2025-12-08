import { motion } from "framer-motion";
import { Award, Globe, Heart, Users } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/home/Newsletter";
import heroLobby from "@/assets/hero-lobby.jpg";
import heroResort from "@/assets/hero-resort.jpg";

const stats = [
  { number: "6+", label: "Luxury Properties" },
  { number: "15", label: "World-Class Restaurants" },
  { number: "50+", label: "Industry Awards" },
  { number: "98%", label: "Guest Satisfaction" },
];

const values = [
  {
    icon: Heart,
    title: "Genuine Hospitality",
    description: "We believe in heartfelt service that goes beyond expectations, creating meaningful connections with every guest.",
  },
  {
    icon: Award,
    title: "Uncompromising Excellence",
    description: "From architecture to amenities, we pursue perfection in every detail of the guest experience.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We celebrate local culture while maintaining international standards of luxury and service.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "We're committed to making a positive impact in every community where we operate.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <img
          src={heroLobby}
          alt="Kennedia Story"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center text-primary-foreground container-kennedia">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent font-semibold tracking-wider uppercase text-sm"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6"
          >
            About Kennedia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-foreground/90 max-w-2xl mx-auto"
          >
            A legacy of luxury, a commitment to excellence
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-kennedia">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Our Heritage
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                A Tradition of Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Named after the vibrant Kennedia flower native to Australia, our hotel group embodies the flower's qualities of resilience, beauty, and distinctive character.
                </p>
                <p>
                  Since our founding, Kennedia Hotel Group has been dedicated to creating extraordinary experiences that celebrate the art of hospitality. Each of our properties is thoughtfully designed to reflect its unique location while maintaining the signature Kennedia standard of excellence.
                </p>
                <p>
                  From the bustling streets of Singapore to the serene beaches of Bali, from the romantic avenues of Paris to the dynamic energy of New York, Kennedia hotels offer a sanctuary of refined luxury.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden">
                <img
                  src={heroResort}
                  alt="Kennedia Resort"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 rounded-xl shadow-elegant">
                <span className="font-display text-5xl font-bold">20+</span>
                <p className="text-primary-foreground/80 mt-2">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream">
        <div className="container-kennedia">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="font-display text-5xl md:text-6xl font-bold text-primary">
                  {stat.number}
                </span>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-kennedia">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              What We Stand For
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
