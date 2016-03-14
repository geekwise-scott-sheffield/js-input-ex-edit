//function appendFunction(event){
//    var input_box = document.getElementById('#input');
//    var button = document.getElementById('#button');
//    var container = document.getElementById('#ul');
//    var listItem;
//
//
//
//
//    listItem = document.createElement('li');
//    listItem.textContent = input_box.value;
//
//    container.appendChild(listItem);
//
//}
//
//document.addEventListener("DOMContentLoaded", function(event){
//    //console.log('howdy');
//
//    appendFunction(onclick);
//
//});


//function addElement () {
//    // create a new div element
//    // and give it some content
//    var newDiv = document.createElement("div");
//    var newContent = document.createTextNode("Hi there and greetings!");
//    newDiv.appendChild(newContent); //add the text node to the newly created div.
//
//    // add the newly created element and its content into the DOM
//    var currentDiv = document.getElementById("ul");
//    document.body.appendChild(newDiv);
//}
//
//document.body.onload = addElement();




var input_box;
var color_button;
var content_container;
var content;


document.addEventListener('DOMContentLoaded',function(event){

    //input_box = document.createElement('input');
    input_box = document.querySelector('#input');
    input_box.style.width = '50%';

    color_button = document.querySelector('#button');
    color_button.textContent = 'create color';

    content_container = document.querySelector('#ul');
    //content = new


    color_button.addEventListener('click',function(event){
        content = document.createElement('li');
        content.textContent = input_box.value;
        //content.style.backgroundColor = input_box.value;
        content_container.appendChild(content);
        
    });




    //color_container = document.createElement('div');
    //color_container.textContent = '';
    //
    //color_container.addEventListener('dblclick',function(event){
    //    this.style.backgroundColor = '';
    //    this.textContent = '';
    //});
    //
    //color_container.addEventListener('mouseover',function(event){
    //
    //    this.style.color = 'white';
    //
    //});





    //document.body.appendChild(input_box);
    //document.body.appendChild(color_button);
    //document.body.appendChild(color_container);

});