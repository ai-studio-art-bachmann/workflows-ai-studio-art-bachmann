import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    id: 'tekoaly-rakentaminen',
    title: 'Tekoäly rakentamisessa',
    description: 'Hyödynnä tekoälyn mahdollisuudet rakennusprojekteissa. Optimoi prosesseja, ennusta kustannuksia ja paranna laatua.',
    icon: '/images/ai-construction.svg',
    link: '/palvelut/tekoaly-rakentaminen',
  },
  {
    id: 'ai-agentit',
    title: 'AI-agentit rakennusyrityksille',
    description: 'Automatisoi rutiinitehtäviä ja vapauta henkilöstösi resurssit tuottavampaan työhön AI-agenttien avulla.',
    icon: '/images/ai-agents.svg',
    link: '/palvelut/ai-agentit',
  },
  {
    id: 'automatisoidut-jarjestelmat',
    title: 'Automatisoidut järjestelmät',
    description: 'Tehosta toimintaasi älykkäillä automatisoiduilla järjestelmillä, jotka sopeutuvat yrityksesi tarpeisiin.',
    icon: '/images/automated-systems.svg',
    link: '/palvelut/automatisoidut-jarjestelmat',
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Palvelumme</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Tarjoamme kattavan valikoiman tekoälyratkaisuja, jotka on suunniteltu erityisesti rakennusalan tarpeisiin.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card transition-transform hover:scale-105">
              <div className="p-6">
                <div className="w-12 h-12 mb-4 text-primary-600">
                  {/* Fallback icon if SVG is not available */}
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{service.description}</p>
                
                <Link href={service.link} className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                  Lue lisää
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/palvelut" className="btn btn-primary">
            Kaikki palvelut
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
