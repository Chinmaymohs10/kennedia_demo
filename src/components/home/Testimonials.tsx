import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Kennedia Bangalore combines the city's tech-savvy culture with world-class luxury. From the rooftop infinity pool to the personalized service, our family vacation was absolutely perfect. The kids loved the amenities!",
    author: "Priya & Rajesh Sharma",
    title: "Family Vacation",
    location: "Bangalore",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    quote:
      "Our dream wedding came true at Kennedia Mumbai. The ocean view ballroom, impeccable catering, and the wedding planning team made our special day truly magical. Every guest was mesmerized!",
    author: "Ananya & Vikram Patel",
    title: "Celebrated their wedding",
    location: "Mumbai",
    rating: 5,
    image:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://www.ptaufiqphotography.com/wp-content/uploads/2024/06/ptaufiq-indian-wedding-rajkot-India-ceremony-couple-portraits.jpg",
  },
  {
    id: 3,
    quote:
      "Celebrating our anniversary at Kennedia Banaras was a spiritual and luxurious experience. The heritage architecture blended with modern comfort, and the Ganga view from our suite was breathtaking. Truly unforgettable!",
    author: "Kavita & Arjun Kapoor",
    title: "Anniversary Celebration",
    location: "Banaras",
    rating: 4.8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxTNpPaxNgmD5CHq4nJ4ZrnYCiV96jTFHUQ&s",
  },
];

const AUTOPLAY_INTERVAL = 5000;

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIsAutoplay(false); // Pause autoplay when user interacts
    setCurrent((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      paginate(1);
      setIsAutoplay(true); // Resume autoplay
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [current, isAutoplay]);

  return (
    <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Header */}
      <div className="container-kennedia mb-8 md:mb-12 lg:mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block text-accent text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 md:mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            What Our Guests Say
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="container-kennedia px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Cards Container - Responsive height */}
          <div className="relative h-[600px] sm:h-[550px] md:h-[450px] lg:h-[400px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 px-2 sm:px-4 md:px-12 lg:px-16"
              >
                {/* Card */}
                <div className="h-full flex items-center justify-center">
                  <div className="w-full max-w-4xl bg-card rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border border-border/50">
                    <div className="flex flex-col md:grid md:grid-cols-5 gap-0">
                      {/* Image Side */}
                      <div className="md:col-span-2 relative h-48 sm:h-56 md:h-auto order-1">
                        <img
                          src={testimonials[current].image}
                          alt={testimonials[current].author}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card/80 via-card/50 to-transparent" />
                        
                        {/* Location Badge */}
                        <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full flex items-center gap-2 text-xs sm:text-sm font-medium">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          {testimonials[current].location}
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="md:col-span-3 p-6 sm:p-8 md:p-10 flex flex-col justify-center order-2">
                        {/* Stars */}
                        <div className="flex gap-1 mb-4 md:mb-6">
                          {Array.from({ length: 5 }).map((_, i) => {
                            const rating = testimonials[current].rating;
                            const isFilled = i < Math.floor(rating);
                            const isHalf = i === Math.floor(rating) && rating % 1 !== 0;
                            
                            return (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 + i * 0.05 }}
                                className="relative"
                              >
                                {isHalf ? (
                                  <>
                                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                                    <Star 
                                      className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent absolute top-0 left-0" 
                                      style={{ clipPath: 'inset(0 50% 0 0)' }}
                                    />
                                  </>
                                ) : (
                                  <Star className={`w-4 h-4 sm:w-5 sm:h-5 text-accent ${isFilled ? 'fill-accent' : ''}`} />
                                )}
                              </motion.div>
                            );
                          })}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-6 md:mb-8 italic">
                          "{testimonials[current].quote}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="border-t border-border pt-4 md:pt-6">
                          <h4 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1">
                            {testimonials[current].author}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {testimonials[current].title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Responsive positioning */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="absolute left-0 sm:left-2 md:left-4 lg:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="absolute right-0 sm:right-2 md:right-4 lg:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>

          {/* Dots Indicator - Responsive */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                  setIsAutoplay(false);
                }}
                className="group"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div
                  className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-primary w-6 sm:w-8"
                      : "bg-muted-foreground/30 w-1.5 md:w-2 group-hover:bg-muted-foreground/50"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Swipe Indicator for Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="md:hidden text-center mt-4 text-xs text-muted-foreground"
          >
            Swipe to navigate
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 -left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}