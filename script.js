// Petit effet d'animation sur le titre
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  if(title){
    title.style.opacity = 0;
    title.style.transition = "opacity 2s ease-in-out";
    setTimeout(() => (title.style.opacity = 1), 200);
  }
});

// Animation d'éclairs aléatoires
function flashLightning() {
  const flash = document.createElement("div");
  flash.className = "lightning";
  document.body.appendChild(flash);

  flash.style.opacity = 1;
  flash.style.transition = "opacity 0.1s";

  setTimeout(() => {
    flash.style.opacity = 0;
    setTimeout(() => flash.remove(), 100);
  }, 100);

  // Appel suivant aléatoire
  setTimeout(flashLightning, Math.random() * 5000 + 2000);
}

// Démarre les éclairs
flashLightning();
