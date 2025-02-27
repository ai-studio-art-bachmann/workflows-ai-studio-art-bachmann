'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ChatWidget from "../components/chat/ChatWidget";
import Link from "next/link";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!session) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-2xl font-bold mb-2">Tervetuloa, {session.user?.name}</h1>
        <p className="text-gray-600">Hallintapaneelisi on nyt käytettävissä. Käytä chat-työkalua työnkulkujen hallintaan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column - Project Status */}
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Projektien tilanne</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-medium">Kerrostalo Kalasatama</h3>
                <p className="text-sm text-gray-600">Aikataulu: Ajallaan</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <h3 className="font-medium">Toimistorakennus Ruoholahti</h3>
                <p className="text-sm text-gray-600">Aikataulu: 2 päivää jäljessä</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-medium">Rivitalo Espoo</h3>
                <p className="text-sm text-gray-600">Aikataulu: Suunnitteluvaiheessa</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Viimeisimmät raportit</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                <div>
                  <h3 className="font-medium">Päiväraportti - Kalasatama</h3>
                  <p className="text-sm text-gray-600">26.2.2025</p>
                </div>
                <Link href="#" className="text-blue-600 hover:underline">Avaa</Link>
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                <div>
                  <h3 className="font-medium">Turvallisuustarkastus</h3>
                  <p className="text-sm text-gray-600">24.2.2025</p>
                </div>
                <Link href="#" className="text-blue-600 hover:underline">Avaa</Link>
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                <div>
                  <h3 className="font-medium">Materiaaliluettelo - Ruoholahti</h3>
                  <p className="text-sm text-gray-600">22.2.2025</p>
                </div>
                <Link href="#" className="text-blue-600 hover:underline">Avaa</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Chat Widget and Quick Actions */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Pikatoiminnot</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium p-3 rounded text-sm">
                Luo päiväraportti
              </button>
              <button className="bg-green-100 hover:bg-green-200 text-green-800 font-medium p-3 rounded text-sm">
                Tarkista aikataulu
              </button>
              <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-medium p-3 rounded text-sm">
                Materiaalitilanne
              </button>
              <button className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium p-3 rounded text-sm">
                Lähetä ilmoitus
              </button>
            </div>
          </div>

          <ChatWidget />
        </div>
      </div>
    </div>
  );
}
