

export let list = document.querySelector('.todo-list');

export let delBtn = document.querySelector('button.item__delete');

export let checkBox = document.querySelector('.item__checkbox');

/* export let tasks = document.querySelectorAll('p.item__status'); //geht nicht...warum?
 */

export let todoInput = document.querySelector('.new-todo');


//NOTE Menu Elements

export let taskCounter = document.querySelector('.tasks__open'); //Variable funktioniert nicht im app.js Modul prüfung mit console.log ergab 'null'
export let clearAllBtn = document.querySelector('#clearAll');
export let filterAllBtn = document.querySelector('#all');
export let filterActiveBtn = document.querySelector('#active');
export let filterComplBtn = document.querySelector('#completed');