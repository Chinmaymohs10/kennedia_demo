import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { cities } from "@/data/hotels";

const navLinks = [
  { name: "Hotels & Resorts", href: "/hotels" },
  { name: "Dining", href: "/dining" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setLocationDropdownOpen(false);
    };
    if (locationDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [locationDropdownOpen]);

  const isHomePage = location.pathname === "/";

  const handleCitySelect = (cityId: string) => {
    setLocationDropdownOpen(false);
    navigate(`/location/${cityId}`);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || !isHomePage
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="container-kennedia">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span
              className={cn(
                "font-display text-2xl font-bold tracking-tight transition-colors duration-300",
                isScrolled || !isHomePage ? "text-primary" : "text-primary-foreground"
              )}
            >
              KENNEDIA
            </span>
            <span
              className={cn(
                "font-display text-sm tracking-[0.3em] transition-colors duration-300",
                isScrolled || !isHomePage ? "text-muted-foreground" : "text-primary-foreground/80"
              )}
            >
              HOTEL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Location Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLocationDropdownOpen(!locationDropdownOpen);
                }}
                className={cn(
                  "flex items-center gap-2 font-medium text-sm tracking-wide transition-colors duration-300 py-1",
                  isScrolled || !isHomePage
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                )}
              >
                <MapPin className="w-4 h-4" />
                <span>Locations</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform", locationDropdownOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {locationDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-background rounded-lg shadow-hover border border-border overflow-hidden z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="py-2">
                      <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Select City
                      </div>
                      {cities.map((city) => (
                        <button
                          key={city.id}
                          onClick={() => handleCitySelect(city.id)}
                          className="w-full px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-accent/10 hover:text-primary transition-colors flex items-center gap-3"
                        >
                          <MapPin className="w-4 h-4 text-accent" />
                          {city.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "font-medium text-sm tracking-wide transition-colors duration-300 gold-underline py-1",
                  isScrolled || !isHomePage
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant={isScrolled || !isHomePage ? "kennedia" : "heroOutline"}
              size="default"
              asChild
            >
              <Link to="/hotels">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X
                className={cn(
                  "w-6 h-6",
                  isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground"
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "w-6 h-6",
                  isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground"
                )}
              />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container-kennedia py-6 space-y-4">
              {/* Mobile Location Dropdown */}
              <div className="border-b border-border pb-4">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Select Location
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {cities.map((city) => (
                    <button
                      key={city.id}
                      onClick={() => {
                        handleCitySelect(city.id);
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-2 py-2 px-3 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-colors"
                    >
                      <MapPin className="w-4 h-4 text-accent" />
                      {city.name}
                    </button>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block py-3 text-foreground font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="kennedia" className="w-full mt-4" asChild>
                <Link to="/hotels" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
