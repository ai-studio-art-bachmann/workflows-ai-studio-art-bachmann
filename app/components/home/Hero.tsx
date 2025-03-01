import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative text-white">
      <div className="absolute inset-0">
        <Image 
          src="/images/hero/Hero-Image.png" 
          alt="Tekoäly rakentamisessa" 
          fill 
          style={{ 
            objectFit: 'cover',
            objectPosition: 'left center'
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
            Tekoälyratkaisut rakennusyrityksille
          </h1>
          
          <p className="mb-10 text-lg md:text-xl text-gray-200 max-w-2xl">
            Tehosta rakennusyrityksesi toimintaa innovatiivisilla tekoälyratkaisuilla ja automatisoiduilla järjestelmillä.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <Link href="/yhteystiedot" className="button-outline border-white text-white hover:bg-white/10 transition-colors px-4 py-2 rounded-md" style={{ fontSize: '1.5rem' }}>
              Tutustu palveluihin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
