import Helpers from '../../utils/helpers.js'

class Ponencia {
	constructor(id, ponente, tema, date, startHour, endHour, minLate, minFault, aula) {
		this._id        = id
		this._ponente   = ponente
		this._tema      = tema
		this._date      = date
		this._startHour = startHour
		this._endHour   = endHour
		this._minLate   = minLate
		this._minFault  = minFault
		this._aula      = aula

		this._ERROR_PONENTE_EMPTY            = "Debe seleccionar un ponente de la lista."
		this._ERROR_TEMA_EMPTY               = "Debe seleccionar un tema de la lista."
		this._ERROR_DATE_EMPTY               = "Debe seleccionar una fecha para la ponencia."
		this._ERROR_STARTHOUR_EMPTY          = "Debe seleccionar la hora inicio de la ponencia."
		this._ERROR_ENDHOUR_EMPTY            = "Debe seleccionar la hora fin de la ponencia."
		this._ERROR_MINLATE_EMPTY            = "Debe seleccionar los minutos de retardo permitidos."
		this._ERROR_MINFAULT_EMPTY           = "Debe seleccionar los minutos de retardo para considerar falta."
		this._ERROR_AULA_EMPTY               = "Debe seleccionar el aula de la ponencia."
		this._ERROR_MINLATE_INVALID          = "Sólo se aceptan números enteros para los minutos de retardo."
		this._ERROR_MINFAULT_INVALID         = "Sólo se aceptan números enteros para los minutos de falta."
		this._ERROR_MINLATE_GRATTER_MINFAULT = "Los minutos de retardo no pueden exceder a los de falta."
		this._SUCCESS_SAVE                   = "La ponencia se creó con éxito."
		this._URL_SAVE_PONENCIA              = "/ponencias/add"

		this._bind('_validResponse')
	}

	get ponente() {
		return this._ponente
	}
	set ponente(ponente) {
		this._ponente = ponente
	}

	get tema() {
		return this._tema
	}
	set tema(tema) {
		this._tema = tema
	}

	get date() {
		return this._date
	}
	set date(date) {
		this._date = date
	}

	get startHour() {
		return this._startHour
	}
	set startHour(startHour) {
		this._startHour = startHour
	}

	get endHour() {
		return this._endHour
	}
	set endHour(endHour) {
		this._endHour = endHour
	}

	get minLate() {
		return this._minLate
	}
	set minLate(minLate) {
		this._minLate = minLate
	}

	get minFault() {
		return this._minFault
	}
	set minFault(minFault) {
		this._minFault = minFault
	}

	get aula() {
		return this._aula
	}
	set aula(aula) {
		this._aula = aula
	}

	_bind(...methods) {
		methods.forEach( (method) => this[method] = this[method].bind(this) )
	}

	isValidPonencia() {
		if (this._ponente > 0) {
			if (this._tema > 0) {
				if (this._date !== '') {
					if (this._startHour !== '') {
						if (this._endHour !== '') {
							if (this._minLate !== '') {
								if (Helpers.isNumber(this._minLate)) {
									if (this._minFault !== '') {
										if (Helpers.isNumber(this._minFault)) {
											if (this._minLate < this._minFault) {
												if (this._aula !== '') return true
												else Helpers.drawMessage('danger', this._ERROR_AULA_EMPTY)
											}
											else Helpers.drawMessage('danger', this._ERROR_MINLATE_GRATTER_MINFAULT)
										}
										else Helpers.drawMessage('danger', this._ERROR_MINFAULT_INVALID)
									}
									else Helpers.drawMessage('danger', this._ERROR_MINFAULT_EMPTY)
								}
								else Helpers.drawMessage('danger', this._ERROR_MINLATE_INVALID)
							}
							else Helpers.drawMessage('danger', this._ERROR_MINLATE_EMPTY)
						}
						else Helpers.drawMessage('danger', this._ERROR_ENDHOUR_EMPTY)
					}
					else Helpers.drawMessage('danger', this._ERROR_STARHOUR_EMPTY)
				}
				else Helpers.drawMessage('danger', this._ERROR_DATE_EMPTY)
			}
			else Helpers.drawMessage('danger', this._ERROR_TEMA_EMPTY)
		}
		else Helpers.drawMessage('danger', this._ERROR_PONENTE_EMPTY)

		return false
	}

	_cleanFields() {
		//$('#ponente').val('')
		//$('#company').val('')
	}

	_validResponse(response) {
		if (response.message === 'ok') {
			Helpers.drawMessage('success', this._SUCCESS_SAVE)
			this._cleanFields()
		}
		else Helpers.drawMessage('danger', response.message)
	}

	sendData() {
		let data = this.createDataToSend()
		Helpers.sendDataToServer( this._URL_SAVE_PONENCIA, data, this._validResponse )
	}

	createDataToSend() {
		return {
			ponente  : this._ponente,
			tema     : this._tema,
			date     : this._date,
			startHour: this._startHour,
			endHour  : this._endHour,
			minLate  : this._minLate,
			minFault : this._minFault,
			aula     : this._aula
		}
	}
}

export default Ponencia