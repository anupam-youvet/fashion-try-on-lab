
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Define user type
interface User {
  id: string;
  name: string;
  email: string;
}

// Define context type
interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is logged in on page load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock user data (in a real app, this would come from an API)
      const userData = { 
        id: `user-${Date.now()}`,
        name: email.split('@')[0],
        email 
      };
      const mockToken = `mock-token-${Date.now()}`;
      
      // Store in local storage
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', mockToken);
      
      // Update state
      setUser(userData);
      setToken(mockToken);
      
      toast({
        title: "Success",
        description: "You've successfully logged in.",
      });
      
      // Redirect to home page
      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to login. Please try again.",
        variant: "destructive",
      });
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock user data
      const userData = { id: `user-${Date.now()}`, name, email };
      const mockToken = `mock-token-${Date.now()}`;
      
      // Store in local storage
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', mockToken);
      
      // Update state
      setUser(userData);
      setToken(mockToken);
      
      toast({
        title: "Account created",
        description: "Your account has been created successfully.",
      });
      
      // Redirect to home page
      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    // Clear local storage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    
    // Clear state
    setUser(null);
    setToken(null);
    
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    
    // Redirect to home page
    navigate('/');
  };

  const value = {
    user,
    token,
    isAuthenticated: !!user && !!token,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
