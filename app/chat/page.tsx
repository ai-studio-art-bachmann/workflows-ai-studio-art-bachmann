import ChatWidget from "../components/chat/ChatWidget";

export default function ChatPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Työmaa-assistentti</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Käytä tätä chat-työkalua kommunikoidaksesi työmaa-assistentin kanssa. Voit kysyä tietoja projekteista, 
            aikatauluista, tai käynnistää automaattisia työnkulkuja.
          </p>
        </div>
        
        <div className="flex justify-center">
          <ChatWidget />
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Kokeile näitä komentoja:</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="p-2 bg-white rounded border border-gray-200">
              <span className="font-medium">Näytä aikataulu tälle viikolle</span> - Näyttää projektin aikataulun kuluvalle viikolle
            </li>
            <li className="p-2 bg-white rounded border border-gray-200">
              <span className="font-medium">Varasto: Betoniteräs</span> - Tarkistaa materiaalin varastotilanteen
            </li>
            <li className="p-2 bg-white rounded border border-gray-200">
              <span className="font-medium">Luo päiväraportti</span> - Luo ja lähettää päiväraportin
            </li>
            <li className="p-2 bg-white rounded border border-gray-200">
              <span className="font-medium">Saapunut: 50x Lattialaatta</span> - Kirjaa materiaalin saapumisen
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
