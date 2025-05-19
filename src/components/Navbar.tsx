
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon, UserIcon } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-fashion-black">
            Fashion<span className="text-fashion-primary">Studio</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-fashion-gray-700 hover:text-fashion-primary transition-colors">
            Home
          </Link>
          {isAuthenticated && (
            <Link to="/studio" className="text-fashion-gray-700 hover:text-fashion-primary transition-colors">
              Try-On Studio
            </Link>
          )}
          <Link to="/gallery" className="text-fashion-gray-700 hover:text-fashion-primary transition-colors">
            Gallery
          </Link>
          <Link to="/contact" className="text-fashion-gray-700 hover:text-fashion-primary transition-colors">
            Contact
          </Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <div className="text-fashion-gray-700">
                <UserIcon className="inline-block mr-1" size={16} />
                {user?.name}
              </div>
              <Button 
                variant="outline"
                className="border-fashion-primary text-fashion-primary hover:bg-fashion-primary hover:text-white"
                onClick={logout}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-fashion-gray-700 hover:text-fashion-primary transition-colors">
                Sign In
              </Link>
              <Button asChild className="bg-fashion-primary hover:bg-fashion-primary-dark text-white">
                <Link to="/register">Get Started</Link>
              </Button>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-fashion-black" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-md animate-slide-in">
          <div className="flex flex-col space-y-4 p-6">
            <Link 
              to="/" 
              className="text-fashion-gray-700 hover:text-fashion-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {isAuthenticated && (
              <Link 
                to="/studio" 
                className="text-fashion-gray-700 hover:text-fashion-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Try-On Studio
              </Link>
            )}
            <Link 
              to="/gallery" 
              className="text-fashion-gray-700 hover:text-fashion-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="text-fashion-gray-700 hover:text-fashion-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {isAuthenticated ? (
              <>
                <div className="text-fashion-gray-700 flex items-center">
                  <UserIcon className="mr-1" size={16} />
                  {user?.name}
                </div>
                <Button 
                  variant="outline"
                  className="border-fashion-primary text-fashion-primary hover:bg-fashion-primary hover:text-white"
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-fashion-gray-700 hover:text-fashion-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Button 
                  asChild 
                  className="bg-fashion-primary hover:bg-fashion-primary-dark text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/register">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
