"use strict";
// let str1 = 'http://dfgdfgdfvdv';
// check1(str1);
// function check1(str11) {
//     console.log(str11.startsWith('http://'));
// }


// let str2 = 'https://dfgdfgdfvdv';
// check2(str2);
// function check2(str22) {
//     console.log(str22.startsWith('https://'));
// }


// let str1 = 'https://dfgdfgdfvdv.com';
// let str2 = 'https://dfgdfgdfvdv.by';
// let str3 = 'https://dfgdfgdfvdv.ru';
// let str4 = 'https://dfgdfgdfvdv';
// check(str1);
// check(str2);
// check(str3);
// check(str4);
// function check(str) {
//     let line = str;
//     if (line.endsWith('.com') == true) {
//         console.log(`${line.endsWith('.com')} .com`);
//     } else if (line.endsWith('.by') == true) {
//         console.log(`${line.endsWith('.by')} .by`);
//     } else if (line.endsWith('.ru') == true) {
//         console.log(`${line.endsWith('.ru')} .ru`);
//     } else {
//         line = false;
//         console.log(line);
//     }
// }


// let str = 'JavaScript is a programming language';

// console.log(str.slice(-8));

// console.log(str.substring(36, 28));

// console.log(str.substr(28, 8));


// let str = '$120';
// check(str);
// function check(str) {
//     console.log(str.substr(1));
// }


// let str = 'добро пожаловать';
// function upFL(str) {
//     if (!str) {
//         return str;
//     } else {
//         return str.substr(0, 1).toUpperCase() + str.substr(1);
//     }
// }
// console.log(upFL(str));


// let str = ' добро пожаловать ';
// function upFL(str) {
//     let nstr = str.trim();
//     if (!nstr) {
//         return nstr;
//     } else {
//         return nstr.substr(0, 1).toUpperCase() + nstr.substr(1);
//     }
// }
// console.log(upFL(str));


// let str = 'Домашний осел (лат.egegegeeveveve), или ишак - одомашненный подвид дикого осла.';
// dBrackets(str);
// function dBrackets(value) {
//     let start = value.indexOf('(');
//     let end = value.indexOf(')');
//     let nValue = value.slice(0, start - 1) + value.slice(end + 1, value.length);
//     console.log(nValue);
// }


// let str = 'Java is awesome. Java is fun.';
// let oldStr = 'java';
// let newStr = str.toLowerCase().replace(oldStr, 'JavaScript');
// console.log(newStr);

// newStr = str.toLowerCase().replaceAll(oldStr, 'JavaScript');
// console.log(newStr);

let str = '1-2-3-4-5';
let newStr = str.replaceAll('-', '.')
console.log(newStr);
