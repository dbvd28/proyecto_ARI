document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const modal = document.getElementById('adopcionModal');
    const confirmacionModal = document.getElementById('confirmacionModal');
    const closeButtons = document.querySelectorAll('.close');
    const formulario = document.getElementById('formularioAdopcion');
    const cerrarConfirmacion = document.getElementById('cerrarConfirmacion');
    const btnAdoptarList = document.querySelectorAll('.btn-adoptar');
    
    // Mostrar modal de adopción al hacer clic en cualquier botón "ADOPTAR"
    btnAdoptarList.forEach(btn => {
      btn.addEventListener('click', function() {
        const card = this.closest('.card');
        const nombreMascota = card.querySelector('h3').textContent;
        
        document.getElementById('mascotaNombre').value = nombreMascota;
        document.getElementById('modalTitle').textContent = `Adoptar a ${nombreMascota}`;
        
        modal.style.display = 'block';
      });
    });
    
    // Cerrar modales al hacer clic en la X
    closeButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        modal.style.display = 'none';
        confirmacionModal.style.display = 'none';
      });
    });
    
    // Cerrar modales al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
      if (event.target === confirmacionModal) {
        confirmacionModal.style.display = 'none';
      }
    });
    
    // Manejar envío del formulario
    formulario.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nombreMascota = document.getElementById('mascotaNombre').value;
      
      // Aquí normalmente enviarías los datos a un servidor
      // Por ahora solo simulamos el envío
      
      // Mostrar mensaje de confirmación
      document.getElementById('nombreMascotaConfirmacion').textContent = nombreMascota;
      modal.style.display = 'none';
      confirmacionModal.style.display = 'block';
      
      // Limpiar formulario
      formulario.reset();
    });
    
    // Cerrar modal de confirmación
    cerrarConfirmacion.addEventListener('click', function() {
      confirmacionModal.style.display = 'none';
    });
  });