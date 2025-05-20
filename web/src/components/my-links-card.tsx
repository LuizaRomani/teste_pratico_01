import { useEffect, useState } from "react";
import { Link, Download, Copy, Trash } from "lucide-react";
import { getAllLinks } from "../http/list-all-links";
import { deleteLink } from "../http/delete-link";
import { incrementAccessCount } from "../http/increment-access-count";
import { exportLinks } from "../http/export-links";

const FRONTEND_BASE_URL = import.meta.env.VITE_FRONTEND_URL;

interface LinkItem {
	id: string;
	originalUrl: string;
	shorterUrl: string;
	accessCount: number;
	createdAt: string;
}

export function MyLinksCard() {
	const [links, setLinks] = useState<LinkItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [copiedId, setCopiedId] = useState<string | null>(null);
	const [deletingId, setDeletingId] = useState<string | null>(null);
	const [exporting, setExporting] = useState(false);

	useEffect(() => {
		getAllLinks()
			.then(setLinks)
			.catch(() => setError("Erro ao carregar os links"))
			.finally(() => setLoading(false));
	}, []);

	const handleCopy = async (link: LinkItem) => {
		await navigator.clipboard.writeText(`${FRONTEND_BASE_URL}/${link.shorterUrl}`);
		setCopiedId(link.id);
		setTimeout(() => setCopiedId(null), 1200);
	};

	const handleDelete = async (id: string) => {
		setDeletingId(id);
		try {
			await deleteLink(id);
			setLinks(links => links.filter(link => link.id !== id));
		} catch {
			alert('Erro ao deletar o link');
		} finally {
			setDeletingId(null);
		}
	};

	const handleLinkClick = async (e: React.MouseEvent<HTMLAnchorElement>, link: LinkItem) => {
		e.preventDefault();
		try {
			const response = await incrementAccessCount(link.id);
			setLinks(links => links.map(l => 
				l.id === link.id 
					? { ...l, accessCount: response.data.accessCount }
					: l
			));
			window.open(`${FRONTEND_BASE_URL}/${link.shorterUrl}`, '_blank');
		} catch (error) {
			console.error('Failed to increment access count:', error);
			window.open(`${FRONTEND_BASE_URL}/${link.shorterUrl}`, '_blank');
		}
	};

	const handleExport = async () => {
		if (exporting) return;
		setExporting(true);
		try {
			const { url } = await exportLinks();
			window.open(url, '_blank');
		} catch {
			alert('Erro ao exportar os links');
		} finally {
			setExporting(false);
		}
	};

	return (
		<div className="bg-gray-100 rounded-lg w-full lg:w-[580px] p-6 lg:p-8 flex flex-col gap-5">
			<div className="flex justify-between items-center">
				<h2 className="text-lg font-bold text-gray-600">Meus Links</h2>
				<button
					className={`bg-gray-200 hover:bg-gray-300 text-gray-500 py-2 px-4 rounded-md flex items-center gap-2 font-sans transition-colors ${(exporting || links.length === 0) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
					onClick={handleExport}
					disabled={exporting || links.length === 0}
				>
					<Download className="text-gray-600" size={20} />
					{exporting ? 'Exportando...' : 'Baixar CSV'}
				</button>
			</div>
			<div className="flex-1">
				<div className="border-t border-gray-200 mb-2" />
				{loading ? (
					<div className="flex flex-col items-center justify-center h-[120px] text-gray-400 text-sm">Carregando...</div>
				) : error ? (
					<div className="flex flex-col items-center justify-center h-[120px] text-danger text-sm">{error}</div>
				) : links.length === 0 ? (
					<div className="flex flex-col items-center justify-center h-[120px]">
						<Link className="text-gray-400 mb-3" size={28} />
						<span className="text-gray-400 text-xs text-center">
							AINDA NÃO EXISTEM LINKS CADASTRADOS
						</span>
					</div>
				) : (
					<div className="max-h-96 overflow-y-auto pr-1">
						<ul className="flex flex-col gap-2">
							{links.map(link => (
								<li key={link.id} className="flex items-center justify-between bg-gray-100 rounded-md px-4 py-2 border border-gray-200">
									<div className="flex flex-col min-w-0">
										<a
											href={`${FRONTEND_BASE_URL}/${link.shorterUrl}`}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-base font-medium truncate hover:underline"
											onClick={(e) => handleLinkClick(e, link)}
										>
											brev.ly/{link.shorterUrl}
										</a>
										<span className="text-xs text-gray-500 truncate">{link.originalUrl}</span>
									</div>
									<div className="flex items-center gap-2 min-w-fit">
										<span className="text-gray-600 text-sm whitespace-nowrap mr-2">{link.accessCount} acessos</span>
										<button
											className={`bg-gray-200 hover:bg-gray-300 rounded-md p-2 transition-colors ${copiedId === link.id ? 'ring-2 ring-blue-base' : ''}`}
											title="Copiar link"
											onClick={() => handleCopy(link)}
										>
											<Copy className={`w-5 h-5 ${copiedId === link.id ? 'text-blue-base' : 'text-gray-600'}`} />
										</button>
										<button
											className={`bg-gray-200 hover:bg-gray-300 rounded-md p-2 transition-colors ${deletingId === link.id ? 'opacity-50' : ''}`}
											title="Deletar link"
											onClick={() => handleDelete(link.id)}
											disabled={deletingId === link.id}
										>
											<Trash className="w-5 h-5 text-gray-600" />
										</button>
									</div>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
