$(function(){

    $("#createBurger").click(function(event){
        event.preventDefault();
        var newBurger={
        burger_name: $("#creation").val().trim()
    }
        $.post("/api/burger", newBurger, function(req, res){

        }).then(
            function() {
              // Reload the page to get the updated list
              location.reload();
            }
    )
})

    $(".uneaten").click(function(event){
        event.preventDefault();
        var eatenBurger = {
            id: parseInt($(this).attr("data-id"))
        }
        console.log(eatenBurger);
        $.ajax("/api/burgers/" + eatenBurger.id, {
            type: "PUT",
            data: eatenBurger
          }).then(function(){
            location.reload();
        })
    })
})