/**
 * TemaController
 *
 * @description :: Server-side logic for managing temas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
helpers = require('../utils/helpers')

module.exports = {
	createTema: function (req, res) {
		var tema = req.allParams()
		Tema.create(tema).exec(function (error, tema) {
			if (error) return res.serverError(error)

			res.statusCode = 201
        	return res.json(helpers.jsonfy('ok', tema))
		})
	}
};

