var message = "typescript is a programming language";
//lowercase
var lowercaseName = message.toLowerCase();
console.log(lowercaseName);
//uppercase
var uppercaseName = message.toUpperCase();
console.log(uppercaseName);
//titlecase
var text = message.split(" ");
var titlecaseName = " ";
for (var i = 0; i < text.length; i++) {
    titlecaseName += text[i].charAt(0).toUpperCase() + text[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
