let score = "three"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// result from conversion of
// "33" => 33
//  "three" => NaN
// true => 1 ; false => 0

let isBool = "abcd"
let boolbool = Boolean(isBool)
console.log(boolbool) // true

// --------------------- Operations --------------------------
let value = 3
let negval = -value // -3 duh

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)

let str1 = "Hello "
let str2 = "Pratham"

let str3 = str1 + str2
console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

console.log(+true) // 1
console.log(+"") // 0
let num1, num2, num3
num1 = num2 = num3 = 2+2
console.log(num1++)
console.log (++num2)

// prefix and postfix opperators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

console.log("-----")

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

// here comparision operator (<,>,<=,>=) converts null to 0 and then checks it
// while == does not 

// console.log(undefined > 0) //false
// console.log(undefined < 0) //false
// console.log(undefined == 0) //false
// console.log(undefined >= 0) //false

console.log("2" === 2) // === this is strict check which also checks the data type 
