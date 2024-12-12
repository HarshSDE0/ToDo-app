let input = document.querySelector('input');
let container = document.querySelector('.container');
let add_btn = document.querySelector('.fa-circle-plus');
add_btn.addEventListener('click',function(){
               if(input.value!=""){
                              let ul = document.createElement('ul');
                              let li_items = document.createElement('li');
                              li_items.innerText = input.value;
                              container.appendChild(ul);
                              ul.appendChild(li_items);
                              input.value="";

                              let del_btn = document.createElement('button');
                              del_btn.classList.add('del_btn');
                              del_btn.innerText = "delete";
                              li_items.appendChild(del_btn);
               }
});
container.addEventListener('click', function(event){
               if(event.target.className == "del_btn"){
                              let parent = event.target.parentElement;
                              parent.remove();
               }
})