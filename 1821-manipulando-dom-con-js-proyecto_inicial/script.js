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
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = "";
    const content =`<div>
                        <i class="far fa-check-square icon"></i>
                        <span class="task">${value}</span>
                    </div>
                    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;
    list.appendChild(task);
    console.log(input.value)
}

btn.addEventListener('click', createTask);

