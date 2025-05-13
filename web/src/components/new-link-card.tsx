export function NewLinkCard() {
  return (
    <div className="bg-gray-100 rounded-lg w-[580px] min-h-[234px] p-8 flex flex-col gap-5 box-border ">
      <h2 className="text-2xl font-bold text-gray-600 mb-2">Novo link</h2>
      <form className="flex flex-col gap-5">
        <div>
          <label className="block text-gray-600 mb-1 font-semibold">LINK ORIGINAL</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 text-gray-600"
            placeholder="www.exemplo.com.br"
            disabled
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1 font-semibold">LINK ENCURTADO</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 text-gray-600"
            placeholder="brev.ly/"
            disabled
          />
        </div>
        <button
          className="w-full h-12 bg-blue-base text-white rounded-md font-semibold text-lg cursor-not-allowed opacity-50"
          disabled
        >
          Salvar link
        </button>
      </form>
    </div>
  );
} 