document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('adopcionModal');
    const confirmacionModal = document.getElementById('confirmacionModal');
    const closeButtons = document.querySelectorAll('.close');
    const formulario = document.getElementById('formularioAdopcion');
    const cerrarConfirmacion = document.getElementById('cerrarConfirmacion');
    const btnAdoptarList = document.querySelectorAll('.btn-adoptar');
    
    btnAdoptarList.forEach(btn => {
      btn.addEventListener('click', function() {
        const card = this.closest('.card');
        const nombreMascota = card.querySelector('h3').textContent;
        
        document.getElementById('mascotaNombre').value = nombreMascota;
        document.getElementById('modalTitle').textContent = `Adoptar a ${nombreMascota}`;
        
        modal.style.display = 'block';
      });
    });
    
    closeButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        modal.style.display = 'none';
        confirmacionModal.style.display = 'none';
      });
    });
    
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
      if (event.target === confirmacionModal) {
        confirmacionModal.style.display = 'none';
      }
    });
    
    formulario.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nombreMascota = document.getElementById('mascotaNombre').value;
      
      document.getElementById('nombreMascotaConfirmacion').textContent = nombreMascota;
      modal.style.display = 'none';
      confirmacionModal.style.display = 'block';

      formulario.reset();
    });

    cerrarConfirmacion.addEventListener('click', function() {
      confirmacionModal.style.display = 'none';
    });
  });