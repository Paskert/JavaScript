const name = "Pratham"
const age = 21

// console.log(name + age + " Hello")  // Don't do this, Not recommended

console.log(`Hello My name is ${name} and my age is ${age}`)

const gameName = new String('Sifu-game') //this string will be an object(its element will be strored like key value pair not like array)

console.log(gameName.length)
console.log(gameName.toUpperCase)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,4)
console.log(newString)

const newStringtwo = gameName.substring(-2,4)
console.log(newStringtwo)
console.log(newStringtwo.trim())

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'))