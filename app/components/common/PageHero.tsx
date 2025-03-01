import Image from 'next/image';

interface PageHeroProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, description, children }: PageHeroProps) => {
  return (
    <section className="relative text-white">
      <div className="absolute inset-0">
        <Image 
          src="/images/hero/Hero-Image.png" 
          alt={title} 
          fill 
          style={{ 
            objectFit: 'cover',
            objectPosition: 'left center'
          }}
          priority
        />
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.3) 100%)',
          zIndex: 1 
        }}></div>
      </div>
      
      <div className="container relative z-10 py-14 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          
          {description && (
            <p className="mb-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
