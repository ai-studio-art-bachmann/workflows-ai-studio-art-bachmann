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
            objectPosition: 'right center'
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
          
          <p className="mb-10 text-lg md:text-xl text-gray-200 max-w-2xl" style={{ fontSize: 'calc(1.125rem + 0.3rem)' }}>
            Tutustu AI agenttien mullistaviin mahdollisuuksiin rakennusalalla. Valmistaudu tulevaisuuteen, jossa älykkäät avustajat tekevät työstäsi tehokkaampaa ja mielekkäämpää.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <Link href="/palvelut" className="button-outline border-white text-white hover:text-black hover:bg-[#929A97] transition-colors px-4 py-2 rounded-md" style={{ fontSize: '1.5rem' }}>
              Tutustu AI agentteihin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
