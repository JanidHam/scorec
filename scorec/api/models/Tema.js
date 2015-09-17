/**
* Tema.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	tableName: 'temas',
	attributes: {
		idTema: {
			type: 'integer',
	  		autoIncrement: true,
	  		primaryKey: true,
	  		required: true,
	  		unique: true,
	  		columnName: 'id_tema'
		},
		nombre: {
			type: 'string',
			size: 150,
			required: true,
			columnName: 'nombre'
		},
		ponencias: {
			collection: 'Ponencia',
			via: 'tema'
		}


	}
};

