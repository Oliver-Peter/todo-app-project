import { initialStorage  } from "/js_modules/data.js";
import { render, todoArr } from "/js_modules/render.js";
import { list, delBtn, checkBox, todoInput } from "/js_modules/DOM.js";
import * as Tools from "/js_modules/tools.js";



list.addEventListener('click', (event) => {
  if (event.target.matches('.item__delete')) {
    Tools.remove(event.target.dataset.index);
  };
  if (event.target.matches('.item__checkbox')) {
    let task = event.target.parentNode.nextElementSibling;
    task.classList.add('item__status--done');
    Tools.done(event.target.dataset.index);
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
