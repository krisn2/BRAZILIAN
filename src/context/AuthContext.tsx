"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  userID: string;
  email: string;
  playerName: string;
  loginType?: string;
  avatarUrl?: string;
  coins?: number;
  totalWins?: number;
  maxStreak?: number;
  exp?: number;
  country?: string;
  playerId?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const getCookie = (name: string): string => {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(new RegExp("(?:^|;\\s*)" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : "";
};

const isTokenExpired = (jwtToken: string): boolean => {
  try {
    const parts = jwtToken.split(".");
    if (parts.length !== 3) return true;
    const payload = JSON.parse(atob(parts[1]));
    if (!payload.exp) return false;
    return payload.exp * 1000 < Date.now() + 10000;
  } catch {
    return true;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const logout = () => {
    // Clear cookie
    if (typeof document !== "undefined") {
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    // Clear localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }

    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  const login = (userData: User, tokenValue: string) => {
    const isHttps = typeof window !== "undefined" && window.location.protocol === "https:";
    // Set cookie (only attach Secure if actually running on HTTPS)
    if (typeof document !== "undefined") {
      document.cookie = `token=${encodeURIComponent(tokenValue)}; path=/; max-age=7200; ${isHttps ? "Secure; " : ""}SameSite=Lax`;
    }
    // Set localStorage for token and user
    if (typeof window !== "undefined") {
      localStorage.setItem("token", tokenValue);
      localStorage.setItem("user", JSON.stringify(userData));
    }

    setToken(tokenValue);
    setUser(userData);
    setIsAuthenticated(true);
  };

  useEffect(() => {
    const cookieToken = getCookie("token");
    const localToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const storedToken = cookieToken || localToken;
    const storedUser = typeof window !== "undefined" ? localStorage.getItem("user") : null;

    if (storedToken && storedUser) {
      if (isTokenExpired(storedToken)) {
        console.warn("Stored auth token is expired. Logging out.");
        logout();
      } else {
        try {
          const parsedUser = JSON.parse(storedUser);
          setToken(storedToken);
          setUser(parsedUser);
          setIsAuthenticated(true);
          // Sync token across storage if one was missing
          if (!cookieToken && typeof document !== "undefined") {
            const isHttps = window.location.protocol === "https:";
            document.cookie = `token=${encodeURIComponent(storedToken)}; path=/; max-age=7200; ${isHttps ? "Secure; " : ""}SameSite=Lax`;
          }
          if (!localToken && typeof window !== "undefined") {
            localStorage.setItem("token", storedToken);
          }
        } catch (e) {
          console.error("Error parsing stored user data", e);
          logout();
        }
      }
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

