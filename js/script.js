/*


//initial variables
var input_box;
var button;
var content_container;
var content;

//links the input_box variable to the input tag in the html & sets the width to 50% of parent width
function callInput(){
    input_box = document.querySelector('#input');
    input_box.style.width = '50%';
}

//links the button variable to the input tag in the html & assignees text to the button
function callButton(){
    button = document.querySelector('#button');
    button.textContent = 'SUBMIT';
}

// links the content container variable to the unordered list tag in the html
function callList(){
    content_container = document.querySelector('#ul');
}

//when called, this function creates a list item & gets the syntax from the input
function createItem(){
    content = document.createElement('li');
    content.textContent = input_box.value;
}

//calling this function will place content from the input bar to the top of the list
function buttonClicked(){
    callInput();
    callButton();
    callList();
    createItem();

    callList().insertBefore(createItem(), callList().firstChild);

}


document.addEventListener('DOMContentLoaded',function(event){


    //button.addEventListener('click',function(event){
    //    content_container.insertBefore(content, content_container.firstChild);
    //});


});


*/

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

//independant: calls HTML input
var inputBox = document.querySelector("#input");
//independant: calls HTML button
var button = document.querySelector("#button");
//independant: calls HTML calls unordered list
var contentContainer = document.querySelector("#ul");
//independant: variable; curently unassigned
var item;

//semi-independant: takes a parameter, makes it a li w/ content, nests in ul
//foo = general parameter
function createListItem(foo){
    //makes parameter a list item
    foo = document.createElement("li");
    //list item is given syntax from input tag
    foo.textContent = inputBox.value;
    //list item is placed at the top of the unordered list
    contentContainer.insertBefore(foo, contentContainer.firstChild);
}

