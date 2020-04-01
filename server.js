
var express = require("express");
var methodOver = require("method-override");
var bodyParser = require("body-parser");
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3307;


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.engine('handlebars', exphbs({
    extname: 'handlebars', 
    defaultLayout: 'index', 
    layoutsDir: path.join(__dirname, 'views'),
    partialsDir  : [
        //  path to your partials
        path.join(__dirname, 'views/partials'),
    ]
}));

var routes = require("./controllers/burgers_controllers");

app.use("/", routes);

// The listener. Starts the server. 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});