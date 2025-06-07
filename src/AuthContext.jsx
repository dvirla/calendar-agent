import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedToken = localStorage.getItem('auth_token');
        if (storedToken) {
          setToken(storedToken);
          await fetchUserProfile(storedToken);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Fetch user profile with token
  const fetchUserProfile = async (authToken) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/profile`, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        setIsAuthenticated(true);
        return userData;
      } else if (response.status === 401) {
        // Token expired or invalid
        logout();
        throw new Error('Authentication expired');
      } else {
        throw new Error('Failed to fetch user profile');
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      logout();
      throw error;
    }
  };

  // Start Google OAuth flow
  const loginWithGoogle = async () => {
    console.log('Raw env var:', import.meta.env.VITE_API_BASE_URL);
    console.log('API_BASE_URL after fallback:', API_BASE_URL);
    console.log('Full URL will be:', `${API_BASE_URL}/auth/google`);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/google`);
      const data = await response.json();
      
      if (data.auth_url) {
        // Redirect to Google OAuth
        window.location.href = data.auth_url;
      } else {
        throw new Error('Failed to get Google OAuth URL');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Handle OAuth callback with token
  const handleAuthCallback = async (tokenFromUrl) => {
    try {
      setLoading(true);
      setToken(tokenFromUrl);
      localStorage.setItem('auth_token', tokenFromUrl);
      
      const userData = await fetchUserProfile(tokenFromUrl);
      return userData;
    } catch (error) {
      console.error('Auth callback error:', error);
      logout();
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout and clear all auth data
  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('auth_token');
  };

  // Make authenticated API requests
  const apiRequest = async (endpoint, options = {}) => {
    if (!token) {
      throw new Error('No authentication token available');
    }

    const defaultOptions = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: { ...defaultOptions.headers },
    });

    if (response.status === 401) {
      // Token expired, logout user
      logout();
      throw new Error('Authentication expired. Please login again.');
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  };

  // Check if token is expired (basic check)
  const isTokenExpired = () => {
    if (!token) return true;
    
    try {
      // JWT tokens have 3 parts separated by dots
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      return payload.exp < currentTime;
    } catch {
      return true;
    }
  };

  // Auto-refresh token check
  useEffect(() => {
    if (token && isAuthenticated) {
      const checkTokenExpiry = () => {
        if (isTokenExpired()) {
          logout();
        }
      };

      // Check token expiry every minute
      const interval = setInterval(checkTokenExpiry, 60000);
      return () => clearInterval(interval);
    }
  }, [token, isAuthenticated]);

  const value = {
    user,
    token,
    loading,
    isAuthenticated,
    loginWithGoogle,
    logout,
    apiRequest,
    handleAuthCallback,
    fetchUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};