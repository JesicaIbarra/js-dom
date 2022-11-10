const task_icon = () =>{
    const i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-trash-alt');
    i.classList.add('trashIcon');
    i.classList.add('icon');
    i.addEventListener('click', deleteIcon);
    return i;
}

const deleteIcon= (event)=>{
    const elementeDelete = event.target.parentElement;
    elementeDelete.remove();
    
}

export default task_icon;