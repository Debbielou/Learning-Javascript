document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Load todos from local storage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function renderTodos() {
        taskList.innerHTML = ''; // Clear existing list
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo.text;
            if (todo.completed) {
                li.classList.add('completed');
            }
            li.dataset.index = index; // Store index for easy manipulation

            // Add click listener to toggle completion
            li.addEventListener('click', (event) => {
                const clickedIndex = parseInt(event.target.dataset.index);
                todos[clickedIndex].completed = !todos[clickedIndex].completed;
                saveTodos();
                renderTodos();
            });
           
            // Add a delete button to each task
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button'); // Add a class for styling
            deleteButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent li click event from firing
                const clickedIndex = parseInt(event.target.closest('li').dataset.index);
                todos.splice(clickedIndex, 1);
                saveTodos();
                renderTodos();
            });

            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            todos.push({ text: taskText, completed: false });
            saveTodos();
            renderTodos();
            taskInput.value = ''; // Clear input field
        } else {
            alert('Please enter a task!');
        }
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });

    // Initial render when the page loads
    renderTodos();
});