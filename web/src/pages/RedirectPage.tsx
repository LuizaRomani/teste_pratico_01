import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LogoRedirect from '../components/logo-redirect';

export default function RedirectPage() {
  const { shortUrl } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!shortUrl) return;

    fetch(`http://localhost:3333/validate/${shortUrl}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid link');
        }
        return response.json();
      })
      .then(() => {
        window.location.href = `http://localhost:3333/${shortUrl}`;
      })
      .catch(() => {
        navigate('/not-found', { replace: true });
      });
  }, [shortUrl, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="bg-gray-100 rounded-lg p-8 sm:p-12 w-full max-w-[580px] text-center space-y-6">
        <div className="flex justify-center">
          <LogoRedirect />
        </div>
        <h1 className="text-2xl font-bold text-gray-600 mb-2">Redirecionando...</h1>
        <p className="text-md text-gray-500 text-center mb-2">
          O link será aberto automaticamente em alguns instantes.
          Não foi redirecionado?{' '}
          <a href={`http://localhost:3333/${shortUrl}`} className="text-blue-base underline">Acesse aqui</a>
        </p>
      </div>
    </div>
  );
}
