var express = require('express');

var logger = require('morgan');

var mongoose = require('mongoose');

var cheerio = require('cheerio');

var axios = require('axios');

var db = require("./models");

var PORT = 8000;

var app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setting up our handlebars engine
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);


//Server info
app.listen(PORT, function() {
    console.log(PORT + " is running")
});