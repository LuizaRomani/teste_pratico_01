// src/components/EmptyHomePage.tsx
export function EmptyHomePage() {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header with logo, positioned top-left */}
        <header className="ml-[280px] mt-[80px]">
          <img src="/Logo.svg" alt="brev.ly logo" width={97} height={24} />
        </header>
  
        {/* Main content */}
        <main className="flex flex-1 justify-center items-start gap-8 px-8 py-8">
          {/* Novo link card */}
          <section className="bg-white rounded-xl shadow p-8 w-[380px] h-[340px] flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-6">Novo link</h2>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">LINK ORIGINAL</label>
                <input
                  className="w-full rounded-md border border-gray-300 px-4 py-2"
                  placeholder="www.exemplo.com.br"
                  disabled
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">LINK ENCURTADO</label>
                <input
                  className="w-full rounded-md border border-gray-300 px-4 py-2"
                  placeholder="brev.ly/"
                  disabled
                />
              </div>
              <button
                className="w-full mt-2 py-3 rounded-md bg-blue-300 text-white font-semibold"
                disabled
              >
                Salvar link
              </button>
            </form>
          </section>
  
          {/* Meus links card */}
          <section className="bg-white rounded-xl shadow p-8 w-[580px] h-[234px] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Meus links</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md text-gray-400" disabled>
                {/* Placeholder for download icon */}
                <span className="material-icons">download</span>
                Baixar CSV
              </button>
            </div>
            <hr className="mb-8" />
            <div className="flex flex-col items-center justify-center flex-1 text-gray-400">
              {/* Placeholder for link icon */}
              <div className="w-10 h-10 mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="material-icons">link</span>
              </div>
              <span className="text-xs">AINDA NÃO EXISTEM LINKS CADASTRADOS</span>
            </div>
          </section>
        </main>
      </div>
    );
  }