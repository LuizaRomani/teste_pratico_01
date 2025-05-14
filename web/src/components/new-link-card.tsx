import { useState } from "react";

export function NewLinkCard() {
	const [originalUrl, setOriginalUrl] = useState("");
	const [shortUrl, setShortUrl] = useState("");

	const bothFilled = originalUrl.trim() !== "" && shortUrl.trim() !== "";

	return (
		<div className="bg-gray-100 rounded-lg w-full lg:w-[380px] p-6 lg:p-8 flex flex-col gap-5">
			<h2 className="text-lg font-bold text-gray-600">Novo Link</h2>
			<form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
				<div>
					<label className="text-xs text-gray-500 mb-2 block">
						LINK ORIGINAL
					</label>
					<input
						type="text"
						className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-600 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-base focus:border-blue-base transition-all"
						placeholder="linkedin.com/in/myprofile"
						value={originalUrl}
						onChange={e => setOriginalUrl(e.target.value)}
					/>
				</div>
				<div>
					<label className="text-xs text-gray-500 mb-2 block">
						LINK ENCURTADO
					</label>
					<input
						type="text"
						className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-600 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-base focus:border-blue-base transition-all"
						placeholder="brev.ly/Linkedin-Profile"
						value={shortUrl}
						onChange={e => setShortUrl(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					className={`w-full h-12 rounded-md text-md font-semibold transition-colors ${bothFilled ? "bg-blue-dark hover:bg-blue-700 text-white cursor-pointer" : "bg-blue-base text-white cursor-not-allowed opacity-50"}`}
					disabled={!bothFilled}
				>
					Salvar link
				</button>
			</form>
		</div>
	);
}
