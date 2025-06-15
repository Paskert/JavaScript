const name = "Pratham"
const age = 21

// console.log(name + age + " Hello")  // Don't do this, Not recommended

//This is called string interpolation
console.log(`Hello My name is ${name} and my age is ${age}`) 

//this string will be an object(its element will be strored like key value pair not like array)
const gameName = new String('Sifu-game') 

console.log(gameName[0]) //S
console.log(gameName.length) //9
console.log(gameName.toUpperCase()) // SIFU-GAME
console.log(gameName.charAt(2)) //f
console.log(gameName.indexOf('i')) //1

const newString = gameName.substring(0,4)
console.log(newString) //Sifu

const newStringtwo = gameName.substring(-2,4)
console.log(newStringtwo) //Sifu
console.log(newStringtwo.trim()) //Sifu

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-')) //https://hitesh.com/hitesh-choudhary
console.log(url.includes('sundar')) // false
console.log(gameName.split('-'))  // [ 'Sifu', 'game' ]