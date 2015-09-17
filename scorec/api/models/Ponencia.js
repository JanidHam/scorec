/**
* Ponencia.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	tableName: 'ponencias',
	attributes: {
		idPonencia: {
			type: 'integer',
	  		autoIncrement: true,
	  		primaryKey: true,
	  		required: true,
	  		unique: true,
	  		columnName: 'id_ponencia'
		},
		aula: {
			type: 'string',
			size: 8,
			required: true,
			columnName: 'aula'
		},
		fecha: {
			type: 'date',
			required: true,
			columnName: 'fecha'
		},
		horaInicio: {
			type: 'time',
			required: true,
			columnName: 'hora_inicio'
		},
		horaFin: {
			type: 'time',
			required: true,
			columnName: 'hora_fin'
		},
		minsRetardo: {
			type: 'integer',
			size: 3,
			required: true,
			columnName: 'mins_retardo'
		},
		minsFalta: {
			type: 'integer',
			size: 3,
			required: true,
			columnName: 'mins_falta'
		},
		tema: {
			model: 'Tema',
			columnName: 'id_tema'
		},
		ponente: {
			model: 'Ponente',
			columnName: 'id_ponente'
		}


	}
};

