import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroLobby from "@/assets/hero-lobby.jpg";
import heroResort from "@/assets/hero-resort.jpg";

const slides = [
  {
    image: heroLobby,
    title: "Experience Timeless Luxury",
    subtitle: "Where every moment becomes a treasured memory",
    cta: "Explore Hotels",
    link: "/hotels",
  },
  {
    image: heroResort,
    title: "Discover Paradise",
    subtitle: "Unwind in our world-class resorts and retreats",
    cta: "View Resorts",
    link: "/hotels",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoplay]);

  const nextSlide = () => {
    setIsAutoplay(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoplay(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlays - Responsive */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 md:from-black/80 md:via-black/50 md:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-kennedia px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Brand & Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                className="text-white z-10"
              >
                {/* Title - Responsive sizes */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Subtitle - Responsive sizes */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 font-light max-w-xl"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Divider - Responsive width */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-1 bg-accent mb-6 md:mb-8"
                />

                {/* CTA Buttons - Stack on mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-0"
                >
                  <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                    <Link to={slides[currentSlide].link} className="group">
                      {slides[currentSlide].cta}
                      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="heroOutline" size="xl" asChild className="w-full sm:w-auto">
                    <Link to="/about">Our Story</Link>
                  </Button>
                </motion.div>

                {/* Stats/Features - Hide on mobile, show on md+ */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="hidden md:flex flex-wrap gap-6 lg:gap-8 mt-8 lg:mt-12"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xl lg:text-2xl font-bold">50+</p>
                      <p className="text-xs lg:text-sm text-white/70">Destinations</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xl lg:text-2xl font-bold">25+</p>
                      <p className="text-xs lg:text-sm text-white/70">Years Legacy</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Right Side - Floating Card/Preview - Desktop only */}
            <div className="hidden lg:block relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100, rotateY: -15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -100, rotateY: 15 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                  style={{ perspective: 1000 }}
                >
                  {/* Floating Card */}
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 lg:p-8 shadow-2xl">
                    {/* Mini Preview Image */}
                    <div className="relative h-56 lg:h-64 rounded-2xl overflow-hidden mb-6">
                      <img
                        src={slides[currentSlide].image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Quick Info Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg mb-2">
                          Kennedia Collection
                        </h3>
                        <p className="text-white/80 text-sm">
                          Luxury Hospitality Redefined
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-sm">5-Star Amenities</span>
                      </div>
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-sm">World-Class Service</span>
                      </div>
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-sm">Exclusive Experiences</span>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Responsive positioning and sizing */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-2 sm:px-4 md:px-8 pointer-events-none z-20">
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </div>

      {/* Bottom Bar - Dots & Info - Responsive */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container-kennedia px-4 md:px-6 lg:px-8 pb-6 md:pb-8">
          <div className="flex justify-center md:justify-between items-center">
            
            {/* Dots - Centered on mobile, left on desktop */}
            <div className="flex gap-2 md:gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoplay(false);
                    setCurrentSlide(index);
                  }}
                  className="group relative"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? "bg-accent w-12 md:w-16"
                        : "bg-white/30 w-6 md:w-8 group-hover:bg-white/50 group-hover:w-10 md:group-hover:w-12"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats on Mobile - Bottom overlay above dots */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="md:hidden absolute bottom-20 left-0 right-0 z-10"
      >
        <div className="container-kennedia px-4">
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">50+</p>
                <p className="text-xs text-white/70">Destinations</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">25+</p>
                <p className="text-xs text-white/70">Years</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements - Hide on mobile */}
      <div className="hidden md:block absolute top-1/4 right-10 w-2 h-2 rounded-full bg-accent animate-pulse" />
      <div className="hidden md:block absolute bottom-1/3 left-20 w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="hidden md:block absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-accent/50 animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
}