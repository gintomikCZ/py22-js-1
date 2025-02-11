// const h1 = document.querySelector('h1')

// const text = h1.textContent
// console.log(h1)
// h1.textContent = 'ahoj'

const fruits = ['jablko', 'banán', 'kiwi']

const lis = Array.from(document.querySelectorAll('li'))

fruits.forEach((fruit, index) => {
  lis[index].textContent = fruit
})

// fruit = jablko, index = 0
// fruit = banán, index = 1,
// fruit = kiwi, index = 2

lis.forEach((li, index) => {
  li.textContent = fruits[index]
})

fruits.forEach((fruit, index) => {
  const li = document.querySelector('li:nth-child(' + (index + 1) + ')')
  li.textContent = fruit
})