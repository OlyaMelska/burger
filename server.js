const express = require("express");
const app = express();
let PORT = process.env.PORT || 8080;
let exphbs = require("express-handlebars");
const router = require("./controllers/burgers_controller");
let path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/", router);
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
