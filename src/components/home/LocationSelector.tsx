import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { cities } from "@/data/hotels";
import { cn } from "@/lib/utils";

export function LocationSelector() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const itemsPerPage = 3;
  const totalPages = Math.ceil(cities.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleCities = cities.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="section-padding bg-secondary/30 pt-12 pb-5">
      <div className="container-kennedia"> 
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent font-semibold tracking-wider uppercase text-sm"
            >
              Find Your Destination
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4"
            >
              Explore by Location
            </motion.h2>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Cards Grid */}
            <div className="overflow-hidden px-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {visibleCities.map((city, idx) => (
                    <motion.div
                      key={city.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => navigate(`/location/${city.id}`)}
                      className="group cursor-pointer bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      {/* City Image */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={city.image || "/placeholder-city.jpg"}
                          alt={city.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.currentTarget.src = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        
                        {/* Location Tag */}
                        <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 font-semibold">
                          <MapPin className="w-4 h-4" />
                          {city.name}
                        </div>

                        {/* City Name Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-display text-3xl font-bold text-white mb-2">
                            {city.name}
                          </h3>
                          <p className="text-white/90 text-sm">
                            India
                          </p>
                        </div>
                      </div>

                      {/* Kennedia Establishments Info */}
                      <div className="p-6">
                        <p className="text-sm text-muted-foreground mb-4">
                          Kennedia Brands Available:
                        </p>
                        
                        {/* Explore Button */}
                        <button className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2">
                          Explore {city.name}
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    currentIndex === idx
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}