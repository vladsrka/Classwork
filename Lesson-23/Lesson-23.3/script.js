"use strict";
// console.log('Задание 1');
// let arr = ["груши", "яблоки", "сливы", "абрикосы", "апельсин"];
// let newArr = [];
// let lit = 'а';
// for (let fruit of arr) {
//     if (fruit.charAt(0) == lit) {
//         newArr.push(fruit);
//     }
// }
// console.log(newArr);

// console.log('Задание 2');
// let arr = ["груши", "яблоки", "сливы", "абрикосы", "апельсин"];
// let newArr = [];
// let lit = 5;
// for (let fruit of arr) {
//     if (fruit.length == lit) {
//         newArr.push(fruit);
//     }
// }
// console.log(newArr);

// console.log('Задание 3');
// let arr = [2,5,9];
// arr.splice(1,1);
// console.log(arr);
// let arr1 = [2,5,9];
// let arr2 = [];
// let num1 = arr1.slice(0,1);
// let num2  = arr1.slice(2);
// arr2.push(num1);
// arr2.push(num2);
// console.log(arr2);

// console.log('Задание 4');
// let arr = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']
// let arr1 = arr.slice(3)
// console.log(arr1);

// console.log('Задание 5');
// let arr = [1, 2, 3, 4];
// arr.splice(3, 0, 'a', 'b');

// console.log(arr);

// console.log('Задание 6');
// let arr = [1, 2, 3, 4, 5];
// let arr1 = ['orange', 'kiwi', 'apple'];
// console.log(arr.concat(arr1));

// console.log('Задание 7');
// let friends = [
//     { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
//     { name: 'mike', pizzas: ['salami', 'margarita'] },
//     { name: 'stas', pizzas: ['meat'] },
//     { name: 'anna', pizzas: ['fish'] }
// ];
// let friends1 = [];
// for (let friend of friends) {
//     friends1 = friends1.concat(friend.pizzas)
// }
// console.log(friends1);

// console.log('Задание 8');
// let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// arr.forEach(elem => {
//     newArr.push(elem * 10)
// });
// console.log(newArr);
// console.log(arr);

// console.log('Задание 9');
// let arr = [-3, -2, -1, 1, 2, 3, 4, 5];
// let newArr = [];
// arr.forEach(elem => {
//     newArr.push(elem * 5)
// });
// console.log(newArr);

// console.log('Задание 10');
// let arr = [-3, -2, -1, 1, 2, 3, 4, 5];
// let newArr = [];
// arr.forEach(elem => {
//     newArr.push(elem * elem)
// });
// console.log(newArr);

// console.log('Задание 11');
// let friends = [
//     { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
//     { name: 'mike', pizzas: ['salami', 'margarita'] },
//     { name: 'stas', pizzas: ['meat'] },
//     { name: 'anna', pizzas: ['fish'] }
// ];
// let friends1 = [];
// friends.forEach(elem => {
//     friends1.push(elem.name + ' lekes ' + elem.pizzas.join(' and '));
// })
// console.log(friends1);



// console.log('Задание 12');
// let arr = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// let obj = {};
// let num = 0;
// arr.forEach(elem => {
//     if (elem == 'kiwi') {
//         let num1 = num++;
//         obj.kiwi = num1;
//     } else if (elem == 'apple') {
//         let num2 = num++;
//         obj.apple = num2;
//     } else {
//         let num3 = num++;
//         obj.orange = num3;
//     }
// })
// console.log(obj)



console.log('Задание 13');
let arr = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
console.log(arr.includes('kiwi'));
console.log(arr.indexOf('orange'));
let arr1 = [];
arr.forEach(elem => {
    if (!arr1.includes(elem)) {
        arr1.push(elem)
    }
})
console.log(arr1);