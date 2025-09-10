const canvas = document.getElementById('lightning-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min,max){ return Math.random()*(max-min)+min; }

function drawLightning(x1,y1,x2,y2,branch=0){
    if(branch>2) return;
    ctx.strokeStyle = 'rgba(255,255,0,0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    const midX = (x1+x2)/2 + random(-20,20);
    const midY = (y1+y2)/2 + random(-20,20);
    ctx.lineTo(midX,midY);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    if(Math.random()<0.3) drawLightning(midX, midY, x2, y2, branch+1);
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(Math.random()<0.05){
        const startX = random(0,canvas.width);
        drawLightning(startX,0, random(0,canvas.width), canvas.height);
    }
    requestAnimationFrame(animate);
}

animate();
window.addEventListener('resize',()=>{canvas.width=window.innerWidth; canvas.height=window.innerHeight});
