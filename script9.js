// DOM - Document Object Model
// DOM Manipulation

// console.log(document)
// window.aaaTomik = 'ahoj'

// console.log(window)

// document.methods

/*
  methods, které vybírají jeden element
    document.getElementById('id') - vrátí element s daným id nebo null
    document.querySelector('css-selector') - vrací první element, který vyhovuje selektoru, jinak null
  methods, které vybírají skupinu elementů
    document.getElementsByTagName(tagName) - vrací HTMLCollection (případně prázdnou)
      - array like structure
    document.getElementsByClassName(class-name) - vrací HTMLCollection (případně prázdnou)
    document.querySelectorAll('css-selector') - vrací NodeList (případně prázdnou)

*/

const el = document.getElementById('headerxxx')
if (el !== null) {
  console.log(el)
} else {
  console.log('element has not been found')
}

const el1 = document.querySelector('h1')
console.log(el1)

const myDiv = document.querySelector('.my-class:nth-of-type(2)')
console.log(myDiv)

// const divs = document.getElementsByTagName('div')
const divs = document.getElementsByClassName('my-class')
console.log(divs)

const divsAr = Array.from(divs)

divsAr.forEach(div => {
  console.log(div)
})

