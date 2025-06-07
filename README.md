# Calendar Agent Frontend

A modern, responsive React application that provides an intelligent calendar assistant interface with AI-powered conversation capabilities and daily reflection features.

## 🚀 Features

### 🤖 AI Chat Assistant
- **Natural Language Processing**: Conversational interface for calendar management
- **Voice Input Support**: Toggle voice recording for hands-free interaction
- **Smart Responses**: AI-generated contextual responses based on calendar data
- **Real-time Messaging**: Instant chat experience with timestamp tracking

### 📅 Calendar Management
- **Today's Schedule**: Clean, organized view of daily events
- **Event Status Tracking**: Visual indicators for completed and upcoming events
- **Quick Event Creation**: One-click "Add New Event" functionality
- **Time & Duration Display**: Clear formatting of event times and durations

### 🧘 Daily Reflection
- **Guided Reflection**: AI-powered prompts based on completed activities
- **Meeting Analysis**: Contextual questions about completed meetings and tasks
- **Insight Tracking**: Structured reflection on project outcomes and learnings
- **Seamless Chat Integration**: Direct transition from reflection to conversation

### 📱 Responsive Design
- **Mobile-First**: Optimized for mobile devices with touch-friendly interface
- **Desktop Navigation**: Sidebar navigation for larger screens
- **Adaptive Layout**: Flexible design that works across all device sizes
- **Modern UI**: Clean, professional interface with Tailwind CSS styling

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.0 with JSX
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and building
- **State Management**: React Hooks (useState, useEffect)

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern web browser

### Quick Start

1. **Clone and navigate to the project**:
   ```bash
   cd calendar-agent
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
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
├── CalendarAgentApp.jsx    # Main application component
├── main.jsx               # React application entry point
├── index.css             # Tailwind CSS imports
└── style.css             # Additional styling
```

### Key Components

#### CalendarAgentApp (Main Component)
- **State Management**: Manages application state including current view, messages, and calendar events
- **View Routing**: Handles navigation between Chat, Calendar, and Reflection views
- **Message Handling**: Processes user input and simulates AI responses
- **Event Management**: Displays and manages calendar events

#### ChatView
- **Message Display**: Renders conversation history with user/agent distinction
- **Input Interface**: Text input with voice recording toggle
- **Real-time Updates**: Live message timestamps and status
- **Responsive Layout**: Optimized for both mobile and desktop

#### CalendarView
- **Event List**: Displays today's schedule with status indicators
- **Event Cards**: Detailed event information with time and duration
- **Quick Actions**: Add new event functionality
- **Status Visualization**: Color-coded event status (completed/upcoming)

#### ReflectionView
- **Guided Prompts**: AI-generated reflection questions
- **Context Awareness**: Questions based on completed activities
- **Chat Integration**: Direct transition to conversational reflection

### State Management

The application uses React's built-in state management:

```javascript
// Main application state
const [currentView, setCurrentView] = useState('chat')
const [messages, setMessages] = useState([...])
const [inputMessage, setInputMessage] = useState('')
const [isListening, setIsListening] = useState(false)
const [calendarEvents, setCalendarEvents] = useState([...])
```

### Navigation System

#### Desktop Navigation
- **Sidebar Layout**: Fixed sidebar with navigation buttons
- **Visual Indicators**: Active view highlighting with blue accent
- **Icon Integration**: Lucide icons for intuitive navigation

#### Mobile Navigation
- **Bottom Tab Bar**: Mobile-optimized navigation at screen bottom
- **Touch-Friendly**: Large tap targets for mobile interaction
- **Responsive Header**: Collapsible header on mobile devices

## 🎨 UI/UX Design

### Design Principles
- **Clean & Modern**: Minimalist interface focusing on functionality
- **Consistent Spacing**: Tailwind spacing utilities for uniform layout
- **Accessible Colors**: High contrast text and intuitive color coding
- **Mobile-First**: Designed primarily for mobile with desktop enhancement

### Color Scheme
- **Primary Blue**: `#3B82F6` (blue-500) for active states and primary actions
- **Gray Scale**: Various gray shades for text hierarchy and backgrounds
- **Status Colors**: Green for completed items, blue for upcoming events
- **Background**: Light gray (`#F9FAFB`) for clean, modern appearance

### Typography
- **System Fonts**: `system-ui, Avenir, Helvetica, Arial, sans-serif`
- **Responsive Sizing**: Fluid typography scaling across devices
- **Font Weights**: Strategic use of font weights for information hierarchy

## 🔧 Configuration

### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
})
```

### Tailwind Configuration
```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

### PostCSS Setup
```javascript
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## 📱 Features Deep Dive

### Chat Interface

#### Message System
- **Bidirectional Chat**: User and AI assistant messages
- **Timestamp Display**: Real-time message timestamps
- **Message Styling**: Distinct styling for user vs. AI messages
- **Responsive Bubbles**: Adaptive message bubble sizing

#### Voice Integration
- **Voice Toggle**: Microphone button for voice input
- **Visual Feedback**: Color change when voice recording is active
- **Cross-Platform**: Designed for future voice recognition integration

#### Smart Responses
The AI assistant provides contextual responses based on:
- Current calendar events
- Time of day
- User interaction patterns
- Reflection opportunities

### Calendar Features

#### Event Display
```javascript
// Example event structure
{
  id: 1,
  title: "Team Meeting",
  time: "9:00 AM",
  duration: "1h",
  status: "upcoming" // or "completed"
}
```

#### Event Management
- **Status Tracking**: Visual indicators for event completion
- **Time Formatting**: Clean, readable time display
- **Duration Display**: Clear duration information
- **Hover Effects**: Interactive event cards

### Reflection System

#### Contextual Prompts
- **Meeting Follow-ups**: Questions about completed meetings
- **Project Reviews**: Insights on project outcomes
- **Daily Summary**: Overall day reflection opportunities
- **Growth Tracking**: Learning and improvement focus

#### Integration Features
- **Chat Transition**: Seamless move from reflection to conversation
- **Context Preservation**: Maintains conversation context
- **Personalized Questions**: AI-generated based on user activities

## 🔮 Future Enhancements

### Planned Features
- **Backend Integration**: Connect to FastAPI backend service
- **Real Calendar Sync**: Google Calendar API integration
- **Advanced AI**: Enhanced conversational AI capabilities
- **User Authentication**: Multi-user support with secure login
- **Data Persistence**: Cloud storage for conversations and preferences
- **Voice Recognition**: Full voice input implementation
- **Push Notifications**: Event reminders and AI suggestions
- **Dark Mode**: Theme switching capability
- **Accessibility**: Enhanced screen reader and keyboard navigation support

### Technical Improvements
- **Type Safety**: Migration to TypeScript
- **Testing**: Comprehensive unit and integration tests
- **Performance**: Code splitting and lazy loading
- **PWA**: Progressive Web App capabilities
- **Offline Support**: Local storage and sync capabilities

## 🤝 Contributing

### Development Guidelines
1. Follow React best practices and hooks patterns
2. Use Tailwind CSS utilities for styling
3. Maintain responsive design principles
4. Ensure accessibility standards compliance
5. Test across multiple devices and browsers

### Code Style
- Use functional components with hooks
- Implement proper prop validation
- Follow consistent naming conventions
- Maintain component modularity
- Document complex functionality

## 📄 License

This project is licensed under the ISC License.

## 🙋‍♂️ Support

For questions, issues, or contributions, please refer to the project repository or contact the development team.

---

**Calendar Agent Frontend** - Intelligent calendar management through conversational AI