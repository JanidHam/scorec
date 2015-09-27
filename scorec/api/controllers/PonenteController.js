/**
 * PonenteController
 *
 * @description :: Server-side logic for managing ponentes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
helpers = require('../utils/helpers')

module.exports = {
	createPonente: function (req, res) {
		var ponente = req.allParams()
		Ponente.create(ponente).exec(function (error, ponente) {
			if (error) return res.serverError(error)

			res.statusCode = 201
        	return res.json(helpers.jsonfy('ok', ponente))
		})
	}
};

