document.addEventListener('DOMContentLoaded', () => {
    const preguntas = document.querySelectorAll('.pregunta');
  
    preguntas.forEach(pregunta => {
      const header = pregunta.querySelector('.pregunta-header');
      const icono = header.querySelector('.icono i');
      const respuesta = pregunta.querySelector('.respuesta');
  
      header.addEventListener('click', () => {
        const estaActiva = pregunta.classList.contains('activa');
  
        document.querySelectorAll('.pregunta').forEach(p => {
          p.classList.remove('activa');
          p.querySelector('.respuesta').style.display = 'none';
          p.querySelector('.icono i').classList.replace('fa-minus', 'fa-plus');
        });
  
        if (!estaActiva) {
          pregunta.classList.add('activa');
          respuesta.style.display = 'block';
          icono.classList.replace('fa-plus', 'fa-minus');
        }
      });
    });
  });
  