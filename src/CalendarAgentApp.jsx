import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MessageCircle, Plus, Settings, User, Send, Mic, MicOff } from 'lucide-react';

const CalendarAgentApp = () => {
  const [currentView, setCurrentView] = useState('chat');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'agent',
      content: "Hi! I'm your calendar assistant. I can help you plan your schedule and reflect on your day. What would you like to do?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState([
    {
      id: 1,
      title: "Team Meeting",
      time: "9:00 AM",
      duration: "1h",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Lunch with Sarah",
      time: "12:30 PM",
      duration: "1h 30m",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Project Review",
      time: "3:00 PM",
      duration: "45m",
      status: "completed"
    }
  ]);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate agent response
    setTimeout(() => {
      const agentResponse = {
        id: messages.length + 2,
        type: 'agent',
        content: generateAgentResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentResponse]);
    }, 1000);
  };

  const generateAgentResponse = (userInput) => {
    const responses = [
      "I see you have a team meeting at 9 AM today. How are you feeling about it? Would you like me to help you prepare?",
      "Based on your calendar, you have some free time after 4 PM. Would you like to schedule something, or would you prefer to keep it open for reflection?",
      "I noticed you completed your project review earlier. How did it go? What went well, and what could be improved next time?",
      "Your lunch with Sarah is coming up. Are you looking forward to it? Sometimes social breaks are great for mental clarity.",
      "I can help you plan tomorrow's schedule. What are your main priorities for the next day?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const ChatView = () => (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.type === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t bg-white">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={toggleVoice}
            className={`p-2 rounded-full ${
              isListening ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            {isListening ? <MicOff size={20} /> : <Mic size={20} />}
          </button>
          <button
            onClick={sendMessage}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );

  const CalendarView = () => (
    <div className="p-4 space-y-4">
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <Calendar className="mr-2" size={20} />
          Today's Schedule
        </h2>
        <div className="space-y-3">
          {calendarEvents.map((event) => (
            <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-600 flex items-center mt-1">
                  <Clock size={14} className="mr-1" />
                  {event.time} • {event.duration}
                </p>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                event.status === 'completed' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {event.status}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button className="w-full bg-blue-500 text-white py-3 rounded-lg flex items-center justify-center hover:bg-blue-600">
        <Plus size={20} className="mr-2" />
        Add New Event
      </button>
    </div>
  );

  const ReflectionView = () => (
    <div className="p-4 space-y-4">
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <User className="mr-2" size={20} />
          Daily Reflection
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">How was your team meeting?</h3>
            <p className="text-sm text-blue-800">
              I see you had a team meeting from 9-10 AM. How did it go? What were the key outcomes?
            </p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-900 mb-2">Project review completion</h3>
            <p className="text-sm text-green-800">
              Great job completing your project review! What insights did you gain? Any areas for improvement?
            </p>
          </div>
          
          <button 
            onClick={() => setCurrentView('chat')}
            className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600"
          >
            Start Reflection Chat
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Calendar Agent</h1>
          <Settings className="text-gray-600" size={24} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {currentView === 'chat' && <ChatView />}
        {currentView === 'calendar' && <CalendarView />}
        {currentView === 'reflection' && <ReflectionView />}
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t p-2">
        <div className="flex justify-around">
          <button
            onClick={() => setCurrentView('chat')}
            className={`flex flex-col items-center p-2 rounded-lg ${
              currentView === 'chat' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
            }`}
          >
            <MessageCircle size={20} />
            <span className="text-xs mt-1">Chat</span>
          </button>
          
          <button
            onClick={() => setCurrentView('calendar')}
            className={`flex flex-col items-center p-2 rounded-lg ${
              currentView === 'calendar' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
            }`}
          >
            <Calendar size={20} />
            <span className="text-xs mt-1">Calendar</span>
          </button>
          
          <button
            onClick={() => setCurrentView('reflection')}
            className={`flex flex-col items-center p-2 rounded-lg ${
              currentView === 'reflection' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
            }`}
          >
            <User size={20} />
            <span className="text-xs mt-1">Reflect</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default CalendarAgentApp;