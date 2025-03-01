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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Tekoäly rakentamisessa</h2>
              <p className="mb-4">
                Hyödynnä tekoälyn tarjoamat mahdollisuudet rakennusprojekteissa. Automatisoi työtehtäviä ja paranna tehokkuutta.
              </p>
              <a href="/palvelut/tekoaly-rakentaminen" className="text-primary-900 font-medium hover:underline">Lue lisää →</a>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Automaatio ja prosessit</h2>
              <p className="mb-4">
                Tehosta yrityksesi toimintaa automatisoimalla toistuvia prosesseja. Säästä aikaa ja resursseja älykkäillä ratkaisuilla.
              </p>
              <a href="/palvelut" className="text-primary-900 font-medium hover:underline">Lue lisää →</a>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Konsultointi</h2>
              <p className="mb-4">
                Asiantunteva konsultointimme auttaa sinua löytämään parhaat tekoälyratkaisut juuri sinun yrityksesi tarpeisiin.
              </p>
              <a href="/yhteystiedot" className="text-primary-900 font-medium hover:underline">Ota yhteyttä →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
