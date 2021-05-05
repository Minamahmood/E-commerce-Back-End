const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
// import sequelize connection

const app = express();
require("dotenv").config({
    path: "./config/connection.js",
});
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(routes);
app.get("/", (req, res) => {
    res.send("test route => home page");
});
app.use((req, res) => {
    res.status(404).json({
        msg: "page not founded",
    });
});
// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});