import { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  imageUrl: string;
}

const Reviews = () => {
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Priya Sharma",
      text: "Absolutely loved the service! The staff was very professional and friendly.",
      rating: 5,
      imageUrl: "https://placehold.co/100x100/FFB6C1/ffffff?text=Priya"
    },
    {
      id: 2,
      name: "Anjali Patel",
      text: "The best beauty parlor in town. I always leave feeling refreshed and beautiful.",
      rating: 5,
      imageUrl: "https://placehold.co/100x100/FFD700/000000?text=Anjali"
    },
    {
      id: 3,
      name: "Sunita Thapa",
      text: "Great experience! The makeup was flawless and lasted all day.",
      rating: 4,
      imageUrl: "https://placehold.co/100x100/FFF1F2/000000?text=Sunita"
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    text: "",
    rating: 5,
    imageUrl: "https://placehold.co/100x100/EAEAEA/000000?text=User"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewReview({ ...newReview, [e.target.id]: e.target.value });
  };

  const handleRatingChange = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextId = reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1;
    setReviews([...reviews, { ...newReview, id: nextId }]);
    setNewReview({ name: "", text: "", rating: 5, imageUrl: "https://placehold.co/100x100/EAEAEA/000000?text=User" });
    toast({
      title: "Review Submitted!",
      description: "Thank you for your feedback.",
    });
  };

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
            Customer <span className="text-primary">Reviews</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See what our clients are saying about their experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-serif text-2xl mb-6">Client Testimonials</h2>
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <div className="flex items-center mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-2">"{review.text}"</p>
                  <div className="flex items-center gap-2">
                    <img src={review.imageUrl} alt={review.name} className="w-8 h-8 rounded-full object-cover" />
                    <p className="font-medium">{review.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <h2 className="font-serif text-2xl mb-6">Submit Your Review</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input id="name" value={newReview.name} onChange={handleInputChange} required />
              </div>
              <div>
                <label htmlFor="text" className="block text-sm font-medium mb-1">
                  Review
                </label>
                <Textarea id="text" value={newReview.text} onChange={handleInputChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleRatingChange(rating)}
                      className={cn(
                        "p-1 rounded-full hover:bg-gray-200 transition-colors duration-200",
                        newReview.rating >= rating && "text-primary"
                      )}
                    >
                      <Star className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
              <Button type="submit" className="w-full">
                Submit Review
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
