import check_conteplete from "./check_contemplete.js";
import task_icon from "./task_icon.js";

import { read_task } from "./read_tasks.js";

export const addTask = (event)=>{

    event.preventDefault();
    
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const input_date = document.querySelector('[data-from-date]');
    const value = input.value;
    const date_value = input_date.value;

    const date_Format = moment(date_value).format('DD/MM/YYYY');

    if (value === "" || date_value ===""){
        return
    }

    input.value = "";
    input_date.value="";

    const complete =false;
    
    const task_objet = {
        value,
        date_Format,
        complete,
        id:uuid.v4()
    };

    list.innerHTML='';

    const task_list = JSON.parse(localStorage.getItem('tasks')) || [];

    task_list.push(task_objet);

    localStorage.setItem('tasks', JSON.stringify(task_list));

    read_task();
    
}

export const createTask = ({value, date_Format, complete, id})=>{
     
    const task = document.createElement('li');//crea li
        task.classList.add('card');

    const task_content = document.createElement('div');//crea div

    const check =check_conteplete(id);
    
    if (complete){
        check.classList.toggle('fas');//toggle verifica si existe la clase- si no existe la agrega y si existe la quita es genial....
        check.classList.toggle('completeIcon')
        check.classList.toggle('far');
    }        

    const title_task = document.createElement('span'); //crea un span
        title_task.classList.add('task');
        title_task.innerText = value;//dentro del span introduce el value que contiene la informacion del input
        task_content.appendChild(check);//i creado en la con funcion introduce en div
        task.appendChild(task_content);//introduce div en dentro de li

    const date_element = document.createElement('span');
        date_element.innerHTML = date_Format;
        task_content.appendChild(title_task);//introduce el span dentro del div
        task_content.appendChild(date_element);
        task.appendChild(task_icon(id));//introduce la funcion del icono basura dentro del div
    
    //task.innerHTML = content;
    return task;
    
}