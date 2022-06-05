import {render, todoArr} from "/js_modules/render.js";


export function remove (index) {

  todoArr.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todoArr));
  render();
};

export function done (index) {
  

}