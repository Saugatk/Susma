import { Link } from "react-router-dom";
import { Home, Phone, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 flex justify-center gap-4">
        <Link to="/" className="hover:text-primary">
          <Home size={24} />
        </Link>
        <Link to="/contact" className="hover:text-primary">
          <Phone size={24} />
        </Link>
        <Link to="/about" className="hover:text-primary">
          <Info size={24} />
        </Link>
        <Link to="/blog">
          <Button variant="outline" size="sm">Blog</Button>
        </Link>
        <Link to="/offers">
          <Button variant="secondary" size="sm">Offers</Button>
        </Link>
      </div>
      <div className="container mx-auto px-4 text-center mt-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Susma Beauty Parlor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
