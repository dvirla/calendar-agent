import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MessageCircle, Plus, Settings, User, Send, Mic, MicOff, LogOut, Trash2, Brain, Lightbulb, TrendingUp } from 'lucide-react';
import { useAuth } from './AuthContext';

// Move component definitions outside to prevent recreation on every render
const ChatView = ({ 
  messages, 
  inputMessage, 
  setInputMessage, 
  loading, 
  error, 
  setError, 
  pendingActions, 
  inputRef, 
  sendMessage, 
  formatTime, 
  clearConversation, 
  handleActionApproval 
}) => (
  <div className="flex flex-col h-full">
    {/* Chat Header with Clear Button */}
    <div className="bg-white border-b p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg lg:text-xl font-semibold text-gray-900 flex items-center">
          <Brain className="mr-2 text-purple-600" size={20} />
          AI Reflection Assistant
        </h2>
        <button
          onClick={clearConversation}
          disabled={loading || messages.length <= 1}
          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="Start fresh conversation"
        >
          <Trash2 size={16} />
          <span className="hidden sm:inline">New Chat</span>
        </button>
      </div>
    </div>

    {/* Pending Actions Banner */}
    {pendingActions.length > 0 && (
      <div className="bg-blue-50 border-b border-blue-200 p-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-blue-900 mb-2">AI Suggestions Ready for Approval:</h3>
          {pendingActions.map((action) => (
            <div key={action.action_id} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border border-blue-100">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{action.description}</p>
                <p className="text-xs text-blue-600 font-medium">{action.action_type}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleActionApproval(action.action_id, true)}
                  className="px-3 py-1 bg-green-600 text-white text-xs rounded-md hover:bg-green-700 transition-colors"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleActionApproval(action.action_id, false)}
                  className="px-3 py-1 bg-gray-500 text-white text-xs rounded-md hover:bg-gray-600 transition-colors"
                >
                  Skip
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl px-4 py-3 rounded-2xl ${
              message.role === 'user'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'bg-gradient-to-r from-gray-50 to-white text-gray-800 border border-gray-100 shadow-sm'
            }`}
          >
            <p className="text-sm lg:text-base leading-relaxed">{message.content}</p>
            <p className="text-xs opacity-70 mt-2">
              {formatTime(message.timestamp)}
            </p>
          </div>
        </div>
      ))}
      {loading && (
        <div className="flex justify-start">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 text-gray-800 px-4 py-3 rounded-2xl">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
              <span className="text-sm">AI is analyzing your patterns...</span>
            </div>
          </div>
        </div>
      )}
    </div>
    
    <div className="p-4 lg:p-6 border-t bg-gradient-to-r from-blue-50 to-purple-50">
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {error}
          <button onClick={() => setError(null)} className="ml-2 text-red-800 hover:text-red-900">×</button>
        </div>
      )}
      <div className="flex items-center space-x-2 max-w-4xl mx-auto">
        <input
          ref={inputRef}
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
          placeholder="Ask about your patterns, productivity insights, or share how your day went..."
          disabled={loading}
          className="flex-1 px-4 py-3 border border-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm lg:text-base disabled:opacity-50 bg-white"
          autoComplete="off"
        />
        <button
          onClick={sendMessage}
          disabled={loading || !inputMessage.trim()}
          className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
        >
          <Send size={20} />
        </button>
      </div>
      <div className="text-center mt-3">
        <p className="text-xs text-gray-500">
          💡 Try: "What patterns do you notice in my schedule?" or "Help me reflect on my energy today"
        </p>
      </div>
    </div>
  </div>
);

const ReflectionChatView = ({ 
  messages, 
  inputMessage, 
  setInputMessage, 
  loading, 
  error, 
  setError, 
  inputRef, 
  sendMessage, 
  formatTime,
  clearReflectionConversation
}) => (
  <div className="flex flex-col h-full">
    {/* Reflection Chat Header with Clear Button */}
    <div className="bg-white border-b p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg lg:text-xl font-semibold text-gray-900 flex items-center">
          <User className="mr-2" size={20} />
          Daily Reflection
        </h2>
        <button
          onClick={clearReflectionConversation}
          disabled={loading || messages.length <= 1}
          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="Clear reflection"
        >
          <Trash2 size={16} />
          <span className="hidden sm:inline">Clear</span>
        </button>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl px-4 py-2 rounded-2xl ${
              message.role === 'user'
                ? 'bg-purple-500 text-white'
                : 'bg-purple-50 text-purple-900 border border-purple-200'
            }`}
          >
            <p className="text-sm lg:text-base">{message.content}</p>
            <p className="text-xs opacity-70 mt-1">
              {formatTime(message.timestamp)}
            </p>
          </div>
        </div>
      ))}
      {loading && (
        <div className="flex justify-start">
          <div className="bg-purple-50 text-purple-900 px-4 py-2 rounded-2xl border border-purple-200">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
              <span className="text-sm">Reflecting...</span>
            </div>
          </div>
        </div>
      )}
    </div>
    
    <div className="p-4 lg:p-6 border-t bg-white">
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {error}
          <button onClick={() => setError(null)} className="ml-2 text-red-800 hover:text-red-900">×</button>
        </div>
      )}
      <div className="flex items-center space-x-2 max-w-4xl mx-auto">
        <input
          ref={inputRef}
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
          placeholder="Share your thoughts on the day..."
          disabled={loading}
          className="flex-1 px-4 py-2 lg:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm lg:text-base disabled:opacity-50"
          autoComplete="off"
        />
        <button
          onClick={sendMessage}
          disabled={loading || !inputMessage.trim()}
          className="p-2 lg:p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  </div>
);

const CalendarView = ({ calendarEvents, loading, getEventStatus, formatEventTime, formatEventDateTime }) => (
  <div className="p-4 lg:p-6 space-y-4 lg:space-y-6 max-w-4xl mx-auto w-full">
    <div className="bg-white rounded-lg shadow-sm border p-4 lg:p-6">
      <h2 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6 flex items-center">
        <Calendar className="mr-2 text-blue-600" size={20} />
        Your Schedule Insights
      </h2>
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : calendarEvents.length > 0 ? (
        <div className="space-y-3 lg:space-y-4">
          {calendarEvents.map((event) => {
            const eventStatus = getEventStatus(event);
            const statusColors = {
              upcoming: 'bg-blue-100 text-blue-800 border-blue-200',
              ongoing: 'bg-green-100 text-green-800 border-green-200',
              completed: 'bg-gray-100 text-gray-600 border-gray-200',
              unknown: 'bg-purple-100 text-purple-800 border-purple-200'
            };
            
            return (
              <div key={event.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg hover:from-blue-50 hover:to-purple-50 transition-all border border-gray-100 hover:border-blue-200">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 lg:text-lg">{event.summary || event.title}</h3>
                  <p className="text-sm lg:text-base text-gray-600 flex items-center mt-1">
                    <Clock size={14} className="mr-1" />
                    {formatEventDateTime(event.start_time || event.start)}
                    {(event.end_time || event.end) && formatEventDateTime(event.start_time || event.start) !== 'All day' && !formatEventDateTime(event.start_time || event.start).includes('All day') && ` - ${formatEventTime(event.end_time || event.end)}`}
                  </p>
                  {event.description && (
                    <p className="text-xs lg:text-sm text-gray-500 mt-1">{event.description}</p>
                  )}
                </div>
                <div className={`px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium border ${statusColors[eventStatus] || statusColors.unknown}`}>
                  {eventStatus}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <Calendar size={48} className="mx-auto mb-4 opacity-50" />
          <p className="text-lg font-medium mb-2">No events found</p>
          <p className="text-sm">Connect your calendar or ask the AI to help you plan your schedule!</p>
        </div>
      )}
    </div>
  </div>
);

const ReflectionView = ({ 
  calendarEvents, 
  formatEventDate, 
  isReflectionChatMode,
  reflectionMessages,
  reflectionInputMessage,
  setReflectionInputMessage,
  reflectionLoading,
  reflectionError,
  setReflectionError,
  reflectionInputRef,
  sendReflectionMessage,
  clearReflectionConversation,
  formatTime,
  apiRequest,
  setReflectionMessages,
  setIsReflectionChatMode,
  setReflectionLoading
}) => {
  if (isReflectionChatMode) {
    return (
      <ReflectionChatView 
        messages={reflectionMessages}
        inputMessage={reflectionInputMessage}
        setInputMessage={setReflectionInputMessage}
        loading={reflectionLoading}
        error={reflectionError}
        setError={setReflectionError}
        inputRef={reflectionInputRef}
        sendMessage={sendReflectionMessage}
        formatTime={formatTime}
        clearReflectionConversation={clearReflectionConversation}
      />
    );
  }

const recentPastEvents = calendarEvents.filter(event => {
  const eventDate = formatEventDate(event.start_time || event.start);
  if (!eventDate) return false;
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  return eventDate < now && eventDate >= yesterday;
});

const upcomingEvents = calendarEvents.filter(event => {
  const eventDate = formatEventDate(event.start_time || event.start);
  if (!eventDate) return false;
  const now = new Date();
  return eventDate > now;
});

return (
  <div className="p-4 lg:p-6 space-y-4 lg:space-y-6 max-w-4xl mx-auto w-full">
    <div className="bg-white rounded-lg shadow-sm border p-4 lg:p-6">
      <h2 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6 flex items-center">
          <User className="mr-2" size={20} />
          Daily Reflection
        </h2>
        <div className="space-y-4 lg:space-y-6">
          {calendarEvents.filter(event => {
            const eventDate = formatEventDate(event.start_time || event.start);
            return eventDate && eventDate < new Date();
          }).length > 0 ? (
            <>
              <div className="p-4 lg:p-6 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2 lg:text-lg">How did your meetings go today?</h3>
                <p className="text-sm lg:text-base text-blue-800">
                  I see you had some meetings today. How did they go? What were the key outcomes?
                </p>
              </div>
              
              <div className="p-4 lg:p-6 bg-green-50 rounded-lg">
                <h3 className="font-medium text-green-900 mb-2 lg:text-lg">What went well today?</h3>
                <p className="text-sm lg:text-base text-green-800">
                  Reflect on your accomplishments and positive moments from today.
                </p>
              </div>
            </>
          ) : (
            <div className="p-4 lg:p-6 bg-purple-50 rounded-lg">
              <h3 className="font-medium text-purple-900 mb-2 lg:text-lg">How are you planning your day?</h3>
              <p className="text-sm lg:text-base text-purple-800">
                Let's plan your schedule and set intentions for a productive day.
              </p>
            </div>
          )}
          
          {reflectionError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {reflectionError}
              <button onClick={() => setReflectionError(null)} className="ml-2 text-red-800 hover:text-red-900">×</button>
            </div>
          )}
          
          <button 
            onClick={async () => {
              try {
                setReflectionLoading(true);
                setReflectionError(null);
                
                const response = await apiRequest('/reflection/prompt', {
                  method: 'GET',
                });
                console.log('Reflection response:', response);
                
                // Create initial reflection message from server
                const reflectionMessage = {
                  id: Date.now(),
                  role: 'assistant',
                  content: response.message || response.prompt || 'Let\'s start your reflection. How did your day go?',
                  timestamp: new Date().toISOString()
                };
                
                setReflectionMessages([reflectionMessage]);
                setIsReflectionChatMode(true);
                
              } catch (error) {
                console.error('Error starting reflection:', error);
                setReflectionError('Failed to start reflection. Please try again.');
              } finally {
                setReflectionLoading(false);
              }
            }}
            disabled={reflectionLoading}
            className="w-full bg-purple-500 text-white py-3 lg:py-4 rounded-lg hover:bg-purple-600 transition-colors text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {reflectionLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Starting Reflection...
              </>
            ) : (
              'Start Reflection Chat'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const CalendarAgentApp = () => {
  const navigate = useNavigate();
  const { user, logout, apiRequest, isAuthenticated } = useAuth();
  const [currentView, setCurrentView] = useState('reflection'); // Start with reflection view
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [pendingActions, setPendingActions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  
  // Reflection chat state
  const [reflectionMessages, setReflectionMessages] = useState([]);
  const [reflectionInputMessage, setReflectionInputMessage] = useState('');
  const [reflectionLoading, setReflectionLoading] = useState(false);
  const [reflectionError, setReflectionError] = useState(null);
  const [isReflectionChatMode, setIsReflectionChatMode] = useState(false);
  const reflectionInputRef = useRef(null);

  // Load initial data when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadInitialData();
    }
    
    // Track page view
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-57CNRN5B5M', {
        page_title: 'MemoMind AI App',
        page_location: window.location.href
      });
    }
  }, [isAuthenticated]);

  const loadInitialData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Load calendar events and conversations in parallel
      const [eventsData, conversationsData, pendingActionsData] = await Promise.allSettled([
        apiRequest('/calendar/events'),
        apiRequest('/user/conversations'),
        apiRequest('/actions/pending')
      ]);

      // Handle calendar events
      if (eventsData.status === 'fulfilled') {
        setCalendarEvents(eventsData.value.events || []);
      }

      // Handle conversations - load the most recent one or create initial message
      if (conversationsData.status === 'fulfilled' && conversationsData.value.conversations?.length > 0) {
        const latestConversation = conversationsData.value.conversations[0];
        const messagesData = await apiRequest(`/user/conversations/${latestConversation.id}/messages`);
        setMessages(messagesData.messages || []);
      } else {
        // Create welcome message for new users
        setMessages([{
          id: 1,
          role: 'assistant',
          content: `Hi ${user?.full_name || 'there'}! 👋 I'm your AI reflection assistant. I analyze your calendar patterns and ask smart questions to help you understand what makes you productive. Ready to discover insights about your habits and energy patterns?`,
          timestamp: new Date().toISOString()
        }]);
      }

      // Handle pending actions
      if (pendingActionsData.status === 'fulfilled') {
        setPendingActions(pendingActionsData.value.pending_actions || []);
      }

    } catch (error) {
      console.error('Error loading initial data:', error);
      setError('Failed to load data. Please try refreshing the page.');
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || loading) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setLoading(true);

    try {
      // Send message to backend AI agent
      const response = await apiRequest('/chat', {
        method: 'POST',
        body: JSON.stringify({ message: currentInput }),
      });

      const agentMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: response.response,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, agentMessage]);

      // If there are new pending actions, refresh the pending actions list
      if (response.requires_approval) {
        const pendingActionsData = await apiRequest('/actions/pending');
        setPendingActions(pendingActionsData.pending_actions || []);
      }

      // Refresh calendar events if they might have changed
      const eventsData = await apiRequest('/calendar/events');
      setCalendarEvents(eventsData.events || []);

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'Sorry, I encountered an error while analyzing your patterns. Please try again, or try asking a different question about your schedule.',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const sendReflectionMessage = async () => {
    if (!reflectionInputMessage.trim() || reflectionLoading) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: reflectionInputMessage,
      timestamp: new Date().toISOString()
    };

    setReflectionMessages(prev => [...prev, userMessage]);
    const currentInput = reflectionInputMessage;
    setReflectionInputMessage('');
    setReflectionLoading(true);

    try {
      // Send reflection message to backend
      const response = await apiRequest('/reflection/chat', {
        method: 'POST',
        body: JSON.stringify({ message: currentInput }),
      });

      const agentMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: response.response,
        timestamp: new Date().toISOString()
      };

      setReflectionMessages(prev => [...prev, agentMessage]);

    } catch (error) {
      console.error('Error sending reflection message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'Sorry, I encountered an error during reflection. Please try again.',
        timestamp: new Date().toISOString()
      };
      setReflectionMessages(prev => [...prev, errorMessage]);
      setReflectionError(error.message);
    } finally {
      setReflectionLoading(false);
    }
  };

  const clearReflectionConversation = async () => {
    try {
      setReflectionLoading(true);
      
      // Call backend to clear reflection conversation if exists
      await apiRequest('/reflection/clear', {
        method: 'POST'
      });
      
      // Reset to initial reflection view
      setReflectionMessages([]);
      setIsReflectionChatMode(false);
      setReflectionError(null);
      
    } catch (error) {
      console.error('Error clearing reflection conversation:', error);
      setReflectionError('Failed to clear reflection. Please try again.');
    } finally {
      setReflectionLoading(false);
    }
  };

  const handleActionApproval = async (actionId, approve) => {
    try {
      const endpoint = approve ? `/actions/approve/${actionId}` : `/actions/reject/${actionId}`;
      await apiRequest(endpoint, { method: 'POST' });
      
      // Remove the action from pending list
      setPendingActions(prev => prev.filter(action => action.action_id !== actionId));
      
      // Refresh calendar events
      const eventsData = await apiRequest('/calendar/events');
      setCalendarEvents(eventsData.events || []);
      
      // Add confirmation message to chat
      const confirmationMessage = {
        id: Date.now(),
        role: 'assistant',
        content: approve ? '✅ Great! I\'ve applied that suggestion to your calendar.' : '👍 No problem, I\'ve noted your preference for future recommendations.',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, confirmationMessage]);
      
    } catch (error) {
      console.error('Error handling action:', error);
      setError(error.message);
    }
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here
  };

  // Handle logout with navigation
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatEventDateTime = (startTime) => {
    try {
      if (!startTime) {
        return 'Date/time not available';
      }
      
      let dateToFormat;
      
      if (typeof startTime === 'string') {
        dateToFormat = new Date(startTime);
      } else if (startTime && startTime.dateTime) {
        dateToFormat = new Date(startTime.dateTime);
      } else if (startTime && startTime.date) {
        const date = new Date(startTime.date + 'T00:00:00');
        return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' }) + ' - All day';
      } else {
        console.warn('Unrecognized start time format:', startTime);
        return 'Date/time not available';
      }
      
      if (isNaN(dateToFormat.getTime())) {
        console.warn('Invalid date detected:', startTime);
        return 'Date/time not available';
      }
      
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      
      let dateStr;
      if (dateToFormat.toDateString() === today.toDateString()) {
        dateStr = 'Today';
      } else if (dateToFormat.toDateString() === tomorrow.toDateString()) {
        dateStr = 'Tomorrow';
      } else {
        dateStr = dateToFormat.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
      }
      
      const timeStr = dateToFormat.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
      
      return `${dateStr} at ${timeStr}`;
    } catch (error) {
      console.error('Error formatting event datetime:', error, startTime);
      return 'Date/time not available';
    }
  };

  const formatEventTime = (startTime) => {
    try {
      if (!startTime) {
        return 'Time not available';
      }
      
      let dateToFormat;
      
      if (typeof startTime === 'string') {
        dateToFormat = new Date(startTime);
      } else if (startTime && startTime.dateTime) {
        dateToFormat = new Date(startTime.dateTime);
      } else if (startTime && startTime.date) {
        return 'All day';
      } else {
        console.warn('Unrecognized start time format:', startTime);
        return 'Time not available';
      }
      
      if (isNaN(dateToFormat.getTime())) {
        console.warn('Invalid date detected:', startTime);
        return 'Time not available';
      }
      
      return dateToFormat.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    } catch (error) {
      console.error('Error formatting event time:', error, startTime);
      return 'Time not available';
    }
  };

  const formatEventDate = (startTime) => {
    try {
      if (!startTime) {
        return null;
      }
      
      let dateToFormat;
      
      if (typeof startTime === 'string') {
        dateToFormat = new Date(startTime);
      } else if (startTime && startTime.dateTime) {
        dateToFormat = new Date(startTime.dateTime);
      } else if (startTime && startTime.date) {
        dateToFormat = new Date(startTime.date + 'T00:00:00');
      } else {
        console.warn('Unrecognized date format:', startTime);
        return null;
      }
      
      if (isNaN(dateToFormat.getTime())) {
        console.warn('Invalid date detected in formatEventDate:', startTime);
        return null;
      }
      
      return dateToFormat;
    } catch (error) {
      console.error('Error parsing event date:', error, startTime);
      return null;
    }
  };

  const isEventToday = (startTime) => {
    const eventDate = formatEventDate(startTime);
    if (!eventDate) return false;
    
    const today = new Date();
    return eventDate.toDateString() === today.toDateString();
  };

  const getEventStatus = (event) => {
    const startDate = formatEventDate(event.start_time || event.start);
    const endDate = formatEventDate(event.end_time || event.end);
    
    if (!startDate) return 'unknown';
    
    const now = new Date();
    
    if (startDate > now) {
      return 'upcoming';
    } else if (endDate && endDate < now) {
      return 'completed';
    } else {
      return 'ongoing';
    }
  };

  const clearConversation = async () => {
    try {
      setLoading(true);
      
      await apiRequest('/chat/clear', {
        method: 'POST'
      });
      
      setMessages([{
        id: Date.now(),
        role: 'assistant',
        content: `Fresh start! 🌟 I'm ready to help you reflect on your patterns and understand what makes you productive. What would you like to explore about your schedule or habits?`,
        timestamp: new Date().toISOString()
      }]);
      
      setError(null);
    } catch (error) {
      console.error('Error clearing conversation:', error);
      setError('Failed to start new conversation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const UserProfile = () => (
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
        {user?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
      </div>
      <div className="hidden lg:block">
        <p className="text-sm font-medium text-gray-900">{user?.full_name || 'User'}</p>
        <p className="text-xs text-gray-500">{user?.email}</p>
      </div>
      <button
        onClick={handleLogout}
        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
        title="Logout"
      >
        <LogOut size={16} />
      </button>
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto bg-gray-50 min-h-screen flex flex-col lg:flex-row">
      {/* Header - visible on mobile, hidden on desktop */}
      <header className="lg:hidden bg-white shadow-sm border-b p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MemoMind AI</h1>
          <UserProfile />
        </div>
      </header>

      {/* Desktop Sidebar Navigation */}
      <nav className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r">
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MemoMind AI</h1>
          <p className="text-xs text-gray-500 mt-1">AI-Powered Reflection</p>
        </div>
        
        <div className="flex-1 px-4 space-y-2">
          <button
            onClick={() => setCurrentView('reflection')}
            className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
              currentView === 'reflection' ? 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Lightbulb size={20} className="mr-3" />
            <span>Smart Reflection</span>
          </button>
          
          <button
            onClick={() => setCurrentView('chat')}
            className={`w-full flex items-center px-4 py-3 rounded-lg text-left relative ${
              currentView === 'chat' ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Brain size={20} className="mr-3" />
            <span>AI Chat</span>
            {pendingActions.length > 0 && (
              <span className="absolute right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {pendingActions.length}
              </span>
            )}
          </button>
          
          <button
            onClick={() => setCurrentView('calendar')}
            className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
              currentView === 'calendar' ? 'bg-gradient-to-r from-green-100 to-blue-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Calendar size={20} className="mr-3" />
            <span>Calendar View</span>
          </button>
        </div>
        
        <div className="p-4 border-t">
          <UserProfile />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:min-h-screen">
        {currentView === 'reflection' && (
          <ReflectionView 
            calendarEvents={calendarEvents}
            formatEventDate={formatEventDate}
            setCurrentView={setCurrentView}
          />
        )}
        {currentView === 'chat' && (
          <ChatView 
            messages={messages}
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            loading={loading}
            error={error}
            setError={setError}
            pendingActions={pendingActions}
            inputRef={inputRef}
            sendMessage={sendMessage}
            formatTime={formatTime}
            clearConversation={clearConversation}
            handleActionApproval={handleActionApproval}
          />
        )}
        {currentView === 'calendar' && (
          <CalendarView 
            calendarEvents={calendarEvents}
            loading={loading}
            getEventStatus={getEventStatus}
            formatEventTime={formatEventTime}
            formatEventDateTime={formatEventDateTime}
          />
        )}
        {currentView === 'reflection' && (
          <ReflectionView 
            calendarEvents={calendarEvents}
            formatEventDate={formatEventDate}
            isReflectionChatMode={isReflectionChatMode}
            reflectionMessages={reflectionMessages}
            reflectionInputMessage={reflectionInputMessage}
            setReflectionInputMessage={setReflectionInputMessage}
            reflectionLoading={reflectionLoading}
            reflectionError={reflectionError}
            setReflectionError={setReflectionError}
            reflectionInputRef={reflectionInputRef}
            sendReflectionMessage={sendReflectionMessage}
            clearReflectionConversation={clearReflectionConversation}
            formatTime={formatTime}
            apiRequest={apiRequest}
            setReflectionMessages={setReflectionMessages}
            setIsReflectionChatMode={setIsReflectionChatMode}
            setReflectionLoading={setReflectionLoading}
          />
        )}
      </main>

      {/* Bottom Navigation - only visible on mobile */}
      <nav className="lg:hidden bg-white border-t p-2">
        <div className="flex justify-around">
          <button
            onClick={() => setCurrentView('reflection')}
            className={`flex flex-col items-center p-2 rounded-lg ${
              currentView === 'reflection' ? 'bg-purple-100 text-purple-600' : 'text-gray-600'
            }`}
          >
            <Lightbulb size={20} />
            <span className="text-xs mt-1">Reflect</span>
          </button>
          
          <button
            onClick={() => setCurrentView('chat')}
            className={`flex flex-col items-center p-2 rounded-lg relative ${
              currentView === 'chat' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
            }`}
          >
            <Brain size={20} />
            <span className="text-xs mt-1">AI Chat</span>
            {pendingActions.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {pendingActions.length}
              </span>
            )}
          </button>
          
          <button
            onClick={() => setCurrentView('calendar')}
            className={`flex flex-col items-center p-2 rounded-lg ${
              currentView === 'calendar' ? 'bg-green-100 text-green-600' : 'text-gray-600'
            }`}
          >
            <Calendar size={20} />
            <span className="text-xs mt-1">Calendar</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default CalendarAgentApp;