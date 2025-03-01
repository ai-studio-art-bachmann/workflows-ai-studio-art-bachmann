'use client';

import { useEffect, useRef } from 'react';

const N8nChatSection = () => {
  const chatInitialized = useRef(false);

  useEffect(() => {
    if (chatInitialized.current) return;
    chatInitialized.current = true;

    // Load n8n Chat CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(link);

    // Custom CSS for n8n chat
    const customStyle = document.createElement('style');
    customStyle.textContent = `
      .chat-message.chat-message-from-user:not(.chat-message-transparent) {
        background-color: #253a3e !important;
      }
      #n8n-chat-embed > main > div.chat-header > p {
        font-size: 1.1rem !important;
      }
      /* Additional selectors to ensure color change */
      .n8n-chat-message-user {
        background-color: #253a3e !important;
      }
      .chat-message-from-user {
        background-color: #253a3e !important;
      }
      /* Override any inline styles */
      [style*="background-color"] {
        background-color: #253a3e !important;
      }
    `;
    document.head.appendChild(customStyle);

    // Load n8n Chat script
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      createChat({
        webhookUrl: 'https://joosep.app.n8n.cloud/webhook/2dbeb6d2-cc83-45fe-95ee-588bd59ccd72/chat',
        target: '#n8n-chat-embed',
        mode: 'fullscreen',
        showWelcomeScreen: false,
        initialMessages: [
          'Nimeni on Art. Miten voin auttaa sinua tänään?'
        ],
        i18n: {
          en: {
            title: 'Hei! 👋',
            subtitle: "Kysy tarkempia tietoja AI Studio Art Bachmannin palveluista, tekoälyratkaisuista ja niiden hyödyistä rakennusalalla. Tekoälyavustajamme tarjoaa kattavia vastauksia yrityksemme tietokannoista sekä reaaliaikaisia tutkimustietoja alan kehityksestä.",
            getStarted: 'Uusi keskustelu',
            inputPlaceholder: 'Kirjoita kysymyksesi...',
          },
        },
        theme: {
          chatWindow: {
            backgroundColor: '#ffffff',
            textColor: '#1a2e36',
          },
          userMessage: {
            backgroundColor: '#253a3e',
            textColor: '#ffffff',
          },
          botMessage: {
            backgroundColor: '#f3f4f6',
            textColor: '#1a2e36',
          },
          input: {
            backgroundColor: '#ffffff',
            textColor: '#1a2e36',
            placeholderColor: '#9ca3af',
            borderColor: '#e5e7eb',
            focusBorderColor: '#1a2e36',
          },
          button: {
            backgroundColor: '#253a3e', 
            textColor: '#ffffff',
          }
        }
      });

      // Force style update after a short delay
      setTimeout(() => {
        // Apply color to all possible user message elements
        document.querySelectorAll('.chat-message.chat-message-from-user:not(.chat-message-transparent), .n8n-chat-message-user, .chat-message-from-user').forEach(bubble => {
          bubble.style.backgroundColor = '#253a3e';
        });
        
        // Find subtitle element and increase font size
        const subtitleEl = document.querySelector('#n8n-chat-embed > main > div.chat-header > p');
        if (subtitleEl) {
          subtitleEl.style.fontSize = '1.1rem';
        }
        
        // Add mutation observer to catch dynamically added elements
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
              document.querySelectorAll('.chat-message.chat-message-from-user:not(.chat-message-transparent), .n8n-chat-message-user, .chat-message-from-user').forEach(bubble => {
                bubble.style.backgroundColor = '#253a3e';
              });
            }
          });
        });
        
        // Start observing the chat container
        const chatContainer = document.querySelector('#n8n-chat-embed');
        if (chatContainer) {
          observer.observe(chatContainer, { childList: true, subtree: true });
        }
      }, 1000);
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(customStyle);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Kysy meiltä tekoälyratkaisuista</h2>
          <p className="text-lg text-gray-600 mb-6">
            Käytä alla olevaa chat-työkalua saadaksesi vastauksia kysymyksiisi tekoälystä ja sen hyödyntämisestä rakennusalalla.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div id="n8n-chat-embed" className="h-[320px] border rounded-lg shadow-lg bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default N8nChatSection;
