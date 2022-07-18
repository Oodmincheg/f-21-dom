const greeting = document.createElement('p');
greeting.innerText = 'Hello';
const name = document.createElement('em');
name.innerText = ' Vlad';
const surname = document.createElement('b');
surname.innerText = ' Vorobyov';
const dot = document.createTextNode('.');

greeting.append(name, surname, dot);

document.body.appendChild(greeting);

console.log('children without text nodes ===> ', greeting.children);
console.log('children with text nodes ===> ', greeting.childNodes);

const firstChild = greeting.firstChild;
const firstElementChild = greeting.firstElementChild;

console.log('first child including text node ===> ', firstChild);
console.log('first child only element ===> ', firstElementChild);
console.log(
  'next node sibling, next node on the same level ===> ',
  firstChild.nextSibling,
);

console.log(
  'next element sibling, next element on the same level ===> ',
  firstChild.nextElementSibling,
);

console.log('parent element ===> ', firstChild.parentElement);
