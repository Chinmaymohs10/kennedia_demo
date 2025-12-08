import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  MapPin, Star, Phone, Mail, ArrowLeft, Wifi, Car, 
  Utensils, Dumbbell, Waves, Sparkles, Users, Maximize
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { getHotelById } from "@/data/hotels";
import hotelRoom from "@/assets/hotel-room.jpg";
import heroLobby from "@/assets/hero-lobby.jpg";
import dining from "@/assets/dining.jpg";

const amenityIcons: Record<string, React.ElementType> = {
  "Infinity Pool": Waves,
  "Private Beach": Waves,
  "Spa & Wellness": Sparkles,
  "Spa Village": Sparkles,
  "Fine Dining": Utensils,
  "Multiple Restaurants": Utensils,
  "Michelin Restaurant": Utensils,
  "Fitness Center": Dumbbell,
  "Fitness Studio": Dumbbell,
  "Concierge": Car,
  "Chauffeur Service": Car,
  default: Sparkles,
};

export default function HotelDetail() {
  const { id } = useParams();
  const hotel = getHotelById(id || "");

  if (!hotel) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container-kennedia py-32 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Hotel Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The hotel you're looking for doesn't exist.
          </p>
          <Button variant="kennedia" asChild>
            <Link to="/hotels">View All Hotels</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  const images = [heroLobby, hotelRoom, dining];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Gallery */}
      <section className="pt-20">
        <div className="h-[60vh] min-h-[500px] relative">
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="md:col-span-2 relative overflow-hidden">
              <img
                src={images[0]}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:grid grid-rows-2 gap-1">
              <div className="relative overflow-hidden">
                <img
                  src={images[1]}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={images[2]}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Info */}
      <section className="py-12 bg-background">
        <div className="container-kennedia">
          {/* Back Link */}
          <Link
            to="/hotels"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Hotels
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{hotel.location}</span>
                    </div>
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                      {hotel.name}
                    </h1>
                  </div>
                  <div className="flex items-center gap-2 bg-cream px-4 py-2 rounded-full">
                    <Star className="w-5 h-5 fill-accent text-accent" />
                    <span className="font-bold">{hotel.rating}</span>
                    <span className="text-muted-foreground">Star Hotel</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {hotel.description}
                </p>

                {/* Amenities */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Hotel Amenities
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {hotel.amenities.map((amenity) => {
                      const Icon = amenityIcons[amenity] || amenityIcons.default;
                      return (
                        <div
                          key={amenity}
                          className="flex items-center gap-3 p-4 bg-cream rounded-lg"
                        >
                          <Icon className="w-5 h-5 text-primary" />
                          <span className="text-foreground">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Rooms */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Rooms & Suites
                  </h2>
                  <div className="space-y-6">
                    {hotel.rooms.map((room) => (
                      <div
                        key={room.id}
                        className="bg-card rounded-xl overflow-hidden shadow-card"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          <div className="relative h-48 md:h-full">
                            <img
                              src={hotelRoom}
                              alt={room.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="md:col-span-2 p-6">
                            <h3 className="font-display text-xl font-bold text-foreground mb-2">
                              {room.name}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {room.description}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <span>Up to {room.maxGuests} guests</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Maximize className="w-4 h-4" />
                                <span>{room.size}</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {room.amenities.map((amenity) => (
                                <span
                                  key={amenity}
                                  className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                                >
                                  {amenity}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-border">
                              <div>
                                <span className="text-primary font-bold text-2xl">
                                  ${room.pricePerNight}
                                </span>
                                <span className="text-muted-foreground">/night</span>
                              </div>
                              <Button variant="kennedia">Book Now</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-24"
              >
                {/* Booking Card */}
                <div className="bg-card rounded-xl shadow-card p-6 mb-6">
                  <div className="mb-6">
                    <span className="text-muted-foreground">From</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-primary font-bold text-3xl">
                        ${hotel.priceFrom}
                      </span>
                      <span className="text-muted-foreground">/night</span>
                    </div>
                  </div>
                  <Button variant="kennedia" size="lg" className="w-full mb-4">
                    Check Availability
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Request a Quote
                  </Button>
                </div>

                {/* Contact Card */}
                <div className="bg-cream rounded-xl p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <span className="text-muted-foreground">
                        {hotel.contact.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a
                        href={`tel:${hotel.contact.phone}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {hotel.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <a
                        href={`mailto:${hotel.contact.email}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {hotel.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
