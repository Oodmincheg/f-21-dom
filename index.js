const div = document.createElement('div');

div.classList.add('new-div');
div.innerText = 'New div';

const footer = document.querySelector('footer');
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.alt = 'new image';
div.appendChild(img);

const img2 = document.createElement('img');
img2.src = 'https://picsum.photos/200';
img2.alt = 'new image2';
footer.insertAdjacentElement('beforebegin', img2);
console.log('created element ===> ', div);

const body = document.querySelector('body');
body.appendChild(div);

const TODOS = ['Learn js', 'Learn react', 'Learn angular'];

// const createTodoLI = (todo) => {
//   const li = document.createElement('li');
//   li.classList.add = 'todo';
//   li.innerText = todo;
//   return li;
// };

// function createTodosList(todos) {
//   const ul = document.createElement('ul');
//   ul.classList.add = 'todos';
//   const todosLIs = todos.map(createTodoLI); //[createTodoLI(element1), createTodoLI(element2)]
//   todosLIs.forEach((li) => ul.insertAdjacentElement('beforeend', li));
// todosListElement.forEach(function (todo) {});
//   return ul;
// }

// const createTodoLiString = (todo) => {
//   return `<li class="todo">${todo}</li>`;
// };

function createTodoLiString(todo) {
  return `<li class="todo">${todo}</li>`;
}
function createAlert() {
  alert('load');
}
function createTodosList(todos) {
  return `<ul class="todos" onload="createAlert('load')">
  ${todos.map(createTodoLiString).join('')}
  </ul>  `;
}

const todosListString = createTodosList(TODOS);

const range = document.createRange();
const todosListElement = range.createContextualFragment(todosListString);
console.log('range ===> ', range);

body.appendChild(todosListElement);

const input = document.createElement('input');
input.placeholder = 'Change your name';
body.appendChild(input);
const button = document.createElement('button');
button.innerText = 'Submit name';
body.appendChild(button);
const nickname = document.createElement('h3');
nickname.innerHTML = 'Your nickname here';
body.appendChild(nickname);
button.addEventListener('click', () => {
  nickname.innerHTML = input.value;
});

//<img onload="alert('something bad happened')" src="https://picsum.photos/200"></img>
// you should sanitize you html strings
