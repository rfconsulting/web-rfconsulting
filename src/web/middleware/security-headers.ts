import { randomBytes } from "node:crypto";
import type { RequestHandler } from "express";

export const securityHeaders: RequestHandler = (_request, response, next) => {
  const nonce = randomBytes(16).toString("base64");
  response.locals.cspNonce = nonce;
  response.set({
    "Content-Security-Policy": [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "img-src 'self' data:",
      `script-src 'self' 'nonce-${nonce}'`,
      "style-src 'self'",
      "font-src 'self'",
      "connect-src 'self'"
    ].join("; "),
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
  });
  next();
};
