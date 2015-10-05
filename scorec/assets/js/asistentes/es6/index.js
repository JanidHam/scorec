var Asistente = require('./Asistente.js');
var Helpers = require('../../utils/helpers.js');

$('#id_button_guardar').click(function (e) {
	e.preventDefault();
	let apellidos = $('#id_apellidos').val();
	let nombre = $('#id_nombre').val();
	let telefono = $('#id_telefono').val();
	let email = $('#id_email').val();
	let direccion = $('#id_direccion').val();

	let asistente = new Asistente(apellidos, nombre, telefono, email, direccion);

	if (asistente.isValidAsistente())
	{
		asistente.sendData();
	}

});