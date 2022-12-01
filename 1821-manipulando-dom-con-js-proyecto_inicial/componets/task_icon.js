import { read_task } from "./read_tasks.js";

const task_icon = (id) =>{
    const i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-trash-alt');
    i.classList.add('trashIcon');
    i.classList.add('icon');
    i.addEventListener('click',()=> deleteIcon(id));
    return i;
}

const deleteIcon= (id)=>{
    const list = document.querySelector('[data-list]');
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const index = tasks.findIndex((item) => item.id === id);
    tasks.splice(index,1);
    list.innerHTML= "";
    localStorage.setItem('tasks', JSON.stringify(tasks))
    read_task();
}



export default task_icon;