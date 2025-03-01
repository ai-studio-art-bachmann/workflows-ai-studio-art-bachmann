'use client';

import { useEffect } from 'react';

const N8nChatScript = () => {
  useEffect(() => {
    // Lisame CSS faili
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(linkElement);

    // Lisame skripti
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      createChat({
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
    `;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(linkElement);
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default N8nChatScript;
