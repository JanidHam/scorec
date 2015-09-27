/**
* Ponente.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,

	tableName: 'ponentes',
	
	attributes: {
		name: {
			type: 'string',
			size: 80,
			required: true,
			columnName: 'nombre'
		},
		company: {
			type: 'string',
			size: 80,
			required: true,
			columnName: 'empresa'
		},
		ponencias: {
			collection: 'Ponencia',
			via: 'ponente'
		}
	},

	afterCreate: function(ponente, next) {
	    sails.io.sockets.emit('new ponente', ponente);
	    next();
  	}
};

