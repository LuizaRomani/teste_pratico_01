import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LogoRedirect from '../components/logo-redirect';

export default function RedirectPage() {
  const { shortUrl } = useParams();
  const navigate = useNavigate();
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!shortUrl) return;
    fetch(`http://localhost:3333/${shortUrl}`)
      .then(async (res) => {
        if (res.status === 404) throw new Error('not found');
        const data = await res.json().catch(() => null);
        if (data && data.originalUrl) {
          setOriginalUrl(data.originalUrl);
        } else {
          window.location.href = res.url;
        }
      })
      .catch(() => setError(true));
  }, [shortUrl]);

  useEffect(() => {
    if (originalUrl) {
      const timeout = setTimeout(() => {
        window.location.href = originalUrl;
      }, 1800);
      return () => clearTimeout(timeout);
    }
  }, [originalUrl]);

  if (error) {
    navigate('/not-found', { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 ">
      <div className="bg-gray-100 rounded-lg p-12 flex flex-col items-center w-full lg:w-[580px] lg:p-14">
        <div className="mb-6">
          <LogoRedirect />
        </div>
        <h1 className="text-2xl font-bold text-gray-600 mb-2">Redirecionando...</h1>
        <p className="text-gray-500 text-center mb-2">O link será aberto automaticamente em alguns instantes.</p>
        <p className="text-gray-500 text-center text-sm">
          Não foi redirecionado?{' '}
          {originalUrl ? (
            <a href={originalUrl} className="text-blue-base underline">Acesse aqui</a>
          ) : (
            <span className="text-gray-400">Acesse aqui</span>
          )}
        </p>
      </div>
    </div>
  );
}