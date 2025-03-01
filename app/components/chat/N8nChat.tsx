'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const N8nChat = () => {
  useEffect(() => {
    // Skript käivitatakse ainult kliendipoolel
    const loadChat = async () => {
      try {
        // Oodake, kuni dokument on valmis
        if (document.readyState === 'complete') {
          initializeChat();
        } else {
          window.addEventListener('load', initializeChat);
          return () => window.removeEventListener('load', initializeChat);
        }
      } catch (error) {
        console.error('Error loading n8n chat:', error);
      }
    };

    const initializeChat = () => {
      // Kontrollime, kas globaalne createChat funktsioon on olemas
      if (window.createChat) {
        window.createChat({
          webhookUrl: 'https://joosep.app.n8n.cloud/webhook/2dbeb6d2-cc83-45fe-95ee-588bd59ccd72/chat',
          mode: 'window',
          showWelcomeScreen: false,
          initialMessages: [
            'Tere! 👋',
            'Minu nimi on Nathan. Kuidas saan teid täna aidata?'
          ],
          i18n: {
            en: {
              title: 'Tere! 👋',
              subtitle: "Alusta vestlust. Oleme siin, et aidata sind 24/7.",
              getStarted: 'Uus vestlus',
              inputPlaceholder: 'Kirjuta oma küsimus...',
            },
          },
        });
      } else {
        console.error('createChat function not found');
      }
    };

    loadChat();
  }, []);

  return (
    <>
      <div id="n8n-chat" className="n8n-chat-container"></div>
      <Script
        src="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js"
        type="module"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('n8n chat script loaded');
        }}
      />
    </>
  );
};

export default N8nChat;

// Laiendame Window liidest, et lisada createChat funktsioon
declare global {
  interface Window {
    createChat: (options: any) => void;
  }
}
