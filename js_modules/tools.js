import {render, todoArr} from "/js_modules/render.js";



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