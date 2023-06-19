// Obtener los campos de "Apellidos" y "Nombre" del formulario
var apellidosField = document.getElementById("apellidos");
var nombreField = document.getElementById("nombre");

// Agregar un evento de validación cuando se envíe el formulario
document.querySelector("form").addEventListener("submit", function(event) {
  if (!apellidosField.checkValidity()) {
    // Mostrar un mensaje de error si los apellidos no son válidos
    alert("Los apellidos ingresados no son válidos. Por favor, ingrese solo letras y espacios.");
    event.preventDefault(); // Evitar el envío del formulario
  }

  if (!nombreField.checkValidity()) {
    // Mostrar un mensaje de error si el nombre no es válido
    alert("El nombre ingresado no es válido. Por favor, ingrese solo letras y espacios.");
    event.preventDefault(); // Evitar el envío del formulario
  }
});

// Obtener el campo del "NIF" del formulario
var nifField = document.getElementById("nif");

// Agregar un evento de validación cuando se envíe el formulario
document.querySelector("form").addEventListener("submit", function(event) {
  if (!nifField.checkValidity()) {
    // Mostrar un mensaje de error si el NIF no es válido
    alert("El NIF ingresado no es válido. Debe tener 8 dígitos seguidos de una letra.");
    event.preventDefault(); // Evitar el envío del formulario
  } else if (!validarLetraNIF(nifField.value)) {
    // Mostrar un mensaje de error si la letra del NIF no coincide
    alert("La letra del NIF ingresado no coincide con el número.");
    event.preventDefault(); // Evitar el envío del formulario
  }
});

// Función para validar que la letra del NIF coincide con el número
function validarLetraNIF(nif) {
  var letrasValidas = "TRWAGMYFPDXBNJZSQVHLCKE";
  var numero = parseInt(nif.substring(0, 8), 10);
  var letra = nif.charAt(8).toUpperCase();
  var letraCalculada = letrasValidas.charAt(numero % 23);
  return letra === letraCalculada;
}

// Obtener el campo de "Email" del formulario
var emailField = document.getElementById("email");

// Agregar un evento de validación cuando se envíe el formulario
document.querySelector("form").addEventListener("submit", function(event) {
  if (!emailField.checkValidity()) {
    // Mostrar un mensaje de error si el email no es válido
    alert("El email ingresado no es válido. Por favor, ingrese un email válido.");
    event.preventDefault(); // Evitar el envío del formulario
  }
});

// Obtener el campo de "Teléfono" del formulario
var telefonoField = document.getElementById("telefono");

// Agregar un evento de validación cuando se envíe el formulario
document.querySelector("form").addEventListener("submit", function(event) {
  if (!telefonoField.checkValidity()) {
    // Mostrar un mensaje de error si el teléfono no es válido
    alert("El teléfono ingresado no es válido. Por favor, ingrese un número de teléfono válido de 9 dígitos.");
    event.preventDefault(); // Evitar el envío del formulario
  }
});

// Obtener el campo de "Fecha de nacimiento" del formulario
var nacimientoField = document.getElementById("nacimiento");

// Agregar un evento de validación cuando se envíe el formulario
document.querySelector("form").addEventListener("submit", function(event) {
  if (!nacimientoField.checkValidity()) {
    // Mostrar un mensaje de error si la fecha de nacimiento no es válida
    alert("La fecha de nacimiento ingresada no es válida. Por favor, ingrese una fecha en formato dd/mm/aaaa.");
    event.preventDefault(); // Evitar el envío del formulario
  }
});

// Obtener los checkboxes de los síntomas
var sintomasCheckboxes = document.querySelectorAll('input[name^="sintoma"]');

// Obtener el selector de frecuencia
var frecuenciaSelector = document.getElementById("frecuencia");

// Agregar evento change a los checkboxes de síntomas
for (var i = 0; i < sintomasCheckboxes.length; i++) {
  sintomasCheckboxes[i].addEventListener("change", function() {
    if (hayCheckboxMarcado()) {
      frecuenciaSelector.removeAttribute("disabled");
    } else {
      frecuenciaSelector.setAttribute("disabled", "disabled");
      frecuenciaSelector.selectedIndex = 0;
    }
  });
}

// Función para verificar si hay algún checkbox marcado
function hayCheckboxMarcado() {
  for (var i = 0; i < sintomasCheckboxes.length; i++) {
    if (sintomasCheckboxes[i].checked) {
      return true;
    }
  }
  return false;
}

// Inicializar estado del selector de frecuencia
if (!hayCheckboxMarcado()) {
  frecuenciaSelector.setAttribute("disabled", "disabled");
  frecuenciaSelector.selectedIndex = 0;
}

// Obtener el campo de observaciones
var observacionesInput = document.getElementById("observaciones");

// Obtener el elemento para mostrar el contador de palabras y caracteres
var contadorElement = document.getElementById("contador");

// Agregar evento input al campo de observaciones
observacionesInput.addEventListener("input", function() {
  var observaciones = observacionesInput.value;
  var palabras = observaciones.trim().split(/\s+/).length;
  var caracteres = observaciones.length;

  // Mostrar contador de palabras y caracteres
  contadorElement.textContent = "Palabras: " + palabras + ", Caracteres: " + caracteres;

  // Verificar límites
  if (palabras > 100 || caracteres > 1000) {
    observacionesInput.setCustomValidity("Se ha excedido el límite de palabras o caracteres.");
  } else {
    observacionesInput.setCustomValidity("");
  }
});


function mostrarConfirmacion(event) {
    event.preventDefault(); // Previene el envío del formulario
  
    // Muestra el aviso de confirmación
    var confirmacion = confirm("¿Está usted a punto de enviar este formulario. ¿Está seguro?");
    
    if (confirmacion) {
      document.getElementById("formulario").submit(); // Envía el formulario si se hace clic en "Aceptar"
    }
  }
  
  