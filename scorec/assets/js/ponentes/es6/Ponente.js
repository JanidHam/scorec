import Helpers from '../../utils/helpers.js'

class Ponente {
	constructor(id, name, company) {
		this._id      = id
		this._name    = name
		this._company = company

		this._ERROR_PONENTE_EMPTY = "El nombre del ponente no puede ir vacío."
		this._SUCCESS_SAVE        = "El ponente fue creado con éxito."
		this._URL_SAVE_PONENTE    = "/ponentes/add"

		this._bind('_validResponse')
	}

	get name() {
		return this._name
	}
	set name(name) {
		this._name = name
	}

	get company() {
		return this._company
	}
	set company(company) {
		this._company = company
	}

	_bind(...methods) {
		methods.forEach( (method) => this[method] = this[method].bind(this) )
	}

	isValidPonente() {
		if (this._name !== '') return true
		else Helpers.drawMessage('danger', this._ERROR_PONENTE_EMPTY)

		return false
	}

	_cleanFields() {
		$('#ponente').val('')
		$('#company').val('')
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
		Helpers.sendDataToServer( this._URL_SAVE_PONENTE, data, this._validResponse )
	}

	createDataToSend() {
		return {
			name   : this._name,
			company: this._company
		}
	}
}

export default Ponente