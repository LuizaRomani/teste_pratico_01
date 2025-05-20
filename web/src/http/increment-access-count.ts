const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function incrementAccessCount(id: string) {
  const response = await fetch(`${BACKEND_URL}/links/${id}/access`, {
    method: "POST",
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw data;
  }
  return data;
}