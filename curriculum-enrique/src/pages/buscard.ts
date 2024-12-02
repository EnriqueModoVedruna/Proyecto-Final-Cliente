export async function buscarCard(nombre: string) {
    try {
        const response = await fetch(`http://localhost:8080/projects/${nombre}`, { method: 'GET' });
        if (response.ok) {
            const proyectos = await response.json();           // Opcional: Actualiza la interfaz aquí si es necesario
            console.log('Card encontrada');

            mostrarProyectos(proyectos);
        } else {
            alert('Error al buscar la card');
            console.error('Error en la respuesta:', response);
        }
    } catch (error) {
        alert('Error al conectar con el servidor');
        console.error('Error al buscar la card:', error);
    }
}

function mostrarProyectos(proyectos) {
    const container = document.getElementById('results-container');
    container.innerHTML = '';  // Limpiar los resultados previos

    if (proyectos.length > 0) {
        proyectos.forEach((proyecto) => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <h3>${proyecto.name}</h3>
                <p>${proyecto.description}</p>
                <!-- Aquí puedes agregar más detalles del proyecto si es necesario -->
            `;
            container.appendChild(projectElement);
        });
    } else {
        container.innerHTML = 'No se encontraron proyectos.';
    }
}
