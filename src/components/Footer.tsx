
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-fashion-black text-white py-12 px-6">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Fashion<span className="text-fashion-primary">Studio</span>
            </h3>
            <p className="text-fashion-gray-400 max-w-xs">
              Experience AI-powered virtual clothing try-on. Upload, transform, and visualize your fashion in seconds.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-fashion-gray-400 hover:text-fashion-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/studio" className="text-fashion-gray-400 hover:text-fashion-primary transition-colors">
                  Try-On Studio
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-fashion-gray-400 hover:text-fashion-primary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-fashion-gray-400 hover:text-fashion-primary transition-colors">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-fashion-gray-400 hover:text-fashion-primary transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-fashion-gray-400 hover:text-fashion-primary transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-fashion-gray-400 hover:text-fashion-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-fashion-gray-400 hover:text-fashion-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-fashion-gray-400 hover:text-fashion-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-fashion-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Fashion Studio. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-fashion-gray-400 hover:text-fashion-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-fashion-gray-400 hover:text-fashion-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="text-fashion-gray-400 hover:text-fashion-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
