class Field
{
	constructor(requerido = true)
	{
		this._requerido = requerido;
		this._errores = [];
	}

	get errores()
	{
		return this._errores;
	}

	set errores(error)
	{
		this._errores.push(error);
	}

	validarRequerido(valor)
	{
		if (valor().trim() == '')
		{
			this._errores('Este campo es requerido');
			return false;
		}
		return true;
	}
}

class CharField extends Field
{
	constructor(requerido = true, valor, longitud_min, longitud_max)
	{
		super(requerido);
		this._valor = valor;
		this._longitud_min = longitud_min;
		this._longitud_max = longitud_max;
	}

	get valor()
	{
		return this._valor;
	}

	set valor(valor)
	{
		this._valor = valor;
	}

	get requerido()
	{
		return this._requerido;
	}

	set requerido(requerido)
	{
		this._requerido = requerido;
	}

	validarTipo()
	{
		if (typeof this._valor == 'string')
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	validarLongitudMin(valor)
	{
		if (this._longitud_min)
		{
			if (valor.trim().length < this._longitud_min)
			{
				this._errores('El campo debe contener al menos ' + this._longitud_min + ' caracteres');
				return false;
			}
			return true;
		}
		return true;
	}

	validarLongitudMax(valor)
	{
		if (this._longitud_max)
		{
			if (valor.trim().length > this._longitud_max)
			{
				this._errores('El campo no puede contener más de ' + this._longitud_max + ' caracteres');
				return false;
			}
			return true;
		}
		return true;
	}
}

var campo = new CharField(longitud_min = 8, longitud_max = 15);
console.log(campo.validarTipo());