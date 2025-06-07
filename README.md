# Calendar Agent Frontend

A modern, responsive React application that provides an intelligent calendar assistant interface with AI-powered conversation capabilities, secure authentication, and real backend integration.

## 🚀 Features

### 🔐 Authentication & Security
- **Google OAuth Integration**: Secure login via Google accounts
- **JWT Token Management**: Automatic session handling with 30-minute expiry
- **Session Persistence**: Login state maintained across browser refreshes
- **Auto-Logout**: Automatic logout when tokens expire for enhanced security
- **Protected Routes**: All calendar data secured behind authentication

### 🤖 AI Chat Assistant
- **Real Backend Integration**: Connected to FastAPI backend with live AI responses
- **Natural Language Processing**: Conversational interface for calendar management
- **Pending Action Approval**: Review and approve/reject calendar modifications
- **Smart Responses**: AI-generated contextual responses based on real calendar data
- **Conversation History**: Persistent chat history stored in backend database

### 📅 Calendar Management
- **Live Google Calendar Integration**: Real-time sync with user's Google Calendar
- **Event Status Tracking**: Visual indicators for completed and upcoming events
- **AI-Powered Scheduling**: Let AI assistant create, modify, and manage events
- **Time & Duration Display**: Clear formatting of event times and durations
- **Multi-User Support**: Per-user calendar isolation and data security

### 🧘 Daily Reflection
- **Contextual Reflection**: AI prompts based on actual completed activities
- **Meeting Analysis**: Intelligent questions about real meetings and outcomes
- **Seamless Chat Integration**: Direct transition from reflection to conversation
- **Personalized Insights**: Tailored reflection based on user's actual schedule

### 📱 Responsive Design
- **Mobile-First**: Optimized for mobile devices with touch-friendly interface
- **Desktop Navigation**: Sidebar navigation for larger screens
- **Adaptive Layout**: Flexible design that works across all device sizes
- **Modern UI**: Clean, professional interface with Tailwind CSS styling

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.0 with JSX
- **Authentication**: JWT tokens with Google OAuth2 integration
- **Backend Integration**: RESTful API calls to FastAPI backend
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and building
- **State Management**: React Context API for auth state, React Hooks for component state

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern web browser
- **Backend Service**: Calendar Agent FastAPI backend running on `http://localhost:8000`
- **Google OAuth**: Configured Google Cloud project with Calendar API enabled

### Quick Start

1. **Clone and navigate to the project**:
   ```bash
   cd calendar-agent
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Ensure backend is running**:
   ```bash
   # The frontend expects the backend to be running at http://localhost:8000
   # See backend_README.md for backend setup instructions
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Application Architecture

### Component Structure

```
src/
├── AuthContext.jsx         # Authentication context and JWT management
├── LoginPage.jsx          # Google OAuth login interface
├── CalendarAgentApp.jsx   # Main authenticated application
├── main.jsx              # React application entry point with auth routing
├── index.css             # Tailwind CSS imports
└── style.css             # Additional styling
```

### Authentication Flow

```
User Access → Check Token → Valid? → Main App
                        ↓
                    Invalid/Missing
                        ↓
                   LoginPage → Google OAuth → Backend Callback → JWT Token → Main App
```

### Key Components

#### AuthContext (Authentication Management)
- **JWT Token Handling**: Secure token storage and automatic expiry management
- **Google OAuth Integration**: Handles OAuth flow with backend API
- **API Request Wrapper**: Automatically includes auth headers in all API calls
- **Session Management**: Persistent login state across browser sessions
- **Auto-Logout**: Monitors token expiry and logs out users automatically

#### LoginPage (Authentication UI)
- **Google OAuth Button**: Initiates authentication flow with backend
- **OAuth Callback Handling**: Processes JWT tokens returned from backend
- **Feature Preview**: Shows users what they'll access after authentication
- **Error Handling**: Clear error messages for authentication failures
- **Security Features**: Displays security benefits and data protection info

#### CalendarAgentApp (Main Application)
- **Real Backend Integration**: All features use actual API calls to FastAPI backend
- **Live Data Management**: Real calendar events, conversations, and pending actions
- **User Profile Display**: Shows authenticated user information with logout
- **Error Handling**: Graceful handling of API failures and token expiry
- **Multi-View Navigation**: Chat, Calendar, and Reflection views with real data

#### ChatView (AI Conversation Interface)
- **Live AI Integration**: Real conversations with backend AI agent
- **Pending Actions UI**: Visual approval/rejection interface for calendar modifications
- **Message Persistence**: Messages stored in backend database
- **Real-time Updates**: Live calendar updates after AI actions
- **Error Recovery**: Graceful error handling with retry mechanisms

#### CalendarView (Live Calendar Display)
- **Google Calendar Sync**: Real events from user's Google Calendar
- **Event Status**: Live status based on actual event times
- **AI Integration**: Events created and modified by AI assistant
- **Refresh Capability**: Manual and automatic calendar refresh

#### ReflectionView (Contextual Daily Reflection)
- **Real Activity Analysis**: Reflection prompts based on actual calendar events
- **Intelligent Questions**: AI-generated questions about real meetings and tasks
- **Chat Integration**: Seamless transition to AI conversation
- **Personalized Content**: Tailored reflection based on user's actual day

### State Management

#### Authentication State (AuthContext)
```javascript
// Global authentication state
const [user, setUser] = useState(null)           // User profile data
const [token, setToken] = useState(null)         // JWT token
const [loading, setLoading] = useState(true)     // Auth loading state
const [isAuthenticated, setIsAuthenticated] = useState(false)
```

#### Application State (CalendarAgentApp)
```javascript
// Main application state with real backend data
const [messages, setMessages] = useState([])          // Chat messages from backend
const [calendarEvents, setCalendarEvents] = useState([])  // Live Google Calendar events
const [pendingActions, setPendingActions] = useState([])  // Actions awaiting approval
const [currentView, setCurrentView] = useState('chat')    // Active view
```

### API Integration

#### Authentication Endpoints
```javascript
// Google OAuth flow
GET /auth/google          // Get OAuth URL
GET /auth/callback        // Handle OAuth callback (returns JWT)
GET /user/profile         // Get authenticated user data
```

#### Application Endpoints
```javascript
// Chat and AI features
POST /chat                        // Send message to AI agent
GET /actions/pending              // Get pending calendar actions
POST /actions/approve/{action_id} // Approve calendar action
POST /actions/reject/{action_id}  // Reject calendar action

// Calendar features  
GET /calendar/events             // Get user's calendar events
POST /calendar/events            // Create new calendar event

// Conversation features
GET /user/conversations          // Get conversation history
GET /user/conversations/{id}/messages // Get specific conversation messages
```

### Security Features

#### Token Management
- **Automatic Expiry Checking**: Monitors JWT expiration every minute
- **Secure Storage**: Tokens stored in localStorage (consider httpOnly cookies for production)
- **Automatic Cleanup**: Tokens removed on logout or expiry
- **URL Security**: OAuth tokens removed from URL after processing

#### API Security
- **Authentication Headers**: All API calls include `Authorization: Bearer <token>`
- **401 Handling**: Automatic logout on authentication failures
- **Error Handling**: Secure error messages without exposing sensitive data
- **CORS Protection**: Backend CORS configuration for secure communication

## 🎨 UI/UX Design

### Design Principles
- **Security First**: Clear authentication states and secure data handling
- **Real-Time Feedback**: Live updates for calendar changes and AI responses
- **Error Resilience**: Graceful error handling with clear user messaging
- **Accessibility**: High contrast and keyboard navigation support

### Authentication UX
- **Clear Login Flow**: Prominent Google OAuth button with feature preview
- **Loading States**: Clear indicators during authentication process
- **Error Messages**: Helpful error messages for authentication failures
- **Security Indicators**: Visual confirmation of secure, encrypted connection

### Color Scheme
- **Primary Blue**: `#3B82F6` for active states and primary actions
- **Security Green**: `#10B981` for successful authentication and security indicators
- **Warning Orange**: `#F59E0B` for pending actions requiring attention
- **Error Red**: `#EF4444` for authentication errors and failures

## 🔧 Configuration

### Backend Integration
```javascript
// AuthContext.jsx
const API_BASE_URL = 'http://localhost:8000'  // FastAPI backend URL
```

### Environment Setup
The frontend automatically connects to the backend at `http://localhost:8000`. Ensure your backend is properly configured with:
- Google OAuth credentials
- Database connection
- Encryption keys for calendar credentials
- JWT secret keys

## 📱 Features Deep Dive

### Authentication System

#### Google OAuth Flow
1. User clicks "Continue with Google"
2. Frontend calls `/auth/google` to get OAuth URL
3. User redirected to Google for authentication
4. Google redirects back with authorization code
5. Backend processes code and returns JWT token
6. Frontend stores token and fetches user profile
7. User gains access to calendar features

#### Session Management
- **Token Persistence**: Stored in localStorage for session continuity
- **Automatic Refresh**: Token expiry checked every minute
- **Secure Logout**: Complete cleanup of authentication data
- **Cross-Tab Sync**: Login state synchronized across browser tabs

### Live AI Integration

#### Real Conversations
- **Backend AI Agent**: Conversations powered by Azure AI through FastAPI backend
- **Context Awareness**: AI has access to real calendar data and user history
- **Action Approval**: AI can propose calendar changes that require user approval
- **Persistent History**: All conversations stored in backend database

#### Pending Actions System
- **Visual Approval UI**: Clear approve/reject buttons for proposed calendar changes
- **Action Details**: Full description of what the AI wants to do
- **Real-Time Updates**: Calendar automatically refreshes after action approval
- **Auto-Expiry**: Actions automatically expire after 30 minutes

### Google Calendar Integration

#### Live Data Sync
- **Real Events**: Displays actual events from user's Google Calendar
- **Bi-Directional Sync**: View and create events through the AI interface
- **Event Status**: Real-time status based on actual event times
- **Secure Credentials**: Google Calendar credentials encrypted in backend

#### AI Calendar Management
- **Natural Language**: "Schedule a meeting for tomorrow at 2 PM"
- **Conflict Detection**: AI checks for scheduling conflicts
- **Smart Suggestions**: AI suggests optimal meeting times
- **Bulk Operations**: AI can manage multiple calendar events

## 🔮 Future Enhancements

### Authentication Improvements
- **Multi-Factor Authentication**: Additional security layer
- **Refresh Tokens**: Longer-lived sessions with secure refresh
- **SSO Integration**: Additional OAuth providers (Microsoft, Apple)
- **Session Management**: Advanced session control and monitoring

### AI & Calendar Features
- **Advanced Scheduling**: AI-powered meeting optimization
- **Calendar Analytics**: Insights into time usage and productivity
- **Integration Expansion**: Slack, Teams, and other calendar services
- **Offline Support**: Local storage with sync capabilities

### Technical Improvements
- **Type Safety**: Full TypeScript migration
- **Progressive Web App**: PWA capabilities for mobile installation
- **Real-Time Updates**: WebSocket integration for live updates
- **Advanced Caching**: Optimistic updates and smart caching strategies

## 🔒 Security Considerations

### Production Deployment
- **HTTPS Only**: All communication over encrypted connections
- **HttpOnly Cookies**: Consider httpOnly cookies instead of localStorage for tokens
- **CSP Headers**: Content Security Policy for XSS protection
- **CORS Configuration**: Proper CORS setup for production domains

### Data Protection
- **Encryption**: All sensitive data encrypted in backend
- **Per-User Isolation**: Complete data isolation between users
- **Audit Logging**: Security event logging and monitoring
- **Regular Updates**: Keep dependencies updated for security patches

## 🤝 Contributing

### Development Guidelines
1. **Authentication First**: Always test with real authentication flow
2. **Backend Integration**: Ensure all features work with live backend data
3. **Error Handling**: Implement comprehensive error handling for API failures
4. **Security Testing**: Test authentication edge cases and token expiry
5. **Mobile Testing**: Verify authentication flow works on mobile devices

### Testing Checklist
- [ ] Google OAuth login flow works end-to-end
- [ ] Token expiry triggers automatic logout
- [ ] All API calls include proper authentication headers
- [ ] Error states display helpful messages to users
- [ ] Mobile authentication experience is smooth
- [ ] Backend integration works across all features

## 📄 License

This project is licensed under the ISC License.

## 🙋‍♂️ Support

For questions, issues, or contributions:
- **Frontend Issues**: Check browser console for authentication errors
- **Backend Integration**: Refer to `backend_README.md` for API documentation
- **Authentication Issues**: Verify Google OAuth configuration in backend

---

**Calendar Agent Frontend** - Secure, intelligent calendar management through conversational AI with real Google Calendar integration