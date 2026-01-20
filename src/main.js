/**
 * Función de inicialización de la aplicación
 */
function init() {
    console.log("Iniciando aplicación...");
    
    // La aplicación se cargará correctamente
    console.log("Aplicación cargada correctamente");
}

// Esperar a que el DOM esté completamente cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // El DOM ya está cargado
    init();
}
