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

// app.use(express.static("public"));

mongoose.connect("mongodb://localhost/matthewdemonaco", { useNewUrlParser: true });

//Using a get route to grab HTTP for scraping
app.get("/", function (req, res) {
    axios.get("https://www.wsj.com").then(function (response) {
        var $ = cheerio.load(response.data);


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
    });
});
//go to page to locate articles
app.get("/articles", function(req, res) {
    db.Article.find({})
    .then(function(dbArticle) {
        res.json(dbArticle)
    }).catch(function(err) {
        res.json(err);
    });
});
//grab a specific article by its ID

app.get("/articles/:id", function(req, res) {
    db.Article.findOne({ _id: req.params.id })
    .populate("note")
    .then(function(dbArticle) {
        res.json(dbArticle);
    })
    .catch(function(err) {
        res.json(err);
    });
});

//posting and saving an article

app.post("/articles/:id", function(req, res) {
    db.Note.create(req.body)
    .then(function(dbNote) {
        return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    })
    .then(function(dbArticle) {
        res.json(dbArticle);
    })
    .catch(function(err) {
        res.json(err);
    });
});

//Server info
app.listen(PORT, function() {
    console.log(PORT + " is running")
});