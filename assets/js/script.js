document.addEventListener('DOMContentLoaded', () => {
  const totalLazos = 10; // Número de imágenes flotantes
  const container = document.body; // Usamos el body para colocar las imágenes

  for (let i = 0; i < totalLazos; i++) {
    let lazo = document.createElement('div');
    lazo.classList.add('floating-lazo');

    // Posición aleatoria en el eje X
    const randomX = Math.random() * 100; // De 0 a 100%

    // Añadir la imagen al fondo
    container.appendChild(lazo);

    // Establecer la posición inicial y aleatoria
    lazo.style.left = `${randomX}%`; // Aleatorio en el eje X
    lazo.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duración aleatoria de 2 a 5 segundos
    lazo.style.animationDelay = `${Math.random() * 3}s`; // Retardo aleatorio antes de comenzar
  }
});
