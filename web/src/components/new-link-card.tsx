export function NewLinkCard() {
	return (
		<div className="bg-gray-100 rounded-lg w-[380px] h-[340px] p-8 flex flex-col gap-5 box-border mb-36">
			<h2 className="text-lg font-bold text-gray-600 mb-2">Novo Link</h2>
			<form className="flex flex-col gap-5">
				<div>
					<label className="block text-xs text-gray-500 mb-1 ">
						LINK ORIGINAL
					</label>
					<input
						type="text"
						className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-400 placeholder:font-sans text-sm "
						placeholder="www.exemplo.com.br"
						disabled
					/>
				</div>
				<div>
					<label className="block text-xs text-gray-500 mb-1">
						LINK ENCURTADO
					</label>
					<input
						type="text"
						className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-400 placeholder:font-sans text-sm"
						placeholder="brev.ly/"
						disabled
					/>
				</div>
				<button
					className="w-full h-12 bg-blue-base text-white rounded-md font-semibold text-md cursor-not-allowed opacity-50"
					disabled
				>
					Salvar link
				</button>
			</form>
		</div>
	);
}
