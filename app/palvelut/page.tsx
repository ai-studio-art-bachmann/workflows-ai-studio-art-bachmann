import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/app/components/common/PageHero";

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
    image: '/images/services/Android 12.png',
    link: '/palvelut/tekoaly-rakentaminen',
  },
  {
    id: 'ai-agentit',
    title: 'AI-agentit rakennusyrityksille',
    description: 'Automatisoi rutiinitehtäviä ja vapauta henkilöstösi resurssit tuottavampaan työhön AI-agenttien avulla.',
    image: '/images/services/Android 13.png',
    link: '/palvelut/ai-agentit',
  },
  {
    id: 'automatisoidut-jarjestelmat',
    title: 'Automatisoidut järjestelmät',
    description: 'Tehosta toimintaasi älykkäillä automatisoiduilla järjestelmillä, jotka sopeutuvat yrityksesi tarpeisiin.',
    image: '/images/services/Android 2.png',
    link: '/palvelut/automatisoidut-jarjestelmat',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero 
        title="Palvelumme"
        description="Tarjoamme innovatiivisia tekoälyratkaisuja ja automatisoituja järjestelmiä, jotka on suunniteltu erityisesti rakennusalan tarpeisiin."
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

      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Tarvitsetko räätälöityjä tekoälyratkaisuja?</h2>
            <p className="mb-8 text-lg text-primary-100">
              Ota yhteyttä asiantuntijoihimme ja keskustellaan, miten voimme auttaa juuri sinun yritystäsi.
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
