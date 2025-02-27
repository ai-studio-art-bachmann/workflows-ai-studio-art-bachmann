import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <Image 
          src="/images/hero-background.jpg" 
          alt="Tekoäly rakentamisessa" 
          fill 
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Tekoälyratkaisut rakennusyrityksille
          </h1>
          
          <p className="mb-8 text-lg md:text-xl text-gray-200">
            Tehosta rakennusyrityksesi toimintaa innovatiivisilla tekoälyratkaisuilla ja automatisoiduilla järjestelmillä. Ota AI-agentit käyttöösi ja nosta liiketoimintasi uudelle tasolle.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/palvelut" className="btn btn-accent">
              Tutustu palveluihin
            </Link>
            <Link href="/yhteystiedot" className="btn bg-white text-primary-900 hover:bg-gray-100">
              Ota yhteyttä
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
