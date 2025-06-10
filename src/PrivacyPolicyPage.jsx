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
                <p><strong>Effective Date:</strong> June 10, 2025</p>
                <p><strong>Last Updated:</strong> June 10, 2025</p>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                MemoMind AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, process, and safeguard your information when you use our AI-powered calendar and reflection service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Information You Provide Directly</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Account Information:</strong> When you authenticate with Google, we collect your email address, full name, and Google user ID</li>
                <li><strong>Chat Messages:</strong> All conversations you have with our AI assistant are stored to provide personalized service and conversation history</li>
                <li><strong>Calendar Events:</strong> When you create events through our service, we temporarily store event details for processing</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Information We Collect Automatically</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Google Calendar Data:</strong> With your explicit consent, we access your Google Calendar events to provide scheduling assistance</li>
                <li><strong>Usage Information:</strong> We collect information about how you interact with our service, including timestamps and conversation patterns</li>
                <li><strong>Technical Data:</strong> IP addresses, browser information, and device identifiers for security and service optimization</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.3 OAuth Credentials</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Google OAuth Tokens:</strong> We store encrypted Google OAuth access and refresh tokens to maintain your calendar connection</li>
                <li><strong>Encryption:</strong> All OAuth credentials are encrypted using Fernet symmetric encryption before database storage</li>
                <li><strong>Scope:</strong> We only request calendar read/write access and basic profile information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Service Provision</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Provide AI-powered calendar scheduling and management</li>
                <li>Generate personalized productivity insights and recommendations</li>
                <li>Maintain conversation history for context-aware assistance</li>
                <li>Synchronize and manage your Google Calendar events</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 AI Processing</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Process your messages using Azure OpenAI services for natural language understanding</li>
                <li>Analyze your calendar patterns to provide scheduling suggestions</li>
                <li>Generate daily reflection prompts based on your completed activities</li>
                <li>Create contextual responses based on your conversation history</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.3 Security and Authentication</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Authenticate your identity using JWT tokens with 30-minute expiry</li>
                <li>Maintain secure sessions and protect against unauthorized access</li>
                <li>Isolate user data to ensure privacy between different accounts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Storage and Security</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Database Storage</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>User Data:</strong> Stored in PostgreSQL database with proper authentication</li>
                <li><strong>Conversations:</strong> All chat messages are permanently stored with timestamps</li>
                <li><strong>Pending Actions:</strong> Calendar actions requiring approval auto-expire after 30 minutes</li>
                <li><strong>Per-User Isolation:</strong> All data is strictly isolated by user ID to prevent cross-user access</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.2 Encryption and Security</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>OAuth Credentials:</strong> Encrypted using Fernet symmetric encryption with environment-specific keys</li>
                <li><strong>Data Transmission:</strong> All API communications use HTTPS encryption</li>
                <li><strong>Access Control:</strong> JWT token-based authentication with per-request user verification</li>
                <li><strong>Infrastructure:</strong> Hosted on secure cloud platforms (Railway for backend, Vercel for frontend)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.3 Third-Party Services</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Azure OpenAI:</strong> Chat messages are processed by Azure OpenAI for AI responses</li>
                <li><strong>Google APIs:</strong> Calendar data is accessed through Google Calendar API</li>
                <li><strong>Logfire:</strong> Anonymous usage analytics for service improvement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 No Sale of Personal Data</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information to third parties for marketing or commercial purposes.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Service Providers</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Azure OpenAI:</strong> Chat content is sent to Azure OpenAI for processing AI responses</li>
                <li><strong>Google:</strong> We access your calendar data through Google APIs with your explicit consent</li>
                <li><strong>Cloud Infrastructure:</strong> Data is stored on Railway (database) and Vercel (application hosting)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.3 Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed">
                We may disclose your information if required by law, legal process, or to protect the rights, property, or safety of MemoMind AI, our users, or others.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Privacy Rights</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 Access and Control</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Calendar Access:</strong> You can revoke calendar access through your Google Account settings at any time</li>
                <li><strong>Account Data:</strong> Access your profile information and conversation history through our service</li>
                <li><strong>Data Portability:</strong> Request export of your conversation history and user data</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 Data Deletion</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Account Termination:</strong> You may terminate your account at any time</li>
                <li><strong>Data Retention:</strong> Upon account deletion, we will remove your personal data within 30 days</li>
                <li><strong>Legal Obligations:</strong> Some data may be retained for legal compliance or fraud prevention</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.3 European Users (GDPR)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are located in the European Economic Area, you have additional rights under GDPR:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">7.1 Active Accounts</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>User Profile:</strong> Retained while your account is active</li>
                <li><strong>Conversation History:</strong> Permanently stored to provide context-aware assistance</li>
                <li><strong>OAuth Credentials:</strong> Stored until you revoke calendar access or delete your account</li>
                <li><strong>Pending Actions:</strong> Automatically expire after 30 minutes</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.2 Account Deletion</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>All personal data is deleted within 30 days of account termination</li>
                <li>Encrypted OAuth credentials are immediately purged</li>
                <li>Conversation history is permanently removed</li>
                <li>Anonymous usage analytics may be retained for service improvement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">8.1 Authentication Tokens</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>We use JWT tokens for authentication, which expire after 30 minutes</li>
                <li>These tokens are not stored as cookies but handled by your browser's session storage</li>
                <li>No persistent tracking cookies are used</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.2 Analytics</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We use Logfire for anonymous usage analytics to improve our service</li>
                <li>No personally identifiable information is included in analytics data</li>
                <li>Analytics help us understand usage patterns and improve AI responses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For users between 13-18 years old, parental consent may be required in certain jurisdictions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your country of residence, including the United States where our cloud infrastructure is hosted.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We ensure appropriate safeguards are in place for international transfers</li>
                <li>Our cloud providers (Railway, Vercel, Azure) comply with international data protection standards</li>
                <li>Data is encrypted in transit and at rest regardless of location</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Security Measures</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">11.1 Technical Safeguards</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>All sensitive data is encrypted using industry-standard encryption (Fernet)</li>
                <li>HTTPS encryption for all data transmission</li>
                <li>Regular security updates and patches</li>
                <li>Secure authentication using Google OAuth and JWT tokens</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.2 Operational Safeguards</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Limited access to personal data on a need-to-know basis</li>
                <li>Regular security audits and monitoring</li>
                <li>Incident response procedures in case of security breaches</li>
                <li>Employee training on data protection and privacy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. When we make material changes, we will:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Update the "Last Updated" date at the top of this policy</li>
                <li>Notify you via email or through our service</li>
                <li>Provide at least 30 days' notice for material changes</li>
                <li>Obtain your consent where required by applicable law</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of the Service after changes become effective constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy, want to exercise your privacy rights, or need to report a privacy concern, please contact us:
              </p>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700"><strong>Privacy Officer:</strong> privacy@memomind.ai</p>
                <p className="text-gray-700"><strong>General Support:</strong> support@memomind.ai</p>
                <p className="text-gray-700"><strong>Data Protection Requests:</strong> dpo@memomind.ai</p>
                <p className="text-gray-700"><strong>Response Time:</strong> We will respond to privacy requests within 30 days.</p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Last Updated:</strong> June 10, 2025 | This Privacy Policy describes how MemoMind AI collects, uses, and protects your personal information. 
                By using our service, you agree to the practices described in this policy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
