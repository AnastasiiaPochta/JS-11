//Literals

// const persik = {
//     color: 'рижий',
//     weight: '5 kg',
//     height: '40 см',
//     eyeColor: 'brown',
//     apetit: 'черезчур хороший'
// }



//Literals expand

// const persik = {
//     [prompt('Введіть потрібний ключ для кольору кота')]: prompt('Введіть колір кота'),
//     [prompt('Введіть потрібний ключ для ваги кота')]: prompt('Введіть вагу кота'),
//     height: '40 см',
//     eyeColor: 'brown',
//     apetit: 'черезчур хороший'
// }
// console.log(persik);



//Literals copy

// const persik = {
//     [prompt('Введіть потрібний ключ для кольору кота')]: prompt('Введіть колір кота'),
//     [prompt('Введіть потрібний ключ для ваги кота')]: prompt('Введіть вагу кота'),
//     height: '40 см',
//     eyeColor: 'brown',
//     apetit: 'черезчур хороший'
// }
// const name = prompt("Введіть ім'я кота")
// const obj = {
//     name,
//     ...persik
// }
// console.log(obj);