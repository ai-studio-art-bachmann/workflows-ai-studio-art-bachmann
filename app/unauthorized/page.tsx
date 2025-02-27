import Link from 'next/link';

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Ei pääsyä</h1>
        <p className="mb-6">
          Sinulla ei ole pääsyä tähän sovellukseen. Vain valtuutetut käyttäjät voivat kirjautua sisään.
        </p>
        <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
          Takaisin etusivulle
        </Link>
      </div>
    </div>
  );
}
