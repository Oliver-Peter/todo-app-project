import { render, todoArr, items } from "./render.js";


export function addTask(event) {
  if (event.key == 'Enter') {
    event.preventDefault();

    let newTasks = (JSON.parse(localStorage.getItem('allTasks')));
    newTasks.unshift({ task: event.target.value, status: '' });
    localStorage.setItem('allTasks', JSON.stringify(newTasks));

    event.target.value = '';

    render(JSON.parse(localStorage.getItem('allTasks')));
  }
}


export function remove(index) {

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


  /* let list = document.querySelectorAll('.todo-list'); */

  let allTasks = JSON.parse(localStorage.getItem('allTasks'));

  let items = document.querySelectorAll('li.item');


  items.forEach(item => {
    let check = item.querySelector('.item__checkbox');
    let task = item.querySelector('.item__status');

    if (check.checked == true) {
      allTasks.find(element => {
        if (element.task === task.innerText) {
          element.status = 'checked';
          task.classList.add('item__status--done');
        }
      });
    }

    if (check.checked == false) {
      allTasks.find(element => {
        if (element.task === task.innerText) {
          element.status = '';
          task.classList.remove('item__status--done');
        }
      })
    }
  });

  localStorage.setItem('allTasks', JSON.stringify(allTasks));

  //NOTE So nicht!

  /*  let list = document.querySelector('.todo-list');
 
   let items = list.querySelectorAll('.item');
 
   let completedTasks = []
 
   let openTasks = JSON.parse(localStorage.getItem('tasksOpen'));
 
   items.forEach((item, index) => {
     let check =  item.querySelector('.item__checkbox');
     let itemStatus = item.children[1];
     if (check.checked) {
       itemStatus.classList.add('item__status--done');
       completedTasks.push({task:itemStatus.innerText, status:'checked'});
       console.log(index);
         
         } else {
       itemStatus.classList.remove('item__status--done');
     }
     
   });
   
   localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
   localStorage.setItem('tasksOpen', JSON.stringify(openTasks)); */

}

export function filterCompleted() {
  let allTasks = JSON.parse(localStorage.getItem('allTasks'));

  let openTasks = [];

  allTasks.forEach(task => {
    if (task.status !== '') {
      openTasks.push(task);
      console.log(task.task);
    }
  })

  render(openTasks);

}

export function filterActive() {
  let tasks = JSON.parse(localStorage.getItem('allTasks'));
  let activeTasks = [];

  tasks.forEach(task => {
    if (task.status !== 'checked') {
      activeTasks.push(task);
    }
  })


  render(activeTasks);
}

//NOTE clear completed

/* export function clearAllCompleted() {
  
  let toDelete = JSON.parse(localStorage.getItem('tasksDone'));

    toDelete == [];
    localStorage.setItem('todos' , JSON.stringify(toDelete)); 
    localStorage.setItem('todos' JSON.stringify(openTasks)) 
    render(toDelete);
  } */






