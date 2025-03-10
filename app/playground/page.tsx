'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ChatWidget from '../components/chat/ChatWidget';

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
              Leikkikenttä
            </h1>
            
            <p className="mb-10 text-lg md:text-xl text-gray-200 max-w-2xl" style={{ fontSize: 'calc(1.125rem + 0.3rem)' }}>
              Kokeile erilaisia tekoälyagentteja ja löydä innovatiivisia ratkaisuja rakennusalan hallintaan.
            </p>
          </div>
        </div>
      </section>

      {/* Työmaa-assistentti Chat Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Työmaa-assistentti</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl">
              Testaa tekoälyagentteja käytännössä. Klikkaa esimerkkityökaluja tai anna projektitiedot, niin näet välittömästi, kuinka AI-agentit automatisoivat projektinhallintaa, aikataulutusta ja materiaalien hallintaa juuri sinun tarpeisiisi.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <ChatWidget />
              </div>
              
              <div className="lg:w-1/3">
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-4">Kokeile näitä komentoja:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="p-3 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <span className="font-medium">Näytä tämän viikon aikataulu</span>
                    </li>
                    <li className="p-3 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <span className="font-medium">Varasto: Raudoitus</span>
                    </li>
                    <li className="p-3 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <span className="font-medium">Luo päiväraportti</span>
                    </li>
                    <li className="p-3 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <span className="font-medium">Saapunut: 50x Lattialaatat</span>
                    </li>
                    <li className="p-3 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <span className="font-medium">Optimoi aikataulu: Linjasaneeraus, 500m², 60 päivää, 5 työntekijää</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">AI-agenttien ominaisuudet</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Tekoälyagentit tarjoavat monipuolisia työkaluja rakennusalan ammattilaisille. Tutustu ominaisuuksiin ja kokeile niitä käytännössä.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Aikataulun optimointi</h3>
                <p className="text-gray-600">
                  Älykäs aikataulutus, joka mukautuu muuttuviin olosuhteisiin ja resurssien saatavuuteen.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Resurssien kohdentaminen</h3>
                <p className="text-gray-600">
                  Työvoiman, laitteiden ja materiaalien optimaalinen jakaminen useiden projektien kesken.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Tietojen analysointi</h3>
                <p className="text-gray-600">
                  Edistynyt analytiikka trendien, riskien ja mahdollisuuksien tunnistamiseksi projektidatasta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
