/**
 * AsistenteController
 *
 * @description :: Server-side logic for managing asistentes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	asistenteList: function (req, res) {
		Asistente.find().exec(function (error, data) {
			if (error)
			{
				return res.serverError(error);
			}
			else
			{
				return res.view('asistentes/asistente_list', { asistentes: data });
			}
		});

	},

	asistenteCreate: function (req, res) {
		var values = req.allParams();
		Asistente.create(values).exec(function createAsistente(error, data) {
			if (error)
			{
				return res.serverError(error);
			}
			else
			{
				return res.redirect('/asistentes');

			}
		});
	}
	
};

