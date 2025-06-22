import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Brain, Clock, Sparkles, CheckCircle, Menu, X, ArrowRight, Star, Shield, Zap, TrendingUp, BarChart3, Target, Users, MessageCircle, Lightbulb } from 'lucide-react';
import {
  hasCookieConsentBeenSet,
  hasGivenConsent,
  grantAnalyticsConsent,
  denyAnalyticsConsent,
  trackPageView,
  COOKIE_CONSENT_KEY,
  COOKIE_CONSENT_DATE_KEY
} from './utils/cookieConsent.js';
import mainLogo from '/simplified_logo.png';
import whiteLogo from '/white_version_logo.png';

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
      trackPageView('Homepage', window.location.href);
    }
  }, []);

  const features = [
    {
      icon: MessageCircle,
      title: "Context-Aware Reflection",
      description: "No more blank pages. AI analyzes your calendar and asks intelligent questions like 'You had 3 back-to-back meetings - how did that affect your energy?'",
      color: "text-purple-600"
    },
    {
      icon: Brain,
      title: "Smart Scheduling Assistant",
      description: "AI that learns your patterns and helps optimize your calendar around your natural productivity rhythms and energy levels",
      color: "text-blue-600"
    },
    {
      icon: BarChart3,
      title: "Pattern Recognition",
      description: "Discover hidden insights: which meeting types drain you, when you're most creative, and what schedule changes boost performance",
      color: "text-green-600"
    },
    {
      icon: Target,
      title: "Effortless Habit Building",
      description: "Turn insights into action with AI-guided habit formation that connects your daily choices to long-term goals",
      color: "text-orange-600"
    }
  ];

  const differentiators = [
    {
      category: "Motion/Reclaim",
      description: "Schedules your time",
      color: "bg-gray-100 text-gray-600"
    },
    {
      category: "Journal Apps",
      description: "Ask generic questions",
      color: "bg-gray-100 text-gray-600"
    },
    {
      category: "MemoMind AI",
      description: "Learns your patterns and asks intelligent, contextual questions",
      color: "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-2 border-blue-200"
    }
  ];

  const useCases = [
    {
      title: "For Busy Executives",
      description: "Finally understand which meetings energize vs drain you. Get AI insights on optimal scheduling patterns and team productivity",
      icon: Users,
      example: "'You seem most decisive in Tuesday morning meetings - what makes those different?'"
    },
    {
      title: "For Overwhelmed Entrepreneurs",
      description: "Balance multiple projects without burning out. Track energy patterns and get personalized questions about your work habits",
      icon: Zap,
      example: "'You skipped lunch 3 times this week and felt tired at 3pm - see the pattern?'"
    },
    {
      title: "For Growth-Minded Professionals",
      description: "Turn your calendar into a learning tool. Discover productivity patterns you never noticed and build better habits",
      icon: TrendingUp,
      example: "'Your best ideas seem to come during unscheduled time - how can you protect more of it?'"
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with AI reflection",
      features: [
        "Basic AI reflection prompts",
        "Google Calendar sync",
        "3 personalized questions daily",
        "Weekly pattern insights",
        "Up to 20 calendar events/month"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$7",
      period: "per month",
      description: "For serious self-improvement enthusiasts",
      features: [
        "Advanced AI reflection engine",
        "Unlimited smart questions",
        "Custom reflection templates",
        "Detailed pattern analytics",
        "Energy level tracking",
        "Meeting efficiency insights",
        "Priority support"
      ],
      cta: "Start 14-Day Trial",
      popular: true
    },
    {
      name: "Premium",
      price: "$15",
      period: "per month",
      description: "For performance optimization power users",
      features: [
        "Everything in Pro",
        "AI coaching recommendations",
        "Advanced habit formation tools",
        "Quarterly performance reviews",
        "Work-life balance scoring",
        "Team productivity insights",
        "Custom integrations"
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
      question: "How is this different from regular journaling apps?",
      answer: "Traditional journaling shows you a blank page and asks 'How was your day?' Our AI knows you had 4 meetings, worked late, and skipped lunch. It asks specific questions like 'That 2-hour deep work block was productive - what made it work?' No more blank page paralysis."
    },
    {
      question: "I already use Motion/Reclaim for scheduling. Why do I need this?",
      answer: "Motion optimizes your schedule, but MemoMind helps you understand WHY certain schedules work better. We're the reflection layer that turns your calendar data into self-awareness and lasting behavior change. Many users actually use both tools together."
    },
    {
      question: "What kind of questions does the AI ask?",
      answer: "Context-aware questions based on your actual schedule: 'You seem to procrastinate on Friday afternoons - what would make those tasks more appealing?' or 'You were most energized during that brainstorming session - how can you design more moments like this?' The AI learns your patterns and gets more insightful over time."
    },
    {
      question: "I tried journaling before and quit after a week. Will this be different?",
      answer: "Absolutely. You quit because journaling is hard - staring at blank pages, forcing yourself to write, no clear benefit. Our AI does the thinking for you. You just answer 2-3 smart questions daily (takes 90 seconds), and the insights compound over time into real behavior change."
    },
    {
      question: "Is my calendar and reflection data secure?",
      answer: "Yes. We use enterprise-grade encryption and never store your calendar credentials. Data is processed in real-time using secure OAuth protocols. Your reflections remain private and are never used to train AI models or shared with anyone."
    },
    {
      question: "Can I use this alongside my existing productivity tools?",
      answer: "Definitely! MemoMind integrates with Google Calendar (Outlook coming soon) and complements tools like Notion, Motion, or Todoist. Think of us as your productivity intelligence layer that makes all your other tools more effective through insights."
    }
  ];

  const handleGetStarted = () => {
    navigate('/early-access');
  };

  const handleAcceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    localStorage.setItem(COOKIE_CONSENT_DATE_KEY, new Date().toISOString());
    grantAnalyticsConsent();
    setShowCookieConsent(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    localStorage.setItem(COOKIE_CONSENT_DATE_KEY, new Date().toISOString());
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
              <img src={mainLogo} alt="MemoMind AI" className="h-16 w-16" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MemoMind AI
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-different" className="text-gray-600 hover:text-gray-900 transition-colors">Why Different</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Join Waitlist
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
              <a href="#how-different" className="block text-gray-600 hover:text-gray-900">Why Different</a>
              <a href="#pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>
              <button
                onClick={handleGetStarted}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The AI That Makes{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Reflection Effortless
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Finally, an AI that asks the right questions at the right time. No more blank page paralysis—just intelligent prompts based on your actual schedule and patterns.
            </p>

            {/* Problem Statement */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">You know reflection is valuable. You've tried journaling.</h3>
              <p className="text-gray-600 mb-3">It lasted 3 days.</p>
              <p className="text-sm text-gray-500">The problem isn't discipline. It's bad UX.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-sm text-gray-500">Be among the first • Launching Q2 2025</p>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">92%</div>
                <div className="text-sm text-gray-600">Journal abandonment rate*</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-purple-600 mb-1">90 seconds</div>
                <div className="text-sm text-gray-600">Daily reflection time needed</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-green-600 mb-1">Context-aware</div>
                <div className="text-sm text-gray-600">Questions based on your actual day</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">*Based on behavior research studies</p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Born from Personal Frustration</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
            <p className="text-lg text-gray-700 mb-4 italic">
              "As a data scientist, I knew reflection was valuable—but traditional journaling felt impossible. 
              Blank pages, forced prompts, no insights over time. So I built an AI that knows my schedule 
              and asks smarter questions."
            </p>
            <p className="text-gray-600 font-medium">— Founder, MemoMind AI</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <h4 className="font-semibold text-red-900 mb-2">❌ Traditional Journaling</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Blank page paralysis</li>
                <li>• Generic daily prompts</li>
                <li>• No pattern recognition</li>
                <li>• Hard to maintain consistency</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h4 className="font-semibold text-green-900 mb-2">✅ MemoMind AI</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Context-aware questions</li>
                <li>• Based on your actual schedule</li>
                <li>• Discovers hidden patterns</li>
                <li>• 90-second daily habit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It's Different Section */}
      <section id="how-different" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We're{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Different
              </span>
            </h2>
            <p className="text-xl text-gray-600">We're not another scheduling tool or journal app</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl ${item.color}`}
              >
                <h3 className="font-bold text-lg mb-2">{item.category}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Example Questions */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-xl font-semibold text-center mb-6">What Context-Aware Reflection Looks Like:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-900 mb-2">❌ Generic Journal Prompt:</h4>
                <p className="text-gray-600 text-sm">"How was your day today?"</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 className="font-medium text-blue-900 mb-2">✅ MemoMind AI Question:</h4>
                <p className="text-blue-700 text-sm">"You had 3 back-to-back meetings this morning, then felt most productive during your 2pm focus block. What made that afternoon session work so well?"</p>
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
              Smart Features for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Effortless Growth
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reflection shouldn't feel like work. Our AI makes it as easy as answering a text message.
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
                <p className="text-gray-600">Secure Google Calendar sync. Our AI immediately starts learning your patterns and productivity rhythms.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Get Smart Questions</h4>
                <p className="text-gray-600">Receive 2-3 personalized reflection prompts daily, based on your actual schedule and behavior patterns.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Build Better Habits</h4>
                <p className="text-gray-600">90-second daily reflections compound into powerful insights and lasting behavior changes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Busy Professionals
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're leading teams, building companies, or optimizing your career, MemoMind adapts to your unique challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-100">
                <useCase.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm text-blue-700 italic">Example: {useCase.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
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
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple Pricing for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Powerful Insights
              </span>
            </h2>
            <p className="text-xl text-gray-600">Start free, upgrade when you see the value of effortless reflection</p>
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

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              <Shield className="h-5 w-5 inline mr-2" />
              30-day money-back guarantee • Cancel anytime • No hidden fees
            </p>
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
            <p className="text-xl text-gray-600">Everything you need to know about making reflection effortless</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
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
            Ready to Make Reflection Effortless?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join ambitious professionals who want to build self-awareness without the hassle of traditional journaling.
          </p>
          
          <button
            onClick={handleGetStarted}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Join the Waitlist</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <p className="text-blue-100 mt-4 text-sm">Be among the first 1,000 users • Launching Q2 2025</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-0 mb-0">
                <img src={whiteLogo} alt="MemoMind AI" className="h-16 w-16" />
                <span className="text-xl font-bold">MemoMind AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered reflection made effortless for busy professionals who want to grow.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#how-different" className="hover:text-white transition-colors">Why Different</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reflection Guide</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><button onClick={() => navigate('/privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => navigate('/terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
                <li><a href="mailto:hello@memomindai.com" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 MemoMind AI. All rights reserved. Built with ❤️ for productivity enthusiasts who struggle with journaling.</p>
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