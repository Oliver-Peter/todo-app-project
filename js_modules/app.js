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

    if (event.target.matches('#active')) {
      render(localStorage.getItem('tasksOpen'));
    }

    if (event.target.matches('#all')) {
      render(localStorage.getItem('allTasks'));
    }
  });
  
  todoInput.addEventListener('keydown', event =>  {
    Tools.addTask(event);
  })




