// deleteCard.ts
export async function deleteCard(id: string) {
    try {
        const response = await fetch(`http://localhost:8080/projects/${id}`, { method: 'DELETE' });
        if (response.ok) {
            alert('Card eliminada correctamente');
            // Opcional: Actualiza la interfaz aquí si es necesario
            console.log('Card eliminada');
        } else {
            alert('Error al eliminar la card');
            console.error('Error en la respuesta:', response);
        }
    } catch (error) {
        alert('Error al conectar con el servidor');
        console.error('Error al eliminar la card:', error);
    }
}
