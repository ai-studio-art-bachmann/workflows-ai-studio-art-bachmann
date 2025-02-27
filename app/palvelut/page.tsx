import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Palvelut | AI Studio Art Bachmann",
  description: "Tutustu AI Studio Art Bachmannin tekoälyratkaisuihin ja automatisoituihin järjestelmiin rakennusyrityksille.",
  alternates: {
    canonical: '/palvelut',
  },
};

const services = [
  {
    id: 'tekoaly-rakentaminen',
    title: 'Tekoäly rakentamisessa',
    description: 'Hyödynnä tekoälyn mahdollisuudet rakennusprojekteissa. Optimoi prosesseja, ennusta kustannuksia ja paranna laatua.',
    image: '/images/tekoaly-rakentaminen.jpg',
    link: '/palvelut/tekoaly-rakentaminen',
  },
  {
    id: 'ai-agentit',
    title: 'AI-agentit rakennusyrityksille',
    description: 'Automatisoi rutiinitehtäviä ja vapauta henkilöstösi resurssit tuottavampaan työhön AI-agenttien avulla.',
    image: '/images/ai-agentit.jpg',
    link: '/palvelut/ai-agentit',
  },
  {
    id: 'automatisoidut-jarjestelmat',
    title: 'Automatisoidut järjestelmät',
    description: 'Tehosta toimintaasi älykkäillä automatisoiduilla järjestelmillä, jotka sopeutuvat yrityksesi tarpeisiin.',
    image: '/images/automatisoidut-jarjestelmat.jpg',
    link: '/palvelut/automatisoidut-jarjestelmat',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">Palvelumme</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Tarjoamme innovatiivisia tekoälyratkaisuja ja automatisoituja järjestelmiä, jotka on suunniteltu erityisesti rakennusalan tarpeisiin.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12`}
              >
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-30"></div>
                  <div className="relative h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                </div>
                
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
                  <p className="mb-6 text-gray-600 dark:text-gray-300">{service.description}</p>
                  <Link 
                    href={service.link} 
                    className="btn btn-primary inline-block self-start"
                  >
                    Lue lisää
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Tarvitsetko räätälöityjä tekoälyratkaisuja?</h2>
            <p className="mb-8 text-lg text-primary-100">
              Ota yhteyttä asiantuntijoihimme ja keskustellaan, miten voimme auttaa juuri sinun yritystäsi.
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
