const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");

const connectDB = require("./server/database/connection");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

// HTTP
let http = require("http");
let server = http.Server(app);

// log requests
app.use(morgan("tiny"));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// load assets
app.use("/assets/css", express.static("assets/css"));
app.use("/assets/img", express.static("assets/img"));
app.use("/assets/js", express.static("assets/js"));

// load routers
app.use("/", require("./server/routes/router"));
app.use("/index.html", require("./server/routes/router"));

server.listen(PORT, () => {
  console.log(`Grocery List server is running...`);
});
