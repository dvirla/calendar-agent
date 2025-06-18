import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Brain, Clock, Sparkles, CheckCircle, Menu, X, ArrowRight, Star, Shield, Zap, TrendingUp, BarChart3, Target, Users } from 'lucide-react';
import {
  hasCookieConsentBeenSet,
  hasGivenConsent,
  grantAnalyticsConsent,
  denyAnalyticsConsent,
  trackPageView,
  COOKIE_CONSENT_KEY,
  COOKIE_CONSENT_DATE_KEY
} from './utils/cookieConsent.js';
import logoSvg from '/logo_4x.png';

const Homepage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  // Check if user has already made a cookie choice
  React.useEffect(() => {
    if (!hasCookieConsentBeenSet()) {
      setShowCookieConsent(true);
    } else if (hasGivenConsent()) {
      // If consent was already given on a previous visit, track page view for the current page
      trackPageView('Homepage', window.location.href);
    }
    // If consent has been set but not given (i.e., rejected), or not set at all,
    // analytics will not run until/unless consent is explicitly granted.
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Time Blocking",
      description: "Intelligent calendar optimization that learns your work patterns and automatically schedules focus time, meetings, and breaks for peak performance",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics & Insights",
      description: "Transform your calendar data into actionable insights. Discover when you're most productive, which meetings drain energy, and how to optimize your schedule",
      color: "text-purple-600"
    },
    {
      icon: Target,
      title: "Daily Reflection & Goal Tracking",
      description: "AI-guided reflections that connect your daily activities to long-term goals. Build better habits with personalized prompts based on your actual behavior",
      color: "text-green-600"
    },
    {
      icon: BarChart3,
      title: "Work-Life Balance Optimization",
      description: "Track time across life domains - work, health, relationships, growth. Get AI recommendations to maintain balance and prevent burnout",
      color: "text-orange-600"
    }
  ];

  const useCases = [
    {
      title: "For High-Performing Executives",
      description: "Optimize meeting efficiency, protect deep work time, and get weekly insights on team productivity patterns",
      icon: Users
    },
    {
      title: "For Ambitious Entrepreneurs",
      description: "Balance multiple projects, track time allocation across ventures, and ensure personal health doesn't get sacrificed",
      icon: Zap
    },
    {
      title: "For Growth-Minded Professionals",
      description: "Build better work habits, identify productivity patterns, and make data-driven decisions about your time",
      icon: TrendingUp
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Basic AI scheduling assistant",
        "Google Calendar sync",
        "3 daily reflection prompts",
        "Weekly productivity summary",
        "Up to 20 events/month"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      description: "For serious productivity optimization",
      features: [
        "Advanced AI time blocking",
        "Unlimited smart scheduling",
        "Custom reflection templates",
        "Detailed analytics dashboard",
        "Meeting efficiency scores",
        "Energy level tracking",
        "Priority email support"
      ],
      cta: "Start 14-Day Trial",
      popular: true
    },
    {
      name: "Premium",
      price: "$24",
      period: "per month",
      description: "For performance maximization",
      features: [
        "Everything in Pro",
        "AI coaching recommendations",
        "Advanced habit formation tools",
        "Quarterly performance reviews",
        "Work-life balance scoring",
        "Team productivity insights",
        "Custom integrations",
        "Dedicated success manager"
      ],
      cta: "Start Premium",
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "I've been searching for a tool that combines intelligent scheduling with personal growth tracking. MemoMind's approach to AI-driven reflections is exactly what the market needs.",
      author: "Beta Tester",
      role: "Product Manager at Tech Company",
      metric: "Early Access User"
    },
    {
      quote: "The concept of connecting calendar data to performance insights is brilliant. Can't wait to see how this transforms my daily workflow and helps me achieve better work-life balance.",
      author: "Waitlist Member",
      role: "Startup Founder",
      metric: "Joining at Launch"
    },
    {
      quote: "Finally, someone is building what Reclaim and Akiflow are missing - the self-improvement layer. This could be a game-changer for productivity-focused professionals.",
      author: "Early Supporter",
      role: "Executive Coach",
      metric: "Pre-Launch Advocate"
    }
  ];

  const faqs = [
    {
      question: "How is MemoMind different from other calendar apps like Reclaim.ai or Akiflow?",
      answer: "While other tools focus solely on scheduling, MemoMind combines intelligent time blocking with performance analytics and guided self-reflection. Our AI doesn't just organize your calendar—it helps you understand your productivity patterns, build better habits, and achieve work-life balance through data-driven insights."
    },
    {
      question: "I'm currently using Motion/Calendly/other tools. Why should I switch?",
      answer: "MemoMind isn't just another scheduling tool—it's your performance optimization system. While Motion focuses on task management and Calendly on booking, we analyze your entire calendar to provide insights like peak productivity hours, meeting efficiency scores, and personalized recommendations. Plus, our daily reflection feature turns these insights into lasting behavior change."
    },
    {
      question: "What kind of insights will I get from the AI analytics?",
      answer: "You'll discover your peak productivity hours, meeting efficiency scores, time allocation across life domains, energy patterns throughout the day, and personalized recommendations for schedule optimization. For example, you might learn that your focus peaks at 10 AM or that Friday meetings tend to run 40% longer than necessary."
    },
    {
      question: "How does the daily reflection feature work?",
      answer: "Each day, our AI generates personalized reflection prompts based on your calendar data and goals. You'll spend 2-3 minutes answering questions like 'What made today's deep work session effective?' or 'How did that meeting align with your quarterly objectives?' Over time, these micro-reflections compound into powerful behavior changes."
    },
    {
      question: "Is my calendar and reflection data secure?",
      answer: "Absolutely. We use enterprise-grade encryption and never store your calendar credentials. Your data is processed in real-time using secure OAuth protocols through Vercel and Railway's infrastructure. Your reflections and insights remain private and are never shared or used to train our AI models."
    },
    {
      question: "Can I use MemoMind with my existing productivity workflow?",
      answer: "Yes! MemoMind integrates seamlessly with Google Calendar (Outlook coming soon) and complements tools like Notion, Todoist, or Asana. Think of it as your productivity intelligence layer that makes all your other tools more effective through insights and optimization."
    }
  ];

  const handleGetStarted = () => {
    navigate('/early-access');
  };

  const handleAcceptCookies = () => {
    // Store acceptance in localStorage
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    localStorage.setItem(COOKIE_CONSENT_DATE_KEY, new Date().toISOString());
    
    // Grant consent and initialize GA (which includes the first pageview)
    grantAnalyticsConsent();
    
    setShowCookieConsent(false);
  };

  const handleRejectCookies = () => {
    // Store rejection in localStorage
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    localStorage.setItem(COOKIE_CONSENT_DATE_KEY, new Date().toISOString());
    
    // Deny consent for analytics
    denyAnalyticsConsent();
    
    setShowCookieConsent(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-0">
              <img src={logoSvg} alt="MemoMind AI" className="h-16 w-16" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MemoMind AI
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#use-cases" className="text-gray-600 hover:text-gray-900 transition-colors">Use Cases</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              {/* <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a> */}
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Get Early Access
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
              <a href="#use-cases" className="block text-gray-600 hover:text-gray-900">Use Cases</a>
              <a href="#pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>
              {/* <a href="#testimonials" className="block text-gray-600 hover:text-gray-900">Testimonials</a> */}
              <button
                onClick={handleGetStarted}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Get Early Access
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
                <Brain className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The AI Calendar Assistant That{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Optimizes Your Performance
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Go beyond time management. MemoMind AI analyzes your calendar patterns, provides performance insights, 
              and guides daily reflections to help you work smarter, achieve goals faster, and maintain work-life balance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-sm text-gray-500">Get early access • No credit card required</p>
            </div>

            {/* Value Props - Based on Research */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">40%</div>
                <div className="text-sm text-gray-600">Of work time lost to poor scheduling*</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-purple-600 mb-1">2-3 hours</div>
                <div className="text-sm text-gray-600">Daily deep work needed for peak performance*</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-green-600 mb-1">71%</div>
                <div className="text-sm text-gray-600">Of professionals struggle with work-life balance*</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">*Based on productivity research studies</p>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Calendar Shows What You Do.{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                We Show You How to Do It Better.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most professionals lose 40% of their productive time to poor scheduling and lack insight into their work patterns. 
              MemoMind AI transforms your calendar from a scheduling tool into a performance optimization system.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Intelligent Features for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Peak Performance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combine AI-powered scheduling with performance analytics and guided self-improvement.
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

          {/* How It Works */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              How MemoMind AI Works
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Connect Your Calendar</h4>
                <p className="text-gray-600">Securely sync with Google Calendar. Our AI begins learning your patterns immediately.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Get AI Insights</h4>
                <p className="text-gray-600">Receive daily analytics on productivity, meeting efficiency, and time allocation.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Reflect & Improve</h4>
                <p className="text-gray-600">Complete guided reflections that turn insights into lasting behavior change.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                High Performers
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're leading teams, building companies, or advancing your career, MemoMind AI adapts to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <useCase.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Early Supporters Are{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Excited
              </span>
            </h2>
            <p className="text-xl text-gray-600">See what productivity enthusiasts are saying about MemoMind AI</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm font-semibold text-blue-600 mt-2">{testimonial.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple Pricing for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Exceptional ROI
              </span>
            </h2>
            <p className="text-xl text-gray-600">Start free, upgrade when you see the value</p>
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

          {/* <div className="mt-12 text-center">
            <p className="text-gray-600">
              <Shield className="h-5 w-5 inline mr-2" />
              30-day money-back guarantee • Cancel anytime • No hidden fees
            </p>
          </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about optimizing your performance with MemoMind AI</p>
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
            Ready to 10x Your Productivity?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join ambitious professionals using AI-powered insights to work smarter, achieve more, and live better.
          </p>
          
          <button
            onClick={handleGetStarted}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Get Early Access</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <p className="text-blue-100 mt-4 text-sm">Be among the first 1,000 users to get exclusive early access • Launching Q2 2025</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-0 mb-0">
                <img src={logoSvg} alt="MemoMind AI" className="h-16 w-16" />
                <span className="text-xl font-bold">MemoMind AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered calendar optimization and performance insights for ambitious professionals.
              </p>
            </div>
            
            {/* <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div> */}
            
            {/* <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Productivity Guide</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div> */}
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><button onClick={() => navigate('/privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => navigate('/terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
                <li><a href="mailto:hello@memomind.ai" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 MemoMind AI. All rights reserved. Built with ❤️ for productivity enthusiasts.</p>
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
