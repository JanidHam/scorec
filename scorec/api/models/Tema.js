/**
* Tema.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,

	tableName: 'temas',
	
	attributes: {
		name: {
			type: 'string',
			size: 150,
			required: true,
			columnName: 'name'
		},
		description: {
			type: 'text',
			columnName: 'description'
		},
		ponencias: {
			collection: 'Ponencia',
			via: 'tema'
		}
	}
};

