export async function getAllLinks() {
  const response = await fetch("http://localhost:3333/links");
  if (!response.ok) {
    throw new Error("Erro ao buscar os links");
  }
  const data = await response.json();
  return data.data;
} 