// Transizione tra le pagine
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Piccolo delay per far partire l'animazione in modo fluido
    setTimeout(() => {
        document.getElementById(pageId).classList.add('active');
        
        // Scroll in alto quando si cambia pagina
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
}

// Crea particelle leggere in movimento
function createParticles() {
    const container = document.getElementById('particles');
    
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 140, 66, ${Math.random() * 0.4 + 0.1});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 15 + 10}s linear infinite;
            animation-delay: -${Math.random() * 10}s;
        `;
        container.appendChild(particle);
    }
}

// Aggiungi l'animazione CSS delle particelle dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Avvia le particelle
createParticles();

// Piccolo effetto di entrata all'avvio
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home').classList.add('active');
});
