const bcrypt = require("bcrypt");

const saltRounds = 10;

async function hashPassword(password) {
	const hash = await bcrypt.hashSync(password, saltRounds);
	return hash;
}

async function checkHash(hashed, password) {
	const check = await bcrypt.compareSync(password, hashed);
	return check;
}

module.exports = { checkHash, hashPassword };
