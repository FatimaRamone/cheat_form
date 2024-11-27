Formulario de Autodiagnóstico

Este es un formulario de autodiagnóstico para pacientes que permite recolectar información personal y síntomas relacionados con posibles enfermedades. El formulario incluye validaciones de datos para garantizar la precisión de la información ingresada.
Características

    Campos obligatorios: Algunos campos, como el nombre, los apellidos, el NIF, el email y la fecha de nacimiento, son obligatorios para completar el formulario.
    Validación de entrada: Se asegura que la información ingresada esté en el formato correcto:
        Los campos de texto para el nombre y los apellidos solo permiten letras y espacios.
        El NIF requiere 8 dígitos seguidos de una letra.
        El campo de correo electrónico valida que se ingrese un email válido.
        El teléfono debe ser un número de 9 dígitos.
    Selección de síntomas: El paciente puede seleccionar entre varios síntomas comunes.
    Observaciones: Un campo de texto donde se puede ingresar información adicional. Se limita a 1000 caracteres.
    Frecuencia de los síntomas: El paciente puede seleccionar la frecuencia con la que experimenta los síntomas.
    Confirmación de envío: Antes de enviar el formulario, se solicita una confirmación por parte del usuario.

Estructura del Proyecto

El proyecto consta de los siguientes archivos principales:
1. HTML (index.html):

    Formulario: El formulario recoge información personal del paciente, incluyendo nombre, apellidos, NIF, email, teléfono, sexo y fecha de nacimiento.
    Síntomas: Se presenta una lista de posibles síntomas en formato de casillas de verificación (checkbox).
    Frecuencia: Se ofrece una lista desplegable para que el paciente indique la frecuencia de los síntomas.
    Observaciones: Se incluye un campo de texto donde el paciente puede añadir observaciones.
    Confirmación: Antes de enviar, se muestra un mensaje de confirmación con opciones de aceptar o cerrar.

2. CSS (styles.css):

    Archivo de estilos que define la apariencia del formulario.
    Puede incluir configuraciones para alinear elementos, cambiar colores y definir la tipografía.

3. JavaScript (script.js):

    Contador de caracteres: Este script maneja el contador de caracteres para el campo de observaciones.
    Confirmación de envío: Controla la ventana de confirmación antes de enviar el formulario.
    Validación: Validación adicional y activación de campos según la interacción del usuario.

Instrucciones de Uso

    Rellenar los campos: Complete todos los campos obligatorios del formulario. Los campos como el nombre y apellidos solo aceptan letras y espacios.
    Seleccionar síntomas: Marque los síntomas que esté experimentando. Puede seleccionar más de uno.
    Indicar la frecuencia: Si ha seleccionado algún síntoma, elija con qué frecuencia los experimenta.
    Observaciones: Si lo desea, puede escribir observaciones adicionales en el campo correspondiente.
    Confirmación: Antes de enviar el formulario, se pedirá una confirmación para asegurarse de que la información es correcta.
    Enviar: Haga clic en el botón "Enviar" para enviar el formulario.

Instalación

    Requisitos previos: No se requieren dependencias externas para ejecutar este formulario.
    Uso local:
        Coloque los archivos index.html, styles.css, y script.js en la misma carpeta.
        Abra index.html en su navegador para ver y probar el formulario.

Notas

    Asegúrese de que el servidor de backend esté configurado correctamente para manejar las solicitudes POST cuando el formulario se envíe.
    El campo de "Frecuencia de los síntomas" está inicialmente deshabilitado y se activa dependiendo de los síntomas seleccionados.
    El script de JavaScript gestiona el contador de caracteres para las observaciones y la confirmación del envío.
