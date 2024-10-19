const employees = [
  { first: 'Karel', last: 'Houska', salary: 3500, position: 'manager' },
  { first: 'Jenda', last: 'Benda', salary: 2000, position: 'secretary' },
  { first: 'Jana', last: 'Nováková', salary: 1300, position: 'manager' }
]

// tabulka
/*
full name || position || salary
________________________________
Karel Houska || manager || 3500
*/



/*
vytvořit pole headers = ['full name', 'position', 'salary']
vytvořit tabulku
vytvořit thead
vytvořit tr
pojedeme foreach přes headers
  vytvoříme th
  vložíme do něj header
  vložíme th do tr
vložit tr do thead
vložit thead do table

vytvořit tbody
cyklus přes employees
  vytvořit tr
  vytvořit td1
  vložit do něj employee.first + ' ' + employee.last
  vložit td1 do tr
  vytvořit td2
  vložit do něj employee.position
  vložit td2 do tr
  vytvořit td3
  vložit do něj employee.salary
  vložit td3 do tr
  vložit tr do tbody
vložit tbody do table
vložíme table do body
*/

const renderElement = (tagName, textContent, parentEl) => {
  const el = document.createElement(tagName)
  el.textContent = textContent
  parentEl.appendChild(el)
}

const headers = ['full name', 'position', 'salary']
const table = document.createElement('table')
const thead = document.createElement('thead')
let tr = document.createElement('tr')
headers.forEach(header => {

  // const th = document.createElement('th')
  // th.textContent = header
  // tr.appendChild(th)
  renderElement('th', header, tr)

})
thead.appendChild(tr)
table.appendChild(thead)

const tbody = document.createElement('tbody')
employees.forEach(employee => {
  tr = document.createElement('tr')
  const data = [employee.first + ' ' + employee.last, employee.position, employee.salary]
  data.forEach((item) => {
    renderElement('td', item, tr)
  })
  // const td1 = document.createElement('td')
  // td1.textContent = employee.first + ' ' + employee.last
  // tr.appendChild(td1)
  // renderElement('td', employee.first + ' ' + employee.last, tr)

  // const td2 = document.createElement('td')
  // td2.textContent = employee.position
  // tr.appendChild(td2)
  // renderElement('td', employee.position, tr)


  // const td3 = document.createElement('td')
  // td3.textContent = employee.salary
  // tr.appendChild(td3)
  // renderElement('td', employee.salary, tr)

  tbody.appendChild(tr)
})
table.appendChild(tbody)

document.body.appendChild(table)
