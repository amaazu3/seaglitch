// Lista de imágenes en tu carpeta (ajusta según tus archivos)
const images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];

function createGlitchDiv() {
    const div = document.createElement('div');
    div.className = 'glitch-div';
    
    // Tamaño aleatorio entre 50px y 200px
    const size = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    
    // Posición aleatoria
    div.style.left = `${Math.random() * (window.innerWidth - size)}px`;
    div.style.top = `${Math.random() * (window.innerHeight - size)}px`;
    
    // Color aleatorio como fondo del div
    div.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    
    // Crear y añadir la imagen
    const img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    div.appendChild(img);
    
    // Efecto glitch
    div.style.animation = `glitch-anim ${Math.random() * 2 + 0.5}s infinite`;
    
    return div;
}

function generateDivs() {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Limpiar divs existentes
    
    for (let i = 0; i < 10; i++) {
        container.appendChild(createGlitchDiv());
    }
}

// Generar divs al cargar la página y cada 3 segundos
window.addEventListener('load', () => {
    generateDivs();
    setInterval(generateDivs, 3000);
});

