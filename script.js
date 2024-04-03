// Evento de formulario de envío
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Captura de datos
  var name = document.getElementById('name').value;
  var birthday = document.getElementById('birthday').value;
  var time = document.getElementById('time').value;

  // Almacenamiento de datos en un objeto
  var userData = {
    name: name,
    birthday: birthday,
    time: time
  };

  // Codificar los datos del usuario en la URL
  var encodedUserData = encodeURIComponent(JSON.stringify(userData));

  // Generar URL de la página nueva con los datos codificados
  var pageURLWithData = "inv.html?data=" + encodedUserData;

  // Redireccionar a la nueva página
  window.location.href = pageURLWithData;
});


// Restringir la selección de fecha a fechas futuras
var today = new Date().toISOString().split('T')[0];
document.getElementById('birthday').setAttribute('min', today);