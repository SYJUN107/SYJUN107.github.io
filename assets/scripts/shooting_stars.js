// Genera estrellas fugaces en posiciones aleatorias dentro del header
const container = document.querySelector('.shooting-stars');
const numStars = 10; // Puedes ajustar la cantidad de estrellas

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('shooting-star');

    // Posiciones aleatorias en porcentaje
    const topPos = Math.random() * 100;
    const leftPos = Math.random() * 100;
    star.style.top = `${topPos}%`;
    star.style.left = `${leftPos}%`;

    // Retraso aleatorio para variar el inicio de la animación
    const delay = Math.random() * 2.5;
    star.style.animationDelay = `${delay}s`;

    container.appendChild(star);
}
