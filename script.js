//Temperature

// const celsius = prompt("Enter the temperature in Celsius");

// const fahrenheitFunc = (cels) => cels * (9/5) + 32;

// alert ("The tempeature in Fahrenheit is " + fahrenheitFunc(celsius));
// console.log (fahrenheitFunc(15));
// console.log (fahrenheitFunc(-5));

//блок коду функції для вирішення цього завдання не потрібний



//RGB

// const rgb = (red, green, blue) =>
//     ((red < 16) ? `0${(red).toString(16)}` : (red).toString(16)) +
//     ((green < 16) ? `0${(green).toString(16)}` : (green).toString(16)) +
//     ((blue < 16) ? `0${(blue).toString(16)}` : (blue).toString(16));

// let r = + prompt("Input your number for Red");
// let g = + prompt("Input your number for Green");
// let b = + prompt("Input your number for Blue");

// alert("Color: " + "#" + rgb(r, g, b))

//блок коду функції для вирішення цього завдання не потрібний



//Flats

// const building = (floors, flats, flatNum) => {
//     if (flatNum <= floors * flats) {
//         const entranceNum = 1;
//         const floorNum = Math.ceil(flatNum / flats);
//         return {
//             entrance: entranceNum,
//             floor: floorNum
//         }
//     }
//     else {
//         const entranceNum = Math.ceil(flatNum / (floors * flats));
//         const flatNumInEntrance = flatNum - (entranceNum - 1) * (floors * flats);
//         const floorNum = Math.ceil(flatNumInEntrance / flats);
//         return {
//             entrance: entranceNum,
//             floor: floorNum
//         }
//     }
// }

// const floor = prompt("How many floors does the building have?");
// const flat = prompt("How many flats are there on the floor?");
// const flatN = prompt("Which apartment do you need to find?");

// console.log(building(floor, flat, flatN));



//Credentials

// const fullName = () => {
//     const lastName = prompt("Введіть Ваше прізвище").trim();
//     const name = prompt("Введіть Ваше ім'я").trim();
//     const pobatkovi = prompt("Введіть По-батькові").trim();
//     const surname = lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();
//     const correctName = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
//     const fatherName = pobatkovi.slice(0, 1).toUpperCase() + pobatkovi.slice(1).toLowerCase();
//     return {
//         correctName,
//         surname,
//         fatherName,
//         fullName: `${surname} ${correctName} ${fatherName}`
//     }
// }
// console.log(fullName());



//New line

// const newLine = (str) => str.split('\\n').join('\n');
// const test = prompt("Введіть багаторядковий рядок. Ви можете вводити '\\n' як маркер нового рядка.");
// console.log(newLine(test));



//Prompt OR 

// const promptOr = (prompt, mistake = "You didn't answer or cancelled, it's a mistake") =>
// prompt ? alert(prompt) : alert(mistake);
// const test = prompt(`How old are you?`);
// promptOr(test);



//Login And Password

// const logPassCheck = (log, pas) => {
//     const login = prompt("Введіть логін:");
//     if (login === log) {
//         let password = prompt("Введіть пароль:");
//         if (password === pas) {
//             return true;
//         } else {
//             return false;
//         }
//     } else {
//         return false;
//     }
// }
// const trueLogin = "admin";
// const truePassword = "qwerty";
// alert(logPassCheck (trueLogin, truePassword));



//For Table

// const forTable = (arr) => {
//     let str = "<table>";
//     for (const number of arr) {
//         str += `<tr>`;
//         for (const num of number) {
//             str += `<td>${num}</td>`;
//         }
//         str += `</tr>`;
//     }
//     str += "</table>";
//     return document.write(str);
// }

// const test = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]  
// ];

// const test2 = [
//     [`Ivan`, `Petro`, `Anton`, `Stepan`, `Marichka`],
//     [`Anastasiia`, `Elena`, `Ivan`, `Petro`, `Anton`],
//     [`Anton`, `Stepan`, `Ilya`, `Alisa`, `Sergii`],
//     [`Anastasiia`, `Elena`, `Ivan`, `Petro`, `Anton`],
//     [`Ivan`, `Petro`, `Anton`, `Stepan`, `Marichka`]
// ];

// forTable(test);
// forTable(test2);



//Filter Lexics

// const filterLexics = (str, arr) => {
//     const strArr = str.toLowerCase().split(' ');
//     const filter = strArr.map(word => arr.includes(word) ? '' : word);
//     const str1 = filter.join(' ');
//     return(str1);
// }
// const testStr = prompt(`Введіть рядок`);
// const badWords = ['бляха', 'муха', "пляшка", "шабля"];

// alert(filterLexics(testStr, badWords));
