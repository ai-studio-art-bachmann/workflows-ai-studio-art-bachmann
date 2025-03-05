import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Agentit suunnittelussa | AI Studio Art Bachmann",
  description: "Tutustu miten AI agentit mullistavat rakennussuunnittelun tulevaisuudessa. Reaaliaikaiset ehdotukset, optimoitu tilankäyttö ja innovatiiviset ratkaisut.",
  alternates: {
    canonical: '/palvelut/tekoaly-rakentaminen',
  },
};

const features = [
  {
    title: "Reaaliaikaiset suunnitteluehdotukset",
    description: "AI agentit analysoivat suunnittelun aikana tehtyjä valintoja ja ehdottavat reaaliajassa parannuksia, jotka optimoivat tilankäyttöä ja energiatehokkuutta.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
  },
  {
    title: "Automaattinen määrälaskenta",
    description: "AI agentit laskevat automaattisesti materiaalimenekit ja kustannukset suunnitelmien perusteella, päivittäen tietoja reaaliajassa suunnitelmien muuttuessa.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
  },
  {
    title: "Säädösten ja normien tarkistus",
    description: "AI agentit varmistavat automaattisesti, että suunnitelmat noudattavat viimeisimpiä rakennusmääräyksiä ja standardeja, huomauttaen mahdollisista ongelmista.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
  },
  {
    title: "Yhteistyön tehostaminen",
    description: "AI agentit koordinoivat eri suunnittelualojen yhteistyötä, tunnistaen ristiriitoja ja ehdottaen ratkaisuja jo suunnitteluvaiheessa.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
  },
];

const caseStudies = [
  {
    title: "Tulevaisuuden toimistorakennus",
    description: "AI agentit auttoivat suunnittelemaan toimistorakennuksen, joka optimoi tilankäytön, energiatehokkuuden ja työntekijöiden hyvinvoinnin, säästäen 25% suunnitteluajassa.",
  },
  {
    title: "Älykäs asuinalue",
    description: "AI agentit mahdollistivat kokonaisen asuinalueen suunnittelun, joka maksimoi luonnonvalon, minimoi energiankulutuksen ja loi optimaalisen yhteisöllisen ympäristön.",
  },
];

export default function AIConstructionPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">AI Agentit suunnittelussa</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Tutustu miten AI agentit tulevat mullistamaan rakennussuunnittelun lähitulevaisuudessa. Reaaliaikaiset ehdotukset, optimoitu tilankäyttö ja innovatiiviset ratkaisut ovat vasta alkua.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="mb-6 text-center">Miten AI agentit mullistavat suunnittelun?</h2>
            <p className="text-gray-600 dark:text-gray-300">
              AI agentit eivät ole vain passiivisia työkaluja, vaan aktiivisia suunnittelukumppaneita, jotka oppivat, mukautuvat ja tekevät ehdotuksia. Ne analysoivat valtavia määriä dataa aiemmista projekteista, rakennusmääräyksistä ja parhaista käytännöistä, tarjoten ennennäkemättömiä mahdollisuuksia innovaatioihin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="mb-6 text-center">Tulevaisuuden mahdollisuudet</h2>
            <p className="text-gray-600 dark:text-gray-300">
              AI agenttien kehitys on vasta alussa, mutta jo nyt voimme nähdä niiden potentiaalin mullistaa rakennussuunnittelun tulevaisuus. Tässä muutamia esimerkkejä siitä, mitä tulevaisuus tuo tullessaan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
                <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{caseStudy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Kiinnostaako AI agenttien tulevaisuus?</h2>
            <p className="mb-8 text-lg text-primary-100">
              Ota yhteyttä ja keskustellaan, miten AI agentit tulevat muuttamaan rakennussuunnittelua ja miten voit valmistautua tähän muutokseen jo nyt.
            </p>
            <Link href="/yhteystiedot" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Ota yhteyttä
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
