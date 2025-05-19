
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Gallery = () => {
  // Mock gallery items data
  const galleryItems = [
    {
      id: 1,
      category: "Formal Wear",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      description: "Elegant black dress virtual try-on",
    },
    {
      id: 2,
      category: "Casual",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      description: "Casual t-shirt with jeans combination",
    },
    {
      id: 3,
      category: "Outerwear",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      description: "Winter coat on model",
    },
    {
      id: 4,
      category: "Athletic",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      description: "Sports wear try-on example",
    },
    {
      id: 5,
      category: "Formal Wear",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      description: "Business suit transformation",
    },
    {
      id: 6,
      category: "Casual",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      description: "Summer dress virtual try-on",
    },
  ];

  // Categories for filtering
  const categories = ["All", "Formal Wear", "Casual", "Outerwear", "Athletic"];
  
  return (
    <div className="pt-20 pb-16">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-fashion-gray-700 max-w-2xl mx-auto">
            Explore amazing virtual try-on transformations created with Fashion Studio.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="border-fashion-primary text-fashion-primary hover:bg-fashion-primary-light"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="card animate-fade-in">
              <div className="relative h-80">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-fashion-gray-200">
                  <img 
                    src={item.beforeImage} 
                    alt={`Before - ${item.description}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full">
                  <img 
                    src={item.afterImage} 
                    alt={`After - ${item.description}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="text-white text-center">
                    <p className="font-medium">{item.description}</p>
                    <span className="text-sm text-gray-200">Category: {item.category}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{item.description}</h3>
                <p className="text-fashion-gray-600 text-sm">Category: {item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at the bottom */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4">Create Your Own Virtual Try-On</h2>
          <p className="text-fashion-gray-700 mb-6 max-w-xl mx-auto">
            Ready to see how clothes would look on you or your chosen model? Try our AI-powered virtual try-on studio.
          </p>
          <Button asChild className="bg-fashion-primary hover:bg-fashion-primary-dark text-white">
            <Link to="/studio">Go to Try-On Studio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
