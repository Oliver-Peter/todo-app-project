import {render, todoArr, items} from "/js_modules/render.js";





export function remove (index) {

  todoArr.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todoArr));
  localStorage.setItem('tasksDone', JSON.stringify(todoArr));
  render();
};


//NOTE counter function

let counter = items.length - 1;
let taskCounter = document.querySelector('.tasks__open');

export function countOpenTasks(checkBox) {


  if (checkBox.checked) {
    counter -= 1;
    
  } else {
    counter += 1;
  }
  taskCounter.innerHTML = counter + " remain";
}


export function taskDone() {

  let list = document.querySelector('.todo-list');

  let items = list.querySelectorAll('.item');
  let checkedTasks = [];

  items.forEach(item => {
    let check =  item.querySelector('.item__checkbox');
    if(check.checked) {
      checkedTasks.push(item.children[1].innerText);
    }
  });

  /* localStorage.setItem('todos' , JSON.stringify(checkedTasks)); */
  localStorage.setItem('tasksDone' , JSON.stringify(checkedTasks));

}

//NOTE clear completed

export function clearAllCompleted() {
  
  let toDelete = JSON.parse(localStorage.getItem('tasksDone'));

    toDelete == [];
    /* localStorage.setItem('todos' , JSON.stringify(toDelete)); */
    /* localStorage.setItem('todos' JSON.stringify(openTasks)) */
    render();
  }






