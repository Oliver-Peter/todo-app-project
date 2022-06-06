import {render, todoArr, items} from "/js_modules/render.js";





export function remove (index) {

  todoArr.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todoArr));
  render();
};

export function done (index) {
  let newArr = todoArr.splice(index, 1);
  let finishedTodo = newArr[0];
  todoArr.push(finishedTodo);
  localStorage.setItem('todos', JSON.stringify(todoArr));
  render();

  //erledigte Aufgaben sollen durchgestrichen sein
  //Idee: 
  //Wenn checkmark == checked Soll die ...--done Klasse mittels toggle auf dem item__status Element aktivert werden.
  //

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

//NOTE clear completed

/* let checkBox = document.querySelector('.item__checkbox') */
//FIXME
    //funktioniert nicht wie erwartet, da sich der Index der einzelnen Items innerhalb des Arrays nach jedem Aufruf verändert.

    //Einzeln löschen funktioniert.
export function clearAllCompleted() {

  items.forEach(item => {
    let checkBox = item.querySelector('.item__checkbox');
      if(checkBox.checked) {
        let itemIndex = checkBox.dataset.index;
        console.log(itemIndex);
        todoArr.splice(itemIndex, 1);
        console.log(todoArr);
      }
    })



    
    /* render(); */
}

export function filterCompleted() {

  let completedArr = [];

  items.forEach(item => {
    let checkBox = item.querySelector('.item__checkbox');
      if(checkBox.checked) {
        let itemIndex = checkBox.dataset.index;
        let newArr = todoArr.splice(itemIndex, 1);
        let completedItem = newArr[0];
        completedArr.push(completedItem);
      }
    })

    /* localStorage.setItem('todos', JSON.stringify(completedArr)); */
    
}



