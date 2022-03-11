const express = require("express");
const app = express();
const port = process.env.PORT || 80;
const path = require("path");
const ejs = require("ejs");
const appRoutes = require("./src/routes/app");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./src/config/database");
const { urlencoded } = require("express");

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(expressLayouts);
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(appRoutes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
