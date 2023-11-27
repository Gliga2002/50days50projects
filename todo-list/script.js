const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTodo();
})

function addTodo(todo) {
  let todoText = input.value;

  // ovo cu kad uznem iz LocalStorage
  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');
     // ovo cu kad uznem iz LocalStorage
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');

      updateLS();
    })

    // desni klik
    // po defaultu kada kliknes desni klik, izacice ti onaj men iza inspekt itd, ja to necu i prevent default cu
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      todoEl.remove();
      updateLS();
    })

    todosUL.appendChild(todoEl);

    input.value = "";

    updateLS();
  }
}

function updateLS() {
  todosEl = document.querySelectorAll('li');

  const todo = [];

  todosEl.forEach((todoEl) => {
    todo.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    })
  })

  localStorage.setItem('todos', JSON.stringify(todo));
}
