import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

// Define user types
interface User {
  id: string;
  name: string;
  email: string;
}

interface StoredUser extends User {
  password: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;
  // Load user from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

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
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(response.data?.user));
      localStorage.setItem("token", response.data?.token);

      setUser(response.data?.user);
      setToken(response.data?.token);

      toast({
        title: "Success",
        description: "You've successfully logged in.",
      });

      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description:
          error?.response?.data?.msg || "Login failed. Please try again.",
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

      const response = await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data?.user));
      localStorage.setItem("token", response.data?.token);

      setUser(response.data?.user);
      setToken(response.data?.token);

      toast({
        title: "Account created",
        description: "Your account has been created successfully.",
      });

      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description:
          error?.response?.data?.msg ||
          "Registration failed. Please try again.",
        variant: "destructive",
      });
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUser(null);
    setToken(null);

    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });

    navigate("/");
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

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
