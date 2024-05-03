"use strict";
// console.log('Задание 1');
// let str = 'url("https://www.example.com/path?query=123#hash")';
// path(str);
// protocol(str);
// domein(str);
// anchor(str);
// function path(value) {
//     let start = value.indexOf('"') + 1;
//     let end = value.lastIndexOf('"');
//     let nValue = value.slice(start, end);
//     console.log(nValue);
// }

// function protocol(value) {
//     let start = value.indexOf('"') + 1;
//     let end = value.indexOf('//') + 2;
//     let nValue = value.slice(start, end);
//     console.log(nValue);
// }

// function domein(value) {
//     let start = value.indexOf('/') + 2;
//     let end = value.lastIndexOf('/', 15);
//     let nValue = value.slice(start, end);
//     console.log(nValue);
// }

// function anchor(value) {
//     let start = value.indexOf('#');
//     let end = value.lastIndexOf('"');
//     let nValue = value.slice(start, end);
//     console.log(nValue);
// }


// console.log('Задание 2');
// let str1 = 'url("ftp://www.example.com")';
// path(str1);
// protocol(str1);
// domein(str1);
// anchor(str1);
// function path(value) {
//     let start = value.indexOf('"') + 1;
//     let end = value.lastIndexOf('"');
//     let nValue = value.slice(start, end);
//     console.log(nValue);
// }

// function protocol(value) {
//     let start = value.indexOf('"') + 1;
//     let end = value.indexOf('//') + 2;
//     let nValue = value.slice(start, end);
//     console.log(nValue);
// }

// function domein(value) {
//     let start = value.indexOf('/') + 2;
//     let end = value.lastIndexOf('"');
//     let nValue = value.slice(start, end);
//     console.log(nValue);
// }

// function anchor(value) {
//     let start = value.indexOf('#');
//     let end = value.lastIndexOf('"');
//     let nValue = value.slice(start, end);
//     console.log(nValue);
// }


console.log('Задание 3');
let str = 'Янв,Фев,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек';
let newStr = str.split(',');
console.log(newStr);
let end = newStr.length;
let start = 0;
newStr.sort(function (a, b) {
    return b - a;
});
console.log(newStr);
