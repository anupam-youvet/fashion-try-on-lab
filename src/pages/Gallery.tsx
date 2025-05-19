
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Gallery = () => {
  // State for filtering
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Mock gallery items data with actual images
  const galleryItems = [
    {
      id: 1,
      category: "Formal Wear",
      beforeImage: "/images/formal-before-1.jpg",
      afterImage: "/images/formal-after-1.jpg",
      description: "Elegant black dress virtual try-on",
    },
    {
      id: 2,
      category: "Casual",
      beforeImage: "/images/casual-before-1.jpg",
      afterImage: "/images/casual-after-1.jpg",
      description: "Casual t-shirt with jeans combination",
    },
    {
      id: 3,
      category: "Outerwear",
      beforeImage: "/images/outerwear-before-1.jpg",
      afterImage: "/images/outerwear-after-1.jpg",
      description: "Winter coat on model",
    },
    {
      id: 4,
      category: "Athletic",
      beforeImage: "/images/athletic-before-1.jpg",
      afterImage: "/images/athletic-after-1.jpg",
      description: "Sports wear try-on example",
    },
    {
      id: 5,
      category: "Formal Wear",
      beforeImage: "/images/formal-before-2.jpg",
      afterImage: "/images/formal-after-2.jpg",
      description: "Business suit transformation",
    },
    {
      id: 6,
      category: "Casual",
      beforeImage: "/images/casual-before-2.jpg",
      afterImage: "/images/casual-after-2.jpg",
      description: "Summer dress virtual try-on",
    },
  ];

  // Categories for filtering
  const categories = ["All", "Formal Wear", "Casual", "Outerwear", "Athletic"];
  
  // Filter items based on selected category
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
  
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
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category 
                ? "bg-fashion-primary text-white" 
                : "border-fashion-primary text-fashion-primary hover:bg-fashion-primary-light"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="card animate-fade-in">
              <div className="relative h-80">
                <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
                  <img 
                    src={item.beforeImage} 
                    alt={`Before - ${item.description}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"; 
                      e.currentTarget.alt = "Image not available";
                    }}
                  />
                  <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 text-xs rounded">
                    Before
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
                  <img 
                    src={item.afterImage} 
                    alt={`After - ${item.description}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"; 
                      e.currentTarget.alt = "Image not available";
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-fashion-primary/90 text-white px-2 py-1 text-xs rounded">
                    After
                  </div>
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
