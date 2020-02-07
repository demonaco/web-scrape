var express = require('express');
var logger = require('logger');
var mongoose = require('mongoose');

var cheerio = require('cheerio');
var axios = require('axios');

var db = require("./models");

var PORT = 8000;

var app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/matthewdemonaco", { useNewUrlParser: true });

//Using a get route to grab HTTP for scraping
app.get("/scrape", function(req, res) {
    axios.get("https://www.washingtonpost.com/politics/?nid=top_nav_politics").then(function(res){
        var $ = cheerio.load(res.data);
    })
})



