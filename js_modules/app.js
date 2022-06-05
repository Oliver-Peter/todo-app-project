import { initialStorage } from "/js_modules/data.js";
import { render } from "/js_modules/render.js";
import { list } from "/js_modules/DOM.js";
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
