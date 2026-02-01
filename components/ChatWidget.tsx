'use client'

import Script from 'next/script'

// Extend Window interface for Salesforce Embedded Messaging
declare global {
  interface Window {
    initEmbeddedMessaging?: () => void;
    embeddedservice_bootstrap?: {
      isInitialized?: boolean;
      settings: {
        language: string;
      };
      init: (orgId: string, deploymentId: string, url: string, options: { scrt2URL: string }) => void;
    };
  }
}

export default function ChatWidget() {
  return (
    <>
      <Script
        id="embedded-messaging-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.initEmbeddedMessaging = function () {
              try {
                if (window.embeddedservice_bootstrap?.isInitialized) return;

                embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
                embeddedservice_bootstrap.init(
                    '00DgL00000CdshZ',
                    'Salesforce_Troop_AI_External_Website_Channel',
                    'https://orgfarm-bd81a8fde4-dev-ed.develop.my.site.com/ESWSalesforceTroopAIEx1769959200081',
                    {
                        scrt2URL: 'https://orgfarm-bd81a8fde4-dev-ed.develop.my.salesforce-scrt.com'
                    }
                );
              } catch (err) {
                console.error('Embedded Messaging error:', err);
              }
            };
          `,
        }}
      />

      <Script
        src="https://orgfarm-bd81a8fde4-dev-ed.develop.my.site.com/ESWSalesforceTroopAIEx1769959200081/assets/js/bootstrap.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && typeof window.initEmbeddedMessaging === 'function') {
            window.initEmbeddedMessaging();
          }
        }}
      />
    </>
  )
}
