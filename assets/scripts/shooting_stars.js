function createShootingStar() {
    const header = document.querySelector('header');
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    
    // Decidir aleatoriamente la posición de inicio
    if (Math.random() < 0.80) {
      // Opción 1: Aparece desde el borde superior,
      // posicionándolo con un top negativo para que solo se asome la cabeza.
      // Si la altura es de 300px, por ejemplo, con -250px solo quedarán visibles 50px.
      star.style.top = '-250px';
      // La posición horizontal: entre el 35% y el 100% del ancho de la ventana
      star.style.left = window.innerWidth * 0.35 + Math.random() * (window.innerWidth * 0.65) + 'px';
    } else {
      // Opción 2: Aparece desde el borde derecho,
      // Dejamos la estrella fuera del contenedor para que se asome.
      star.style.left = window.innerWidth + 'px';
      // En este caso, la estrella aparecerá solo en la mitad superior (por encima del 20% de la altura)
      star.style.top = Math.random() * (header.offsetHeight * 0.30) + 'px';
    //   star.style.top = Math.random() * (window.innerHeight * 0.20) + 'px';
    }
  
    // Usamos una duración fija para que la velocidad sea constante
    const duration = 3.5;
    star.style.animationDuration = duration + 's';
    
    // Agregar la estrella al contenedor
    document.querySelector('.shooting-stars').appendChild(star);
    
    // Remover la estrella después de que la animación termina
    setTimeout(() => {
      star.remove();
    }, duration * 1000);
  }
  
  // Generar estrellas a intervalos regulares
  setInterval(createShootingStar, 2000);
  