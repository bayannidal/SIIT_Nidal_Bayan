const todoListHTML = document.getElementById('todo-list')

function createTodoHTML(text, id, checked) {
    const todoItem = document.createElement('div');
    todoItem.setAttribute('class', 'todo')
    const textP = document.createElement('p');
    textP.innerText = text;

    const delBtn = document.createElement('button');
    delBtn.setAttribute('class', 'deleteBtn')
    delBtn.setAttribute('id', id);
    delBtn.innerText = "delete";
    delBtn.addEventListener('click', function () {
        deleteTodo(this.id)
        todoListHTML.removeChild(todoItem)
    })

    const checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox')
    checkBox.setAttribute('id', id)
    checkBox.checked = checked

    checkBox.addEventListener('click', function () {
        const checkedState = checkBox.checked;
        updateTodosServer(this.id, checkedState);
    })
    todoItem.appendChild(checkBox);
    todoItem.appendChild(delBtn);
    todoItem.appendChild(textP);

    return todoItem;
}

async function createPost() {
    const todoInput = document.getElementById('todo-input');
    const error = document.getElementById('error')
    const todos = { text: todoInput.value }
    error.style.color = 'red'
    try {
        if (!isEmpty(todoInput.value)) {
            await fetch('http://localhost:3000/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todos)
            });
            window.location.reload();
        }
        else {
            error.innerText = "Fill in todo input to create.."
        }
    }
    catch (err) {
        console.log('Could not create todo!')

    }
}

async function getTodos() {
    try {
        const response = await fetch('http://localhost:3000/todos');
        const todos = await response.json();
        return todos;
    } catch (err) {
        console.log('Could not get todos from server!')
    }
}

async function displayTodos() {
    const todos = await getTodos();
    for (let index = 0; index < todos.length; index++) {
        const currentPost = todos[index];
        const todoHTML = createTodoHTML(currentPost.text, currentPost.id, currentPost.checked);
        todoListHTML.appendChild(todoHTML)

    }
}
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function () {
    createPost();
})



async function deleteTodo(id) {
    return fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

async function updateTodosServer(id, checked) {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            checked
        })
    })
    return response.json();
}



displayTodos();
function isEmpty(str) {
    return (!str || str.length === 0);
}