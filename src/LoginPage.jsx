import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Brain, Shield, Lightbulb, ArrowLeft, Zap } from 'lucide-react';
import { hasGivenConsent, trackPageView } from './utils/cookieConsent.js';

const LoginPage = () => {
  const navigate = useNavigate();
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
          // Navigate to app after successful authentication
          navigate('/app');
        } catch (error) {
          setError('Authentication failed. Please try again.');
          console.error('Callback error:', error);
        } finally {
          setAuthLoading(false);
        }
      }
    };

    handleCallback().then(() => {
      // After handling the callback, track page view if consent has been given
      if (hasGivenConsent()) {
        trackPageView('Login Page', window.location.href);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleAuthCallback]); // Assuming handleAuthCallback is stable or correctly memoized

  
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
            {authLoading ? 'Connecting your calendar...' : 'Loading...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Back Button */}
        <div className="flex justify-start">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Back to Home</span>
          </button>
        </div>
        
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to MemoMind AI
          </h2>
          <p className="text-gray-600">
            Your AI reflection assistant that makes self-awareness effortless
          </p>
        </div>

        {/* What You Get Preview */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
            <Brain className="h-5 w-5 text-blue-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">Smart daily questions based on your actual calendar</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
            <Lightbulb className="h-5 w-5 text-purple-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">Pattern recognition to discover what makes you productive</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
            <Zap className="h-5 w-5 text-green-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">90-second daily habit that actually sticks</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
            <Shield className="h-5 w-5 text-orange-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">Secure Google Calendar integration</span>
          </div>
        </div>

        {/* Login Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
              <button onClick={() => setError(null)} className="ml-2 text-red-800 hover:text-red-900">×</button>
            </div>
          )}

          <button
            onClick={handleGoogleLogin}
            disabled={authLoading}
            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
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
            Connect Calendar & Start Reflecting
          </button>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              By continuing, you agree to connect your Google Calendar for intelligent reflection prompts.
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-100">
          <h3 className="font-semibold text-purple-900 mb-2">How It Works:</h3>
          <div className="space-y-2 text-sm text-purple-800">
            <div className="flex items-start space-x-2">
              <span className="font-bold text-purple-600">1.</span>
              <span>Connect your calendar (read-only, secure)</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-bold text-purple-600">2.</span>
              <span>Get smart daily questions: "You had 5 meetings today - which one energized you most?"</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-bold text-purple-600">3.</span>
              <span>Discover patterns and build better habits over time</span>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="text-center text-xs text-gray-500 space-y-1">
          <p>🔒 Your calendar data is encrypted and secure</p>
          <p>🤖 AI generates questions locally and contextually</p>
          <p>📱 Works on all devices with automatic sync</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;