import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Calendar, Clock } from 'lucide-react';
import mainLogo from '/simplified_logo.png';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-full">
            <img src={mainLogo} alt="MemoMind AI" className="h-16 w-16" />
          </div>
        </div>

        {/* 404 Number */}
        <div className="mb-6">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Oops! The page you're looking for seems to have disappeared into the digital void. 
            Don't worry, even the best calendars have missing dates sometimes.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 mb-8 opacity-50">
          <Calendar className="h-8 w-8 text-blue-600" />
          <Clock className="h-8 w-8 text-purple-600" />
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleGoHome}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Home className="h-5 w-5" />
            <span>Go to Homepage</span>
          </button>
          
          <button
            onClick={handleGoBack}
            className="w-full bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 border border-gray-300 transition-all flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            If you believe this is an error, please{' '}
            <a 
              href="mailto:support@memomindai.com"
              target="_blank" 
              className="text-blue-600 hover:text-blue-700 underline"
            >
              contact support
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;