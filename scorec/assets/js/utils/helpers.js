class Helpers {
	
	static drawMessage(type, message) {
		this.cleanMessages()
		$('#messages').prepend(
			'<div class="alert alert-' + type + ' alert-dismissible" role="alert">' +
			'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
			'<strong>' + message + '</strong> </div>'
		)
		this.cleanMessageByTime(5000)
	}

	static cleanMessageByTime(timeOut) {
		setTimeout( () => $('#messages').empty(), timeOut)
	}

	static cleanMessages() {
		$('#messages').empty()
	}

	static isNumber(value) {
		return /^\d+$/.test(value)
	}

	static sendDataToServer(url, data, succesFunction) {
		$.post(url, data , succesFunction )
	    .fail( (xhr, status) => {
	     	alert("Hubo un error al enviar los datos, favor de comunicarse con el área de informática.")
	    })
	    .always( () => {
	    	console.log('send complete')
	    })
	}
}

export default Helpers