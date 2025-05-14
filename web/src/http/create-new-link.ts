export async function createNewLink(originalUrl: string, shorterUrl: string) {
  const response = await fetch("http://localhost:3333/links", {
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
