import { Link, Download } from "lucide-react";

export function MyLinksCard() {
  return (
    <div
      className="bg-gray-100 rounded-lg w-[580px] min-h-[234px] p-8 flex flex-col gap-5 box-border"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-gray-600">Meus links</h2>
        <button
          className="bg-gray-200 text-gray-500 py-2 px-4 rounded-md font-semibold cursor-not-allowed flex items-center gap-2"
          disabled
        >
          <Download className="text-gray-600" size={20} />
          Baixar CSV
        </button>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 my-2" />
      {/* List (empty state) */}
      <div className="flex flex-col items-center justify-center flex-1 py-4">
        <Link className="text-gray-400 mb-2" size={32} />
        <span className="text-gray-400 text-sm font-semibold text-center">
          AINDA NÃO EXISTEM LINKS CADASTRADOS
        </span>
      </div>
    </div>
  );
} 