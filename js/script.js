/// Initial empty array to hold todo items
let todo = [];

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    /// Validation to ensure both fields are filled
    if (todoInput.value === "" || todoDate.value === "") {
        alert("Please fill in both the todo item and the date.");
    } else {
        const todoObj = {
            task: todoInput.value,
            date: todoDate.value
        };

        todo.push(todoObj);

        renderTodos();

        /// Clear input fields after adding
        todoInput.value = "";
        todoDate.value = "";
    }
}

/// Function to reset the todo list
function resetTodos() {
    todo = [];
    renderTodos();
}

/// Function to render todo items to the DOM
function renderTodos(list = todo) {
    const todoList = document.getElementById("todo-list");

    // Clear existing list
    todoList.innerHTML = "";

    // Render each todo item
    list.forEach(item => {
        todoList.innerHTML += `
            <li>
                <p>
                    ${item.task}
                    <span>(${item.date})</span>
                </p>
                <hr>
            </li>
        `;
    });
}

/// Function to filter todo items by date
function filterTodos() {
    const filterDate = document.getElementById("filter-date").value;

    const filteredTodos = todo.filter(item => {
        return filterDate ? item.date === filterDate : true;
    });

    renderTodos(filteredTodos);
}
