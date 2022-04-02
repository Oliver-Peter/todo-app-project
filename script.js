var themeBtn = document.querySelector(".theme");
var todoInput = document.querySelector(".new-todo");
var todoList = document.querySelector(".todo-list");
var itemDel = document.querySelectorAll(".item__delete")
var item = document.querySelector(".item");

function addTodoItem() {
  console.log("newWorld");
  var newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerHTML = `<label class="item__checkwrap">
                        <input class="item__checkbox" type="checkbox">
                        <span class="item__checkmark"></span>
                        <span class="item__checkborder"></span>
                      </label>
                      <p class="item__status ">1x Fasnacht</p>
                      <button type="button" class="item__delete"><i class="fa-solid fa-xmark"></i></button>`
  todoList.appendChild(newItem);

};

addTodoItem;


themeBtn.addEventListener('click', function()  {


  if(document.body.classList.contains("light-theme")) {
    document.body.classList.add("dark-theme") 
    document.body.classList.remove("light-theme") 
  } else {
    document.body.classList.add("light-theme")
    document.body.classList.remove("dark-theme")
  }
});



 