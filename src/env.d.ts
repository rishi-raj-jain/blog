/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  copyShortUrlToClipboard(url: string): void;
}