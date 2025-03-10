'use client';

import React from 'react';
import Image from 'next/image';

const AIFeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tekoälyagenttien ominaisuuksien esittely</h2>
          <p className="text-lg text-gray-700">
            Tutustu, miten tekoälyagentit voivat auttaa tehtävissä kuten aikataulutus, resurssien kohdentaminen ja tietojen analysointi rakennusprojekteissa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Aikataulun optimointi */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <Image 
                  src="/images/icons/calendar-icon.svg" 
                  alt="Aikataulu" 
                  width={40} 
                  height={40}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%231a56db" stroke-width="2"><path d="M19 4H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/><path d="M7 10h10v2H7zm0 4h5v2H7z"/></svg>';
                  }}
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Aikataulun optimointi</h3>
            <p className="text-gray-600">
              Älykäs aikataulutus, joka mukautuu muuttuviin olosuhteisiin ja resurssien saatavuuteen.
            </p>
          </div>

          {/* Resurssien kohdentaminen */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <Image 
                  src="/images/icons/chart-icon.svg" 
                  alt="Resurssit" 
                  width={40} 
                  height={40}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2322c55e" stroke-width="2"><path d="M8 18h2V6H8v12zm6-12v12h2V6h-2z"/><path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zm0-14h16v12H4V6z"/></svg>';
                  }}
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Resurssien kohdentaminen</h3>
            <p className="text-gray-600">
              Työvoiman, laitteiden ja materiaalien optimaalinen jakaminen useiden projektien kesken.
            </p>
          </div>

          {/* Tietojen analysointi */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
                <Image 
                  src="/images/icons/analytics-icon.svg" 
                  alt="Analytiikka" 
                  width={40} 
                  height={40}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%238b5cf6" stroke-width="2"><path d="M12 20V10M18 20V4M6 20v-4"/><path d="M4 20h16"/></svg>';
                  }}
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Tietojen analysointi</h3>
            <p className="text-gray-600">
              Edistynyt analytiikka trendien, riskien ja mahdollisuuksien tunnistamiseksi projektidatasta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;
