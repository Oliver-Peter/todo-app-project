import { initialStorage  } from "/js_modules/data.js";
import { render, todoArr } from "/js_modules/render.js";
import { 
  list, 
  delBtn, 
  checkBox, 
  todoInput,
  taskCounter,
  clearAllBtn,
  filterAllBtn,
  filterActiveBtn,
  filterComplBtn } from "/js_modules/DOM.js";
import * as Tools from "/js_modules/tools.js";


  list.addEventListener('click', (event) => {
    if (event.target.matches('.item__delete')) {
      Tools.remove(event.target.dataset.index);
    };

    if (event.target.matches('.item__checkbox')) {
      
      Tools.countOpenTasks(event.target);
      Tools.taskDone();
    };

    if (event.target.matches('#clearAll')) {
      Tools.clearAllCompleted();
    };

    if (event.target.matches('#completed')) {
      render(localStorage.getItem('tasksDone'));
    }
  });
  
  todoInput.addEventListener('keydown', event =>  {
    if(event.key == 'Enter') {
      event.preventDefault();
      todoArr.unshift(event.target.value);
      localStorage.setItem('todos', JSON.stringify(todoArr));
      render();
      event.target.value = '';
    }
  })




