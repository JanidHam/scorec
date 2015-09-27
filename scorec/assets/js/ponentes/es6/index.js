import Ponente from './Ponente.js'

$('#btnSave').on('click', (e) => {
	var ponente = new Ponente(-1, $('#ponente').val().toUpperCase(), $('#company').val().toUpperCase())

	if (!ponente.isValidPonente()) return false

	ponente.sendData()

	return false//Tiene la misma funcion que el e.preventDefault()
})