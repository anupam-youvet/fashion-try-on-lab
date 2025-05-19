
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom flex flex-col items-center text-center z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Virtual <span className="text-gradient">Try-On</span> Experience
          </h1>
          <p className="text-lg md:text-xl text-fashion-gray-700 max-w-3xl mb-8">
            See how clothes look on models before you buy. Our AI transforms your clothing images into realistic virtual try-ons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-fashion-primary hover:bg-fashion-primary-dark text-white">
              <Link to="/studio">Try Studio Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-fashion-primary text-fashion-primary hover:bg-fashion-primary-light">
              <Link to="/gallery">View Examples</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center opacity-10"></div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-fashion-gray-700 max-w-2xl mx-auto">
              Our AI-powered platform transforms your clothing images into virtual try-ons in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-fashion-gray-100">
              <div className="w-16 h-16 bg-fashion-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Upload Clothing Image</h3>
              <p className="text-fashion-gray-700">
                Take a photo or upload an image of the clothing item you want to try on.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-fashion-gray-100">
              <div className="w-16 h-16 bg-fashion-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Select Model & Background</h3>
              <p className="text-fashion-gray-700">
                Choose a model that matches your style or upload your own image. Select a background.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-fashion-gray-100">
              <div className="w-16 h-16 bg-fashion-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Generate Try-On</h3>
              <p className="text-fashion-gray-700">
                Click "Generate" and see your clothing transformed into a realistic virtual try-on.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-fashion-primary hover:bg-fashion-primary-dark text-white">
              <Link to="/studio">Start Creating Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Transformation Examples Section */}
      <section className="section bg-fashion-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See the Transformation</h2>
            <p className="text-fashion-gray-700 max-w-2xl mx-auto">
              Explore examples of virtual try-ons across different clothing categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-80">
                <div className="absolute top-0 left-0 w-1/2 h-full">
                  <img 
                    src="/images/formal-before-1.jpg" 
                    alt="Formal wear before try-on" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"; 
                      e.currentTarget.alt = "Image not available";
                    }} 
                  />
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full">
                  <img 
                    src="/images/formal-after-1.jpg" 
                    alt="Formal wear after try-on" 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"; 
                      e.currentTarget.alt = "Image not available";
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowRight size={40} className="text-white bg-fashion-primary rounded-full p-2" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Formal Wear</h3>
                <p className="text-fashion-gray-700">
                  See how formal attire looks on different body types and poses.
                </p>
              </CardContent>
            </Card>

            {/* Example 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-80">
                <div className="absolute top-0 left-0 w-1/2 h-full">
                  <img 
                    src="/images/casual-before-1.jpg" 
                    alt="Patterned clothes before try-on" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"; 
                      e.currentTarget.alt = "Image not available";
                    }} 
                  />
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full">
                  <img 
                    src="/images/casual-after-1.jpg" 
                    alt="Patterned clothes after try-on" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"; 
                      e.currentTarget.alt = "Image not available";
                    }} 
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowRight size={40} className="text-white bg-fashion-primary rounded-full p-2" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Patterned Clothes</h3>
                <p className="text-fashion-gray-700">
                  Complex patterns and prints accurately rendered on virtual models.
                </p>
              </CardContent>
            </Card>

            {/* Example 3 */}
            <Card className="overflow-hidden">
              <div className="relative h-80">
                <div className="absolute top-0 left-0 w-1/2 h-full">
                  <img 
                    src="/images/outerwear-before-1.jpg" 
                    alt="Casual styles before try-on" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"; 
                      e.currentTarget.alt = "Image not available";
                    }} 
                  />
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full">
                  <img 
                    src="/images/outerwear-after-1.jpg" 
                    alt="Casual styles after try-on" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"; 
                      e.currentTarget.alt = "Image not available";
                    }} 
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowRight size={40} className="text-white bg-fashion-primary rounded-full p-2" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Casual Styles</h3>
                <p className="text-fashion-gray-700">
                  Everyday casual wear virtually tried on with realistic results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Coming Soon</h2>
            <p className="text-fashion-gray-700 max-w-2xl mx-auto">
              Exciting new features on the horizon to enhance your virtual try-on experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-lg border border-fashion-gray-200 bg-white shadow-sm flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-fashion-primary-light flex items-center justify-center mb-6">
                <span className="text-fashion-primary text-2xl">👓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eyewear Try-On</h3>
              <p className="text-fashion-gray-700">
                Virtual try-on for glasses and sunglasses, with accurate face mapping and sizing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-lg border border-fashion-gray-200 bg-white shadow-sm flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-fashion-primary-light flex items-center justify-center mb-6">
                <span className="text-fashion-primary text-2xl">🧢</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hats & Headwear</h3>
              <p className="text-fashion-gray-700">
                Try on hats, caps, and other headwear with precise positioning and realistic rendering.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-lg border border-fashion-gray-200 bg-white shadow-sm flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-fashion-primary-light flex items-center justify-center mb-6">
                <span className="text-fashion-primary text-2xl">💍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessories</h3>
              <p className="text-fashion-gray-700">
                Virtual try-on for jewelry, watches, and other accessories to complete your look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-fashion-primary to-fashion-accent-pink text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Shopping Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Fashion Studio today and get 5 free try-ons every month.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-fashion-primary hover:bg-fashion-gray-100">
            <Link to="/register">Get Started for Free</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
