export function getInitialTheme(): "dark" | "light" {
  const theme = window.localStorage.getItem("theme") as "light" | "dark" | null;
  if (theme) {
    return theme;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

export function setSiteTheme(theme: "dark" | "light") {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function toggleThemeIcon(
  theme: "light" | "dark",
  shouldCache?: boolean
) {
  const darkIcon = document.getElementById("dark-icon");
  const lightIcon = document.getElementById("light-icon");

  if (darkIcon === null || lightIcon === null) return;

  if (shouldCache) {
    window.localStorage.setItem("theme", theme);
  }

  if (theme === "light") {
    lightIcon.classList.add("hidden");
    darkIcon.classList.remove("hidden");
  } else {
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
  }
}
