import Image from 'next/image';
import Hero from '@/app/components/home/Hero';
import N8nChatSection from '@/app/components/home/N8nChatSection';

export default function Home() {
  return (
    <>
      <Hero />
      
      <N8nChatSection />
      
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Agentit - Tulevaisuuden tyÃ¶kalut rakennusalalle</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tutustu AI agenttien tarjoamiin mahdollisuuksiin ja siihen, miten ne voivat mullistaa rakennusalan toimintatavat lÃ¤hitulevaisuudessa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-4">AI Agentit suunnittelussa</h2>
              <p className="mb-4">
                Tutustu miten AI agentit voivat avustaa suunnitteluprosesseissa, optimoida tilankÃ¤yttÃ¶Ã¤ ja luoda innovatiivisia ratkaisuja rakennushankkeisiin.
              </p>
              <a href="/palvelut/tekoaly-rakentaminen" className="text-primary-900 font-medium hover:underline">Lue lisÃ¤Ã¤ â†’</a>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Automaatio ja tyÃ¶nkulut</h2>
              <p className="mb-4">
                Tutustu miten AI agentit automatisoivat toistuvia prosesseja, tehostavat tyÃ¶nkulkuja ja vapauttavat tyÃ¶ntekijÃ¶iden aikaa arvokkaampiin tehtÃ¤viin.
              </p>
              <a href="/palvelut" className="text-primary-900 font-medium hover:underline">Lue lisÃ¤Ã¤ â†’</a>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Tiedonhallinta ja analyysi</h2>
              <p className="mb-4">
                Tutustu miten AI agentit kerÃ¤Ã¤vÃ¤t, analysoivat ja visualisoivat dataa, tarjoten reaaliaikaista tietoa pÃ¤Ã¤tÃ¶ksenteon tueksi rakennusprojekteissa.
              </p>
              <a href="/yhteystiedot" className="text-primary-900 font-medium hover:underline">Kysy lisÃ¤Ã¤ â†’</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Miksi AI agentit ovat rakennusalan tulevaisuus?</h2>
            <p className="text-lg text-gray-600 mb-10">
              AI agentit ovat itsenÃ¤isiÃ¤ tekoÃ¤lypohjaisia avustajia, jotka oppivat, mukautuvat ja toimivat ihmisten rinnalla. 
              Ne eivÃ¤t ole vain tyÃ¶kaluja, vaan Ã¤lykkÃ¤itÃ¤ kumppaneita, jotka ymmÃ¤rtÃ¤vÃ¤t rakennusalan erityispiirteet.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Tehokkuus</h3>
                <p>AI agentit automatisoivat rutiinitehtÃ¤viÃ¤ ja nopeuttavat prosesseja, sÃ¤Ã¤stÃ¤en aikaa ja resursseja.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Tarkkuus</h3>
                <p>AI agentit vÃ¤hentÃ¤vÃ¤t inhimillisiÃ¤ virheitÃ¤ ja parantavat tyÃ¶n laatua jatkuvan oppimisen kautta.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Innovaatio</h3>
                <p>AI agentit tuovat uusia nÃ¤kÃ¶kulmia ja ratkaisuja, joita perinteiset menetelmÃ¤t eivÃ¤t tarjoa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
