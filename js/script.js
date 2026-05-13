document.addEventListener("DOMContentLoaded", () => {
 console.log("Sitio cargando correctamente");
 
 //--Boton hacia arriba
 const btnTop = document.getElementById("btnTop");
 if (btnTop){
    window.addEventListener("scroll", () => {
       btnTop.style.display = window.scrollY > 200 ? "block" : "none";
    });
    btnTop.addEventListener("click", () => {
       window.scrollTo({ top: 0, behavior: "smooth"})
    })
 };
});


// --- FUNCIONALIDAD 1: SALUDO PERSONALIZADO ---
// Pedimos el nombre al cargar la página
let nombre = prompt("¡Hola! ¿Cuál es tu nombre?");

if (nombre !== null && nombre !== "") {
    // Buscamos el título y le cambiamos el texto
    const titulo = document.getElementById("saludo-personalizado");
    titulo.innerText = "¡Bienvenido, " + nombre + "!";
}

// --- FUNCIONALIDAD 2: CAMBIO DE COLOR AL BOTÓN ---
// Seleccionamos el botón de contactar (asegúrate de que tenga la clase 'btn-rojo' o cámbiala)
const botonContactar = document.querySelector('.btn-rojo'); 

if (botonContactar) { // Verificamos que el botón exista
    botonContactar.addEventListener('click', function() {
        // Cambiamos el color de fondo a un azul oscuro
        botonContactar.style.backgroundColor = "#0056b3";
        // Cambiamos el texto del botón
        botonContactar.innerText = "Mensaje Enviado";
    });
}

if (nombre !== null && nombre !== "") {
    const titulo = document.getElementById("saludo-personalizado");
    titulo.innerText = "¡Bienvenido, " + nombre + "!";
    titulo.classList.add("saludo-nuevo"); // <--- Esto activa el color rojo del CSS
}




const botonExplosion = document.getElementById('btnExplosion');

if (botonExplosion) {
    botonExplosion.addEventListener('click', (e) => {
        // Aumentamos a 50 partículas para que sea masivo
        for (let i = 0; i < 50; i++) {
            crearParticula(e.clientX, e.clientY);
        }
    });
}

function crearParticula(x, y) {
    const particula = document.createElement('div');
    particula.classList.add('particula');
    document.body.appendChild(particula);

    // Ángulo aleatorio 
    const angulo = Math.random() * Math.PI * 2;
    
    // DISTANCIA: Aumentamos el número (500) para que lleguen lejos
    const distancia = 50 + Math.random() * 500; 

    const destinoX = x + Math.cos(angulo) * distancia;
    const destinoY = y + Math.sin(angulo) * distancia;

    particula.animate([
        { 
            top: y + 'px', 
            left: x + 'px', 
            opacity: 1,
            transform: 'scale(1)' 
        },
        { 
            top: destinoY + 'px', 
            left: destinoX + 'px', 
            opacity: 0,
            transform: 'scale(0) rotate(360deg)' // Además rotan mientras vuelan
        }
    ], {
        duration: 1000 + Math.random() * 500, // Duran un poco más
        easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)' // Movimiento de explosión real
    }).onfinish = () => particula.remove();
}

