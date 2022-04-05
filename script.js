var themeBtn = document.querySelector(".theme");
var todoInput = document.querySelector(".new-todo");
var todoList = document.querySelector(".todo-list");
var todoMenu = document.querySelector(".menu");
var deleteIt = document.querySelector(".item__delete");
var delButtons = Array.from(document.querySelectorAll(".item__delete"));
var clear = document.querySelector(".task__clear");
var todoItems = todoList.getElementsByClassName("item");

function addTodoItem() {
  console.log("newWorld");
  var newItem = document.createElement("li");
  var todoText = todoInput.value;
  newItem.classList.add("item");
  newItem.innerHTML = `<label class="item__checkwrap">
                        <input class="item__checkbox" type="checkbox">
                        <span class="item__checkmark"></span>
                        <span class="item__checkborder"></span>
                      </label>
                      <p class="item__status">${todoText}</p>
                      <button type="button" class="item__delete"><i class="fa-solid fa-xmark"></i></button>`;
  todoList.insertBefore(newItem, todoMenu);
  delButtons.push(newItem.querySelector(".item__delete"));

  for (var button of delButtons) {
    button.addEventListener("click", function (e) {
      var child = e.target.parentNode;
      var parent = child.parentNode;
      parent.remove();
      console.log(parent);
    });
  }
} //! Doppelt gemopelt */

for (var button of delButtons) {
  button.addEventListener("click", function (e) {
    var child = e.target.parentNode;
    var parent = child.parentNode;
    parent.remove();
    console.log(parent);
  });
}

todoInput.addEventListener("keydown", function (e) {
  if (e.code == "Enter") {
    addTodoItem();
    e.preventDefault();
    todoInput.value = "";
  }
});

clear.addEventListener("click", function (e) {
  while (todoItems.length != 0) {
    for (task of todoItems) {
      console.log(task);
      task.remove();
    }
  }
});

themeBtn.addEventListener("click", function () {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  }
});
