//Map Capitalize

// const arr = prompt(`Введіть рядок`).split(' ');
// const capArr = arr.map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase());
// const str = capArr.join(' ');
// alert(str);



//Filter Lexics

// const arr = prompt(`Введіть рядок`).split(' ');
// const badWords = ['блін', 'бля'];
// const filtered = arr.filter(word => !badWords.includes(word));
// const str = filtered.join(' ');
// console.log(str);



//Beep Lexics

// const arr = prompt(`Введіть рядок`).split(' ');
// const badWords = ['блін', 'бля'];
// const beep = arr.map(word => badWords.includes(word) ? `BEEP` : word);
// const str = beep.join(' ');
// console.log(str);



//Reduce HTML

// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<select>";
// str += currencies.reduce((a,b) =>  a + `<option>` + b + `</option>`, ` `);
// str+= "</select>";
// document.write(str);



//For Brackets Hell Check

// const line = prompt();
// const bracketsStack = [];
// let i = 0;
// for (const character of line){
//     if (character === '(' || character === '[' || character === '{'){
//         bracketsStack.push(character); // додаємо відкриваючу дужку в стек
//     } else if (character === ')' || character === ']' || character === '}') {
//         const lastBracket = bracketsStack.pop(); // беремо останню дужку зі стека
//         if ((lastBracket === '(' && character !== ')') ||
//             (lastBracket === '[' && character !== ']') ||
//             (lastBracket === '{' && character !== '}')){
//             console.log(`Помилка! Дужка ${lastBracket} не відповідає дужці ${character} на позиції ${i}`);
//             break;
//         }
//     }
//     i++;
// }
// if (bracketsStack.length === 0){
//     console.log("Усі дужки розставлені коректно!");
// } else {
//     console.log(`Помилка! Залишилися незакриті дужки: ${bracketsStack.join(", ")}`);
// }

