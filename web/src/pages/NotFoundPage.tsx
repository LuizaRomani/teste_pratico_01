export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-gray-50 rounded-xl shadow p-12 flex flex-col items-center w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-2">Página não encontrada</h1>
        <p className="text-gray-500 text-center">A URL que você tentou acessar não existe.</p>
      </div>
    </div>
  );
} 