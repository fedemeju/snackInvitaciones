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

  // Calcular la hora de finalización del cumpleaños (2 horas después de la hora de inicio)
  var startTime = new Date("2000-01-01T" + time + ":00");
  var endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000);
  var endTimeFormatted = ('0' + endTime.getHours()).slice(-2) + ':' + ('0' + endTime.getMinutes()).slice(-2);
  userData.endTime = endTimeFormatted;

  // Codificar los datos del usuario en la URL
  var encodedUserData = encodeURIComponent(JSON.stringify(userData));

  // Generar URL de la página nueva con los datos codificados
  var pageURLWithData = "nueva_pagina.html?data=" + encodedUserData;

  // Redireccionar a la nueva página
  window.location.href = pageURLWithData;
});

// Restringir la selección de fecha a fechas futuras
var today = new Date().toISOString().split('T')[0];
document.getElementById('birthday').setAttribute('min', today);

// Establecer el paso del selector de tiempo a 5 minutos
document.getElementById('time').setAttribute('step', '300');

