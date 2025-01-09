import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";

const Booking = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedStaff, setSelectedStaff] = useState<string | undefined>(undefined);

  const staffOptions = [
    { value: "susma", label: "Susma (Owner)" },
    { value: "priya", label: "Priya (Makeup Artist)" },
    { value: "maya", label: "Maya (Skincare Specialist)" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "We'll get back to you with confirmation details.",
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
            Book Your <span className="text-primary">Appointment</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Schedule your beauty session with us today
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 p-6 rounded-lg"
        >
          <h2 className="font-serif text-2xl mb-6">Appointment Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </Label>
                <Input id="name" required />
              </div>
              <div>
                <Label htmlFor="contact" className="block text-sm font-medium mb-1">
                  Contact Number
                </Label>
                <Input id="contact" type="tel" required />
              </div>
            </div>
            <div>
              <Label htmlFor="date" className="block text-sm font-medium mb-1">
                Preferred Date
              </Label>
              <div className="relative">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
                {date && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-gray-600">
                    {format(date, "MMMM dd, yyyy")}
                  </div>
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="staff" className="block text-sm font-medium mb-1">
                Preferred Staff
              </Label>
              <Select onValueChange={setSelectedStaff}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Staff" />
                </SelectTrigger>
                <SelectContent>
                  {staffOptions.map((staff) => (
                    <SelectItem key={staff.value} value={staff.value}>
                      {staff.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="services" className="block text-sm font-medium mb-1">
                Service(s) Required
              </Label>
              <Input id="services" required placeholder="e.g., Haircut, Facial" />
            </div>
            <div>
              <Label htmlFor="requests" className="block text-sm font-medium mb-1">
                Special Requests
              </Label>
              <Textarea id="requests" placeholder="Any special requests?" />
            </div>
            <Button type="submit" className="w-full">
              Request Appointment
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
