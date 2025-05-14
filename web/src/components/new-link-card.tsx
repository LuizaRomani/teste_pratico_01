export function NewLinkCard() {
	return (
		<div className="bg-gray-100 rounded-lg w-full lg:w-[380px] p-6 lg:p-8 flex flex-col gap-5">
			<h2 className="text-lg font-bold text-gray-600">Novo Link</h2>
			<form className="flex flex-col gap-5">
				<div>
					<label className="text-xs text-gray-500 mb-2 block">
						LINK ORIGINAL
					</label>
					<input
						type="text"
						className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-600 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
						placeholder="www.exemplo.com.br"
						disabled
					/>
				</div>
				<div>
					<label className="text-xs text-gray-500 mb-2 block">
						LINK ENCURTADO
					</label>
					<input
						type="text"
						className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-600 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
						placeholder="brev.ly/"
						disabled
					/>
				</div>
				<button
					className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold text-md cursor-not-allowed opacity-50 transition-colors">
					Salvar link
				</button>
			</form>
		</div>
	);
}
