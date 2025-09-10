// Animation progressive du titre
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  if (title) {
    title.style.opacity = 0;
    title.style.transition = "opacity 2s ease-in-out";
    setTimeout(() => (title.style.opacity = 1), 200);
  }
});

// Fonction éclairs (désactivée au chargement par défaut)
function flashLightning() {
  const flash = document.createElement("div");
  flash.className = "lightning";
  document.body.appendChild(flash);

  flash.style.opacity = 1;
  setTimeout(() => (flash.style.opacity = 0.8), 50);
  setTimeout(() => (flash.style.opacity = 0.3), 120);
  setTimeout(() => (flash.style.opacity = 0), 200);

  setTimeout(() => flash.remove(), 300);

  // Relance entre 3 et 8 secondes aléatoires
  setTimeout(flashLightning, Math.random() * 5000 + 3000);
}

// ⚠️ Pas d’appel automatique de flashLightning() 
// (tu peux le réactiver en écrivant flashLightning(); à la fin)
