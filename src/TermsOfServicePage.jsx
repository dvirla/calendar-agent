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
                <p><strong>Effective Date:</strong> June 10, 2025</p>
                <p><strong>Last Updated:</strong> June 10, 2025</p>
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
                <li>Intelligent calendar scheduling and management through Azure OpenAI AI agents</li>
                <li>Conversational AI interface for natural language calendar interaction</li>
                <li>Google Calendar integration and synchronization</li>
                <li>AI-generated scheduling suggestions and optimizations</li>
                <li>Schedule pattern analysis and productivity insights</li>
                <li>Pending action management with automatic expiration</li>
                <li>Persistent conversation history and user session management</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Authentication</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Account Creation and Authentication</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>You must authenticate through Google OAuth to use our Service</li>
                <li>We create your account using your Google email and profile information</li>
                <li>You are responsible for maintaining the security of your Google account</li>
                <li>You must notify us immediately of any unauthorized access</li>
                <li>Each user account is uniquely identified by their Google email address</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Account Requirements</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>You must be at least 13 years old to use our Service</li>
                <li>You must have a valid Google account with access to Google Calendar</li>
                <li>You may only create one account per Google email address</li>
                <li>Your Google account must have appropriate permissions for calendar access</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.3 Session Management</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We use JWT tokens for secure session management with 30-minute expiration</li>
                <li>You will need to re-authenticate when your session expires</li>
                <li>Sessions are stateless and do not store personal data in tokens</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Collection and Storage</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Information We Collect</h3>
              <p className="text-gray-700 leading-relaxed mb-4">We collect and store the following information:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Google Account Information:</strong> Email address, full name, and Google user ID</li>
                <li><strong>Google Calendar Data:</strong> Calendar events, titles, times, descriptions, and locations</li>
                <li><strong>OAuth Credentials:</strong> Google access tokens and refresh tokens (encrypted)</li>
                <li><strong>Conversation History:</strong> Your chat messages with our AI agent and AI responses</li>
                <li><strong>Pending Actions:</strong> Calendar modifications awaiting your approval</li>
                <li><strong>Connection Metadata:</strong> Authentication status and last synchronization times</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.2 Data Encryption and Security</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Google OAuth credentials are encrypted using Fernet symmetric encryption before database storage</li>
                <li>All database connections use SSL/TLS encryption</li>
                <li>Our production infrastructure uses PostgreSQL with proper authentication</li>
                <li>User data is isolated per account with strict access controls</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.3 Database Architecture</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>User accounts with email, name, and Google ID</li>
                <li>Encrypted calendar connection credentials per user</li>
                <li>Conversation history organized by user and session</li>
                <li>Pending actions with automatic 30-minute expiration</li>
                <li>All data relationships maintain per-user isolation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Google Services Integration</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Google OAuth and API Access</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>We use Google OAuth 2.0 for authentication and authorization</li>
                <li>Required scopes: calendar access, email, and profile information</li>
                <li>We comply with Google's API Services User Data Policy</li>
                <li>You can revoke access at any time through your Google Account settings</li>
                <li>We automatically refresh expired tokens when possible</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Calendar Data Processing</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We read your calendar events to provide scheduling suggestions</li>
                <li>Calendar modifications require explicit user approval through our pending action system</li>
                <li>We analyze scheduling patterns to provide productivity insights</li>
                <li>All calendar operations are performed in real-time and not cached</li>
                <li>We do not share your calendar data with any third parties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibent text-gray-900 mb-4">6. AI Processing and Third-Party Services</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 Azure OpenAI Integration</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Our AI agent is powered by Azure OpenAI's o4-mini model</li>
                <li>Your conversation data is sent to Azure OpenAI for processing</li>
                <li>We use Logfire for AI conversation monitoring and debugging</li>
                <li>Azure OpenAI processes your calendar and conversation data to generate responses</li>
                <li>We do not use your data to train AI models</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 Infrastructure and Hosting</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Our backend is hosted on Railway with PostgreSQL database</li>
                <li>Our frontend is deployed on Vercel</li>
                <li>All data transmission occurs over HTTPS</li>
                <li>We maintain appropriate security measures and monitoring</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Pending Actions and Approval System</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">7.1 Action Approval Workflow</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>All calendar modifications proposed by our AI require your explicit approval</li>
                <li>Pending actions are stored in our database with detailed descriptions</li>
                <li>Actions automatically expire after 30 minutes if not approved or rejected</li>
                <li>You maintain full control over all calendar changes</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.2 Action Types and Data Storage</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Create event: stores title, time, description, and location</li>
                <li>Update event: stores modified event details and original event ID</li>
                <li>Delete event: stores event identification for removal</li>
                <li>All action details are permanently deleted after execution or expiration</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention and Deletion</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">8.1 Automatic Data Cleanup</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Pending actions automatically expire and are deleted after 30 minutes</li>
                <li>Expired OAuth tokens are refreshed automatically when possible</li>
                <li>System performs regular cleanup of expired data</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.2 Account Deletion</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You may request account deletion by contacting our support</li>
                <li>Upon deletion, we remove all stored personal data including conversations and credentials</li>
                <li>Deletion is permanent and cannot be reversed</li>
                <li>Some data may persist in backups for up to 30 days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Acceptable Use Policy</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">9.1 Permitted Uses</h3>
              <p className="text-gray-700 leading-relaxed mb-4">You may use our Service to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Manage your personal or business calendar through AI assistance</li>
                <li>Engage in natural language conversations about your schedule</li>
                <li>Receive AI-powered scheduling suggestions and optimizations</li>
                <li>Analyze your scheduling patterns and productivity</li>
                <li>Create, modify, and delete calendar events with AI assistance</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.2 Prohibited Uses</h3>
              <p className="text-gray-700 leading-relaxed mb-4">You may not use our Service to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful, offensive, or illegal content</li>
                <li>Attempt to gain unauthorized access to our systems or other users' data</li>
                <li>Interfere with or disrupt the Service or its infrastructure</li>
                <li>Use the Service for commercial purposes without permission</li>
                <li>Share or compromise your Google account credentials</li>
                <li>Attempt to reverse engineer or manipulate our AI systems</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. AI and Automated Decision Making</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">10.1 AI Capabilities and Limitations</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Our AI provides scheduling suggestions and calendar management assistance</li>
                <li>All calendar modifications require your explicit approval before execution</li>
                <li>AI recommendations are suggestions only and not guaranteed to be optimal</li>
                <li>The AI learns from your usage patterns to improve suggestions</li>
                <li>You maintain full control over all calendar decisions and modifications</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.2 AI Data Processing</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Your conversation and calendar data is processed by Azure OpenAI</li>
                <li>AI responses are generated based on your specific calendar context</li>
                <li>We do not train AI models using your personal data</li>
                <li>AI processing is performed in real-time for each interaction</li>
                <li>Critical decisions should not rely solely on AI recommendations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Security and Privacy</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">11.1 Security Measures</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Industry-standard encryption for data storage and transmission</li>
                <li>Secure OAuth 2.0 implementation for Google integration</li>
                <li>Per-user data isolation and access controls</li>
                <li>Regular security monitoring and incident response procedures</li>
                <li>HTTPS enforcement for all data transmission</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.2 Privacy Protections</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Your data is never shared with unauthorized third parties</li>
                <li>Calendar data is processed only for service functionality</li>
                <li>Conversation history is private and user-specific</li>
                <li>You can revoke calendar access through Google at any time</li>
                <li>Our Privacy Policy provides additional details on data handling</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Service Availability and Performance</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">12.1 Service Level</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>We strive to maintain high service availability but do not guarantee 100% uptime</li>
                <li>Planned maintenance will be communicated when possible</li>
                <li>AI response times may vary based on system load and complexity</li>
                <li>Google API limitations may affect calendar operations</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.2 Dependencies</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Service functionality depends on Google Calendar API availability</li>
                <li>AI features depend on Azure OpenAI service availability</li>
                <li>Your calendar access depends on valid Google OAuth credentials</li>
                <li>We are not responsible for third-party service interruptions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Disclaimers and Limitations</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">13.1 Service Warranties</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>The Service is provided "as is" without warranties of any kind</li>
                <li>We disclaim all implied warranties of merchantability and fitness</li>
                <li>We do not warrant that the Service will be error-free or uninterrupted</li>
                <li>AI suggestions are not guaranteed to be accurate or optimal</li>
                <li>Your use of the Service is at your own risk</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.2 Limitation of Liability</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Our liability is limited to the amount you paid for the Service in the past 12 months</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>This limitation applies to the fullest extent permitted by law</li>
                <li>We are not responsible for data loss or calendar scheduling errors</li>
                <li>Some jurisdictions may not allow these limitations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We may modify these Terms at any time with notice</li>
                <li>Material changes will be communicated to users with 30 days' notice</li>
                <li>Continued use after changes constitutes acceptance of new Terms</li>
                <li>If you disagree with changes, you may discontinue using the Service</li>
                <li>The most current version will always be available on our website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@memomindai.com</p>
                <p className="text-gray-700"><strong>Support:</strong> support@memomindai.com</p>
                <p className="text-gray-700"><strong>Response Time:</strong> We will respond within 5 business days.</p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Last Updated:</strong> June 10, 2025 | These Terms of Service govern your use of MemoMind AI. 
                By using our service, you agree to be bound by these terms and our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfServicePage;
