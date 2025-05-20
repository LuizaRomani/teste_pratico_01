const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function exportLinks() {
  const response = await fetch(`${BACKEND_URL}/links/export`, {
    method: "POST",
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error("Erro ao exportar os links");
  }
  return data.data;
} 