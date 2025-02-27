import Link from "next/link";
import Hero from "./components/home/Hero";
import ServicesOverview from "./components/home/ServicesOverview";
import CTASection from "./components/home/CTASection";
import VoiceflowChat from "./components/home/VoiceflowChat";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Työmaa-assistentti</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
              Proovi meie tööplatsi assistenti, mis aitab sul hallata projekte ja automatiseerida töövooge.
            </p>
            
            <Link 
              href="/chat"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all inline-block"
            >
              Proovi chat-assistenti
            </Link>
          </div>
          
          {/* Demo chat widget */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-blue-50 p-4 rounded-lg mb-8 text-center">
              <p className="text-blue-700 font-medium">
                Demo versioon - täisfunktsionaalsuse jaoks mine <Link href="/chat" className="text-blue-600 underline">chat lehele</Link>
              </p>
            </div>
            <VoiceflowChat />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
