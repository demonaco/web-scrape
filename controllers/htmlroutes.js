var express = require('express');

var db = require("../models")

var router = express.Router();

router.get("/articles/:id", function (req, res) {
    db.Article.find({})
}).then(function(data) {
    var hbsObj = {
        article: data
    }
    res.render("index", hbsObj);
});