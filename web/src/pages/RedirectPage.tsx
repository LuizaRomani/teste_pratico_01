import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LogoRedirect from '../components/logo-redirect';

export default function RedirectPage() {
  const { shortUrl } = useParams();
  const navigate = useNavigate();
  const [error] = useState(false);

  useEffect(() => {
    if (!shortUrl) return;
    window.location.href = `http://localhost:3333/${shortUrl}`;
  }, [shortUrl]);

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
      </div>
    </div>
  );
}