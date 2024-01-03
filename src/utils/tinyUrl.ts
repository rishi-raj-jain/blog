async function getToken() {
  if (import.meta.env.PROD) {
    return process.env.TINYURL_TOKEN;
  }
  const globs = import.meta.glob(`/.secret.txt`, { as: "raw" });
  const localToken = await globs[".secret.txt"]();
  return localToken;
}

export async function createTinyUrl(url?: string): Promise<string | null> {
  const token = await getToken();

  const body = new URLSearchParams({
    url: url?.trim() || window.location.href,
  });

  const response = await fetch("https://api.tinyurl.com/create", {
    body,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) return null;

  const tinyUrl: TinyUrlResponse<TinyUrl> = await response.json();
  return tinyUrl.data.alias;
}

export async function getTinyUrlInfo(alias: string): Promise<TinyUrl | null> {
  const token = await getToken();

  const response = await fetch(
    `https://api.tinyurl.com/alias/tinyurl.com/${alias}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) return null;

  const tinyUrl: TinyUrlResponse<TinyUrl> = await response.json();
  return tinyUrl.data;
}
