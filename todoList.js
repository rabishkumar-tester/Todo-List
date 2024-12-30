
let taskList = JSON.parse(localStorage.getItem('taskList')) || 
[
    {
        name : 'make dishes',
        dueDate : '2024-12-04'
    },{
        name : 'wash clothes',
        dueDate : '2024-12-05'
    },{
        name : 'watch youtube',
        dueDate : '2024-12-08'
    }
]

renderTaskList();

document.querySelector('.add-button').addEventListener('click',() => {
    addTask();
})



function addTask(){
    let inputNameElement = document.querySelector('.js-input-name');
    name = inputNameElement.value;
    let inputDateElement = document.querySelector('.js-input-date');
    dueDate = inputDateElement.value;

    //taskList.push({name : name,dueDate: dueDate});
    if(!(name === '' || dueDate === '')){
        taskList.push({
            name,
            dueDate
        });
    }
    

    inputNameElement.value = '';
    inputDateElement.value = '';
    localStorage.setItem('taskList',JSON.stringify(taskList));
    renderTaskList();

}



function renderTaskList(){
    let taskListHTML = '';
    // let i;
    // for(i =0 ; i< taskList.length ; i++){
    //     let html = `<div class="todo-list-task">
    //             <p class="task-name">${taskList[i].name}</p>
    //             <div class="inner-flex">
    //             <p class="task-date">${taskList[i].dueDate}</p>
    //             <button class="delete-button" onclick="
    //                 taskList.splice(${i},1);
    //                 renderTaskList();
    //             ">Delete</button></div>
                
    //             </div>`;
    //     taskListHTML += html;
    // }

    taskList.forEach((value,index) => {
        let html = `<div class="todo-list-task">
                <div class="item-name"><p class="task-name">${value.name}</p></div>
                
                <div class="inner-flex">
                <p class="task-date">${value.dueDate}</p>
                <button class="delete-button js-delete-button" 
                ">Delete</button></div>
                
                </div>`;
                taskListHTML += html;
    })
    document.querySelector('.js-todo-list').innerHTML= taskListHTML;


    document.querySelectorAll('.js-delete-button').forEach((deleteButton,index) => {
        deleteButton.addEventListener('click',() => {
            taskList.splice(index,1);
            localStorage.setItem('taskList',JSON.stringify(taskList));
            renderTaskList();
        });
    });
}
