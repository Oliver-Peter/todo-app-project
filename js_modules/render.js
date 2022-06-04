import {defaultTodos} from '/js_modules/data.js';

//Arrays und localStorage befüllen
export const setDefault = () => {

const defaultTodosJSON = JSON.stringify(defaultTodos);
localStorage.setItem('defaultTodos', defaultTodosJSON);

}

setDefault();

export const render = function () {
  
}

