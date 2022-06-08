import {render, todoArr, items} from "/js_modules/render.js";


export function addTask(event) {
  if(event.key == 'Enter') {
    event.preventDefault();

    let newTask = (JSON.parse(localStorage.getItem('allTasks')));
    newTask.unshift({task:event.target.value, status:''});
    localStorage.setItem('allTasks' , JSON.stringify(newTask));

    event.target.value = '';

    render(localStorage.getItem('allTasks'));
  }
}


export function remove (index) {

  let tasks = JSON.parse(localStorage.getItem('allTasks'));


  tasks.splice(index, 1);

  console.log(tasks);


  
  /* localStorage.setItem('todos', JSON.stringify(todoArr));
  localStorage.setItem('tasksDone', JSON.stringify(todoArr));
  render(); */
};


//NOTE counter function

let counter = items.length - 1;
let taskCounter = document.querySelector('.tasks__open');

export function countOpenTasks(checkBox) {


  if (checkBox.checked) {
    counter -= 1;
    
  } else {
    counter += 1;
  }
  taskCounter.innerHTML = counter + " remain";
}

//FiXME



export function taskDone() {

  let list = document.querySelector('.todo-list');

  let items = list.querySelectorAll('.item');

  let completedTasks = []

  let openTasks = JSON.parse(localStorage.getItem('tasksOpen'));


  items.forEach(item => {
    let check =  item.querySelector('.item__checkbox');
    let itemStatus = item.children[1];
    if(check.checked) {
      itemStatus.classList.add('item__status--done');
      completedTasks.push({task:itemStatus.innerText, status:'checked'});
    } else {
      itemStatus.classList.remove('item__status--done');
    }
    
    
  });

  localStorage.setItem('completedTasks', JSON.stringify(completedTasks));



}

export function filterCompletet() {

}

export function filterActive() {
  let tasks = JSON.parse(localStorage.getItem('allTasks'));
  let activeTasks = [];

  tasks.forEach(task => {
    if(task.status == '') {
      activeTasks.push(task);
    }
  })

  localStorage.setItem('tasksOpen', JSON.stringify(activeTasks));
  render(localStorage.getItem('tasksOpen'));
}

//NOTE clear completed

/* export function clearAllCompleted() {
  
  let toDelete = JSON.parse(localStorage.getItem('tasksDone'));

    toDelete == [];
    localStorage.setItem('todos' , JSON.stringify(toDelete)); 
    localStorage.setItem('todos' JSON.stringify(openTasks)) 
    render(toDelete);
  } */






