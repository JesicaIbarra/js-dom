const check_conteplete = (id) =>{
    const i = document.createElement('i');
    i.classList.add('far' , 'fa-check-square', 'icon');
    i.addEventListener('click',(event)=>complete_check(event, id));
    return i;
}

const complete_check = (event, id)=>{
    const elemnte = event.target;
    elemnte.classList.toggle('fas');//toggle verifica si existe la clase- si no existe la agrega y si existe la quita es genial....
    elemnte.classList.toggle('completeIcon')
    elemnte.classList.toggle('far');
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const index = tasks.findIndex((item) => item.id === id);
    tasks[index]['complete']= !tasks[index]['complete'];
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default check_conteplete;