const btnSim = document.getElementById("btnSim");
const btnClaro = document.getElementById("btnClaro");
const btnPergunta = document.getElementById("btnPergunta");
const celebracao = document.getElementById("celebracao");
const resposta = document.getElementById("respostas");
const musica = document.getElementById("musica");

btnPergunta.addEventListener("click", () => {

document.getElementById("perguntaInicial").ClassList.add("oculto");
  resposta.classeList.remove("oculto");
});

function aceitarPedido() {
    celebracao.classList.remove("oculto");
    musica.play();
    iniciarFogos();
}

btnSim.addEventListener("click", aceitarPedido);
btnClaro.addEventListener("click", aceitarPedido);

function iniciarFogos() {
    const canvas = document.getElementById('fogos');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cores = ['#ff69b4', '#ff1493', '#c71585', '#fff'];
    const fogos = [];

    for (let i = 0; i < 100; i++) {
        fogos.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height /2,
            raio: Math.random() * 4 + 2,
            cor: cores[Math.floor(Math.random() * cores.length)],
            dx: (Math.random() - 0.5) * 5,
            dy: (Math.random() - 0.5) * 5
        });
    }

    function animar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fogos.forEach(f => {
            ctx.beginPath();
            ctx.arc(f.x, f.y, f.raio, 0, Math.PI * 2);
            ctx.fillStyle = f.cor;
            ctx.fill();
            f.x += f.dx;
            f.y += f.dy;
        });
        requestAnimationFrame(animar);
    }
    animar();
}

function criarCoracoes() {
    const container = document.getElementById('heartContainer');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        container.appenChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

window.onload = () => {
    criarCoracoes();
};