const STORAGE_KEY = "theme";

const getStoredTheme = () => localStorage.getItem(STORAGE_KEY);

const getPreferredTheme = () =>
  matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const updateToggleLabel = (theme) => {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;
  const nextMode = theme === "dark" ? "claro" : "oscuro";
  toggle.setAttribute("aria-label", `Cambiar a modo ${nextMode}`);
};

export const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
  updateToggleLabel(theme);
};

export const initTheme = () => {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  updateToggleLabel(getStoredTheme() ?? getPreferredTheme());

  toggle.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme;
    applyTheme(current === "dark" ? "light" : "dark");
  });
};
