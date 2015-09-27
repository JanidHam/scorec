/**
* Ponencia.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,

	tableName: 'ponencias',
	
	attributes: {
		aula: {
			type: 'string',
			size: 8,
			required: true,
			columnName: 'aula'
		},
		date: {
			type: 'date',
			required: true,
			columnName: 'fecha'
		},
		startHour: {
			type: 'string',
			required: true,
			columnName: 'hora_inicio'
		},
		endHour: {
			type: 'string',
			required: true,
			columnName: 'hora_fin'
		},
		minLate: {
			type: 'integer',
			size: 3,
			required: true,
			columnName: 'mins_retardo'
		},
		minFault: {
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

