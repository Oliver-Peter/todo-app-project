//SECTION import necessyry modules and set default data and  variables

import {initialStorage} from './data.js';
import { list } from "./DOM.js";

//!SECTION

// SECTION render function

export let todoArr = [];

export let items = document.querySelectorAll('.item');

export const render = function (arr = JSON.parse(localStorage.getItem('defaultTodos'))) {
  list.innerHTML = '';


  if (localStorage.getItem('defaultTodos') === null ||localStorage.getItem('defaultTodos') === '[]') {
    console.log(localStorage.getItem('defaultTodos'));
    initialStorage();
  } 
   else {

    todoArr = arr

   }

  

  todoArr.forEach((todo, index) => {

    // NOTE add todos to list
    let li = document.createElement('li');


    li.classList.add('item');

    if (todo.status === 'checked') {

      li.innerHTML = `    
      <label class="item__checkwrap">
        <input class="item__checkbox" type="checkbox" ${todo.status} data-index=${index}>
        <span class="item__checkmark"></span>
        <span class="item__checkborder"></span>
      </label>
      <p class="item__status item__status--done" data-index=${index}>${todo.task}</p>
    <button type="button" class="item__delete" data-index=${index}>X</button>`;

    } else {

      li.innerHTML = `    
      <label class="item__checkwrap">
        <input class="item__checkbox" type="checkbox" data-index=${index}>
        <span class="item__checkmark"></span>
        <span class="item__checkborder"></span>
      </label>
      <p class="item__status" data-index=${index}>${todo.task}</p>
      <button type="button" class="item__delete" data-index=${index}>X</button>`;
    }
  

    list.appendChild(li);

  });

  // NOTE add item-Menue to list

  let itemMenu = document.createElement('li');
  items = document.querySelectorAll('.item');

  itemMenu.innerHTML = `<p class="tasks__open">${items.length - 1} remain</p>
                        <button type="button" id='clearAll' class="tasks__clear">Clear Completed</button>
                      <span class="filter">
                        <button type="button" id='all' class="filter__option filter__option--active">All</button>
                        <button type="button" id='active' class="filter__option">Active</button>
                        <button type="button" id='completed' class="filter__option">Completed</button>
                      </span>`;

  itemMenu.classList.add('menu');

  list.appendChild(itemMenu);

}

// NOTE render it! / do magic
render();


//!SECTION

