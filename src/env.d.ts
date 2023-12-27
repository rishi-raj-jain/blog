/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  downloadQRCode(base64: string): void;
  copyShortUrlToClipboard(url: string): void;
}