'use client';

import { useState, useEffect } from "react";

interface ChatMessage {
  sender: "user" | "system";
  text: string;
}

const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // API endpoint for chat
  const CHAT_API_URL = "/api/chat";

  // Test connection on component mount
  useEffect(() => {
    const testConnection = async () => {
      try {
        // Lisame süsteemi tervitussõnumi kohe
        const welcomeMessage: ChatMessage = { 
          sender: "system", 
          text: "Hei, kuidas läheb? Kuidas saan sind täna aidata?" 
        };
        setMessages([welcomeMessage]);

        // Kontrollime kas API on kättesaadav
        try {
          const res = await fetch(CHAT_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "ping" })
          });
          
          if (!res.ok) {
            console.warn("API connection test failed with status:", res.status);
          }
        } catch (apiError) {
          console.error("API connection test failed:", apiError);
        }
      } catch (error) {
        console.error("Connection test failed:", error);
      }
    };
    
    testConnection();
  }, []);

  // Send message to API
  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: ChatMessage = { sender: "user", text: input };
    const currentInput = input;
    
    // Add user message locally before sending
    setMessages((msgs) => [...msgs, userMessage]);
    setInput("");  // clear input field
    setIsLoading(true);

    try {
      // Send request to our API endpoint
      console.log("Sending message to API:", currentInput);
      const res = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: currentInput
        })
      });
      
      if (!res.ok) {
        throw new Error(`API responded with status: ${res.status}`);
      }
      
      let responseData;
      
      // Try to parse response as JSON
      try {
        responseData = await res.json();
        console.log("Response data:", responseData);
      } catch (e) {
        // If not JSON, try to get text
        console.error("Failed to parse JSON response:", e);
        const text = await res.text();
        console.log("Response text:", text);
        responseData = { message: text };
      }
      
      // Handle different response formats
      let responseText = "";
      
      if (responseData && responseData.response) {
        responseText = responseData.response;
      } else if (responseData && responseData.Value) {
        responseText = responseData.Value;
      } else if (responseData && responseData.message) {
        if (typeof responseData.message === 'string') {
          responseText = responseData.message;
        } else if (responseData.message.content) {
          responseText = responseData.message.content;
        }
      } else if (typeof responseData === 'string') {
        responseText = responseData;
      } else {
        responseText = "Sain teie sõnumi kätte, aga ei saanud vastust formaadis, mida ma mõistan.";
      }
      
      // Add the system message
      const systemMessage: ChatMessage = { 
        sender: "system", 
        text: responseText 
      };
      setMessages((msgs) => [...msgs, systemMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      // Always provide a response to user
      const errorMsg: ChatMessage = { 
        sender: "system", 
        text: "⚠️ Viga sõnumi saatmisel, kuid teie sõnum on salvestatud. Proovime sellega tegeleda." 
      };
      setMessages((msgs) => [...msgs, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-widget border rounded-lg shadow-lg bg-white overflow-hidden max-w-md w-full">
      <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
        <h3 className="font-medium">Työmaa-assistentti</h3>
      </div>
      
      <div className="messages p-4 h-80 overflow-y-auto flex flex-col space-y-3">
        {messages.length === 0 ? (
          <div className="text-gray-400 text-center my-auto">
            Küsi minult midagi tööga seotud või anna käsklusi.
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
        <form 
          className="flex" 
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim() && !isLoading) {
              sendMessage();
            }
          }}
        >
          <input 
            type="text" 
            value={input} 
            placeholder="Kirjoita komento..." 
            onChange={(e) => setInput(e.target.value)} 
            className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md disabled:bg-blue-300 transition-colors"
          >
            Lähetä
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWidget;
