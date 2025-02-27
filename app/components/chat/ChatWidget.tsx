'use client';

import { useState } from "react";

interface ChatMessage {
  sender: "user" | "system";
  text: string;
}

const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Direct connection to n8n webhook
  const N8N_WEBHOOK_URL = "https://joosep.app.n8n.cloud/webhook-test/2e6d9caa-dde9-4d59-8a61-368fa1d89ab4";

  // Send message directly to n8n
  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: ChatMessage = { sender: "user", text: input };
    // Add user message locally before sending
    setMessages((msgs) => [...msgs, userMessage]);
    setInput("");  // clear input field
    setIsLoading(true);

    try {
      // Send request directly to n8n webhook
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: userMessage.text,
          // Include demo user info
          user: "demo@example.com",
          name: "Demo User"
        })
      });
      
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      
      const data = await res.json();
      
      // Handle n8n response
      if (data.reply) {
        const systemMessage: ChatMessage = { sender: "system", text: data.reply };
        setMessages((msgs) => [...msgs, systemMessage]);
      } else {
        // If n8n doesn't return a reply field, use a fallback
        const fallbackMessage: ChatMessage = { 
          sender: "system", 
          text: "Pyyntösi on vastaanotettu. " + (data.message || JSON.stringify(data))
        };
        setMessages((msgs) => [...msgs, fallbackMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMsg: ChatMessage = { 
        sender: "system", 
        text: "⚠️ Virhe lähetettäessä viestiä. Yritä uudelleen myöhemmin." 
      };
      setMessages((msgs) => [...msgs, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-widget border rounded-lg shadow-lg bg-white overflow-hidden max-w-md w-full">
      <div className="bg-blue-600 text-white p-3">
        <h3 className="font-medium">Työmaa-assistentti</h3>
      </div>
      
      <div className="messages p-4 h-80 overflow-y-auto flex flex-col space-y-3">
        {messages.length === 0 ? (
          <div className="text-gray-400 text-center my-auto">
            Kysy minulta mitä tahansa työmaahan liittyvää tai anna komentoja.
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`message p-3 rounded-lg max-w-[80%] ${
                msg.sender === "user" 
                  ? "bg-blue-100 self-end" 
                  : "bg-gray-100 self-start"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
          ))
        )}
        {isLoading && (
          <div className="self-start bg-gray-100 p-3 rounded-lg animate-pulse">
            <div className="flex space-x-1">
              <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
              <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
              <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        )}
      </div>
      
      <div className="input-area p-3 border-t">
        <div className="flex">
          <input 
            type="text" 
            value={input} 
            placeholder="Kirjoita komento..." 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }} 
            className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button 
            onClick={sendMessage}
            disabled={isLoading || !input.trim()} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md disabled:bg-blue-300"
          >
            Lähetä
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
