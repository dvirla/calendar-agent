import React from 'react';
import ReactMarkdown from 'react-markdown';

const MessageFormatter = ({ content, className = '' }) => {
  // Preprocess content to better handle bullet patterns
  const preprocessContent = (text) => {
    // Convert bullet patterns to proper markdown
    return text
      // Handle numbered lists with bullet sub-items
      .replace(/^(\d+\.\s+[^\n]+)\n(\s*•\s+[^\n]+(?:\n\s*•\s+[^\n]+)*)/gm, (match, mainItem, subItems) => {
        const processedSubItems = subItems.replace(/^\s*•\s+/gm, '   - ');
        return `${mainItem}\n${processedSubItems}`;
      })
      // Handle standalone bullet patterns
      .replace(/^\s*•\s+/gm, '- ')
      // Ensure proper spacing for nested lists
      .replace(/^(\d+\.\s+[^\n]+)\n(\s*-\s+[^\n]+)/gm, '$1\n\n$2');
  };

  const components = {
    // Custom renderers for different markdown elements
    
    // Headers
    h1: ({ children }) => (
      <h1 className="text-lg font-bold mb-3 text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-base font-semibold mb-2 text-gray-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-sm font-semibold mb-2 text-gray-900">{children}</h3>
    ),
    
    // Paragraphs
    p: ({ children }) => (
      <p className="mb-3 leading-relaxed last:mb-0">{children}</p>
    ),
    
    // Lists
    ol: ({ children, ...props }) => (
      <ol className="mb-3 space-y-2 list-none" {...props}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === 'li') {
            return React.cloneElement(child, { ordered: true, index });
          }
          return child;
        })}
      </ol>
    ),
    ul: ({ children, ...props }) => (
      <ul className="mb-3 space-y-2 list-none pl-0" {...props}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === 'li') {
            return React.cloneElement(child, { ordered: false, index });
          }
          return child;
        })}
      </ul>
    ),
    
    // List items
    li: ({ children, ordered, index, ...props }) => {
      if (ordered) {
        return (
          <li className="flex items-start space-x-3 mb-3" {...props}>
            <span className="font-bold text-blue-600 text-sm min-w-[1.5rem] h-6 flex items-center justify-center bg-blue-50 rounded-full flex-shrink-0">
              {(index || 0) + 1}.
            </span>
            <div className="flex-1 pt-0.5">{children}</div>
          </li>
        );
      } else {
        return (
          <li className="flex items-start space-x-3 mb-2" {...props}>
            <span className="text-blue-600 text-lg min-w-[1.5rem] h-6 flex items-center justify-center font-bold flex-shrink-0">
              •
            </span>
            <div className="flex-1 pt-0.5">{children}</div>
          </li>
        );
      }
    },
    
    // Strong/Bold text
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    
    // Emphasis/Italic text
    em: ({ children }) => (
      <em className="italic text-gray-800">{children}</em>
    ),
    
    // Code blocks
    code: ({ children, className, ...props }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">
            {children}
          </code>
        );
      }
      return (
        <pre className="bg-gray-100 p-3 rounded-lg overflow-x-auto mb-3">
          <code className="text-sm font-mono text-gray-800">{children}</code>
        </pre>
      );
    },
    
    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-700 mb-3">
        {children}
      </blockquote>
    ),
    
    // Links
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-blue-600 hover:text-blue-800 underline"
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  };

  return (
    <div className={`prose prose-sm max-w-none ${className}`}>
      <ReactMarkdown components={components}>
        {preprocessContent(content)}
      </ReactMarkdown>
    </div>
  );
};

export default MessageFormatter;