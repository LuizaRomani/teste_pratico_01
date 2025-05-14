export type LinkErrorType = 'original' | 'short' | 'general';

export function parseLinkError(err: any): { type: LinkErrorType, message: string } {
  const msg = err?.message || "";
  if (msg === "Short URL already exists") {
    return { type: 'short', message: "" };
  } else if (msg === "Original URL already exists") {
    return { type: 'original', message: "" };
  } else {
    return { type: 'general', message: "Solicitação fora dos parametros" };
  }
} 