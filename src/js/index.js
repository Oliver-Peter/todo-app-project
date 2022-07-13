import { initialStorage  } from "./data.js";
import { render, todoArr } from "./render.js";
import { 
  list, 
  delBtn, 
  checkBox, 
  todoInput,
  taskCounter,
  clearAllBtn,
  filterAllBtn,
  filterActiveBtn,
  filterComplBtn } from "./DOM.js";
import * as Tools from "./tools.js";
import '../scss/main.scss';


  list.addEventListener('click', (event) => {
    if (event.target.matches('.item__delete')) {
      Tools.remove(event.target.dataset.index);
    };

    if (event.target.matches('.item__checkbox')) {
      
      Tools.countOpenTasks(event.target);
      Tools.taskDone();
    };
//FIXME if Anweisung hier und in tools.js fixen
  /*   if (event.target.matches('#clearAll')) {
      Tools.clearAllCompleted();
    }; */

    if (event.target.matches('#completed')) {
      Tools.filterCompleted();
    }

    if (event.target.matches('#active')) {
      Tools.filterActive();
    }

    if (event.target.matches('#all')) {
      render(JSON.parse(localStorage.getItem('allTasks')));
    }
  });
  
  todoInput.addEventListener('keydown', event =>  {
    Tools.addTask(event);
  })




