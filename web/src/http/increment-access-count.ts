import { config } from "../config";

export async function incrementAccessCount(id: string) {
  const response = await fetch(`${config.apiBaseUrl}/links/${id}/access`, {
    method: "POST",
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw data;
  }
  return data;
} 