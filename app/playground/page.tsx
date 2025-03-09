import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Playground() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white">
        <div className="absolute inset-0">
          <Image 
            src="/images/hero/Hero-Image.png" 
            alt="Tekoälyagenttien ominaisuudet" 
            fill 
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
            priority
          />
          <div className="absolute inset-0" style={{ 
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.3) 100%)',
            zIndex: 1 
          }}></div>
        </div>
        
        <div className="container relative z-10 py-14 md:py-16">
          <div className="max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Tutustu tekoälyagenttien ominaisuuksiin
            </h1>
            
            <p className="mb-10 text-lg md:text-xl text-gray-200 max-w-2xl" style={{ fontSize: 'calc(1.125rem + 0.3rem)' }}>
              Kokeile erilaisia tekoälyagentteja ja löydä innovatiivisia ratkaisuja rakennusalan hallintaan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 py-12">
        {/* Interactive AI Agent Demonstrations */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Interaktiiviset tekoälyagenttien esittelyt</h2>
            <p className="text-lg text-gray-600 mb-8">
              Kokeile valmiiksi määritettyjä tekoälyagentteja ja koe niiden toiminnallisuudet käytännössä.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Projektinhallinta-agentti</h3>
                <p className="text-gray-600 mb-4">
                  Auttaa tehtävien aikataulutuksessa, resurssien kohdentamisessa ja rakennusprojektien edistymisen seurannassa.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Kokeile demoa
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Materiaalilaskenta-agentti</h3>
                <p className="text-gray-600 mb-4">
                  Laskee materiaalitarpeet projektin määritysten perusteella ja optimoi tilaukset.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Kokeile demoa
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mukauta työnkulkusi */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Mukauta työnkulkusi</h2>
            <p className="text-lg text-gray-600 mb-8">
              Valitse olemassa olevista n8n-työnkuluista ja räätälöi ne yrityksesi tarpeisiin sopiviksi syöttämällä asianmukaiset parametrit.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Työnkulun mukauttaminen</h3>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Valitse työnkulkumalli:</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Projektin aikajanan automatisointi</option>
                  <option>Resurssien kohdentamisen optimointi</option>
                  <option>Asiakasviestinnän työnkulku</option>
                  <option>Työmaaturvallisuuden seuranta</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Yrityksen nimi:</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Syötä yrityksesi nimi" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Projektityyppi:</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Asuinrakentaminen</option>
                  <option>Liikerakentaminen</option>
                  <option>Infrastruktuurihanke</option>
                  <option>Saneeraus</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Luo mukautettu työnkulku
              </button>
            </div>
          </div>
        </section>
        
        {/* Real-Time Chat Interface */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Reaaliaikainen chat-käyttöliittymä</h2>
            <p className="text-lg text-gray-600 mb-8">
              Käytä integroitua chat-käyttöliittymäämme kommunikoidaksesi suoraan tekoälyagenttien kanssa, simuloiden alustoja kuten WhatsApp, Telegram, Slack ja Discord.
            </p>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-800 text-white p-4">
                <h3 className="font-semibold">Rakennusalan avustaja-botti</h3>
              </div>
              <div className="h-64 p-4 bg-gray-100 overflow-y-auto">
                <div className="mb-3 text-right">
                  <div className="inline-block bg-blue-600 text-white p-3 rounded-lg">
                    Miten voin optimoida rakennusaikatauluani?
                  </div>
                </div>
                <div className="mb-3">
                  <div className="inline-block bg-white p-3 rounded-lg shadow">
                    Voin auttaa aikataulun optimoinnissa! Ole hyvä ja anna seuraavat tiedot:
                    <br />1. Projektin aloituspäivä
                    <br />2. Odotettu valmistumispäivä
                    <br />3. Tärkeimmät virstanpylväät
                    <br />4. Käytettävissä olevat resurssit
                  </div>
                </div>
              </div>
              <div className="p-4 border-t flex">
                <input 
                  type="text" 
                  className="flex-1 p-2 border border-gray-300 rounded-l" 
                  placeholder="Kirjoita viestisi..." 
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r">Lähetä</button>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Agent Capabilities Showcase */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Tekoälyagenttien ominaisuuksien esittely</h2>
            <p className="text-lg text-gray-600 mb-8">
              Tutustu, miten tekoälyagentit voivat auttaa tehtävissä kuten aikataulutus, resurssien kohdentaminen ja tietojen analysointi rakennusprojekteissa.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Aikataulun optimointi</h3>
                <p className="text-gray-600">
                  Älykäs aikataulutus, joka mukautuu muuttuviin olosuhteisiin ja resurssien saatavuuteen.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Resurssien kohdentaminen</h3>
                <p className="text-gray-600">
                  Työvoiman, laitteiden ja materiaalien optimaalinen jakaminen useiden projektien kesken.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tietojen analysointi</h3>
                <p className="text-gray-600">
                  Edistynyt analytiikka trendien, riskien ja mahdollisuuksien tunnistamiseksi projektidatasta.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Käyttäjäpalaute ja tuki */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Käyttäjäpalaute ja tuki</h2>
            <p className="text-lg text-gray-600 mb-8">
              Anna palautetta kokemuksestasi ja hyödynnä tukipalveluja maksimoidaksesi tekoälyintegraatioiden hyödyt.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Jaa kokemuksesi</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Miten arvioisit kokemustasi?</label>
                    <div className="flex space-x-4">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button 
                          key={rating}
                          type="button"
                          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-100"
                        >
                          {rating}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Palautteesi:</label>
                    <textarea 
                      className="w-full p-2 border border-gray-300 rounded" 
                      rows={4}
                      placeholder="Jaa ajatuksesi tekoälyagenttikokemuksesta..."
                    ></textarea>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Lähetä palaute
                  </button>
                </form>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Tukimateriaalit</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Tekoälyagenttien dokumentaatio
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Video-oppaat
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      UKK
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Ota yhteyttä tukeen
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Tarvitsetko henkilökohtaista apua?</h4>
                  <p className="text-blue-700 mb-3">
                    Varaa konsultaatio tekoälyintegraation asiantuntijoiltamme keskustellaksesi erityistarpeistasi.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Varaa konsultaatio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
