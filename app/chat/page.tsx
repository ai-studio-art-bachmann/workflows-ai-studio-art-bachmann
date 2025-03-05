import ChatWidget from "../components/chat/ChatWidget";
import PageHero from "@/app/components/common/PageHero";

export default function ChatPage() {
  return (
    <>
      <PageHero 
        title="Työmaa-assistentti"
        description="Käytä tätä chat-työkalua kommunikoidaksesi työmaasi assistentin kanssa. Voit kysyä tietoja projekteista, aikatauluista tai käynnistää automaattisia työnkulkuja."
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto text-center mb-8">
            Yhdistetty n8n-työnkulkuun: <code className="bg-gray-100 px-2 py-1 rounded text-xs">art-bachmann1-agent.app.n8n.cloud/webhook-test</code>
          </p>
          
          <div className="flex justify-center mb-12">
            <ChatWidget />
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Kokeile näitä komentoja:</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="p-2 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors">
                <span className="font-medium">Näytä tämän viikon aikataulu</span> - Näyttää projektin aikataulun kuluvalla viikolla
              </li>
              <li className="p-2 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors">
                <span className="font-medium">Varasto: Raudoitus</span> - Tarkistaa materiaalin varastotilanteen
              </li>
              <li className="p-2 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors">
                <span className="font-medium">Luo päiväraportti</span> - Laatii ja lähettää päiväraportin
              </li>
              <li className="p-2 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors">
                <span className="font-medium">Saapunut: 50x Lattialaatat</span> - Rekisteröi materiaalin saapumisen
              </li>
            </ul>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Huomautus kehittäjille</h3>
            <p className="text-sm text-blue-700">
              Tämä chat-käyttöliittymä on yhdistetty n8n-työnkulkuun URL-osoitteessa: 
              <code className="bg-white px-2 py-1 rounded mx-1 text-xs break-all">
                https://art-bachmann1-agent.app.n8n.cloud/webhook-test/chat-webhook
              </code>
              Kaikki viestit lähetetään tähän webhookiin käsiteltäväksi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
