// Reemplace la URL por la URL pública de su servicio en Render.
const API_URL = 'https://backend-laboratorio-ixed.onrender.com/api/mensaje';

document.getElementById('consultar').addEventListener('click', async () => {
  const resultado = document.getElementById('resultado');
  resultado.textContent = 'Consultando...';

  try {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
    const datos = await respuesta.json();
    resultado.textContent = JSON.stringify(datos, null, 2);
  } catch (error) {
    resultado.textContent = 'No se pudo consultar la API: ' + error.message;
  }
});
