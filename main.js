window.addEventListener('load', () => {
    let form = document.querySelector('#new-task-form');
    let input = document.querySelector('#new-task-input');
    let listEl = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let task = input.value;

        if (!task) {
            alert('Please select a task');
            return;
        }

        let taskEl = document.createElement('div');
        taskEl.classList.add('task');

        let taskContentEl = document.createElement('div');
        taskContentEl.classList.add('content');

        taskEl.appendChild(taskContentEl);

        let taskInputEl = document.createElement('input');
        taskInputEl.classList.add('text');
        taskInputEl.type = 'text';
        taskInputEl.value = task;
        taskInputEl.setAttribute("readonly", "readonly");

        taskContentEl.appendChild(taskInputEl);

        let taskActionEl = document.createElement('div');
        taskActionEl.classList.add('actions');

        let taskEditEl = document.createElement('button');
        taskEditEl.classList.add('edit');
        taskEditEl.innerHTML = 'Edit';

        let taskDeleteEl = document.createElement('button');
        taskDeleteEl.classList.add('delete');
        taskDeleteEl.innerHTML = 'Delete';

        taskActionEl.appendChild(taskEditEl);
        taskActionEl.appendChild(taskDeleteEl);

        taskEl.appendChild(taskActionEl);

        listEl.appendChild(taskEl);

        input.value = '';

        taskEditEl.addEventListener('click', (e) => {
            if (taskEditEl.innerText.toLowerCase() === "edit") {
                taskInputEl.removeAttribute("readonly");
                taskEditEl.focus();
                taskEditEl.innerHTML = 'Save';
            }
            else {
                taskInputEl.setAttribute("readonly", "readonly");
                taskEditEl.innerHTML = 'Edit';
            }
        })

        taskDeleteEl.addEventListener('click', () => {
            listEl.removeChild(taskEl);
        })

    })

})