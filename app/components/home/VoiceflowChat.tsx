'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const VoiceflowChat = () => {
  useEffect(() => {
    // This will run when the component mounts
    // We'll initialize Voiceflow here if needed
  }, []);

  return (
    <div className="w-full">
      <div id="voiceflow-chat" className="w-full h-[500px] bg-gray-100 rounded-lg"></div>
      
      {/* Voiceflow Script */}
      <Script
        id="voiceflow-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                window.voiceflow.chat.load({
                  verify: { projectID: 'YOUR_VOICEFLOW_PROJECT_ID' },
                  url: { override: 'https://general-runtime.voiceflow.com' },
                  versionID: 'production',
                  render: {
                    mode: 'embedded',
                    target: '#voiceflow-chat'
                  }
                });
              }
              v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `,
        }}
      />
    </div>
  );
};

export default VoiceflowChat;
