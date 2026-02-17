document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("background-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("scroll", resizeCanvas);

  canvas.style.pointerEvents = "none";

  let bolts = [];

  function createBolt(x, y) {
    const segments = [];
    let cx = x;
    let cy = y;

    for (let i = 0; i < 12; i++) {
      segments.push({ x: cx, y: cy });
      cx += Math.random() * 40 - 20;
      cy += Math.random() * 40 + 20;
    }

    return { segments, life: 30, opacity: 1 };
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.015 && bolts.length < 3) {
      bolts.push(createBolt(Math.random() * canvas.width, -50));
    }

    const light = document.body.classList.contains("light-mode");
    ctx.strokeStyle = light
      ? "rgba(255,160,0,0.5)"
      : "rgba(255,255,200,0.6)";
    ctx.lineWidth = 2;

    bolts.forEach(b => {
      ctx.beginPath();
      ctx.moveTo(b.segments[0].x, b.segments[0].y);
      b.segments.forEach((s, i) => i && ctx.lineTo(s.x, s.y));
      ctx.globalAlpha = b.opacity;
      ctx.stroke();

      b.life--;
      b.opacity -= 0.03;
      b.segments.forEach(seg => seg.y += 4);
    });

    bolts = bolts.filter(b => b.life > 0);
    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }

  animate();
});
