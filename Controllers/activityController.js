const { kegiatan, clients, cases, user, log } = require("../models/");
const image = require("../helpers/imagekit");

class activityController {
	static async createActivity(req, res, next) {
		try {
			let {
				kasus,
				lawyer_id,
				long,
				lat,
				subject,
				client,
				notes,
				kegiatan_type_id,
			} = req.body;

			let status = "Pending";

			const imageName = req.file.originalname;
			const buffer = req.file.buffer.toString("base64");
			let photo = await image(imageName, buffer);
			photo = photo.url;

			let result = await kegiatan.create({
				case: kasus,
				photo,
				status,
				long,
				lat,
				subject,
				status,
				client,
				notes,
				kegiatan_type_id,
				lawyer_id,
			});

			if (result) {
				res.status(200).json(result);
			}
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

	static async getAllKegiatanType(req, res, next) {
		let kegiatanType = [
			{
				id: 1,
				name: "Start Kunjungan",
			},
			{
				id: 2,
				name: "Finish Kunjungan",
			},
		];
		res.status(200).json(kegiatanType);
	}

	static async getAll(req, res, next) {
		try {
			let result = await kegiatan.findAll();

			if (result) {
				// let findClient = await client.findByPk(result.dataValues.client_id);
				// let findCase = await cases.findByPk(result.dataValues.case_id);
				// let findUser = await user.findByPk(result.dataValues.lawyer_id);

				let emptyObj = [];
				result.map((e) => {
					e.dataValues.kegiatan_type_id = 1
						? "Start Kunjungan"
						: "Finish Kunjungan";
					delete e.dataValues.client_id;
					delete e.dataValues.case_id;
					emptyObj.push(e.dataValues);
				});
				res.status(200).json(emptyObj);
			}
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	static async activityById(req, res, next) {
		try {
			let { id } = req.params;
			let result = await kegiatan.findAll({ where: { lawyer_id: id } });

			console.log(id);

			if (result) {
				// let findClient = await client.findByPk(result.dataValues.client_id);
				// let findCase = await cases.findByPk(result.dataValues.case_id);
				// let findUser = await user.findByPk(result.dataValues.lawyer_id);

				// let emptyObj = [];
				// result.map((e) => {
				// 	e.dataValues.kegiatan_type_id = 1
				// 		? "Start Kunjungan"
				// 		: "Finish Kunjungan";
				// 	delete e.dataValues.client_id;
				// 	delete e.dataValues.case_id;
				// 	emptyObj.push(e.dataValues);
				// });
				res.status(200).json(result);
			}
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	static async updateStatus(req, res, next) {
		try {
			let { status } = req.body;
			let { id } = req.params;

			let result = await kegiatan.update({ status }, { where: { id } });

			if (result) {
				res.status(200).json({
					msg: "Successfully updated",
					status,
				});
			}
		} catch (error) {
			res.status(500).json({ err: error.message });
		}
	}

	static async getAllPending(req, res, next) {
		try {
			let result = await kegiatan.findAll({
				where: { status: "Pending" },
			});
			if (result) {
				res.status(200).json(result);
			}
		} catch (error) {
			res.status(500).json({ err: error.message });
		}
	}
}
module.exports = activityController;
