const fruits = ['jablko', 'banán', 'kiwi', 'pomeranč', 'citrón']

// document - vytváření elementů
const el = document.createElement('button')
el.textContent = 'tlačítko'
// const body = document.querySelector('body')
document.body.appendChild(el)

// parentElement.appendChild(childElement) - vloží child na konec HTML struktury parent

// přiřazovat elementu textContent
// vytvářet element
// vkládat el do rodiče

const ul = document.querySelector('ul')
fruits.forEach(fruit => {
  const li = document.createElement('li')
  li.textContent = fruit
  ul.appendChild(li)
})
/*
vybereme z DOM ul
pojedeme cyklus přes fruits
  vytvoříme nové li
  do li dáme textcontent - název ovoce
  li vložíme do ul
*/