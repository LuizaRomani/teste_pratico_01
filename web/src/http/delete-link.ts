export async function deleteLink(id: string) {
  const response = await fetch(`http://localhost:3333/links/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Erro ao deletar o link');
  }
} 