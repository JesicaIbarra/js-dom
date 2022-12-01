export const uniqueDates = (tasks)=>{
    const unique = [];
    
    tasks.forEach(task => {
        if(!unique.includes(task.date_Format)){
            unique.push(task.date_Format);
        }
    });

return unique;

}

export const orderDate = (dates)=>{
    return dates.sort((a,b)=>{
        const firstDate = moment(a, 'DD/MM/YYYY');
        const secondDate = moment(b, 'DD/MM/YYYY');
        return firstDate - secondDate;
    });
}