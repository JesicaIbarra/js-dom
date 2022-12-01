import {addTask} from './componets/add_task.js';
import { read_task } from './componets/read_tasks.js';

const btn = document.querySelector('[data-form-btn]');

// con funcion comun
//btn.addEventListener('click', function(e){
//     e.preventDefault();
//     const input = document.querySelector('[data-form-input]');
//     console.log(input.value);
// });

//lo correcto y más limpio

btn.addEventListener('click', addTask);
read_task();
