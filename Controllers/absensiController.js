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

			console.log(long, lat);

			let result = await log.create({
				name,
				status,
				long,
				lat,
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

	static async getUserLogs(req, res, next) {
		try {
			let { user_id } = req.params;
			let result = await log.findAll({ where: { user_id } });
			let newRes = result.map((e) => {
				if (e.status === "Accept") {
					e.status = "Sukses";
				} else if (e.status === " Reject") {
					e.status = "Gagal";
				}
				return {
					id: e.id,
					name: e.name,
					status: e.status,
					photo: e.photo,
					long: e.long,
					lat: e.lat,
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
				};
			});
			res.status(200).json(newRes);
		} catch (error) {
			res.status(500).json({ err: error.message });
		}
	}

	// {
	// 	"id": 21,
	// 	"name": "admin",
	// 	"status": "Pending",
	// 	"activity": "Clock In",
	// 	"photo": "https://ik.imagekit.io/waknkqe0dx5v/scaled_c3b9561f-dcfa-4f3a-9ffd-361df2c833145778159893473007654_1iPAi8Usb.jpg",
	// 	"long": null,
	// 	"lat": null,
	// 	"notes": "bhasak",
	// 	"user_id": 8,
	// 	"date": "2022-01-16T12:30:06.644Z",
	// 	"createdAt": "2022-01-16T12:30:07.909Z",
	// 	"updatedAt": "2022-01-16T12:30:07.909Z"
	// },
}

module.exports = absensiController;
