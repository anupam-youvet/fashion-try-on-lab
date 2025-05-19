
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-fashion-gray-700 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Contact our team using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center">
                <div className="rounded-full bg-fashion-primary/10 p-4 mr-4">
                  <Mail className="h-6 w-6 text-fashion-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-fashion-gray-600">support@fashionstudio.com</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Phone */}
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center">
                <div className="rounded-full bg-fashion-primary/10 p-4 mr-4">
                  <Phone className="h-6 w-6 text-fashion-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-fashion-gray-600">+1 (800) 123-4567</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Address */}
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center">
                <div className="rounded-full bg-fashion-primary/10 p-4 mr-4">
                  <MapPin className="h-6 w-6 text-fashion-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-fashion-gray-600">
                    123 Fashion Avenue<br />
                    New York, NY 10001
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Image */}
            <div className="rounded-lg overflow-hidden mt-6">
              <img 
                src="/images/contact-image.jpg" 
                alt="Fashion Studio customer support"
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg"; 
                  e.currentTarget.alt = "Fashion Studio Support";
                }}
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">Send Us a Message</h2>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-fashion-primary hover:bg-fashion-primary-dark">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* FAQ Teaser */}
            <div className="mt-8 bg-fashion-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>
              <p className="mb-4">Find quick answers to common questions about our virtual try-on service.</p>
              <Button variant="outline" className="border-fashion-primary text-fashion-primary hover:bg-fashion-primary-light">
                Visit FAQ Page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
