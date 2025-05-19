import LogoError from '../components/logo-error';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="bg-gray-100 rounded-lg p-8 sm:p-12 w-full max-w-[580px] text-center space-y-6">
        <div className="flex justify-center">
          <LogoError />
        </div>
        <h1 className="text-2xl font-bold text-gray-600">
          Link não encontrado
        </h1>
        <p className="text-gray-500 text-md md:text-base">
          O link que você está tentando acessar não existe, foi removido ou é uma URL inválida. Saiba mais em{' '}
          <a href="https://brev.ly" className="text-blue-base underline">
            brev.ly
          </a>.
        </p>
      </div>
    </div>
  );
}
