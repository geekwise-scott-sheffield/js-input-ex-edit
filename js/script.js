var input_box;
var color_button;
var content_container;
var content;
var listPlaceholder;


document.addEventListener('DOMContentLoaded',function(event){

    //input_box = document.createElement('input');
    input_box = document.querySelector('#input');
    input_box.style.width = '50%';

    color_button = document.querySelector('#button');
    color_button.textContent = 'create color';

    content_container = document.querySelector('#ul');

    listPlaceholder = document.querySelector('#spclLI');


    color_button.addEventListener('click',function(event){
        content = document.createElement('li');
        content.textContent = input_box.value;
        //content.style.backgroundColor = input_box.value;
        //content_container.appendChild(content);
        content_container.insertBefore(content, content_container.firstChild);

    });

    
});