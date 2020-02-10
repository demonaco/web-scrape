$.getJSON("/articles", function(data) {
    for (var i = 0; i < 20; i++) {
        $("#articleSpace").append("<p data-id='" + data[i]._id + "'>" + "<b>" + data[i].title + "</b>" + "<br />" + data[i].link + "</p>");
    }
})

$(document).on("click", "p", function() {
    $("#noteSection").empty();
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "GET",
        url: "/articles/" + thisId
    }).then(function(data) {
        console.log(data)
        $("#noteSection").append("<h4>" + data.title + "</h4>")
        $("#noteSection").append("<textarea id='body' class='form-control' placeholder='Your comment here'></textarea>")
        $("#noteSection").append("<button data-id='" + data._id + "'class='btn btn-success' id='save'>Save comment</button>")
        $("#noteSection").append("<button data-id='" + data._id +  "'class='btn btn-danger' id='delete'>Delete comment</button>")

         if (data.note) {
           $("#body").val(data.note.body);
        }
    });
});

//When the save button is clicked
$(document).on("click", "#save", function(){
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/" + thisId,
        data: {
            body: $("#body").val()
        }
    }).then(function(data){
        console.log(data);
        $("#noteSection").empty();
    });
    $(document).on("click", "#delete", function(){
        var thisId = $(this).attr("data-id");
        $.ajax({
            method: "DELETE",
            url: "/articles/" + thisId,
            data: {
                body: $("#body").val("")
            }
        }).then(function(data){
            console.log(data);
            $("#noteSection").empty();
        });

$("#body").val("");
})
})