import Image from 'next/image';
import Hero from '@/app/components/home/Hero';
import N8nChatSection from '@/app/components/home/N8nChatSection';

export default function Home() {
  return (
    <>
      <Hero />
      
      <N8nChatSection />
    </>
  );
}
