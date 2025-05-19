export async function exportLinks() {
  const response = await fetch("http://localhost:3333/links/export", {
    method: "POST",
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error("Erro ao exportar os links");
  }
  return data.data;
} 