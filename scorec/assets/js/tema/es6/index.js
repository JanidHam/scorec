import Tema from './Tema.js'

$('#btnSave').on('click', (e) => {
	var tema = new Tema(-1, $('#tema').val().toUpperCase(), $('#description').val().toUpperCase())

	if (!tema.isValidTema()) return false

	tema.sendData()

	return false//Tiene la misma funcion que el e.preventDefault()
})