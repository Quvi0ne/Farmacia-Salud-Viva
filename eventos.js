document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los artículos
    const articulos = document.querySelectorAll('.articulo');
    
    // Aplicar eventos a cada artículo
    articulos.forEach(articulo => {
        // Guardar el contenido original como atributo data-
        articulo.setAttribute('data-original', articulo.innerHTML);
        
        // Evento mouseover (hover)
        articulo.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
            
            // Mostrar descripción
            const desc = this.querySelector('.descripcion');
            if(desc) {
                desc.style.height = 'auto';
                desc.style.opacity = '1';
                desc.style.marginTop = '10px';
            }
        });
        
        // Evento mouseout (salir del elemento)
        articulo.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            
            // Ocultar descripción
            const desc = this.querySelector('.descripcion');
            if(desc) {
                desc.style.height = '0';
                desc.style.opacity = '0';
                desc.style.marginTop = '0';
            }
        });
        
        // Evento click (cambiar color de fondo)
        articulo.addEventListener('click', function() {
            const colores = ['#E3F2FD', '#E8F5E9', '#FFF8E1', '#FFEBEE', '#F3E5F5'];
            const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
            this.style.backgroundColor = colorAleatorio;
        });
        
        // Evento doble click (mostrar mensaje especial)
        articulo.addEventListener('dblclick', function() {
            const originalContent = this.getAttribute('data-original');
            this.innerHTML = `
                <div style="padding: 10px;">
                    <h3>¡Producto seleccionado!</h3>
                    <p>Este artículo ha sido añadido a tus favoritos</p>
                    <button class="volver-btn">Volver</button>
                </div>
            `;
            
            // Agregar evento al botón volver
            this.querySelector('.volver-btn').addEventListener('click', function(e) {
                e.stopPropagation();
                articulo.innerHTML = originalContent;
                // Volver a aplicar los eventos al artículo
                setupArticuloEvents(articulo);
            });
        });
        
        // Evento auxiliar: click derecho (resetear)
        articulo.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            this.style.backgroundColor = 'white';
            const desc = this.querySelector('.descripcion');
            if (desc) {
                desc.style.height = '0';
                desc.style.opacity = '0';
                desc.style.marginTop = '0';
            }
        });
    });
});
function setupArticuloEvents(articulo) {
}