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
              Tutustu tekoälyagenttien ominaisuuksiin
            </h1>
            
            <p className="mb-10 text-lg md:text-xl text-gray-200 max-w-2xl" style={{ fontSize: 'calc(1.125rem + 0.3rem)' }}>
              Kokeile erilaisia tekoälyagentteja ja löydä innovatiivisia ratkaisuja rakennusalan hallintaan.
            </p>
          </div>
        </div>
      </section>

      {/* Työmaa-assistentti Chat Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Työmaa-assistentti</h2>
          <p className="text-lg text-gray-600 mb-8">
            Käytä tätä chat-työkalua kommunikoidaksesi työmaasi assistentin kanssa. Voit kysyä tietoja projekteista, aikatauluista tai käynnistää automaattisia työnkulkuja.
          </p>
          
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500 max-w-2xl mx-auto text-center mb-8">
              Yhdistetty n8n-työnkulkuun: <code className="bg-gray-100 px-2 py-1 rounded text-xs">art-bachmann1-agent.app.n8n.cloud/webhook-test</code>
            </p>
            
            <div className="flex justify-center mb-12">
              <ChatWidget />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Kokeile näitä komentoja:</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="p-2 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors">
                  <span className="font-medium">Näytä tämän viikon aikataulu</span> - Näyttää projektin aikataulun kuluvalla viikolla
                </li>
                <li className="p-2 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors">
                  <span className="font-medium">Varasto: Raudoitus</span> - Tarkistaa materiaalin varastotilanteen
                </li>
                <li className="p-2 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors">
                  <span className="font-medium">Luo päiväraportti</span> - Laatii ja lähettää päiväraportin
                </li>
                <li className="p-2 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors">
                  <span className="font-medium">Saapunut: 50x Lattialaatat</span> - Rekisteröi materiaalin saapumisen
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 py-12">
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
      </div>
    </div>
  );
}
