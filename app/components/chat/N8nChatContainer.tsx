'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const N8nChatContainer = () => {
  return (
    <>
      <div id="n8n-chat"></div>
      <link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
      <Script
        id="n8n-chat-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
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
          `
        }}
        type="module"
      />
    </>
  );
};

export default N8nChatContainer;
