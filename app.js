const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const multer = require("multer");
const cors = require("cors");
const UserController = require("./Controllers/userController");
const absensiController = require("./Controllers/absensiController");
const activityController = require("./Controllers/activityController");
const upload = require("./helpers/multer");
const morgan = require("morgan");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// USER
app.post("/register", upload.single("image"), UserController.register);
app.post("/login", UserController.login);
app.get("/user/:id", UserController.getUser);
app.post("/edit-user/:id", upload.single("image"), UserController.update);

// ABSENSI
app.post("/attend", upload.single("image"), absensiController.attendance);
app.get("/attendance-type", absensiController.getAll);
app.get("/all-logs", absensiController.getAllLogs);
app.get("/logs/:id", absensiController.getLogsById);
app.post("/changeStatus/:id", absensiController.updateStatus);
app.get("/statuspending", absensiController.getAllPending);

// CLIENT API
app.get("/clients", UserController.getClient);

// CASES API
app.get("/cases", UserController.getCase);
app.get("/cases/:client_id", UserController.getCaseById);
app.post(
	"/activities",
	upload.single("image"),
	activityController.createActivity
);

app.get("/kegiatan_type", activityController.getAllKegiatanType);
module.exports = app;

app.get("/activities", activityController.getAll);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
