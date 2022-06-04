import { defaultTodos } from "/js_modules/data.js";
import { setDefault } from "/js_modules/render.js";
import { list } from "/js_modules/DOM.js";
import * as Tools from "/js_modules/tools.js";
import { render } from "/js_modules/render.js";



list.addEventListener('click', (event) => {
  if (event.target.matches('.item__delete')) {
    event.target.parentNode.remove();
    Tools.remove(event.target.dataset.index);
  }
 
})