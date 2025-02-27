import { Metadata } from "next";
import Hero from "./components/home/Hero";
import ServicesOverview from "./components/home/ServicesOverview";
import CTASection from "./components/home/CTASection";
import VoiceflowChat from "./components/home/VoiceflowChat";

export const metadata: Metadata = {
  title: "AI Studio Art Bachmann | Tekoälyratkaisut rakennusyrityksille",
  description: "Innovatiivisia tekoälyratkaisuja ja automatisoituja järjestelmiä rakennusyrityksille. Tehosta toimintaasi AI-agenteilla ja älykkäillä järjestelmillä.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Kysy tekoälyratkaisuistamme</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Keskustele chatbottimme kanssa ja saa vastauksia kysymyksiisi tekoälyratkaisuistamme.
            </p>
          </div>
          <VoiceflowChat />
        </div>
      </section>
      <CTASection />
    </>
  );
}
