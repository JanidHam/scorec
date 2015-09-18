/**
* Asistente.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,

	tableName: 'asistentes',
	
  	attributes: {
  		idAsistente: {
	  		type: 'integer',
	  		autoIncrement: true,
	  		primaryKey: true,
	  		required: true,
	  		unique: true,
	  		columnName: 'id_asistente'
	  	},
	  	apellidos: {
	  		type: 'string',
	  		size: 40,
	  		required: true,
	  		columnName: 'apellidos'
	  	},
	  	nombre: {
	  		type: 'string',
	  		size: 40,
	  		required: true,
	  		columnName: 'apellidos'
	  	},
	  	telefono: {
	  		type: 'string',
	  		size: 10,
	  		columnName: 'telefono'
	  	},
	  	email: {
	  		type: 'email',
	  		unique: true,
	  		columnName: 'email'
	  	},
	  	direccion: {
	  		type: 'strig',
	  		size: 100,
	  		columnName: 'direccion'
	  	},
	  	registrado: {
	  		type: 'integer',
	  		defaultsTo: 0,
	  		columnName: 'registrado'
	  	},
	  	numAsistencias: {
	  		type: 'integer',
	  		defaultsTo: 0,
	  		columnName: 'num_asistencias'
	  	}

  	}
};

