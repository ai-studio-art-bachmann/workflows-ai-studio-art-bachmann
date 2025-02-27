import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="bg-primary-600 text-white">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Valmiina tehostamaan rakennusyrityksesi toimintaa?</h2>
          
          <p className="mb-8 text-lg text-primary-100">
            Ota yhteyttä asiantuntijoihimme ja keskustellaan, miten tekoälyratkaisumme voivat auttaa juuri sinun yritystäsi.
          </p>
          
          <Link href="/yhteystiedot" className="btn bg-white text-primary-600 hover:bg-gray-100">
            Ota yhteyttä tänään
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
