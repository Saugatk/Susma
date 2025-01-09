import { motion } from "framer-motion";
import { useState } from "react";

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: "Bridal Makeup",
      category: "bridal",
      imageUrl: "https://placehold.co/400x400/FFB6C1/ffffff?text=Bridal"
    },
    {
      id: 2,
      title: "Party Makeup",
      category: "party",
      imageUrl: "https://placehold.co/400x400/FFD700/000000?text=Party"
    },
    {
      id: 3,
      title: "Nail Art",
      category: "nails",
      imageUrl: "https://placehold.co/400x400/FFF1F2/000000?text=Nails"
    },
    {
      id: 4,
      title: "Hair Styling",
      category: "hair",
      imageUrl: "https://placehold.co/400x400/FFB6C1/ffffff?text=Hair"
    },
    {
      id: 5,
      title: "Facial Treatment",
      category: "facial",
      imageUrl: "https://placehold.co/400x400/FFD700/000000?text=Facial"
    },
    {
      id: 6,
      title: "Special Occasion",
      category: "special",
      imageUrl: "https://placehold.co/400x400/FFF1F2/000000?text=Special"
    }
  ];

  const categories = ["all", "bridal", "party", "nails", "hair", "facial", "special"];

  const filteredImages = galleryImages.filter(
    img => selectedCategory === "all" || img.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our portfolio of beautiful transformations and artistic creations
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full capitalize ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-serif">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
