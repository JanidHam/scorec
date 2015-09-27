import Helpers from '../../utils/helpers.js'

class Tema {
	constructor(id, name, description) {
		this._id          = id
		this._name        = name
		this._description = description

		this._ERROR_TEMA_EMPTY = "El tema no puede ir vacío."
		this._SUCCESS_SAVE     = "El tema fue agregado con éxito."
		this._URL_SAVE_TEMA    = "/tema/add"

		this._bind('_validResponse')
	}

	get name() {
		return this._name
	}
	set name(name) {
		this._name = name
	}

	get description() {
		return this._description
	}
	set description(description) {
		this._description = description
	}

	_bind(...methods) {
		methods.forEach( (method) => this[method] = this[method].bind(this) )
	}

	isValidTema() {
		if (this._name !== '') return true
		else Helpers.drawMessage('danger', this._ERROR_TEMA_EMPTY)

		return false
	}

	_cleanFields() {
		$('#tema').val('')
		$('#description').val('')
	}

	_validResponse(response) {
		console.log(this)
		if (response.message === 'ok') {
			Helpers.drawMessage('success', this._SUCCESS_SAVE)
			this._cleanFields()
		}
		else Helpers.drawMessage('danger', response.message)
	}

	sendData() {
		let data = this.createDataToSend()
		Helpers.sendDataToServer( this._URL_SAVE_TEMA, data, this._validResponse )
	}

	createDataToSend() {
		return {
			name       : this._name,
			description: this._description
		}
	}
}

export default Tema