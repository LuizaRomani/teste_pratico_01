const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function createNewLink(originalUrl: string, shorterUrl: string) {
  const response = await fetch(`${BACKEND_URL}/links`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ originalUrl, shorterUrl }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw data;
  }
  return data;
}
