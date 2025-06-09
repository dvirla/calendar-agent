import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Brain, Clock, Sparkles, CheckCircle, Menu, X, ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { 
  hasCookieConsent, 
  initializeAnalytics as initAnalytics, 
  clearTrackingCookies 
} from './utils/cookieConsent.js';
import logoSvg from './logo.svg';

const Homepage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  // Check if user has already made a cookie choice
  React.useEffect(() => {
    if (!hasCookieConsent()) {
      setShowCookieConsent(true);
    }
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Scheduling",
      description: "Your personal assistant that understands your preferences and automatically optimizes your calendar",
      color: "text-blue-600"
    },
    {
      icon: Sparkles,
      title: "Daily Reflections",
      description: "Contextual insights based on your actual activities help you grow and improve each day",
      color: "text-purple-600"
    },
    {
      icon: Calendar,
      title: "Smart Calendar Sync",
      description: "Seamlessly integrates with Google Calendar for real-time updates and intelligent conflict resolution",
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "Time Intelligence",
      description: "Learn from your patterns to suggest optimal meeting times and protect your focus blocks",
      color: "text-orange-600"
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Basic AI scheduling",
        "3 daily reflections",
        "Google Calendar sync",
        "Up to 5 events/month"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      description: "For productivity enthusiasts",
      features: [
        "Advanced AI insights",
        "Unlimited reflections",
        "Productivity analytics",
        "Priority support"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Premium",
      price: "$17",
      period: "per month",
      description: "For reflection masters",
      features: [
        "Everything in Pro",
        "AI-managed reflection journal",
        "Weekly & monthly insights",
        "Personal growth tracking",
        "Custom reflection themes",
        "Smart conflict resolution",
      ],
      cta: "Start Premium",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How does MemoMind AI understand my preferences?",
      answer: "Our AI learns from your scheduling patterns, meeting outcomes, and reflection responses to personalize suggestions. The more you use it, the smarter it becomes at predicting your needs."
    },
    {
      question: "How do I get started with my calendar integration?",
      answer: "Simply sign in with your Google account and we'll securely connect to your calendar. We use industry-standard OAuth protocols and rely on Vercel and Railway's enterprise infrastructure for security."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to Pro features until the end of your billing cycle, then automatically switch to the Free plan."
    },
    {
      question: "What makes the Premium reflection journal special?",
      answer: "The Premium tier includes an AI-managed journal that tracks your reflection patterns, provides weekly insights, and helps you identify growth opportunities based on your actual productivity data."
    },
    {
      question: "How accurate are the AI suggestions?",
      answer: "Our AI has a 94% accuracy rate for scheduling suggestions and gets better over time as it learns your preferences. You always have full control to approve or modify any suggestions."
    }
  ];

  const handleGetStarted = () => {
    navigate('/login');
  };

  const handleAcceptCookies = () => {
    // Store acceptance in localStorage
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    
    // Initialize analytics/tracking
    initAnalytics();
    
    setShowCookieConsent(false);
  };

  const handleRejectCookies = () => {
    // Store rejection in localStorage
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    
    // Clear any existing tracking cookies
    clearTrackingCookies();
    
    setShowCookieConsent(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              {/* <div className="bg-white p-0 rounded-lg"> */}
                <img src={logoSvg} alt="MemoMind AI" className="h-16 w-16" />
              {/* </div> */}
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MemoMind AI
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#faq" className="block text-gray-600 hover:text-gray-900">FAQ</a>
              <button
                onClick={handleGetStarted}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-full">
                <Sparkles className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              When Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Memos
              </span>{' '}
              Come to Life
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform scattered thoughts into intelligent action. Your AI-powered calendar assistant that learns, 
              schedules, and reflects with you—making every moment count.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-sm text-gray-500">Free forever • No credit card required</p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>4.9/5 from 2,500+ users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Intelligence That Adapts to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                You
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More than just scheduling—it's your personal productivity partner that grows smarter with every interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <div className={`${feature.color} mb-4`}>
                  <feature.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Feature Highlights */}
          {/* <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Intelligence</h3>
                <p className="text-gray-600">Learns your unique patterns to provide personalized scheduling and reflection insights.</p>
              </div>
              <div>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Instant responses and real-time calendar updates that keep up with your pace.</p>
              </div>
              <div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Always Improving</h3>
                <p className="text-gray-600">Gets smarter with every interaction, building better habits and insights over time.</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your productivity journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-blue-500 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={handleGetStarted}
                    className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about MemoMind AI</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've discovered the power of intelligent scheduling and daily reflection.
          </p>
          
          <button
            onClick={handleGetStarted}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Start Your Free Journey</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <p className="text-blue-100 mt-4 text-sm">No credit card required • Setup in under 2 minutes</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              {/* <div className="bg-white p-0 rounded-lg"> */}
                <img src={logoSvg} alt="MemoMind AI" className="h-16 w-16" />
              {/* </div> */}
              <span className="text-xl font-bold">MemoMind AI</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button 
                onClick={() => navigate('/privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigate('/terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <a href="mailto:support@memomind.ai" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 MemoMind AI. All rights reserved. Making your memos come to life.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex-1 text-sm">
              <p>
                We use essential cookies to make our site work and analytics cookies to understand how you interact with our service. 
                Analytics cookies help us improve MemoMind AI for everyone.{' '}
                <button 
                  onClick={() => navigate('/privacy')}
                  className="text-blue-400 hover:text-blue-300 underline cursor-pointer"
                >
                  Learn more about our privacy practices
                </button>
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleRejectCookies}
                className="px-4 py-2 text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:border-gray-500 transition-colors"
                title="Only essential cookies will be used"
              >
                Reject Analytics
              </button>
              <button
                onClick={handleAcceptCookies}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                title="Allow analytics cookies to help us improve the service"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;