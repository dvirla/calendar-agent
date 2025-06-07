import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { Calendar, Shield, Clock, CheckCircle } from 'lucide-react';

const LoginPage = () => {
  const { loginWithGoogle, handleAuthCallback, loading } = useAuth();
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle OAuth callback when user returns from Google
  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      
      if (token) {
        try {
          setAuthLoading(true);
          await handleAuthCallback(token);
          // Remove token from URL for security
          window.history.replaceState({}, document.title, window.location.pathname);
        } catch (error) {
          setError('Authentication failed. Please try again.');
          console.error('Callback error:', error);
        } finally {
          setAuthLoading(false);
        }
      }
    };

    handleCallback();
  }, [handleAuthCallback]);

  const handleGoogleLogin = async () => {
    try {
      setError(null);
      setAuthLoading(true);
      await loginWithGoogle();
    } catch (error) {
      setError('Failed to start authentication. Please try again.');
      setAuthLoading(false);
    }
  };

  if (loading || authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            {authLoading ? 'Completing authentication...' : 'Loading...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-3 rounded-full">
              <Calendar className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Calendar Agent
          </h2>
          <p className="text-gray-600">
            Your AI-powered calendar assistant with intelligent scheduling and daily reflection
          </p>
        </div>

        {/* Features Preview */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
            <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">Smart calendar management and scheduling</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
            <Shield className="h-5 w-5 text-green-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">Secure Google Calendar integration</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
            <Clock className="h-5 w-5 text-purple-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">Daily reflection and productivity insights</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
            <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">AI-powered conversation and planning</span>
          </div>
        </div>

        {/* Login Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleGoogleLogin}
            disabled={authLoading}
            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              By continuing, you agree to connect your Google Calendar and enable AI-powered assistance.
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="text-center text-xs text-gray-500 space-y-1">
          <p>🔒 Your calendar data is encrypted and secure</p>
          <p>🤖 AI processes data locally and contextually</p>
          <p>🔄 Sessions auto-expire for enhanced security</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;