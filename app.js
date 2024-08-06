const express = require("express");
const app = express();
const path = require("path");

// set ejs view engine and views path
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set middleware
app.use(express.urlencoded({ extended: true }));

// import & set router
const indexRouter = require("./routes/indexRouter.js");
app.use(indexRouter);

app.listen(3000);
