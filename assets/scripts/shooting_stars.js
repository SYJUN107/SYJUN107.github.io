// Function to create a shooting star element with randomized properties
function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    
    // Decidir aleatoriamente la posición de inicio
    if (Math.random() < 0.90) {
        // Opción 1: Aparece en la parte superior
        star.style.top = '0px';
        // La posición horizontal puede ser en cualquier parte del ancho
        star.style.left = window.innerWidth * 0.35 + Math.random() * (window.innerWidth * 0.65) + 'px';
    } else {
        // Opción 2: Aparece en el lado derecho
        star.style.left = window.innerWidth + 'px';
        // Solo en la mitad superior (por encima del 50% de la altura)
        star.style.top = Math.random() * (window.innerHeight * 0.20) + 'px';
    }    

    

    // Randomize the animation duration for variety (0.8s to 2.0s)
    // const duration = 0.8 + Math.random() * 1.2;
    const duration = 3.5
    star.style.animationDuration = duration + 's';
    
    // Append the star to the container
    document.querySelector('.shooting-stars').appendChild(star);
    
    // Remove the star after its animation completes
    setTimeout(() => {
        star.remove();
    }, duration * 4000);
    }
    
    // Generate shooting stars at regular intervals
    setInterval(createShootingStar, 700);
