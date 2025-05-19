import { useState } from "react";
import { createNewLink } from "../http/create-new-link";
import { parseLinkError } from "../http/parse-link-error";

export function NewLinkCard() {
	const [originalUrl, setOriginalUrl] = useState("");
	const [shortUrl, setShortUrl] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [errorOriginal, setErrorOriginal] = useState(false);
	const [errorShort, setErrorShort] = useState(false);
	const [generalError, setGeneralError] = useState("");

	const bothFilled = originalUrl.trim() !== "" && shortUrl.trim() !== "";

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!bothFilled || loading) return;
		setLoading(true);
		setSuccess(false);
		setErrorOriginal(false);
		setErrorShort(false);
		setGeneralError("");
		try {
			await createNewLink(originalUrl, shortUrl);
			setOriginalUrl("");
			setShortUrl("");
			setSuccess(true);
		} catch (err: any) {
			const { type, message } = parseLinkError(err);
			if (type === 'short') setErrorShort(true);
			if (type === 'original') setErrorOriginal(true);
			if (type === 'general') {
				setErrorOriginal(true);
				setErrorShort(true);
				setGeneralError(message);
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="bg-gray-100 rounded-lg w-full lg:w-[380px] p-6 lg:p-8 flex flex-col gap-5">
			<h2 className="text-lg font-bold text-gray-600">Novo Link</h2>
			<form className="flex flex-col gap-5" onSubmit={handleSubmit}>
				<div>
					<label className="text-xs text-gray-500 mb-2 block">
						LINK ORIGINAL
					</label>
					<input
						type="text"
						className={`w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-600 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-base focus:border-blue-base transition-all ${errorOriginal ? 'ring-2 ring-danger border-danger' : ''}`}
						placeholder="linkedin.com/in/myprofile"
						value={originalUrl}
						onChange={e => setOriginalUrl(e.target.value)}
						disabled={loading}
					/>
				</div>
				<div>
					<label className="text-xs text-gray-500 mb-2 block">
						LINK ENCURTADO
					</label>
					<div className="relative w-full">
						<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm select-none pointer-events-none">
							Brev.ly/
						</span>
						<input
							type="text"
							className={`w-full pl-[61px] pr-3 py-3 border border-gray-300 rounded-md bg-gray-100 text-gray-600 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-base focus:border-blue-base transition-all ${errorShort ? 'ring-2 ring-danger border-danger' : ''}`}
							placeholder="Linkedin-Profile"
							value={shortUrl}
							onChange={e => setShortUrl(e.target.value)}
							disabled={loading}
						/>
					</div>

				</div>

				<button
					type="submit"
					className={`w-full h-12 rounded-md text-md font-semibold transition-colors ${bothFilled && !loading ? "bg-blue-dark hover:bg-blue-base text-white cursor-pointer" : "bg-blue-base text-white cursor-not-allowed opacity-50"}`}
					disabled={!bothFilled || loading}
				>
					{loading ? "Salvando..." : "Salvar link"}
				</button>
				{success && <span className="text-green-600 text-xs mt-2">Link criado com sucesso!</span>}
				{generalError && <span className="text-danger text-xs mt-2">{generalError}</span>}
			</form>
		</div>
	);
}
