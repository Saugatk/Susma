import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Sparkles, Palette, Crown, HandMetal, Flower2 } from "lucide-react";
import { motion } from "framer-motion";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  price: string;
  icon: React.ElementType;
  category: string;
}

const services: Service[] = [
  {
    title: "Haircut & Styling",
    description: "Professional haircut and styling services tailored to your preferences",
    price: "NPR 800",
    icon: Scissors,
    category: "Haircare"
  },
  {
    title: "Facial Treatment",
    description: "Rejuvenating facial treatments for glowing, healthy skin",
    price: "NPR 1500",
    icon: Sparkles,
    category: "Skincare"
  },
  {
    title: "Professional Makeup",
    description: "Makeup services for any occasion, from natural to glamorous looks",
    price: "NPR 2000",
    icon: Palette,
    category: "Makeup"
  },
  {
    title: "Bridal Package",
    description: "Complete bridal beauty package including makeup, hair, and more",
    price: "NPR 15000",
    icon: Crown,
    category: "Bridal Packages"
  },
  {
    title: "Nail Art",
    description: "Creative nail art and manicure services",
    price: "NPR 500",
    icon: HandMetal,
    category: "Nail Art"
  },
  {
    title: "Spa Treatment",
    description: "Relaxing spa treatments for ultimate rejuvenation",
    price: "NPR 3000",
    icon: Flower2,
    category: "Spa Services"
  }
];

const ServicesPage = () => {
  const categories = Array.from(new Set(services.map(service => service.category)));

  return (
    <div className="container mx-auto px-4 py-16 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-serif mb-4">Our Services</h1>
        <p className="text-muted-foreground">Discover our range of professional beauty services</p>
      </motion.div>

      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-serif mb-6">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter(service => service.category === category)
              .map((service, serviceIndex) => (
                <motion.div
                  key={service.title}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Popover>
                    <PopoverTrigger asChild>
                      <Card className="h-full cursor-pointer">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <service.icon className="h-6 w-6 text-primary" />
                            <div>
                              <CardTitle className="text-xl">{service.title}</CardTitle>
                              <CardDescription className="text-lg font-semibold text-primary">
                                {service.price}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                      </Card>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <h3 className="font-serif text-xl mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex justify-end">
                        <Link to="/booking">
                          <Button>Book Now</Button>
                        </Link>
                      </div>
                    </PopoverContent>
                  </Popover>
                </motion.div>
              ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesPage;
