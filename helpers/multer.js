const multer = require("multer");
const upload = multer({
	storage: multer.memoryStorage(),
	fileFilter: (req, file, cb) => {
		// if (
		// 	file.mimetype == "image/png" ||
		// 	file.mimetype == "image/jpg" ||
		// 	file.mimetype == "image/jpeg"
		// ) {
		console.log(file.mimetype);
		cb(null, true);
		// } else {
		// 	cb(null, false);
		// 	console.log(file.mimetype);
		// 	return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
		// }
	},
});

module.exports = upload;
