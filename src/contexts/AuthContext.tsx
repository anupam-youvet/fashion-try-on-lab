import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

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
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay

      const storedUsersJSON = localStorage.getItem("registeredUsers");
      const storedUsers: StoredUser[] = storedUsersJSON
        ? JSON.parse(storedUsersJSON)
        : [];

      const matchedUser = storedUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (!matchedUser) {
        toast({
          title: "Login failed",
          description: "Invalid email or password.",
          variant: "destructive",
        });
        return;
      }

      const sessionUser: User = {
        id: matchedUser.id,
        name: matchedUser.name,
        email: matchedUser.email,
      };

      const mockToken = `mock-token-${Date.now()}`;
      localStorage.setItem("user", JSON.stringify(sessionUser));
      localStorage.setItem("token", mockToken);

      setUser(sessionUser);
      setToken(mockToken);

      toast({
        title: "Success",
        description: "You've successfully logged in.",
      });

      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Login failed. Please try again.",
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
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay

      const storedUsersJSON = localStorage.getItem("registeredUsers");
      const storedUsers: StoredUser[] = storedUsersJSON
        ? JSON.parse(storedUsersJSON)
        : [];

      const alreadyExists = storedUsers.find((u) => u.email === email);

      if (alreadyExists) {
        toast({
          title: "Registration failed",
          description: "Email already registered.",
          variant: "destructive",
        });
        return;
      }

      const newUser: StoredUser = {
        id: `user-${Date.now()}`,
        name,
        email,
        password,
      };

      storedUsers.push(newUser);
      localStorage.setItem("registeredUsers", JSON.stringify(storedUsers));

      const sessionUser: User = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      };

      const mockToken = `mock-token-${Date.now()}`;
      localStorage.setItem("user", JSON.stringify(sessionUser));
      localStorage.setItem("token", mockToken);

      setUser(sessionUser);
      setToken(mockToken);

      toast({
        title: "Account created",
        description: "Your account has been created successfully.",
      });

      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Registration failed. Please try again.",
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
