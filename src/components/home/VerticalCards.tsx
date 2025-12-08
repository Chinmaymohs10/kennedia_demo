import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import hotelRoom from "@/assets/hotel-room.jpg";
import dining from "@/assets/dining.jpg";
import events from "@/assets/events.jpg";

const verticals = [
  {
    title: "Hotels & Resorts",
    description: "Discover our collection of world-class properties across India",
    image: hotelRoom,
    link: "/hotels",
    accent: "From ₹8,000/night",
  },
  {
    title: "Fine Dining",
    description: "Culinary excellence crafted by award-winning chefs",
    image: dining,
    link: "/dining",
    accent: "15+ Restaurants",
  },
  {
    title: "Events & Celebrations",
    description: "Create unforgettable moments in our stunning venues",
    image: events,
    link: "/events",
    accent: "Weddings & More",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function VerticalCards() {
  return (
    <section className="section-padding bg-background pt-12 pb-10">
      <div className="container-kennedia">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase text-sm"
          >
            Explore Kennedia
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4"
          >
            Our World of Experiences
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {verticals.map((vertical) => (
            <motion.div key={vertical.title} variants={cardVariants}>
              <Link
                to={vertical.link}
                className="group block relative h-[450px] rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-shadow duration-500"
              >
                {/* Image */}
                <img
                  src={vertical.image}
                  alt={vertical.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">
                    {vertical.accent}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                    {vertical.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-4 line-clamp-2">
                    {vertical.description}
                  </p>
                  <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
