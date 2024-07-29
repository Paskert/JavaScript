//  Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2) // false because eventhough we pass the same string
// same string 123 the symbol is assigned differently


// Reference (Non primitive)

// Array, Objects, Functions

const hero = ["Ironman", "captain", "hulk"]
let myObj = {
    name: "Pratham",
    age: 21,
}

const myFunc = function(){
    console.log("Hello World")
}

console.log(typeof myObj)

// -------------------------------------------------------------------------------------------

// Stak (Primitive), Heap (Non-Primitive)
//stack gives copy by value and Heap gives copy by refrence

let stone = "Pratham"
let sttwo = stone
sttwo = "Priyansh"
console.log(stone)
console.log(sttwo)

let myobjone = {
    name : "Pratham",
    age : 21
}

let myobjtwo = myobjone
myobjtwo.name = "Priyansh"

console.log(myobjone.name)
console.log(myobjtwo.name)