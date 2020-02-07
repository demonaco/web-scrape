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
app.get("/", function (req, res) {
    axios.get("https://www.wsj.com").then(function (res) {
        var $ = cheerio.load(res.data);


        $("article h3").each(function (i, element) {

            var result = {};

            result.title = $(this)
                .children("a")
                .text();
            result.link = $(this)
                .children("a")
                .attr("href");

            db.Article.create(result)
                .then(function (dbArticle) {
                    console.log(dbArticle);
                })
                .catch(function (err) {
                    console.log(err);
                });
        });
        res.send("Finished scraping");
    })
})