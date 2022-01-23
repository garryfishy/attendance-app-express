const { user, history, client, cases } = require("../models/");
const { hashPassword, checkHash } = require("../helpers/bcrypt");
const moment = require("moment");
const image = require("../helpers/imagekit");
class userController {
	static async getClient(req, res, next) {
		try {
			let result = await client.findAll();

			res.status(200).json(result);
		} catch (error) {}
	}

	static async getCase(req, res, next) {
		try {
			let result = await cases.findAll();

			res.status(200).json(result);
		} catch (error) {}
	}

	static async register(req, res, next) {
		try {
			let { email, username, password, role } = req.body;

			if (!role || role.length === 0) {
				role = "Lawyer";
			}

			let result = await user.create({
				email,
				username,
				password: await hashPassword(password),
				role,
			});

			if (result) {
				await history.create({
					activity: `${email} created an account on ${moment(
						new Date()
					).format("DD/MM/YYYY")}`,
				});
				res.status(200).json({ id: result.id, username, email, role });
			} else {
				throw new Error();
			}
		} catch (error) {
			res.json(error.message);
		}
	}

	static async login(req, res, next) {
		try {
			let { email, password } = req.body;

			let result = await user.findOne({ where: { email } });

			if (result) {
				let check = await checkHash(result.password, password);
				if (check) {
					res.status(200).json({
						msg: "Login Succesfull",
						id: result.id,
						username: result.username,
						email: result.email,
						photo: result.photo,
						role: result.role,
					});
				}
			}
		} catch (error) {
			res.json(error.message);
		}
	}

	static async getUser(req, res, next) {
		try {
			let { id } = req.params;
			let result = await user.findOne({
				where: { id },
				attributes: { exclude: ["password", "createdAt", "updatedAt"] },
			});

			if (result) {
				res.status(200).json(result);
			}
		} catch (error) {
			res.json(error.message);
		}
	}

	static async update(req, res, next) {
		try {
			let {
				email,
				username,
				password,
				birthday,
				gender,
				role,
				phone_number,
			} = req.body;

			let { id } = req.params;

			const imageName = req.file.originalname;
			const buffer = req.file.buffer.toString("base64");
			let photo = await image(imageName, buffer);
			photo = photo.url;

			let result = await user.update(
				{
					email,
					username,
					password: await hashPassword(password),
					photo,
					birthday,
					gender,
					phone_number,
					role,
				},
				{ where: { id } }
			);

			if (result) {
				// await history.create({
				// 	activity: `${email} edited account on ${moment(
				// 		new Date()
				// 	).format("DD/MM/YYYY")}`,
				// });
				res.status(200).json({ username, email, photo });
			} else {
				throw new Error();
			}
		} catch (error) {
			res.json(error.message);
		}
	}

	static async getCaseById(req, res, next) {
		try {
			let { client_id } = req.params;

			let result = await cases.findAll({ where: { client_id } });

			if (result) {
				res.status(200).json(result);
			}
		} catch (error) {
			res.json(error.message);
		}
	}

	static async getUsers(req, res, next) {
		try {
			let result = await user.findAll();
			if (result) {
				res.status(200).json(result);
			}
		} catch (error) {
			res.json(error.message);
		}
	}
}

module.exports = userController;
