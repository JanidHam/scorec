import Ponencia from './Ponencia.js'

$('#btnSave').on('click', (e) => {
	var ponencia = new Ponencia(-1, $('#ponentes').val(), $('#temas').val(), $('#date').val(), 
								$('#startHour').val(), $('#endHour').val(), $('#minLate').val(), 
								$('#minFault').val(), $('#aula').val()
							)

	if (!ponencia.isValidPonencia()) return false

	ponencia.sendData()

	return false//Tiene la misma funcion que el e.preventDefault()
})

function handlerNewData(data, object) {
	object.append('<option value="' + data.id + '">' + data.name + '</option>')
}

io.socket.on('connect', () => {
	io.socket.on('new tema', (tema) => {
		handlerNewData(tema, $('#temas'))
	})
	io.socket.on('new ponente', (ponente) => {
		handlerNewData(ponente, $('#ponentes'))
	})
})