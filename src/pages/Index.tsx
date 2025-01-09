import { useState, useEffect } from "react";
import { ArrowRight, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The best beauty experience I've ever had. Susma and her team are true professionals.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    text: "Transformed my look completely. I feel more confident than ever!",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    text: "Exceptional service and attention to detail. Highly recommended!",
    rating: 5,
  },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-up">
            Unleash Your Inner
            <span className="text-primary"> Glow</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Experience luxury beauty treatments tailored to enhance your natural beauty
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/booking">
              <Button>Book Appointment</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="flex items-center justify-center gap-2 sm:justify-center">
                Explore Services
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Haircare", "Skincare", "Makeup"].map((service, index) => (
              <div
                key={service}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-up"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <h3 className="font-serif text-xl mb-4">{service}</h3>
                <p className="text-gray-600 mb-4">
                  Experience our premium {service.toLowerCase()} services tailored to your needs
                </p>
                <Link to="/services" className="text-primary hover:text-primary/80 transition-colors duration-200 flex items-center gap-2">
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">What Our Clients Say</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-lg text-center mb-4 animate-fade-in">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-center font-medium animate-fade-in">
                {testimonials[currentTestimonial].name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Transform?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Book your appointment today and let us help you discover your most beautiful self
          </p>
          <Link to="/contact">
            <Button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-200 transform hover:scale-105">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
