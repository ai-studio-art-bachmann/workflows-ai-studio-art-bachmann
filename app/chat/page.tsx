import ChatWidget from "../components/chat/ChatWidget";

export default function ChatPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Työmaa-assistentti</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-2">
            Kasuta seda chat-tööriista, et suhelda tööplatsi assistendiga. Saad küsida infot projektide, 
            ajagraafikute kohta või käivitada automaatseid töövooge.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Ühendatud n8n töövooga: <code className="bg-gray-100 px-2 py-1 rounded text-xs">joosep.app.n8n.cloud/webhook-test</code>
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <ChatWidget />
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Proovi neid käsklusi:</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="p-2 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors">
              <span className="font-medium">Näita selle nädala ajakava</span> - Kuvab projekti ajakava jooksval nädalal
            </li>
            <li className="p-2 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors">
              <span className="font-medium">Ladu: Armatuur</span> - Kontrollib materjali laoseisu
            </li>
            <li className="p-2 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors">
              <span className="font-medium">Loo päevaaruanne</span> - Koostab ja saadab päevaaruande
            </li>
            <li className="p-2 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors">
              <span className="font-medium">Saabunud: 50x Põrandaplaat</span> - Registreerib materjali saabumise
            </li>
          </ul>
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Märkus arendajatele</h3>
          <p className="text-sm text-blue-700">
            See chat-liides on ühendatud n8n töövooga URL-il: 
            <code className="bg-white px-2 py-1 rounded mx-1 text-xs break-all">
              https://joosep.app.n8n.cloud/webhook/2e6d9caa-dde9-4d59-8a61-368fa1d89ab4
            </code>
            Kõik sõnumid saadetakse sellele webhookile töötlemiseks.
          </p>
        </div>
      </div>
    </div>
  );
}
