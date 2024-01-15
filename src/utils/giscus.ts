function sendMessage<T>(message: T) {
  const iframe = document.querySelector<HTMLIFrameElement>(
    "iframe.giscus-frame"
  );
  if (!iframe) return;
  iframe.contentWindow?.postMessage({ giscus: message }, "https://giscus.app");
}

export function setGiscusTheme(theme: "light" | "dark") {
  sendMessage({ setConfig: { theme } });
}
