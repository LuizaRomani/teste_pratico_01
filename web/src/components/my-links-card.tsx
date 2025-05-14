import { Link, Download } from "lucide-react";

export function MyLinksCard() {
	return (
		<div className="bg-gray-100 rounded-lg w-[580px] h-[234px] p-8 flex flex-col gap-5 box-border mb-[593px]">
			<div className="flex justify-between items-center mb-2">
				<h2 className="text-lg font-bold text-gray-600">Meus Links</h2>
				<button
					className="bg-gray-200 text-gray-500 py-2 px-4 rounded-md cursor-not-allowed flex items-center gap-2 font-sans opacity-50"
					disabled
				>
					<Download className="text-gray-600" size={20} />
					Baixar CSV
				</button>
			</div>
			<div className="items-center mb-8">
				<div className="border-t border-gray-200 my-0" />
				<div className="flex flex-col items-center justify-center flex-1 py-4 mt-4 ">
					<Link className="text-gray-400 mb-3" size={28} />
					<span className="text-gray-400 text-xs text-center mt-1">
						AINDA NÃO EXISTEM LINKS CADASTRADOS
					</span>
				</div>

			</div>

		</div>
	);
}
