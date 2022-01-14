const { Absensi_type } = require("../models/");
const moment = require("moment");
class absensiController {
	static async getAll(req, res, next) {
		try {
			let result = await Absensi_type.findAll({
				attributes: ["id", "name"],
			});
			res.status(200).json(result);
		} catch (error) {
			res.json(error.message);
		}
	}
}

module.exports = absensiController;
