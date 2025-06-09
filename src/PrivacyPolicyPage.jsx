import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span>Back to Home</span>
            </button>
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <h1 className="text-xl font-semibold text-gray-900">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <div className="flex space-x-4 text-sm text-gray-500">
                <p><strong>Effective Date:</strong> January 1, 2025</p>
                <p><strong>Last Updated:</strong> January 1, 2025</p>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to MemoMind AI ("we," "our," or "us"). We are committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, store, and share your information when you use our AI-powered calendar and reflection service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using MemoMind AI, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Information You Provide Directly</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and profile information through Google OAuth</li>
                <li><strong>Reflection Data:</strong> Daily reflections, insights, and personal notes you enter into our system</li>
                <li><strong>Communication Data:</strong> Messages you send to us through support channels</li>
                <li><strong>Preferences:</strong> Your scheduling preferences, time zones, and app settings</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Information We Collect Automatically</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Calendar Data:</strong> With your explicit consent, we access your Google Calendar data including event titles, descriptions, dates, and times</li>
                <li><strong>Usage Data:</strong> How you interact with our service, including features used and frequency of use</li>
                <li><strong>Technical Data:</strong> IP address, location data, and cookies</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.3 Information from Third Parties</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Google Services:</strong> We receive information through Google OAuth and Google Calendar API as authorized by you</li>
                <li><strong>Authentication Data:</strong> Information necessary to verify your identity and maintain account security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Provide Our Services</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Process and manage your calendar events</li>
                <li>Generate AI-powered scheduling suggestions</li>
                <li>Provide daily reflection insights and analytics</li>
                <li>Synchronize your calendar data in real-time</li>
                <li>Detect and resolve scheduling conflicts</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Improve Our Services</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Analyze usage patterns to enhance our AI algorithms</li>
                <li>Develop new features and improve existing functionality</li>
                <li>Conduct research and analytics to optimize user experience</li>
                <li>Personalize your experience based on your preferences and behavior</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your information:
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Technical Safeguards</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Encryption:</strong> All data is encrypted in transit using TLS/SSL and at rest using industry-standard encryption</li>
                <li><strong>Authentication:</strong> Secure OAuth 2.0 authentication with Google</li>
                <li><strong>Access Controls:</strong> Strict access controls and authentication for our systems</li>
                <li><strong>Infrastructure Security:</strong> Our hosting providers (Vercel and Railway) maintain enterprise-grade security standards</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights and Choices</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Access and Control</h3>
              <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request transfer of your data in a portable format</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Calendar Data Control</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Revoke Access:</strong> You can revoke our access to your Google Calendar at any time through your Google Account settings</li>
                <li><strong>Data Deletion:</strong> When you revoke access, we will delete your calendar data within 30 days</li>
                <li><strong>Selective Sharing:</strong> You control which calendar information is shared with our service</li>
              </ul>
            </section>

            {/* <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> support@memomind.ai</p>
                <p className="text-gray-700"><strong>Response Time:</strong> We will respond within 30 days of receiving your request.</p>
              </div>
            </section> */}

            {/* <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Last Updated:</strong> January 1, 2025 | This Privacy Policy is designed to be transparent and comprehensive. 
                If you have any questions or concerns about how we handle your personal information, please don't hesitate to contact us.
              </p>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
