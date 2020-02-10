$.getJSON("/articles", function(data) {
    for (var i = 0; i < data.length; i++) {
        $("#articleSpace").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    }
})

$(".btn").on("click", function() {
    alert("hello")
})