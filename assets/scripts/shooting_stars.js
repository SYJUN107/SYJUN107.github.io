// Function to create a shooting star element with randomized properties
function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    
    // Random starting positions within the viewport
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    
    // Randomize the animation duration for variety (0.8s to 2.0s)
    const duration = 0.8 + Math.random() * 1.2;
    star.style.animationDuration = duration + 's';
    
    // Append the star to the container
    document.querySelector('.shooting-stars').appendChild(star);
    
    // Remove the star after its animation completes
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
    }
    
    // Generate shooting stars at regular intervals
    setInterval(createShootingStar, 500);
