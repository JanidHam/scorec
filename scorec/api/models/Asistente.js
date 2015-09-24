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
	  		columnName: 'nombre'
	  	},
	  	telefono: {
	  		type: 'string',
	  		size: 15,
	  		columnName: 'telefono'
	  	},
	  	email: {
	  		type: 'email',
	  		unique: true,
	  		columnName: 'email'
	  	},
	  	direccion: {
	  		type: 'string',
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

  	},

  	beforeCreate: function (values, cb) {
  		values.nombre = values.nombre.toUpperCase();
  		values.apellidos = values.apellidos.toUpperCase();
  		values.email = values.email.toLowerCase();
  		values.direccion = values.direccion.toUpperCase();
  		cb();
  	}
};

