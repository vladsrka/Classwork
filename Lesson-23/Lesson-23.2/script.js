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


// console.log('Задание 3');
// let str = 'Янв,Фев,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек';
// let newStr = str.split(',');
// console.log(newStr);

// str = ',' + str;
// newStr = str.split(',');
// newStr[0] = newStr[newStr.length - 1];
// newStr[newStr.length - 1];
// str = newStr.join();
// str = str.slice(0, str.length - 1);
// console.log(str);


// console.log('Задание 4');
// let str = 'my-shot-string';
// let newStr = '';
// camelize(str);

// function camelize(str) {
//     str = str.split('-');
//     for (let i = 0; i < str.length; i++) {
//         if (i == 0) {
//             str[i] = str[i];
//         } else {
//             str[i] = str[i].replace(`${str[i].charAt(0)}`, `${str[i].charAt(0).toUpperCase()}`);
//         }
//         newStr += str[i];
//     }
//     console.log(newStr);
// }


// console.log('Задание 5');
// let arr = [1,2,3];
// arr.push(4,5,6);
// console.log(arr);


// console.log('Задание 6');
// let arr = [1,2,3];
// arr.unshift(-2,-1,0);
// console.log(arr);

// console.log('Задание 7');
// let arr = ['что-то', 'ещё'];
// arr.unshift(arr.pop());
// console.log(arr);

console.log('Задание 8');
let str = 'Янв,Фев,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек';
let newStr = str.split(',');
newStr.unshift(newStr.pop());
str = newStr.join(',')
console.log(str);