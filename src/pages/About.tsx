import { Building2, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            About <span className="text-primary">Susma Beauty</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Dedicated to enhancing your natural beauty with professional care and expertise
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <Building2 className="w-12 h-12 text-primary mb-6" />
              <h2 className="font-serif text-3xl mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                At Susma Beauty, our mission is to provide exceptional beauty services
                that enhance your natural features and boost your confidence. We believe
                in creating a welcoming environment where every client feels valued and
                leaves feeling beautiful inside and out.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-2xl mb-4">Our Values</h3>
              <ul className="space-y-4">
                {[
                  "Excellence in Service",
                  "Client-Focused Approach",
                  "Professional Expertise",
                  "Quality Products",
                  "Continuous Learning"
                ].map((value, index) => (
                  <motion.li
                    key={value}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {value}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Users className="w-12 h-12 mx-auto text-primary mb-4" />
            <h2 className="font-serif text-3xl">Our Expert Team</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Susma",
                role: "Founder & Lead Beautician",
                description: "With over 10 years of experience in beauty and wellness."
              },
              {
                name: "Priya",
                role: "Senior Makeup Artist",
                description: "Specialized in bridal and special occasion makeup."
              },
              {
                name: "Maya",
                role: "Skincare Specialist",
                description: "Expert in advanced skincare treatments and consultations."
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-serif text-xl mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            If you're interested in our services, please visit our
            <Link to="/services" className="text-primary hover:underline">
              services page
            </Link>
            . For any questions, feel free to
            <Link to="/contact" className="text-primary hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
