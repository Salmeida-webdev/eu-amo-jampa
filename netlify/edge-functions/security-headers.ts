import type { Config, Context } from "@netlify/edge-functions";

function createNonce(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(18));
  return btoa(String.fromCharCode(...bytes));
}

function cspFor(nonce: string): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    "script-src-attr 'none'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data: https:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "frame-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}

export default async (_request: Request, context: Context): Promise<Response> => {
  const response = await context.next();
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("text/html")) return response;

  const nonce = createNonce();
  const html = await response.text();
  const securedHtml = html.replace(/<script(?=\s|>)/gi, `<script nonce="${nonce}"`);
  const headers = new Headers(response.headers);

  headers.set("Content-Security-Policy", cspFor(nonce));
  headers.set("Cache-Control", "no-store");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Frame-Options", "DENY");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  headers.delete("content-length");
  headers.delete("content-encoding");
  headers.delete("etag");

  return new Response(securedHtml, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

export const config: Config = { path: "/" };
