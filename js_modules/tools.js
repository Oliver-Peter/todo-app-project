import {render} from "/js_modules/render.js";
import {defaultTodos, todoArr, setArray} from '/js_modules/data.js';

export function remove (index) {

  todoArr.splice(index, 1);
  console.log(todoArr);
  setArray(todoArr);
};