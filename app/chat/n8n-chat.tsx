'use client';

import { useEffect } from 'react';
import Head from 'next/head';

export default function N8nChatPage() {
  useEffect(() => {
    // Load n8n Chat CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(link);

    // Load n8n Chat script and initialize
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      document.addEventListener('DOMContentLoaded', () => {
        createChat({
          webhookUrl: 'https://joosep.app.n8n.cloud/webhook/2dbeb6d2-cc83-45fe-95ee-588bd59ccd72/chat',
          target: '#n8n-chat-fullscreen',
          mode: 'fullscreen',
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
      });
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col">
      <div id="n8n-chat-fullscreen" className="flex-1"></div>
    </div>
  );
}
