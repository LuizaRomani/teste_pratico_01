import LogoError from '../components/logo-redirect';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-10 md:p-12 text-center w-full max-w-md">
        <div className="w-24 h-24 mx-auto mb-6">
          <LogoError />

        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Link não encontrado
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-2">
          O link que você está tentando acessar não existe, foi removido ou é uma URL inválida.
        </p>
        <p className="text-sm sm:text-base text-gray-600">
          Saiba mais em{' '}
          <a href="https://brev.ly" className="text-blue-600 underline">
            brev.ly
          </a>.
        </p>
      </div>
    </div>
  );
}
