import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive exclusive offers and updates from Kennedia Hotel.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-cream-dark">
      <div className="container-kennedia">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Stay Connected
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Join the Kennedia Family
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to receive exclusive offers, travel inspiration, and updates from our world of luxury.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-background border-border"
              required
            />
            <Button type="submit" variant="kennedia" size="lg">
              Subscribe
            </Button>
          </form>

          <p className="text-muted-foreground text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
