const check_conteplete = () =>{
    const i = document.createElement('i');
    i.classList.add('far' , 'fa-check-square', 'icon');
    i.addEventListener('click', complete_check);
    return i;
}

const complete_check = (event)=>{
    const elemnte = event.target;
    elemnte.classList.toggle('fas');//toggle verifica si existe la clase- si no existe la agrega y si existe la quita es genial....
    elemnte.classList.toggle('completeIcon')
    elemnte.classList.toggle('far');
}

export default check_conteplete;