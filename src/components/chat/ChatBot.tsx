
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Bot, X, MessageCircle, SendIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'bot' | 'user' }[]>([
    { text: "Hello! I'm your virtual assistant. How can I help you with information about the Jigawa State House of Assembly?", sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          text: "Thank you for your message. Our team will get back to you shortly. In the meantime, you can explore our website for more information about the Assembly.", 
          sender: 'bot' 
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Bubble */}
      <div
        className={cn(
          "bg-white rounded-2xl shadow-xl transition-all duration-300 transform",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none",
          "w-80 sm:w-96 h-[500px] max-h-[80vh] flex flex-col overflow-hidden mb-4"
        )}
      >
        {/* Chat Header */}
        <div className="bg-assembly-green p-3 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 bg-white">
              <Bot className="h-5 w-5 text-assembly-green" />
            </Avatar>
            <div>
              <h3 className="font-bold">Assembly Assistant</h3>
              <p className="text-xs opacity-80">Online</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-assembly-deep-green">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex",
                message.sender === 'user' ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-xl p-3",
                  message.sender === 'user'
                    ? "bg-assembly-green text-white rounded-br-none"
                    : "bg-white shadow rounded-bl-none"
                )}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-assembly-green"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button type="submit" size="icon" className="rounded-full bg-assembly-green hover:bg-assembly-deep-green">
              <SendIcon className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>

      {/* Toggle Button */}
      <Button
        onClick={toggleChat}
        className={cn(
          "rounded-full w-16 h-16 bg-assembly-green hover:bg-assembly-deep-green shadow-lg",
          "flex items-center justify-center ml-auto"
        )}
      >
        {isOpen ? (
          <X className="h-8 w-8" />
        ) : (
          <MessageCircle className="h-8 w-8" />
        )}
      </Button>
    </div>
  );
};

export default ChatBot;
