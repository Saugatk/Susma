import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
  };

  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Stay updated with the latest beauty tips, trends, and exclusive offers
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="sm:w-96"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
