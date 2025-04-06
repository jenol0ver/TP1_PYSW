// Función para animar los contadores
function animateCounters() {
    const numeros = document.querySelectorAll('.numero');
    
    numeros.forEach(numero => {
        const objetivo = parseInt(numero.getAttribute('data-objetivo'));
        let actual = 0;
        const incremento = objetivo / 100;
        
        const animar = () => {
            if (actual < objetivo) {
                actual += incremento;
                numero.textContent = Math.ceil(actual);
                requestAnimationFrame(animar);
            } else {
                numero.textContent = objetivo;
            }
        };
        
        animar();
    });
}

// Ejecutar la animación cuando la sección esté en la vista
const estadisticas = document.querySelector('.estadisticas');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateCounters();
        observer.unobserve(estadisticas);
    }
}, {
    threshold: 0.5
});

observer.observe(estadisticas);