//https://www.npmjs.com/package/dotenv
//Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");
mongoose
	.connect(
		"mongodb+srv://" +
			process.env.DB_USER +
			":" +
			process.env.DB_PASS +
			"@cluster0.en309.mongodb.net/sauceDataBase?retryWrites=true&w=majority",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => console.log("Connexion à MongoDB réussie !"))
	.catch(() => console.log("Connexion à MongoDB échouée !"));

//https://cloud.mongodb.com/v2/60eda83e1089a02ca90a8ba0#metrics/replicaSet/60eda9c41d0dbf6ec4bdc42e/explorer/sauceDataBase/users/find

const app = express();

//Cross Origin Resource Sharing (CORS) is a W3C standard that allows a server to relax the same-origin policy. Using CORS, a server can explicitly allow some cross-origin requests while rejecting others.
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);
	next();
});

app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
