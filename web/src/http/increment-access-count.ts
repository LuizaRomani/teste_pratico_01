export async function incrementAccessCount(id: string) {
  const response = await fetch(`http://localhost:3333/links/${id}/access`, {
    method: "POST",
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw data;
  }
  return data;
}