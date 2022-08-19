import { render, todoArr } from "./render.js";

/* ======== async functions: await&fetch ======== */

export async function postTodos(todos) {
  try {
    const response = await fetch('http://localhost:3002/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todos),
    })
    todos = await response.json();
    console.log(todos);
  } catch(error) {
    console.error('Error:', error);
  }
}

export async function getTodos() {
  try {
    const response = await fetch('http://localhost:3002/todos');
    return await response.json();

    
  } catch (error) {
    console.error('Error: ', error);
  }
}

/* -------------------------------------------- */


export function addTask(event) {
  if (event.key == 'Enter') {
    event.preventDefault();

    todoArr.unshift({ task: event.target.value, status: '' });
    localStorage.setItem('allTasks', JSON.stringify(todoArr));

    event.target.value = '';

    render();
  }
}


export function remove(event) {

  let itemIndex = event.target.dataset.index;
  todoArr.splice(itemIndex, 1);
  localStorage.setItem("allTasks", JSON.stringify(todoArr));
  render();
}


export function taskDone(event) {

  let item = event.target.parentElement.parentElement;
  let checkbox = event.target;
  let task = item.querySelector(".item__status");
  let index = task.dataset.index

  if (checkbox.checked) {
    todoArr[index].status = "checked";
    let itemDoneArr = todoArr.splice(index, 1);
    let itemDone = itemDoneArr[0];
    todoArr.push(itemDone);


  } else {
    todoArr[index].status = "";
    let itemsNotDone = todoArr.splice(index, 1);
    let itemNotDone = itemsNotDone[0];
    todoArr.unshift(itemNotDone);
  }

  localStorage.setItem("allTasks", JSON.stringify(todoArr));

  render();

}


export function filterCompleted() {
  let allTasks = JSON.parse(localStorage.getItem('allTasks'));

  let openTasks = [];

  allTasks.forEach(task => {
    if (task.status == 'checked') {
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

export function clearAllCompleted() {

  let listItems = document.querySelectorAll('.item__status');
  let tasks = JSON.parse(localStorage.getItem('allTasks'));

 

  listItems.forEach(item => {
    if (item.classList.contains('item__status--done')) {

      tasks.splice(item.dataset.index);
    }
  });

  localStorage.setItem('allTasks', JSON.stringify(tasks))

  render();

}






