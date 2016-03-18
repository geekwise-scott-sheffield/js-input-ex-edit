//
////independant: calls HTML input
//var inputBox = document.querySelector("#input");
////independant: calls HTML button
//var button = document.querySelector("#button");
////independant: calls HTML calls unordered list
//var contentContainer = document.querySelector("#ul");
////independant: variable; curently unassigned
//var item;
//
////semi-independant: takes a parameter, makes it a li w/ content, nests in ul
////foo = general parameter
//function createListItem(foo){
//    //makes parameter a list item
//    foo = document.createElement("li");
//    //list item is given syntax from input tag
//    foo.textContent = inputBox.value;
//    //list item is placed at the top of the unordered list
//    contentContainer.insertBefore(foo, contentContainer.firstChild);
//}
//


$(document).ready(function(){
    $("#button").click(function(){
        var content = $("#input").val();
        var newItem = $(document.createElement('li'));
        $(newItem).text(content);
        $("#ul").prepend(newItem);
    });
});