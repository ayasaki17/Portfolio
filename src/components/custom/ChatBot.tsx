import { useState, useRef, useEffect } from 'react';
import { useChatBot } from '@/hooks/useChatBot';
import { MessageCircle, X, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatBotProps {
  className?: string;
}

export function ChatBot({ className }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, isLoading, sendMessage, clearMessages } = useChatBot();

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    await sendMessage(userInput);
    setUserInput('');
  };

  const handleClearChat = () => {
    clearMessages();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={cn('fixed bottom-4 right-4 z-50', className)}>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={cn(
          'group relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95',
          'bg-accent hover:bg-accent/90 text-accent-foreground',
          'focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 dark:focus:ring-offset-slate-950',
          'hover:shadow-xl hover:shadow-accent/20'
        )}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <MessageCircle className="h-6 w-6" />
        {!isOpen && (
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-destructive animate-pulse" />
        )}
      </button>

      {/* Chat Panel */}
      <div
        className={cn(
          'fixed bottom-20 right-4 z-40 w-[380px] max-w-[90vw] rounded-xl border bg-card shadow-xl transition-all duration-300 ease-in-out',
          'data-[open=true]:bottom-20 data-[open=false]:bottom-0 data-[open=false]:opacity-0 data-[open=false]:scale-95',
          'border-slate-200 dark:border-slate-800',
          'data-[open=true]:shadow-2xl',
          'overflow-hidden',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        data-open={isOpen}
      >
        {/* Header */}
        <div className={cn('flex items-center justify-between border-b border-slate-200 dark:border-slate-800', 'p-4')}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <MessageCircle className="h-5 w-5 text-accent" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Ask about Kobe</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Full Stack Developer Portfolio</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleClearChat}
              className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
              aria-label="Clear chat"
            >
              Clear
            </button>
            <button
              onClick={toggleChat}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div
          className={cn(
            'flex-1 overflow-y-auto p-4',
            'scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent dark:scrollbar-thumb-slate-700 dark:scrollbar-track-slate-900'
          )}
        >
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 p-4 rounded-full bg-accent/10">
                <MessageCircle className="h-12 w-12 text-accent" />
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                Ask me anything about my skills, projects, experience, or how to contact me!
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                I'm here to help you learn more about my work
              </p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'mb-4 rounded-lg px-4 py-3 max-w-[85%]',
                  message.role === 'user'
                    ? 'ml-auto bg-accent text-accent-foreground'
                    : 'mr-auto bg-muted text-slate-700 dark:text-slate-300'
                )}
              >
                <div className="whitespace-pre-wrap break-words">{message.content}</div>
              </div>
            ))
          )}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="mb-4 mr-auto rounded-lg bg-muted px-4 py-3">
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 dark:bg-slate-500" style={{ animationDelay: '0ms' }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 dark:bg-slate-500" style={{ animationDelay: '150ms' }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 dark:bg-slate-500" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Footer / Input Area */}
        <div className={cn('border-t border-slate-200 dark:border-slate-800', 'p-4')}>
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className={cn(
                'flex-1 rounded-lg border border-slate-300 bg-background px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-50',
                'dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-600',
                'transition-all duration-200'
              )}
              aria-label="Chat message input"
            />
            <button
              type="submit"
              disabled={isLoading || !userInput.trim()}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-all duration-200 hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50',
                'focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 dark:focus:ring-offset-slate-950',
                'hover:shadow-lg hover:shadow-accent/20'
              )}
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
