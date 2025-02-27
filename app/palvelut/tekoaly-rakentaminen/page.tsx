import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tekoäly rakentamisessa | AI Studio Art Bachmann",
  description: "Hyödynnä tekoälyn mahdollisuudet rakennusprojekteissa. Optimoi prosesseja, ennusta kustannuksia ja paranna laatua.",
  alternates: {
    canonical: '/palvelut/tekoaly-rakentaminen',
  },
};

const features = [
  {
    title: "Kustannusten optimointi",
    description: "Tekoäly analysoi aiempia projekteja ja ennustaa tulevia kustannuksia tarkemmin, auttaen välttämään ylityksiä.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
  },
  {
    title: "Aikataulujen hallinta",
    description: "Tekoäly optimoi projektiaikatauluja huomioiden resurssien saatavuuden, sääolosuhteet ja muut muuttujat.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
  },
  {
    title: "Laadunvalvonta",
    description: "Tekoäly tunnistaa poikkeamia ja laatuongelmia reaaliajassa kuvantunnistuksen ja sensoridatan avulla.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
  },
  {
    title: "Turvallisuuden parantaminen",
    description: "Tekoäly valvoo työmaata ja tunnistaa turvallisuusriskejä ennen onnettomuuksien tapahtumista.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
  },
];

const caseStudies = [
  {
    title: "Kerrostalohankkeen aikatauluoptimointi",
    description: "Tekoälyn avulla optimoitu aikataulu vähensi projektin kestoa 15% ja säästi 200 000€ kustannuksissa.",
  },
  {
    title: "Laadunvalvonta infrastruktuuriprojektissa",
    description: "Tekoäly tunnisti betonivaluissa laatuongelmia, jotka olisivat myöhemmin aiheuttaneet merkittäviä korjauskustannuksia.",
  },
];

export default function AIConstructionPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">Tekoäly rakentamisessa</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Hyödynnä tekoälyn mahdollisuudet rakennusprojekteissa. Optimoi prosesseja, ennusta kustannuksia ja paranna laatua.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="mb-6 text-center">Miten tekoäly muuttaa rakennusalaa?</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Tekoäly on mullistamassa rakennusalaa tarjoamalla ennennäkemättömiä mahdollisuuksia tehostaa projektien suunnittelua, toteutusta ja valvontaa. Tekoälyalgoritmit pystyvät analysoimaan valtavia määriä dataa ja tekemään ennusteita, jotka auttavat välttämään ongelmia ennen niiden syntymistä.
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
            <h2 className="mb-6 text-center">Esimerkkitapauksia</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Olemme auttaneet useita rakennusalan yrityksiä hyödyntämään tekoälyä projekteissaan. Tässä muutamia esimerkkejä.
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
            <h2 className="mb-6">Kiinnostuitko tekoälyn mahdollisuuksista?</h2>
            <p className="mb-8 text-lg text-primary-100">
              Ota yhteyttä asiantuntijoihimme ja keskustellaan, miten tekoäly voi auttaa juuri sinun rakennusprojekteissasi.
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
