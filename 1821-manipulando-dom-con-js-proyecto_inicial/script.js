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
    console.log(input.value)
}

btn.addEventListener('click', createTask);

