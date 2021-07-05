document.addEventListener('DOMContentLoaded', function(){
    const addTaskBtn = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskPriority = document.getElementById('taskPriority');
    const removeFinishedTasksButton = document.getElementById('removeFinishedTasksButton');
    const taskCounter = document.getElementById('counter');
    let counter = 0;
    addTaskBtn.addEventListener('click', function () {
        if (taskInput.value.length > 5 && taskInput.value.length < 100 && taskPriority.value >= 0
            && taskPriority.value <=10 && taskPriority.value !== '') {
            const li = document.createElement('li');
            li.value = taskPriority.value;
            li.style.order = taskPriority.value;
            taskPriority.value = '';
            li.innerHTML = `<h3>${taskInput.value}</h3>
                            <button>Delete</button>
                            <button>Complete</button>`;
            taskList.appendChild(li);
            counter++;
            taskCounter.innerText = counter;
            taskInput.value = '';
            li.querySelector('button:nth-child(3)').addEventListener('click', function () {
                if (!li.classList.contains('done')) {
                    li.classList.add('done');
                    counter--;
                    taskCounter.innerText = counter;
                } else if (li.classList.contains('done')){
                    li.classList.remove('done');
                    counter++;
                    taskCounter.innerText = counter;
                }
            });
            li.querySelector('button:nth-child(2)').addEventListener('click', function () {
                taskList.removeChild(li);
                if (!li.classList.contains('done')){
                    counter--;
                    taskCounter.innerText = counter;
                }
            });
            removeFinishedTasksButton.addEventListener('click', function () {
                const finishedTasks = taskList.querySelectorAll('.done');
                if(li.classList.contains('done')) {
                    taskList.removeChild(...finishedTasks); // Spread operator dziala, mimo ze konsola wyrzuca blad, prosba o komentarz
                }
            });
        }
    });
});
