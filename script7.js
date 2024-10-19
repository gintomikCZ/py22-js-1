if (5 > 3) {
  // do something
} else if (3 < 7) {
  // do something else
}
// ....
else {
  // do something different
}

for (let i = 1; i < 5; i++) {
  console.log(i)
} // 1, 2, 3, 4

let fruits = ['hruška', 'jablko', 'švestka']

for (let i = 0; i < 3; i++) {
  console.log(fruits[i])
}

const sum = (a, b) => a + b
function sum1 (a, b) {
  return a + b
}

fruits.forEach((fruit, index) => { // Anonymous function
  console.log((index + 1) + '. ' + fruit)
})

const employees = [
  { first: 'Karel', last: 'Houska', salary: 3500, position: 'manager' },
  { first: 'Jenda', last: 'Benda', salary: 2000, position: 'secretary' },
  { first: 'Jana', last: 'Nováková', salary: 1300, position: 'manager' },
]

// vypsat celá jména všech zaměstnanců

// employees.forEach(employee => {
//   console.log(employee.first + ' ' + employee.last)
// })

// vypsat celá jména managerů
// employees.forEach(employee => {
//   if (employee.position === 'manager') {
//     console.log(employee.first + ' ' + employee.last)
//   }
// })

// součet všech platů všech lidí
let result = 0
employees.forEach(employee => {
  result += employee.salary
})
console.log(result)

console.log(employees.length)
let myVar = 'ahoj'
console.log(myVar.toUpperCase())
console.log(myVar.toLowerCase())
console.log(myVar[0]) // 'a'
console.log(myVar.slice(1)) // od druhé písmene dál do  konce

// funkce, bere string jako argument a vrátí string s poč. písmenem velkým a zbytek malým

// 'KARel' =>  'Karel'

const ucFirst = (str) => {
  let result = ''
  result += str[0].toUpperCase()
  result.slice(1).toLowerCase()
  return result
}


