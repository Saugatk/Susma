import { motion } from "framer-motion";

const Blog = () => {
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
            Beauty <span className="text-primary">Blog</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with the latest beauty tips, trends, and news from our parlor
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img src="https://placehold.co/400x200/EAEAEA/000000?text=Blog" alt="Blog Post" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="font-serif text-xl mb-2">Blog Post Title</h3>
              <p className="text-gray-600 mb-4">
                Short description of the blog post. This is a placeholder text.
              </p>
              <button className="text-primary hover:text-primary/80 transition-colors duration-200">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
