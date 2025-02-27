import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yhteystiedot | AI Studio Art Bachmann",
  description: "Ota yhteyttä AI Studio Art Bachmanniin. Vastaamme mielellämme kysymyksiisi tekoälyratkaisuista ja automatisoiduista järjestelmistä.",
  alternates: {
    canonical: '/yhteystiedot',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">Yhteystiedot</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Ota yhteyttä meihin ja keskustellaan, miten voimme auttaa rakennusyritystäsi hyödyntämään tekoälyn mahdollisuuksia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Ota yhteyttä</h2>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                Täytä lomake, niin otamme sinuun yhteyttä mahdollisimman pian. Voit myös soittaa tai lähettää sähköpostia suoraan alla oleviin yhteystietoihin.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Yhteystietomme</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <div>
                      <p className="font-medium">Puhelin</p>
                      <p className="text-gray-600 dark:text-gray-300">+358 50 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                      <p className="font-medium">Sähköposti</p>
                      <p className="text-gray-600 dark:text-gray-300">info@aistudioart.fi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <div>
                      <p className="font-medium">Osoite</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Tekoälykatu 123<br />
                        00100 Helsinki
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Toimistoajat</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Maanantai - Perjantai: 9:00 - 17:00<br />
                  Lauantai - Sunnuntai: Suljettu
                </p>
              </div>
            </div>
            
            <div>
              <form className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg">
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 font-medium">Nimi</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white" 
                    placeholder="Etunimi Sukunimi"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium">Sähköposti</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white" 
                    placeholder="esimerkki@yritys.fi"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block mb-2 font-medium">Puhelinnumero</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white" 
                    placeholder="+358 50 123 4567"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block mb-2 font-medium">Yritys</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white" 
                    placeholder="Yrityksesi nimi"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">Viesti</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white" 
                    placeholder="Kerro lyhyesti, miten voimme auttaa sinua"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-full"
                >
                  Lähetä viesti
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
