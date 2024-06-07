let message:string = "typescript is a programming language"

//lowercase
let lowercaseName = message.toLowerCase()
console.log(lowercaseName)

//uppercase
let uppercaseName:string = message.toUpperCase()
console.log(uppercaseName)

//titlecase
let text = message.split(" ")
let titlecaseName = " "
for (let i = 0; i < text.length; i++) {
titlecaseName += text[i].charAt(0).toUpperCase() + text[i].slice(1).toLowerCase() + " "
}
console.log(titlecaseName)