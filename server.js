
var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


require("./controllers/burgers_controllers.js")(app);

app.use(routes);

app.listen(PORT, function() {
    console.log("App is now listening at: " + PORT)
})
