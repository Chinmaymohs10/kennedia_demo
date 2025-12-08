import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "An extraordinary experience from start to finish. The attention to detail at Kennedia Grand Singapore is unmatched. Every staff member made us feel like royalty.",
    author: "Sarah Mitchell",
    title: "Travel Editor, Condé Nast",
    location: "Singapore",
    rating: 5,
    image:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    quote:
      "Our wedding at Kennedia Bali was nothing short of magical. The team went above and beyond to make our special day absolutely perfect.",
    author: "James & Emily Chen",
    title: "Celebrated their wedding",
    location: "Bali",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1406031/pexels-photo-1406031.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    quote:
      "The culinary journey at Kennedia Paris is a masterpiece. The Michelin-starred restaurant exceeded all expectations with its innovative French cuisine.",
    author: "Marco Rossini",
    title: "Food Critic",
    location: "Paris",
    rating: 5,
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const AUTOPLAY_INTERVAL = 5000;

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background pt-12 pb-5">
      {/* Header */}
      <div className="container-kennedia mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What Our Guests Say
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="container-kennedia">
        <div className="relative max-w-6xl mx-auto px-16">
          {/* Cards Container */}
          <div className="relative h-[500px] md:h-[400px]">
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
                className="absolute inset-0"
              >
                {/* Card */}
                <div className="h-full flex items-center justify-center px-4">
                  <div className="w-full max-w-4xl bg-card rounded-3xl shadow-2xl overflow-hidden border border-border/50">
                    <div className="grid md:grid-cols-5 gap-0">
                      {/* Image Side */}
                      <div className="md:col-span-2 relative h-64 md:h-auto">
                        <img
                          src={testimonials[current].image}
                          alt={testimonials[current].author}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-card/50 to-transparent" />
                        
                        {/* Location Badge */}
                        <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium">
                          <MapPin className="w-4 h-4" />
                          {testimonials[current].location}
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 + i * 0.05 }}
                            >
                              <Star className="w-5 h-5 fill-accent text-accent" />
                            </motion.div>
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                          "{testimonials[current].quote}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="border-t border-border pt-6">
                          <h4 className="font-display text-xl font-bold text-foreground mb-1">
                            {testimonials[current].author}
                          </h4>
                          <p className="text-sm text-muted-foreground">
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

          {/* Navigation Buttons - Fixed positioning */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className="group"
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 w-2 group-hover:bg-muted-foreground/50"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}