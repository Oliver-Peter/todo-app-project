
export const defaultTodos = ['Einkaufen gehen', 'Wäsche machen', 'Trompete üben', 'Coden üben'];

export let todoArr = [];

export function setArray(array) {
todoArr = array;
localStorage.setItem('todos', JSON.stringify(todoArr));

}


