'use client';

import { useEffect, useRef } from 'react';

const N8nChatSection = () => {
  const chatInitialized = useRef(false);

  useEffect(() => {
    if (chatInitialized.current) return;
    chatInitialized.current = true;

    // Create a simple form for the chat
    const chatContainer = document.getElementById('n8n-chat-embed');
    if (chatContainer) {
      chatContainer.innerHTML = `
        <div style="height: 420px; display: flex; flex-direction: column; padding: 20px; background-color: white;">
          <div style="background-color: #253a3e; padding: 15px; border-bottom: 1px solid #e5e7eb; color: white;">
            <h3 style="margin: 0; font-size: calc(18px + 0.3rem); font-weight: 600;">Hei! 👋</h3>
            <p style="margin: 10px 0 0; font-size: calc(14px + 0.3rem); color: #ffffff;">
              Kysy tarkempia tietoja AI Studio Art Bachmannin palveluista, tekoälyratkaisuista ja niiden hyödyistä rakennusalalla. Tekoälyavustajamme tarjoaa kattavia vastauksia yrityksemme tietokannoista sekä reaaliaikaisia tutkimustietoja alan kehityksestä.
            </p>
          </div>
          
          <div style="flex: 1; overflow-y: auto; margin-bottom: 20px; padding: 10px; background-color: #f9f9f9;" id="chat-messages">
            <div style="background-color: #f3f4f6; color: #1a2e36; padding: 12px; border-radius: 8px; margin-bottom: 10px; max-width: 80%; font-size: calc(1rem + 0.3rem);">
              Nimeni on Art. Miten voin auttaa sinua tänään?
            </div>
          </div>
          
          <form id="chat-form" style="display: flex; gap: 10px;">
            <textarea 
              id="chat-input" 
              placeholder="Kirjoita kysymyksesi..." 
              style="flex: 1; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; resize: none; height: 50px; font-size: calc(1rem + 0.3rem);"
            ></textarea>
            <button 
              type="submit" 
              style="background-color: #253a3e; color: white; border: none; border-radius: 8px; padding: 0 20px; cursor: pointer;"
            >
              Lähetä
            </button>
          </form>
        </div>
      `;

      // Add event listener to the form
      const form = document.getElementById('chat-form');
      const input = document.getElementById('chat-input');
      const messagesContainer = document.getElementById('chat-messages');

      if (form && input && messagesContainer) {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          
          const message = (input as HTMLTextAreaElement).value.trim();
          if (!message) return;
          
          // Add user message to chat
          const userMessageEl = document.createElement('div');
          userMessageEl.style.cssText = 'background-color: #253a3e; color: white; padding: 12px; border-radius: 8px; margin-bottom: 10px; margin-left: auto; max-width: 80%; font-size: calc(1rem + 0.3rem);';
          userMessageEl.textContent = message;
          messagesContainer.appendChild(userMessageEl);
          
          // Clear input
          (input as HTMLTextAreaElement).value = '';
          
          try {
            // Send message to webhook
            const response = await fetch('https://art-bachmann1-agent.app.n8n.cloud/webhook-test/52398649-8e24-409e-b8cb-07ce1281f2c8', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ message }),
            });
            
            if (response.ok) {
              const data = await response.json();
              
              // Add bot response to chat
              const botMessageEl = document.createElement('div');
              botMessageEl.style.cssText = 'background-color: #f3f4f6; color: #1a2e36; padding: 12px; border-radius: 8px; margin-bottom: 10px; max-width: 80%; font-size: calc(1rem + 0.3rem);';
              botMessageEl.textContent = data.response || 'Kiitos viestistäsi. Palaan asiaan pian.';
              messagesContainer.appendChild(botMessageEl);
            } else {
              // Add error message
              const errorMessageEl = document.createElement('div');
              errorMessageEl.style.cssText = 'background-color: #f3f4f6; color: #1a2e36; padding: 12px; border-radius: 8px; margin-bottom: 10px; max-width: 80%; font-size: calc(1rem + 0.3rem);';
              errorMessageEl.textContent = 'Pahoittelut, viestin lähettämisessä tapahtui virhe. Yritä myöhemmin uudelleen.';
              messagesContainer.appendChild(errorMessageEl);
            }
          } catch (error) {
            console.error('Error sending message:', error);
            
            // Add error message
            const errorMessageEl = document.createElement('div');
            errorMessageEl.style.cssText = 'background-color: #f3f4f6; color: #1a2e36; padding: 12px; border-radius: 8px; margin-bottom: 10px; max-width: 80%; font-size: calc(1rem + 0.3rem);';
            errorMessageEl.textContent = 'Pahoittelut, viestin lähettämisessä tapahtui virhe. Yritä myöhemmin uudelleen.';
            messagesContainer.appendChild(errorMessageEl);
          }
          
          // Scroll to bottom
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        });
      }
    }
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4" style={{ fontSize: 'calc(1.875rem + 0.3rem)' }}>Kysy meiltä tekoälyratkaisuista</h2>
          <p className="text-lg text-gray-600 mb-6" style={{ fontSize: 'calc(1.125rem + 0.3rem)' }}>
            Käytä alla olevaa chat-työkalua saadaksesi vastauksia kysymyksiisi tekoälystä ja sen hyödyntämisestä rakennusalalla.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div id="n8n-chat-embed" className="border rounded-lg shadow-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default N8nChatSection;
