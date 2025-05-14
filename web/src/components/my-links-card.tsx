import { Link, Download } from "lucide-react";

export function MyLinksCard() {
	return (
		<div className="bg-gray-100 rounded-lg w-full lg:w-[580px] p-6 lg:p-8 flex flex-col gap-5">
			<div className="flex justify-between items-center">
				<h2 className="text-lg font-bold text-gray-600">Meus Links</h2>
				<button
					className="bg-gray-200 hover:bg-gray-300 text-gray-500 py-2 px-4 rounded-md cursor-not-allowed flex items-center gap-2 font-sans opacity-50 transition-colors"
					disabled
				>
					<Download className="text-gray-600" size={20} />
					Baixar CSV
				</button>
			</div>
			<div className="flex-1">
				<div className="border-t border-gray-200" />
				<div className="flex flex-col items-center justify-center h-[120px]">
					<Link className="text-gray-400 mb-3" size={28} />
					<span className="text-gray-400 text-xs text-center">
						AINDA NÃO EXISTEM LINKS CADASTRADOS
					</span>
				</div>
			</div>
		</div>
	);
}
