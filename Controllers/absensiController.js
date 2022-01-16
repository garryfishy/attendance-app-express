const { Absensi_type, log } = require("../models/");
const moment = require("moment");
const image = require("../helpers/imagekit");

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

	static async attendance(req, res, next) {
		try {
			let { name, activity, long, lat, user_id, notes } = req.body;
			let status = "Pending";
			let date = new Date();

			const imageName = req.file.originalname;
			const buffer = req.file.buffer.toString("base64");
			let photo = await image(imageName, buffer);
			photo = photo.url;

			console.log(name, photo, activity, status, date);

			let result = await log.create({
				name,
				status,
				activity,
				date,
				photo,
				user_id,
				notes,
			});
			if (result) {
				res.status(200).json({
					name,
					status,
					activity,
					photo,
					long,
					lat,
					notes,
					user_id,
					date:
						date.getFullYear() +
						"-" +
						(date.getMonth() + 1) +
						"-" +
						date.getDate(),
					time:
						date.getHours() +
						":" +
						date.getMinutes() +
						":" +
						date.getSeconds(),
				});
			}
		} catch (error) {
			res.status(500).json({ err: error.message });
		}
	}

	static async updateStatus(req, res, next) {
		try {
			let { status } = req.body;
			let { id } = req.params;

			let result = await log.update({ status }, { where: { id } });

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

	static async getAllLogs(req, res, next) {
		try {
			let result = await log.findAll({
				order: [["id", "DESC"]],
				attributes: { exclude: ["createdAt", "updatedAt"] },
			});
			res.status(200).json(result);
		} catch (error) {
			res.status(500).json({ err: error.message });
		}
	}

	static async getLogsById(req, res, next) {
		try {
			let { id } = req.params;
			let result = await log.findByPk(id);
			res.status(200).json(result);
		} catch (error) {
			res.status(500).json({ err: error.message });
		}
	}

	static async getAllPending(req, res, next) {
		try {
			let result = await log.findAll({ where: { status: "Pending" } });
			let newRes = result.map((e) => {
				return {
					id: e.id,
					name: e.name,
					status: e.status,
					activity: e.activity,
					photo: e.photo,
					date:
						e.date.getFullYear() +
						"-" +
						(e.date.getMonth() + 1) +
						"-" +
						e.date.getDate(),
					time:
						e.date.getHours() +
						":" +
						e.date.getMinutes() +
						":" +
						e.date.getSeconds(),
					long: e.long,
					lat: e.lat,
					user_id: e.user_id,
				};
			});
			res.status(200).json(newRes);
		} catch (error) {
			res.status(500).json({ err: error.message });
		}
	}
}

module.exports = absensiController;
