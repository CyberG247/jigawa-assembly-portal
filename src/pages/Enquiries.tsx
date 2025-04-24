
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully! We'll respond shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <h3 className="font-serif text-2xl font-bold text-assembly-deep-green mb-6">Send Us a Message</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
              <Input
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message or enquiry"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-assembly-green hover:bg-assembly-deep-green"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <Mail className="h-6 w-6 text-assembly-green" />,
      title: "Email",
      details: [
        "info@jigawahouseofassembly.gov.ng",
        "clerk@jigawahouseofassembly.gov.ng"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-assembly-green" />,
      title: "Phone",
      details: [
        "+234 800 123 4567",
        "+234 800 987 6543"
      ]
    },
    {
      icon: <MapPin className="h-6 w-6 text-assembly-green" />,
      title: "Address",
      details: [
        "Jigawa State House of Assembly Complex",
        "Dutse, Jigawa State, Nigeria"
      ]
    }
  ];
  
  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <h3 className="font-serif text-2xl font-bold text-assembly-deep-green mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          {contactItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-3 bg-assembly-light-gray rounded-full">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <h4 className="font-bold text-lg mb-2">Working Hours</h4>
          <div className="space-y-1 text-gray-700">
            <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
            <p>Plenary Sessions: Tuesdays & Thursdays</p>
            <p>Weekends & Public Holidays: Closed</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Enquiries = () => {
  return (
    <Layout>
      <div className="bg-assembly-light-gray py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-assembly-deep-green mb-6">Enquiries</h1>
          <p className="text-lg max-w-3xl">
            Reach out to the Jigawa State House of Assembly with your questions, concerns, or feedback.
          </p>
        </div>
      </div>
      
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <div className="space-y-8">
              <ContactInfo />
              
              {/* Google Maps embed would go here */}
              <div className="bg-assembly-light-gray h-[300px] rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Google Map showing Assembly location would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Enquiries;
