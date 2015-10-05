import validator from 'validator';
import Helpers from '../../utils/helpers.js';

class Asistente
{
	constructor(apellidos = '', nombre = '', telefono = '', email = '', direccion = '', registrado = 0, num_asistencias = 0)
	{
		this._apellidos = apellidos;
		this._nombre = nombre;
		this._telefono = telefono;
		this._email = email;
		this._direccion = direccion;
		this._registrado = registrado;
		this._num_asistencias;
		this._error = false;

		this._URL_REQUEST_POST = '/asistentes/add';

		this._bind('_validResponse');
	}

	get apellidos()
	{
		return this._apellidos;
	}

	set apellidos(apellidos)
	{
		this._apellidos = apellidos;
	}

	get nombre()
	{
		return this._nombre;
	}

	set nombre(nombre)
	{
		this._nombre = nombre;
	}

	get telefono()
	{
		return this._telefono;
	}

	set telefono(telefono)
	{
		this._telefono = telefono;
	}

	get email()
	{
		return this._email;
	}

	set email(email)
	{
		this._email = email;
	}

	get direccion()
	{
		return this._direccion;
	}

	set direccion(direccion)
	{
		this._direccion = direccion;
	}

	get errores()
	{
		return this._errores;
	}

	set setError(error)
	{
		this._errores.push(error);
	}

	_bind(...methods) {
		methods.forEach( (method) => this[method] = this[method].bind(this) )
	}

	isValidAsistente()
	{
		if (validator.equals(validator.trim(this._apellidos), ''))
		{
			this._error = true;
			Helpers.drawMessage('danger', 'El campo Apellidos es obligatorio');
		}

		if (validator.equals(validator.trim(this._nombre), ''))
		{
			this._error = true;
			Helpers.drawMessage('danger', 'El campo Nombre(s) es obligatorio');
		}

		if (!validator.equals(validator.trim(this._email), ''))
		{
			if (!validator.isEmail(this._email))
			{
				this._error = true;
				Helpers.drawMessage('danger', 'El email no es válido');
			}
			
		}

		if (!this._error)
		{
			return true;
		}

		this._error = false;
		return false;
	}

	sendData() {
		let data = this.createDataToSend()
		Helpers.sendDataToServer( this._URL_REQUEST_POST, data, this._validResponse )
	}

	createDataToSend() {
		return {
			apellidos: this._apellidos,
			nombre: this._nombre,
			telefono: this._telefono,
			email: this._email,
			direccion: this._direccion

		}
	}

	_cleanFields()
	{
		$('#id_apellidos').val('');
		$('#id_nombre').val('');
		$('#id_telefono').val('');
		$('#id_email').val('');
		$('#id_direccion').val('');
		$('#id_nombre').focus();
	}

	_validResponse(response) {
		if (response.message === 'ok') {
			Helpers.drawMessage('success', 'El asistente ha sido guardado con éxito');
			this._cleanFields();
		}
		else Helpers.drawMessage('danger', response.message);
	}
}

export default Asistente;