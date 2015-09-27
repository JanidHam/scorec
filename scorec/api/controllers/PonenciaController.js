/**
 * PonenciaController
 *
 * @description :: Server-side logic for managing ponencias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	viewCreatePonencia: function (req, res, next) {
		Ponente.find().exec({
			error: function (err) {
				return res.serverError(err)
			},
			success: function (ponentes) {
				Tema.find().exec({
					error: function (err) {
						return res.serverError(err)			
					},
					success: function (temas) {
						return res.view( 'ponencias/ponencias_form', { ponentes: ponentes, temas: temas } )
					}
				})
			}
		})
	},

	createPonencia: function (req, res) {
		var ponencia = req.allParams()
		Ponencia.create(ponencia).exec({
			error: function (err) {
				return res.serverError(err)
			},
			success: function (ponencia) {
				res.statusCode = 201
        		return res.json(helpers.jsonfy('ok', ponencia))
			}
		})
	}
};

