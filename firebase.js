// Esta copia funciona deliberadamente sin Firebase.
// Todos los cambios se conservan solamente en localStorage del navegador.
window.brujasCloudReady=false;
window.queueBrujasCloudSave=()=>{};

const status=document.getElementById('syncStatus');
if(status){
  status.lastChild.textContent='Modo prueba · datos locales';
  status.title='Esta versión no lee ni guarda datos en Firebase.';
}
