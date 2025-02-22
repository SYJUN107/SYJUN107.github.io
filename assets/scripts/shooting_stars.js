const container = document.querySelector('.shooting-stars');
const numStars = 10; // Número de estrellas a generar

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('shooting-star');
  
  // Asigna posiciones aleatorias dentro del header
  const topPos = Math.random() * 100;   // porcentaje para top
  const leftPos = Math.random() * 100;  // porcentaje para left
  star.style.top = `${topPos}%`;
  star.style.left = `${leftPos}%`;
  
  // Agrega un retraso aleatorio a la animación para variar el inicio
  const delay = Math.random() * 3; // retraso entre 0 y 3 segundos
  star.style.animationDelay = `${delay}s`;
  
  container.appendChild(star);
}
