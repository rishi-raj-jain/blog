/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  tinyUrlOfCurrentPage: TinyUrl | null;
  sharePage(): void;
  getShortUrl(): void;
  downloadQRCode(base64: string): void;
  copyShortUrlToClipboard(url: string): void;
}

interface TinyUrlResponse<T> {
  data: T;
  code: number;
  errors: string[];
}

interface TinyUrl {
  domain: string;
  alias: string;
  deleted: boolean;
  archived: boolean;
  analytics: Analytics;
  tags: string[];
  created_at: string;
  expires_at: string | null;
  tiny_url: string;
  user?: User;
  hits?: number;
  url: string;
}

interface User {
  name: string;
  email: string;
}

interface Analytics {
  enabled: boolean;
  public: boolean;
}
