// Cambio pagina SOLO tramite bottoni
function goTo(pageId) {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    setTimeout(() => {
        document.getElementById(pageId).classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 80);
}

// Testo dinamico che cambia
const phrases = [
    "Cotta nel forno a legna a 450°",
    "Impasto a lunga lievitazione 48h",
    "Ingredienti freschi ogni giorno",
    "La vera pizza napoletana",
    "Fumo, fuoco e passione"
];

let index = 0;
const textEl = document.getElementById('rotating-text');

setInterval(() => {
    textEl.style.opacity = '0';
    textEl.style.transform = 'translateY(15px)';
    
    setTimeout(() => {
        index = (index + 1) % phrases.length;
        textEl.textContent = phrases[index];
        textEl.style.opacity = '1';
        textEl.style.transform = 'translateY(0)';
    }, 400);
}, 3200);

// Particelle colorate
function createParticles() {
    const container = document.getElementById('particles');
    const colors = ['#ff3d00', '#ffab00', '#00c853', '#ff6d00', '#2979ff'];

    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        const size = Math.random() * 5 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        p.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.15};
            animation: floatParticle ${Math.random() * 18 + 12}s linear infinite;
            animation-delay: -${Math.random() * 12}s;
            box-shadow: 0 0 10px ${color};
        `;
        container.appendChild(p);
    }
}

// CSS animazione particelle
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 0.6; }
        90% { opacity: 0.6; }
        100% { transform: translateY(-110vh) translateX(${Math.random() * 80 - 40}px); opacity: 0; }
    }
`;
document.head.appendChild(style);

createParticles();

// Avvio
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home').classList.add('active');
});
