// Confirms

// const arr = [confirm(`Ви згодні на обробку даних?`), confirm(`Вам виповнилося 18 років?`), confirm(`Так чи ні?`)];



// Prompts

// const arr = [];
// arr[0] = prompt(`Введіть Ваше Ім'я`);
// arr[1] = prompt(`Введіть Ім'я Вашого кота`);



// Item access

// const arr = ['Піони', 'Тюльпани', 'Троянди', 'Фіалки', 'Маки', 'Польові квіти'];
// const index = prompt('Введіть індекс елемента в масиві, який Вам подати?');
// if (index <= arr.length - 1 && index >= 0) {
//     alert(arr[index])
// } else {
//     alert(`В массиві немає елемента з таким індексом`)
// }

// індекс "length" виводить довжину масива, якщо забрати умову яку я додала



// Item change

// const arr = [];
// const i = prompt(`Введіть номер індексу в масиві, куди бажаєте зробити запис`);
// arr[i] = prompt(`Введіть значення для цього індексу.`);
// console.log(arr);



// Multiply table

// const arr = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]
// ];



// Multiply table slice

// const arr = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]
// ];
// const newArr = arr.slice(1);
// for (let i = 0; i < newArr.length; i++) {
//     newArr[i] = newArr[i].slice(1)
// }
// console.log(newArr);



// IndexOf Word

// const str = prompt(`Введіть рядок із декількох слів`);
// const arr = str.split(` `);
// const word = prompt(`Яке слово Вам потірбне з цього рядка?`);
// const index = arr.indexOf(word) + 1;
// (arr.indexOf(word) >= 0) ?
//     alert(`Слово '${word}' є ${index} за рахунком у Вашому рядку`) :
//     alert('Такого слова не було в рядку(');



// Reverse

// const arr = [];
// for (let i = 1; i <= 5; i++) {
//     arr.push(prompt(`Введіть елемент масиву`));
// }
// const newArr = [];
// for (let i = 1; i <= 5; i++) {
//     newArr.push(arr.pop());
// }
// console.log(newArr);



// Reverse 2

// const arr = [];
// for (let i = 1; i <= 5; i++) {
//     arr.push(prompt(`Введіть елемент масиву`));
// }
// const newArr = [];
// for (let i = 1; i <= 5; i++) {
//     newArr.push(arr.pop());
// }
// const newArr2 = [];
// for (let i = 1; i <= 5; i++) {
//     newArr2.unshift(newArr.shift());
// }
// console.log(newArr2);



// Copy

// const arr = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]
// ];
// const copyArr = arr.slice();



// Deep Copy

// const arr = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]
// ];
// const arrCopy = JSON.parse(JSON.stringify(arr));



// Array Equals

// const arr1 = [1,2,3];
// const arr2 = arr1;
// arr2 === arr1; //true, оскільки це посилання на один і той же масив



//Flat

// const arr = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]
// ];
// const flatArr = [...arr[0], ...arr[1], ...arr[2], ...arr[3], ...arr[4]];
// console.log(flatArr);



//Destruct

// const str = prompt(`Введіть якийсь рядок`);
// const [a,,,,b,,,,c] = str;
// alert (`Я витягнув '${a}', '${b}' та '${c}'`);



//Destruct default

// const str = prompt(`Введіть якийсь рядок`);
// const [,a=`!`,,b=`!`,c=`!`] = str;
// alert (`Я витягнув '${a}', '${b}' та '${c}'`);



//Multiply table rest  

// const arr = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]
// ];
// const [,[, ...rest1], [, ...rest2], [, ...rest3], [, ...rest4]] = arr;
// const newArr = [rest1, rest2, rest3, rest4];
// console.log(newArr);



//For Alert

// const names = ["John", "Paul", "George", "Ringo"];
// for (const name of names) {
//     alert(`${name}`)
// }



//For Select Option

// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let  str = "<select>";
// for (const currency of currencies){
//     str += `<option>${currency}</option>`;
// }
// str+= "</select>";
// document.write(str);



//For Table Horizontal

// const names = ["John", "Paul", "George", "Ringo"]
// let str = "<table><tr>";
// for (const name of names){
//     str+= `<td>${name}</td>`
// }
// str+= "</tr></table>";
// document.write(str);



//For Table Vertical

// const names = ["John", "Paul", "George", "Ringo"]
// let str = "<table>";
// for (const name of names){
//     str+= `<tr><td>${name}</td></tr>`;
// }
// str+= "</table>";
// document.write(str);



//For Table Letters

// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<table>";
// for (const currency of currencies){
//     str+= `<tr>`;
//     for (const letter of currency){
//         str+= `<td>${letter}</td>`;
//     }
//     str+= `</tr>`;
// }
// str+= "</table>";
// document.write(str);



//For Multiply Table

// const arr = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]
// ];
// let str = "<table>";
// for (const number of arr){
//     str+= `<tr>`;
//     for (const num of number){
//         str+= `<td>${num}</td>`;
//     }
//     str += `</tr>`;
// }
// str+= "</table>";
// document.write(str);



//Function Capitalize

// const capitalize = str => {
//     let result = str.slice(0, 1).toUpperCase()+str.slice(1).toLowerCase();
//     return result;
// }
// console.log(capitalize("cANBerRa"));
