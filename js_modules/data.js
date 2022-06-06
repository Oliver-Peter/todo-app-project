
export const defaultTodos = ['Einkaufen gehen', 'Wäsche machen', 'Trompete üben', 'Coden üben'];

export function initialStorage() {

let defaultTodosJSON = JSON.stringify(defaultTodos);

localStorage.setItem('todos', defaultTodosJSON);

};






