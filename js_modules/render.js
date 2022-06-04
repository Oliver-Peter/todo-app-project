//SECTION import necessyry modules and set default data and  variables

import {defaultTodos, todoArr, setArray} from '/js_modules/data.js';
import { list } from "/js_modules/DOM.js";


//NOTE fill arrays and localStorage
export const setDefault = () => {

let defaultTodosJSON = JSON.stringify(defaultTodos);

localStorage.setItem('defaultTodos', defaultTodosJSON);

localStorage.setItem('todos', JSON.stringify(todoArr));

}
setDefault();

//!SECTION

// SECTION render function

export const render = function () {
  list.innerHTML = '';

  if(localStorage.getItem('todos') === '[]') {
    setArray(JSON.parse(localStorage.getItem('defaultTodos')));

  } else {
    setArray(JSON.parse(localStorage.getItem('todos')));
  }
  console.log(todoArr);

  todoArr.forEach((todo, index) => {

    // NOTE add todos to list
    let li = document.createElement('li');

    li.innerHTML = `
    <label class="item__checkwrap">
      <input class="item__checkbox" type="checkbox">
      <span class="item__checkmark"></span>
      <span class="item__checkborder"></span>
    </label>
    <p class="item__status ">${todo}</p>
    <button type="button" class="item__delete" data-index=${index}>X</button>`

    li.classList.add('item')

    list.appendChild(li);

  })

  // NOTE add item-Menue to list

  let itemMenu = document.createElement('li');

  itemMenu.innerHTML = `<p class="task__open">5 items</p>
                        <button type="button" class="task__clear">Clear Completed</button>
                      <span class="filter">
                        <button type="button" class="filter__option filter__option--active">All</button>
                        <button type="button" class="filter__option">Active</button>
                        <button type="button" class="filter__option">Completed</button>
                      </span>`;

  itemMenu.classList.add('menu');

  list.appendChild(itemMenu);
}

// NOTE render it! / do magic
render();

//!SECTION

