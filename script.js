//while confirm

// let i = 0
// while (!confirm('Приймаєш мої умови?')) {
//      alert('Я так просто не здамся')
//      i++
// }
// alert(`Ти прийняв мої умови на ${i} раз.`)

//array fill

// const arr = [];
// while (element = prompt('Введи елемент для масиву')) {
//     arr.push(element);
//     alert('Дякую, цей елемент додано');
//     if (element === null){
//         break
//     };
// };
// console.log(arr);

//array fill nopush

// const arr = [];
// let i = 0;
// while (element = prompt('Введи елемент для масиву')) {
//     arr[i] = element;
//     alert('Дякую, цей елемент додано');
//     if (element === null){
//         break
//     };
//     i++;
// };
// console.log(arr);

//infinite probability

// let i = 0;
// for ( ; ; ) {
//   console.log(i);
//   if (Math.random() > 0.9) {
//     break;
//   }
//   i++;
// }
// alert(`Цикл програвся ${i} раз.`);

//empty loop

// while (prompt("ОК чи скасувати?") === null) {}

//progression sum

// const n = +prompt('Введіть число до якого Вам підрахувати суму арифметичної прогресії з кроком 3');
// let progression = 0;
// for (i=1; i <= n; i+=3) {
//     progression += i;
// }
// console.log(progression);

//chess one line

// const length = 8;
// let str = "";
// for (let i = 0; i < length; i++) {
//   str += "# ";
// }
// console.log(str);

//numbers

// let str = "";
// for (i = 0; i < 10; i++) {
//   for (j = 0; j < 10; j++) {
//     str += j;
//   }
//   str += "\n";
// }
// console.log(str);

//chess

// const height = prompt('Введіть висоту шахматної дошки');
// const width = prompt('Введіть ширину шахматної дошки');;
// let str = "";
// for (i = 0; i < height; i++) {
//   for (j = 0; j < width; j++) {
//     if (i%2) {
//         str += '#.';
//     } else {
//         str += '.#';
//     }
//   }
//   str += "\n";
// }
// console.log(str);

//cubes

// const n = +prompt('Введіть число n');
// const arr = [];
// for (i=0; i < n; i++) {
//     arr[i] = Math.pow(i,3);
// }
// console.log(arr);

//multiply table

// let arr = [];
// for (i = 0; i < 10; i++) {
//   arr[i] = [];
//   for (j = 0; j < 10; j++) {
//     arr[i][j] = i * j;
//   }
// }
// console.log(arr);

//read array of objects

// const readArrayOfObjects = () => {
//   const arr = [];
//   let counting = true;
//   while (counting) {
//     const obj = {};
//     let objCreating = true;
//     while (objCreating) {
//       const key = prompt("Enter a key:");
//       if (key === null) {
//         objCreating = false;
//         continue;
//       }
//       const value = prompt(`Enter a value for ${key}:`);
//       if (value === null) {
//         objCreating = false;
//         continue;
//       }
//       obj[key] = value;
//     }
//     arr.push(obj);
//     counting = confirm("Бажаєте створити ще один об'єкт?");
//   }
//   return arr;
// };
// const arr = readArrayOfObjects();
// console.log(arr);
