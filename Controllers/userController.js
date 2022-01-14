const { user, history } = require("../models/");
const { hashPassword, checkHash } = require("../helpers/bcrypt");
const moment = require("moment");
class userController {
	static async register(req, res, next) {
		try {
			let { email, username, password, photo, birthday, gender, role } =
				req.body;
			console.log(email);

			let result = await user.create({
				email,
				username,
				password: await hashPassword(password),
				photo,
				birthday,
				gender,
				role,
			});

			if (result) {
				await history.create({
					activity: `${email} created an account on ${moment(
						new Date()
					).format("DD/MM/YYYY")}`,
				});
				res.status(200).json({ username, email });
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
						username: result.username,
						email: result.email,
					});
				} else {
					throw new Error();
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
}

module.exports = userController;
