import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/app/components/common/PageHero";

export const metadata: Metadata = {
  title: "AI Agentit | AI Studio Art Bachmann",
  description: "Tutustu AI agenttien tulevaisuuden mahdollisuuksiin rakennusalalla. Valmistaudu mullistamaan yrityksesi toiminta älykkäillä avustajilla.",
  alternates: {
    canonical: '/palvelut',
  },
};

const services = [
  {
    id: 'tekoaly-rakentaminen',
    title: 'AI Agentit suunnittelussa',
    description: 'AI agentit mullistavat rakennussuunnittelun tarjoamalla reaaliaikaisia ehdotuksia, optimoimalla tilankäyttöä ja luomalla innovatiivisia ratkaisuja. Tutustu tulevaisuuden suunnittelutyökaluihin.',
    image: '/images/services/Android 14.png',
    link: '/palvelut/tekoaly-rakentaminen',
  },
  {
    id: 'ai-agentit',
    title: 'AI Agentit projektinhallinnassa',
    description: 'AI agentit toimivat älykkäinä projektipäällikköinä, jotka ennakoivat ongelmia, optimoivat aikatauluja ja varmistavat, että projektit valmistuvat ajallaan ja budjetissa. Tutustu tulevaisuuden projektinhallintaan.',
    image: '/images/services/Android 16.png',
    link: '/palvelut/ai-agentit',
  },
  {
    id: 'automatisoidut-jarjestelmat',
    title: 'AI Agentit tiedonhallinnassa',
    description: 'AI agentit keräävät, analysoivat ja visualisoivat dataa, tarjoten reaaliaikaista tietoa päätöksenteon tueksi. Ne oppivat jatkuvasti ja mukautuvat yrityksesi tarpeisiin. Tutustu tulevaisuuden tiedonhallintaan.',
    image: '/images/services/Android 17.png',
    link: '/palvelut/automatisoidut-jarjestelmat',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero 
        title="AI Agentit rakennusalalla"
        description="Tutustu AI agenttien tulevaisuuden mahdollisuuksiin ja siihen, miten ne tulevat mullistamaan rakennusalan toimintatavat lähivuosina. Valmistaudu tulevaisuuteen jo nyt."
      />

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12`}
              >
                <div className="md:w-1/2 relative h-[256px] md:h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
                  <p className="mb-6 text-gray-600 dark:text-gray-300">{service.description}</p>
                  <Link 
                    href={service.link} 
                    className="button inline-block self-start"
                  >
                    Lue lisää
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Miksi AI agentit ovat rakennusalan tulevaisuus?</h2>
            <p className="text-lg text-gray-600 mb-10">
              AI agentit ovat itsenäisiä tekoälypohjaisia avustajia, jotka oppivat, mukautuvat ja toimivat ihmisten rinnalla. 
              Ne eivät ole vain työkaluja, vaan älykkäitä kumppaneita, jotka ymmärtävät rakennusalan erityispiirteet.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Tehokkuus</h3>
                <p>AI agentit automatisoivat rutiinitehtäviä ja nopeuttavat prosesseja, säästäen aikaa ja resursseja.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Tarkkuus</h3>
                <p>AI agentit vähentävät inhimillisiä virheitä ja parantavat työn laatua jatkuvan oppimisen kautta.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Innovaatio</h3>
                <p>AI agentit tuovat uusia näkökulmia ja ratkaisuja, joita perinteiset menetelmät eivät tarjoa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Kiinnostaako AI agenttien tulevaisuus?</h2>
            <p className="mb-8 text-lg text-primary-100">
              Ota yhteyttä ja keskustellaan, miten AI agentit tulevat muuttamaan rakennusalaa ja miten voit valmistautua tähän muutokseen jo nyt.
            </p>
            <Link href="/yhteystiedot" className="button bg-white text-primary-600 hover:bg-gray-100">
              Ota yhteyttä
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
