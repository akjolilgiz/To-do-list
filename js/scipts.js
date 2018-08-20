// business logic
function ToDoList (item, time){
  this.itemName = item
  this.timeName = time;
}
ToDoList.prototype.DoneBy = function() {
  return this.itemName + " by: " + this.timeName;
}


//user interface logic
$(document).ready(function(){
  $("form#list").submit(function(event){
    event.preventDefault();

    var inputtedItem = $("input#newItem").val();
    var doBy = $("input#doBy").val()
    var newToDoList = new ToDoList(inputtedItem, doBy);

    $("ul#ListofTask").append("<li><span class='items'>" + newToDoList.DoneBy() + "</span></li>");

    $(".items").last().click(function(){
      $(".finishedItems").append("<li>"+ newToDoList.DoneBy() + "</li>");
      $(this).hide();
    })

    $("input#newItem").val('')
  });
});
