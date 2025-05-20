const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getAllLinks() {
  const response = await fetch(`${BACKEND_URL}/links`);
  if (!response.ok) {
    throw new Error("Erro ao buscar os links");
  }
  const data = await response.json();
  return data.data;
} 