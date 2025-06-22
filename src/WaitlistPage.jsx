// src/WaitlistPage.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, Check, Users, Zap, Shield, X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { trackPageView } from './utils/cookieConsent.js';
import mainLogo from '/simplified_logo.png';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const WaitlistPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    role: '',
    schedulingChallenge: '',
    journalingExperience: '',
    currentCalendar: '',
    currentCalendarOther: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [waitlistCount, setWaitlistCount] = useState(127);
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Track page view
    trackPageView('Waitlist Page', window.location.href);
    
    // Fetch current waitlist count
    fetchWaitlistStats();
  }, []);

  const fetchWaitlistStats = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/waitlist/stats`);
      if (response.ok) {
        const data = await response.json();
        setWaitlistCount(data.total + 127);
      }
    } catch (error) {
      console.error('Failed to fetch waitlist stats:', error);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }
    
    if (!formData.schedulingChallenge) {
      newErrors.schedulingChallenge = 'Please select your biggest scheduling challenge';
    }
    
    if (!formData.journalingExperience) {
      newErrors.journalingExperience = 'Please select your journaling experience';
    }
    
    if (!formData.currentCalendar) {
      newErrors.currentCalendar = 'Please select your current calendar tool';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Map frontend form data to backend schema
      const submitData = {
        email: formData.email,
        name: formData.name,
        roleProfession: formData.role,
        schedulingFrustration: formData.schedulingChallenge,
        journalingExperience: formData.journalingExperience,
        currentCalendarTool: formData.currentCalendar === 'other' && formData.currentCalendarOther
          ? `other (${formData.currentCalendarOther})`
          : formData.currentCalendar,
        interestedFeatures: 'Context-aware reflection',
        primaryUsage: 'Work-Life Balance',
        company: '',
        referralSource: '',
        utmSource: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timestamp: new Date().toISOString()
      };

      const response = await fetch(`${API_BASE_URL}/api/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setShowThankYou(true);
        setWaitlistCount(prev => prev + 1);
        
        // Track conversion
        if (window.gtag) {
          window.gtag('event', 'waitlist_signup', {
            event_category: 'engagement',
            event_label: formData.role
          });
        }
      } else {
        setSubmitStatus('error');
        if (data.error === 'Email already on waitlist') {
          setErrors({ email: 'This email is already on the waitlist!' });
        } else if (data.error) {
          // Display the error message from the API response
          console.error('API Error:', data.error);
        } else if (data.message) {
          // Display the message from the API response
          console.error('API Message:', data.message);
        }
      }
    } catch (error) {
      console.error('Waitlist submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: Check, text: "50% off forever (lock in $3.50/month)" },
    { icon: Check, text: "2 weeks early access before public launch" },
    { icon: Check, text: "Direct feedback line to founders" },
    { icon: Check, text: "Shape the product roadmap" }
  ];

  const faqs = [
    {
      q: "When do you launch?",
      a: "March 2025. Early access starts 2 weeks before public launch."
    },
    {
      q: "How is this different from other journal apps?",
      a: "We read your calendar first, then ask intelligent questions. No more 'How was your day?' - we know exactly how your day went."
    },
    {
      q: "What's the lifetime discount?",
      a: "50% off our Pro plan forever. Instead of $7/month, you pay $3.50/month for life."
    }
  ];

  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to the Future of Productivity!</h1>
            <p className="text-lg text-gray-600 mb-6">
              You're #{waitlistCount} on the waitlist. We'll send you an exclusive invite when we launch.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h2 className="font-semibold text-gray-900 mb-2">What happens next?</h2>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Check your email for a welcome message with early insights</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Get early access 2 weeks before public launch</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/'}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                Back to Homepage
              </button>
              <button
                onClick={() => {
                  const text = `I just joined the @MemoMindAI waitlist! Excited to try the AI calendar assistant that actually helps you improve. Join me: memomindai.com/early-access`;
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Share on Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src={mainLogo} alt="MemoMind AI" className="h-16 w-16" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MemoMind AI
              </span>
            </div>
            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span>⏰ Launching August 2025 | Early Access Gets 50% Off Forever</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Join {waitlistCount}+ Professionals Getting Early Access to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Context-Aware Reflection
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Be first to try the AI that makes journaling effortless. No more blank pages, 
              just smart questions based on your actual schedule.
            </p>

            {/* Value Props */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-left">
                  <benefit.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reserve Your Spot</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Role *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.role ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select your role</option>
                    <option value="Executive">Executive</option>
                    <option value="Manager">Manager</option>
                    <option value="Founder">Founder</option>
                    <option value="Consultant">Consultant</option>
                    <option value="Developer">Developer</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What's your biggest scheduling challenge? *
                  </label>
                  <div className="space-y-2">
                    {['Too many meetings', 'No focus time', 'Poor work-life balance', 'Constant context switching'].map((challenge) => (
                      <label key={challenge} className="flex items-center">
                        <input
                          type="radio"
                          name="schedulingChallenge"
                          value={challenge}
                          checked={formData.schedulingChallenge === challenge}
                          onChange={(e) => setFormData({...formData, schedulingChallenge: e.target.value})}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">{challenge}</span>
                      </label>
                    ))}
                  </div>
                  {errors.schedulingChallenge && <p className="text-red-500 text-xs mt-1">{errors.schedulingChallenge}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Have you tried journaling before? *
                  </label>
                  <div className="space-y-2">
                    {['Yes, but quit after a few days', 'Yes, still do it sometimes', 'No, seems too time-consuming', 'No, don\'t know what to write'].map((experience) => (
                      <label key={experience} className="flex items-center">
                        <input
                          type="radio"
                          name="journalingExperience"
                          value={experience}
                          checked={formData.journalingExperience === experience}
                          onChange={(e) => setFormData({...formData, journalingExperience: e.target.value})}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">{experience}</span>
                      </label>
                    ))}
                  </div>
                  {errors.journalingExperience && <p className="text-red-500 text-xs mt-1">{errors.journalingExperience}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Current calendar tool *
                  </label>
                  <div className="space-y-2">
                    {['Google Calendar', 'Outlook', 'Apple Calendar'].map((calendar) => (
                      <label key={calendar} className="flex items-center">
                        <input
                          type="radio"
                          name="currentCalendar"
                          value={calendar}
                          checked={formData.currentCalendar === calendar}
                          onChange={(e) => setFormData({...formData, currentCalendar: e.target.value})}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">{calendar}</span>
                      </label>
                    ))}
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="currentCalendar"
                        value="other"
                        checked={formData.currentCalendar === 'other'}
                        onChange={(e) => setFormData({...formData, currentCalendar: e.target.value})}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 mt-0.5"
                      />
                      <div className="ml-2 flex-1">
                        <span className="text-sm text-gray-700">Other</span>
                        {formData.currentCalendar === 'other' && (
                          <input
                            type="text"
                            value={formData.currentCalendarOther}
                            onChange={(e) => setFormData({...formData, currentCalendarOther: e.target.value})}
                            className="mt-1 w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Please specify..."
                          />
                        )}
                      </div>
                    </label>
                  </div>
                  {errors.currentCalendar && <p className="text-red-500 text-xs mt-1">{errors.currentCalendar}</p>}
                </div>


                {submitStatus === 'error' && !errors.email && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-red-800">
                        Oops! Something went wrong. Please try again or email us at support@memomindai.com.
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Joining...</span>
                    </>
                  ) : (
                    <>
                      <span>Reserve My Spot - 50% Off Forever</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By joining, you agree to receive emails about MemoMind AI. 
                  Unsubscribe anytime. We respect your privacy.
                </p>
              </form>
            </div>

            {/* Benefits & FAQ */}
            <div className="space-y-8">
              {/* Early Access Benefits */}
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 What You Get:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">50% off forever (lock in $3.50/month)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">2 weeks early access before public launch</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Direct feedback line to founders</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Shape the product roadmap</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Exclusive beta features</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📊 Who's Joining:</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>47% Executives & Managers</div>
                    <div>31% Founders & Entrepreneurs</div>
                    <div>22% Consultants & Professionals</div>
                  </div>
                </div>
              </div>

              {/* Mini FAQ */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Mini FAQ</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                      <p className="text-sm text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">The Journaling Problem:</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    92% of people abandon journaling within a week. Not because they lack discipline, but because staring at blank pages is terrible UX.
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                  <p className="text-sm text-gray-600">
                    AI that knows your schedule and asks contextual questions like "You blocked 2 hours for deep work but took calls instead. What made that time feel less protected?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      {/* <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center">What People Are Saying</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4 italic">
                  "I've been waiting for this exact solution. Finally, someone who gets that context matters for reflection."
                </p>
                <p className="text-blue-400 font-semibold">- Sarah K., Product Manager</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4 italic">
                  "The demo blew my mind. It knew I had 5 meetings and asked why the 3pm one felt different. Game changer."
                </p>
                <p className="text-blue-400 font-semibold">- Mike R., Startup Founder</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">47%</div>
                <div className="text-gray-400">Executives & Managers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">31%</div>
                <div className="text-gray-400">Founders & Entrepreneurs</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">22%</div>
                <div className="text-gray-400">Consultants & Professionals</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* SEO Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Join the AI Reflection Revolution</h2>
            <p>
              MemoMind AI is transforming how professionals reflect on their workday by combining calendar intelligence 
              with context-aware journaling. Unlike generic journal apps that ask "How was your day?", we know exactly 
              how your day went and ask the right questions to drive meaningful insights.
            </p>
            <h3>Why Join the Waitlist?</h3>
            <p>
              Early access members launching in August 2025 will be the first to experience AI-powered reflection that actually works. 
              You'll get 50% off for life, exclusive beta features, and direct input into our product development. 
              Join executives, entrepreneurs, and professionals who are ready to make journaling effortless.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaitlistPage;