import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LogoRedirect from '../components/logo-redirect';

export default function RedirectPage() {
  const { shortUrl } = useParams();

  useEffect(() => {
    if (!shortUrl) return;

    // This will trigger the browser to follow the 302 redirect
    window.location.href = `http://localhost:3333/${shortUrl}`;
  }, [shortUrl]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-gray-100 rounded-lg p-12 flex flex-col items-center w-full lg:w-[580px] lg:p-14">
        <div className="mb-6">
          <LogoRedirect />
        </div>
        <h1 className="text-2xl font-bold text-gray-600 mb-2">Redirecionando...</h1>
        <p className="text-gray-500 text-center mb-2">
          O link será aberto automaticamente em alguns instantes.
        </p>
        <p className="text-gray-500 text-center text-sm">
          Não foi redirecionado?{' '}
          <a href={`http://localhost:3333/${shortUrl}`} className="text-blue-base underline">Acesse aqui</a>
        </p>
      </div>
    </div>
  );
}
