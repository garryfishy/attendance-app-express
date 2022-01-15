const express = require("express");
const app = express();
const port = 3000;
const multer = require("multer");
const cors = require("cors");
const UserController = require("./Controllers/userController");
const absensiController = require("./Controllers/absensiController");
const upload = require("./helpers/multer");

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

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});