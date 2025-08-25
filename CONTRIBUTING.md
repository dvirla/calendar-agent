# Contributing to Calendar Agent

Thank you for your interest in contributing to Calendar Agent! We welcome contributions from the community.

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Modern web browser
- Git for version control

### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/calendar-agent.git
   cd calendar-agent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## 🔧 Development Guidelines

### Code Style

- Use modern React patterns (hooks, functional components)
- Follow ESLint configuration (when available)
- Use Tailwind CSS for styling
- Write descriptive commit messages
- Keep components small and focused

### File Structure

```
src/
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── AuthContext.jsx     # Authentication context
├── CalendarAgentApp.jsx # Main application
└── main.jsx           # Application entry point
```

### Component Guidelines

- Use functional components with hooks
- Implement proper error boundaries
- Handle loading and error states
- Follow accessibility best practices
- Use TypeScript-style PropTypes when possible

### State Management

- Use React Context for global state (auth)
- Use useState/useEffect for local component state
- Keep state as close to where it's used as possible

## 🧪 Testing

While we don't have automated tests yet, please manually test:

- Authentication flow (login/logout)
- All views (Chat, Calendar, Reflection)
- Mobile responsiveness
- Error handling scenarios

## 📝 Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the coding guidelines above
   - Test your changes thoroughly
   - Update documentation if needed

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Use the PR template
   - Provide clear description of changes
   - Include screenshots for UI changes
   - Link any related issues

### Commit Message Convention

We use conventional commits:

- `feat:` new features
- `fix:` bug fixes
- `docs:` documentation changes
- `style:` code style changes (formatting, etc.)
- `refactor:` code refactoring
- `test:` adding or updating tests
- `chore:` maintenance tasks

## 🐛 Bug Reports

When filing bug reports, please include:

- Operating system and browser version
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable
- Console errors if any

## 💡 Feature Requests

We welcome feature requests! Please:

- Check existing issues first
- Provide clear use case and rationale
- Include mockups or examples if helpful
- Discuss implementation approach

## 📄 Documentation

When contributing documentation:

- Update README.md for user-facing changes
- Add inline code comments for complex logic
- Update this CONTRIBUTING.md for process changes

## ❓ Questions

If you have questions:

- Check existing issues and discussions
- Create a new issue with the "question" label
- Be specific and provide context

## 🤝 Code of Conduct

This project adheres to a code of conduct. By participating, you agree to uphold this code:

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Maintain a welcoming environment

## 🔐 Security

If you discover security vulnerabilities:

- Do NOT create a public issue
- Email the maintainers directly
- Provide detailed information about the vulnerability
- Allow time for the issue to be addressed before disclosure

## 📋 Development Checklist

Before submitting a PR, ensure:

- [ ] Code follows project conventions
- [ ] Authentication flow works correctly
- [ ] All views render properly on mobile and desktop
- [ ] No console errors or warnings
- [ ] Environment variables are documented
- [ ] Changes are tested in multiple browsers
- [ ] Documentation is updated if needed

## 🚧 Current Limitations

Please note these current limitations:

- **Backend Dependency**: This frontend requires a compatible backend API
- **Google OAuth**: Requires Google Cloud project setup
- **No Tests**: Automated testing framework not yet implemented

## 🎯 Priority Areas for Contribution

We especially welcome contributions in:

- **Testing**: Add automated test framework
- **TypeScript**: Migrate to TypeScript
- **Accessibility**: Improve WCAG compliance
- **Performance**: Optimize bundle size and loading
- **Documentation**: Improve setup and usage guides
- **UI/UX**: Enhance mobile experience and design
- **Error Handling**: Better error messages and recovery

Thank you for contributing to Calendar Agent! 🎉