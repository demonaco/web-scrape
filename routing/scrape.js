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
                .then(function (articles) {
                    console.log(articles);
                })
                .catch(function (err) {
                    console.log(err);
                });
        });

        res.render("index");
    });
});
//go to page to locate articles
app.get("/articles", function(req, res) {
    db.Article.find({})
    .then(function(articles) {
        res.json(articles)
    }).catch(function(err) {
        res.json(err);
    });
});
//grab a specific article by its ID

app.get("/articles/:id", function(req, res) {
    db.Article.findOne({ _id: req.params.id })
    .populate("note")
    .then(function(articles) {
        res.json(articles);
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
    .then(function(articles) {
        res.json(articles);
    })
    .catch(function(err) {
        res.json(err);
    });
});
