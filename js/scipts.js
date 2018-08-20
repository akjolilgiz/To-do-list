// business logic
function ToDoList (item){
  this.itemName = item;
}

//user interface logic
$(document).ready(function(){
  $("form#list").submit(function(event){
    event.preventDefault();

    var inputtedItem = $("input#newItem").val();

    var newToDoList = new ToDoList(inputtedItem);

    $("ul#ListofTask").append("<li><span class='items'>" + newToDoList.itemName + "</span></li>");

    $(".items").last().click(function(){

      $(".finishedItems").append("<li>"+ newToDoList.itemName + "</li>");

      $(".items").hide("<li>" + newToDoList.itemName + "</li>");




    })

    $("input#newItem").val('')
  });
});
