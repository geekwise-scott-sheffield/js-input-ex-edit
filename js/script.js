$("#button").click(function(){
    var content = $("#input").val();
    var newItem = $(document.createElement('li'));
    $(newItem).text(content);
    $("#ul").prepend(newItem);
});