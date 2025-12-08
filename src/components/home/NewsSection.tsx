import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import heroLobby from "@/assets/hero-lobby.jpg";
import heroResort from "@/assets/hero-resort.jpg";
import dining from "@/assets/dining.jpg";

const news = [
  {
    id: 1,
    title: "Kennedia Grand Singapore Wins Best Luxury Hotel 2024",
    excerpt: "Our flagship Singapore property has been recognized for excellence in hospitality...",
    image: heroLobby,
    date: "December 1, 2024",
    category: "Awards",
  },
  {
    id: 2,
    title: "New Year's Eve Celebration at Kennedia Properties",
    excerpt: "Ring in the new year with exclusive galas and unforgettable experiences...",
    image: heroResort,
    date: "November 28, 2024",
    category: "Events",
  },
  {
    id: 3,
    title: "Introducing Chef's Table: An Exclusive Culinary Journey",
    excerpt: "Experience the art of fine dining with our new exclusive chef's table program...",
    image: dining,
    date: "November 15, 2024",
    category: "Dining",
  },
];

export function NewsSection() {
  return (
    <section className="section-padding bg-background pt-12 pb-10">
      <div className="container-kennedia">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent font-semibold tracking-wider uppercase text-sm"
            >
              Latest News
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4"
            >
              Stories & Updates
            </motion.h2>
          </div>
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Link
              to="#"
              className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All News
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div> */}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <Link to="#" className="group block h-full">
              <div className="relative h-full min-h-[400px] lg:min-h-full rounded-xl overflow-hidden">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                    {news[0].category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                    {news[0].title}
                  </h3>
                  <p className="text-primary-foreground/80 mb-4 max-w-lg">
                    {news[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{news[0].date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Side Articles */}
          {news.slice(1).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Link
                to="#"
                className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
