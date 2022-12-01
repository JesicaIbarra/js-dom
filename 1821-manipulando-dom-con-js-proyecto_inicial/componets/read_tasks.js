import { createTask } from "./add_task.js";
import date_Element from "./date_Element.js";
import { uniqueDates, orderDate } from "../service/date.js";

export const read_task = ()=>{
    console.log(uuid.v4());
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const list = document.querySelector('[data-list]');
    const dates = uniqueDates(taskList);
    console.log(taskList);
    orderDate(dates);
    dates.forEach(date =>{
        const dateMoment = moment(date, 'DD/MM/YYYY');
        list.appendChild(date_Element(date));
        
        taskList.forEach((task) => {
            const taskDate = moment(task.date_Format, 'DD/MM/YYYY');

            const diff = dateMoment.diff(taskDate);

            if (diff ===0){
                list.appendChild(createTask(task));
            }
        });
    })  
}