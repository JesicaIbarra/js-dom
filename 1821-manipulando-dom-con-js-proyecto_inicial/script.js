import check_conteplete from "./componets/check_contemplete.js";
import task_icon from "./componets/task_icon.js";

const btn = document.querySelector('[data-form-btn]');

// con funcion comun
//btn.addEventListener('click', function(e){
//     e.preventDefault();
//     const input = document.querySelector('[data-form-input]');
//     console.log(input.value);
// });

//lo correcto y más limpio

const createTask = (e)=>{
    e.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]')
    const task = document.createElement('li');//crea li
    task.classList.add('card');
    const task_content = document.createElement('div');//crea div
    task_content.appendChild(check_conteplete());//i creado en la con funcion introduce en div
    task.appendChild(task_content);//introduce div en dentro de li
    const title_task = document.createElement('span');//crea span
    title_task.classList.add('task')
    title_task.innerText = value;//dentro del span introduce el value que contiene la informacion del input
    task_content.appendChild(title_task);//introduce el span dentro del div
    task.appendChild(task_icon());//introduce la funcion del icono basura dentro del div
    input.value = "";
    //task.innerHTML = content;
    list.appendChild(task);
}

btn.addEventListener('click', createTask);
