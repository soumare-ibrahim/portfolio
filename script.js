document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const savedTheme = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  const isLight = savedTheme
    ? savedTheme === "light"
    : prefersLight;

  document.body.classList.toggle("light-mode", isLight);
  toggle.textContent = isLight ? "☀️" : "🌙";

  toggle.addEventListener("click", () => {
    const light = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", light ? "light" : "dark");
    toggle.textContent = light ? "☀️" : "🌙";
  });
});
