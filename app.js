const express = require("express");
const app = express();
const port = 3000;
const multer = require("multer");
const cors = require("cors");
const UserController = require("./Controllers/userController");
const absensiController = require("./Controllers/absensiController");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// USER
app.post("/register", UserController.register);
app.post("/login", UserController.login);
app.get("/user/:id", UserController.getUser);

// ABSENSI
app.get("/attendance-type", absensiController.getAll);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
