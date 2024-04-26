"use strict";

// let string = 'JS';
// console.log(string.toLowerCase())

// let string = 'я учу javascript!';
// console.log(string.indexOf('javascript'));
// console.log(string.indexOf('JavaScript'));
// console.log(string.includes('javascript'));
// console.log(string.includes('JavaScript'));

function checkString(str, substr) {
    let correcStr = str.toLowerCase();
    let correcSubStr = substr.toLowerCase();
    return correcStr.includes(correcSubStr);
}

console.log(checkString('я учу javascript!', 'JavaScript'));
console.log(checkString('я учу javascript!', 'javascript'));