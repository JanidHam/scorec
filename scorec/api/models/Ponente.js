/**
* Ponente.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	tableName: 'ponentes',
	attributes: {
		idPonente: {
			type: 'integer',
	  		autoIncrement: true,
	  		primaryKey: true,
	  		required: true,
	  		unique: true,
	  		columnName: 'id_ponente'
		},
		nombre: {
			type: 'string',
			size: 80,
			required: true,
			columnName: 'nombre'
		},
		empresa: {
			type: 'string',
			size: 80,
			required: true,
			columnName: 'empresa'
		},
		ponencias: {
			collection: 'Ponencia',
			via: 'ponente'
		}
	}
};

