const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function deleteLink(id: string) {
  const response = await fetch(`${BACKEND_URL}/links/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Erro ao deletar o link');
  }
} 