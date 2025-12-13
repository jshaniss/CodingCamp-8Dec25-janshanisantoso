/// Store todos
let todo = [];

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    if (todoInput.value === "" || todoDate.value === "") {
        alert("Please fill in both the todo item and the date.");
        return;
    }

    todo.push({
        task: todoInput.value,
        date: todoDate.value
    });

    renderTodos();

    todoInput.value = "";
}

/// Clear all todos
function resetTodos() {
    todo = [];
    renderTodos();
}

/// Render todos (default: all)
function renderTodos(list = todo) {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    if (list.length === 0) {
        todoList.innerHTML =
            `<li class="text-gray-500">No todos available</li>`;
        return;
    }

    list.forEach(item => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">
                ${item.task}
                <span class="text-sm text-gray-500">(${item.date})</span>
            </p>
            <hr />
        </li>`;
    });
}

/// Filter using the SAME date field
function filterTodos() {
    const selectedDate = document.getElementById("todo-date").value;

    if (selectedDate === "") {
        alert("Please select a date to filter.");
        return;
    }

    const filtered = todo.filter(item => item.date === selectedDate);
    renderTodos(filtered);
}
