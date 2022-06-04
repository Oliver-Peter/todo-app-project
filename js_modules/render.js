import {defaultTodos} from '/js_modules/data.js';

let todoArr = [];


//Arrays und localStorage befüllen
export const setDefault = () => {

let defaultTodosJSON = JSON.stringify(defaultTodos);

localStorage.setItem('defaultTodos', defaultTodosJSON);

localStorage.setItem('todos', JSON.stringify(todoArr));

}

setDefault();



export const render = function () {
 

  if(localStorage.getItem('todos') === '[]') {
    todoArr = JSON.parse(localStorage.getItem('defaultTodos'));
      
  } else {
    todoArr = JSON.parse(localStorage.getItem('todos'));
    
  }
  console.log(todoArr);
}

render();

