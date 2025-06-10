import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const TermsOfServicePage = () => {
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
              <FileText className="h-6 w-6 text-blue-600 mr-2" />
              <h1 className="text-xl font-semibold text-gray-900">Terms of Service</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
              <div className="flex space-x-4 text-sm text-gray-500">
                <p><strong>Effective Date:</strong> January 1, 2025</p>
                <p><strong>Last Updated:</strong> January 1, 2025</p>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to MemoMind AI ("Service," "we," "our," or "us"). These Terms of Service ("Terms") govern your use of our AI-powered calendar and reflection service operated by MemoMind AI ("Company," "we," "our," or "us").
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                MemoMind AI is an AI-powered productivity service that provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Intelligent calendar scheduling and management</li>
                <li>Daily reflection tools and insights</li>
                <li>Google Calendar integration and synchronization</li>
                <li>AI-generated productivity recommendations</li>
                <li>Personal growth tracking and analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Account Creation</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>You must create an account to use our Service</li>
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You must notify us immediately of any unauthorized access</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Account Requirements</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>You must be at least 13 years old to use our Service</li>
                <li>You must have a valid Google account for authentication</li>
                <li>You may only create one account per person</li>
                <li>Business accounts may be created for organizational use</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.3 Account Termination</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You may terminate your account at any time</li>
                <li>We may terminate accounts that violate these Terms</li>
                <li>Upon termination, your data will be deleted according to our Privacy Policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Permitted Uses</h3>
              <p className="text-gray-700 leading-relaxed mb-4">You may use our Service to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Manage your personal or business calendar</li>
                <li>Create and store personal reflections</li>
                <li>Receive AI-powered scheduling suggestions</li>
                <li>Integrate with your Google Calendar</li>
                <li>Access productivity insights and analytics</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.2 Prohibited Uses</h3>
              <p className="text-gray-700 leading-relaxed mb-4">You may not use our Service to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful, offensive, or illegal content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use the Service for commercial purposes without permission</li>
                <li>Share account credentials with others</li>
                <li>Create multiple accounts to circumvent limitations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Google Services Integration</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Google OAuth</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Our Service uses Google OAuth for authentication</li>
                <li>You authorize us to access your Google account information</li>
                <li>We comply with Google's API Services User Data Policy</li>
                <li>You can revoke access at any time through your Google Account</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Google Calendar Access</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We access your calendar data only with your explicit consent</li>
                <li>We use calendar data solely to provide our scheduling services</li>
                <li>We do not share your calendar data with third parties</li>
                <li>You can disconnect calendar access while maintaining your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Subscription Plans and Billing</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 Plan Types</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Free Plan:</strong> Basic features with usage limitations</li>
                <li><strong>Pro Plan:</strong> Advanced features with expanded capabilities</li>
                <li><strong>Premium Plan:</strong> Full feature access with enhanced AI capabilities</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 Billing Terms</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Subscription fees are billed monthly in advance</li>
                <li>All fees are non-refundable except as required by law</li>
                <li>We use secure third-party payment processors</li>
                <li>Prices may change with 30 days' notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Privacy Policy explains how we handle your information. By using the Service, you consent to our data practices as described in our Privacy Policy.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We implement industry-standard security measures</li>
                <li>Our infrastructure is hosted on Vercel and Railway</li>
                <li>We regularly update security measures and protocols</li>
                <li>We maintain incident response procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. AI and Automated Decision Making</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">8.1 AI Capabilities</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Our AI provides scheduling suggestions and insights</li>
                <li>AI recommendations are not guaranteed to be accurate</li>
                <li>You maintain full control over your calendar and decisions</li>
                <li>AI learns from your usage patterns to improve suggestions</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.2 Limitations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>AI suggestions should not replace human judgment</li>
                <li>We do not guarantee the accuracy of AI-generated content</li>
                <li>AI may have biases or limitations we work to address</li>
                <li>Critical decisions should not rely solely on AI recommendations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Disclaimers and Limitations</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">9.1 Service Warranties</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>The Service is provided "as is" without warranties</li>
                <li>We disclaim all implied warranties of merchantability</li>
                <li>We do not warrant that the Service will be error-free</li>
                <li>Your use of the Service is at your own risk</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.2 Limitation of Liability</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Our liability is limited to the amount you paid for the Service</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>This limitation applies to the fullest extent permitted by law</li>
                <li>Some jurisdictions may not allow these limitations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modifications to Terms</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We may modify these Terms at any time</li>
                <li>Material changes will be notified to users with 30 days' notice</li>
                <li>Continued use after changes constitutes acceptance</li>
                <li>If you disagree with changes, you may terminate your account</li>
              </ul>
            </section>

            {/* <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@memomind.ai</p>
                <p className="text-gray-700"><strong>Support:</strong> support@memomind.ai</p>
                <p className="text-gray-700"><strong>Response Time:</strong> We will respond within 5 business days.</p>
              </div>
            </section> */}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Last Updated:</strong> January 1, 2025 | These Terms of Service govern your use of MemoMind AI. 
                By using our service, you agree to be bound by these terms.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfServicePage;
