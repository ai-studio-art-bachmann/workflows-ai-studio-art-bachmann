import Link from 'next/link';

export default function BlogNotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-6">Blogi postitust ei leitud</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Vabandame, kuid otsitud blogi postitust ei leitud.
      </p>
      <Link 
        href="/blog" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
      >
        Tagasi blogide nimekirja
      </Link>
    </div>
  );
}
