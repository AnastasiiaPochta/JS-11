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

//Html tree

// const body = {
//     tagName: 'body',
//     children: [
//         {
//             tagName: 'div',
//             children: [
//                 {
//                     tagName: 'span',
//                     children: ['Enter a data please:']
//                 },
//                 {
//                     tagName: 'br',
//                 },
//                 {
//                     tagName: 'input',
//                     attrs: {
//                         type: 'text',
//                         id: 'name'
//                     },
//                 },
//                 {
//                     tagName: 'input',
//                     attrs: {
//                         type: 'text',
//                         id: 'surname'
//                     },
//                 }
//             ]
//         },
//         {
//             tagName: 'div',
//             children: [
//                 {
//                     tagName: 'button',
//                     attrs: {
//                         id: 'ok'
//                     },
//                     children: ['OK']
//                 },
//                 {
//                     tagName: 'button',
//                     attrs: {
//                         id: 'cancel'
//                     },
//                     children: ['Cancel']
//                 }
//             ]
//         }
//     ],
// }

// const cancelButton = body.children[1].children[1].children[0];
// console.log(cancelButton);
// const idInput = body.children[0].children[3].attrs.id;
// console.log(idInput);

//Parent

// for (const child of body.children) {
//   child.parent = body;
//   if (child.children) {
//     for (const grandchild of child.children) {
//       grandchild.parent = child;
//       if (grandchild.children) {
//         for (const newchild of grandchild.children) {
//           newchild.parent = grandchild;
//         }
//       }
//     }
//   }
// }
// console.log(body);

//Change OK

// body.children[1].children[0].attrs[prompt('Введіть нову назву атрибута')] = prompt('Введіть нове значення для атрибута');
// console.log(body.children[1].children[0]);

//Destructure

// const {
//     children: [
//         {
//             children: [
//                 {
//                     children: [spanText]
//                 }
//             ]
//         }
//     ]
// } = body;
// console.log(spanText);

// const {
//     children: [
//         ,
//         {
//             children: [
//                 ,
//                 {
//                     children: [buttonText],
//                 }
//             ]
//         }
//     ]
// } = body;
// console.log(buttonText);

// const {
//     children: [
//         {
//             children: [
//                 ,
//                 ,
//                 ,
//                 {
//                     attrs: {
//                         id: idAttr,
//                     }
//                 }
//             ]
//         }
//     ]
// } = body;
// console.log(idAttr);

//Destruct array

// const arr = [1,2,3,4,5, "a", "b", "c"];
// const [odd1, even1, odd2, even2, odd3,...letters] = arr;

// console.log(odd2);
// console.log(even2);
// console.log(letters);

//Destruct string

// const arr = [1, "abc"];
// const [number, [s1, s2, s3]] = arr;

// console.log(s3);
// console.log(number);

//Destruct 2

// const obj = {
//     name: 'Ivan',
//     surname: 'Petrov',
//     children: [{ name: 'Maria' }, { name: 'Nikolay' }]
// };

// const {
//     children: [{name: name1 }, { name: name2}]
// } = obj;

// console.log(`${name1}, ${name2}`);

//Destruct 3

// const arr = [1, 2, 3, 4, 5, 6, 7, 10];
// const {0: a, 1: b, length} = arr;

// console.log(a, b);
// console.log(length);

//Copy delete

// const persik = {
//     color: 'рижий',
//     weight: '5 kg',
//     height: '40 см',
//     eyeColor: 'brown',
//     apetit: 'черезчур хороший'
// }

// const { [prompt('Введіть ключ, який необхідно видалити')]: deletedKey, ...copyPersik } = persik;
// console.log(copyPersik);

//Currency real rate

// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//     .then(data => {
//         const rates = data.rates;
//         const curr = prompt('Введіть назву вхідної валюти у форматі USD, EUR, UAH і т.д.').toUpperCase();
//         const currExchange = prompt('Введіть валюту в яку відбувається конвертація у форматі USD, EUR, UAH і т.д.').toUpperCase();
//         const sum = + prompt('Введіть суму у вхідній валюті');
//         if (rates[curr] && rates[currExchange]) {
//             const result = (sum * (rates[currExchange] / rates[curr])).toFixed(2);
//             alert(`Ви отримаєте ${result} ${currExchange}`);
//         } else {
//             alert('Ви ввели якусь дичину замість назви валюти, спробуйте ще раз');
//         }
//     })

//Currency drop down

// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//     .then(data => {
//         const rates = data.rates;
//         let str = "<select>";
//         for (const currency in rates) {
//             str += `<option>${currency}</option>`;
//         }
//         str += "</select>";
//         document.write(str);
//     })

//Currency table

// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//     .then(data => {
//         const rates = data.rates;
//         const currencies = Object.keys(rates);
//         let str = "<table>";
//         str += `<thead><tr><th></th>`;
//         for (const currency of currencies) {
//             str += `<th>${currency}</th>`;
//         }
//         str += `</tr></thead><tbody>`;
//         for (const currency1 of currencies) {
//             str += `<tr><th>${currency1}</th>`;
//             for (const currency2 of currencies) {
//                 if (currency1 === currency2) {
//                     str += `<td>1.00</td>`;
//                 } else {
//                     const crossRate = rates[currency2] / rates[currency1];
//                     const result = crossRate.toFixed(2);
//                     str += `<td>${result}</td>`;
//                 }
//             }
//             str += `<tr>`;
//         }
//         str += "</tbody></table>";
//         document.write(str);
//     })

//Form

// const car = {
//     "Name": "chevrolet chevelle malibu",
//     "Cylinders": 8,
//     "Displacement": 307,
//     "Horsepower": 130,
//     "Weight_in_lbs": 3504,
//     "Origin": "USA",
//     "in_production": false
// }

// let str = `<form><fieldset><legend>${car.Name}</legend>`;
// for (const key in car) {
//     const type = typeof car[key];
//     if (type === "boolean") {
//         const check = car[key] ? "checked" : "";
//         str += `<p><label> ${key}: <input type = "checkbox" ${check}/></label></p>`;
//     } else if (type === "number") {
//         str += `<p><label> ${key}: <input type = "${type}" value = "${car[key]}"/></label></p>`;
//     }
//     else {
//         str += `<p><label> ${key}: <input type = "text" value = "${car[key]}"/></label></p>`;
//     }
// }
// str += "</fieldset></form>";
// document.write(str);

//Table

// const car = [
//   {
//     Name: "chevrolet chevelle malibu",
//     Cylinders: 8,
//     Displacement: 307,
//     Horsepower: 130,
//     Weight_in_lbs: 3504,
//     Origin: "USA",
//   },
//   {
//     Name: "buick skylark 320",
//     Miles_per_Gallon: 15,
//     Cylinders: 8,
//     Displacement: 350,
//     Horsepower: 165,
//     Weight_in_lbs: 3693,
//     Acceleration: 11.5,
//     Year: "1970-01-01",
//   },
//   {
//     Miles_per_Gallon: 18,
//     Cylinders: 8,
//     Displacement: 318,
//     Horsepower: 150,
//     Weight_in_lbs: 3436,
//     Year: "1970-01-01",
//     Origin: "USA",
//   },
//   {
//     Name: "amc rebel sst",
//     Miles_per_Gallon: 16,
//     Cylinders: 8,
//     Displacement: 304,
//     Horsepower: 150,
//     Year: "1970-01-01",
//     Origin: "USA",
//   },
// ];

// const columns = [];
// for (i = 0; i < car.length; i++) {
//   columns.push(...Object.keys(car[i]));
// }
// const uniqueColumns = [...new Set(columns)];
// let str = `<table><thead><tr>`;
// for (const column of uniqueColumns) {
//   str += `<th>${column}</th>`;
// }
// str += `</tr></thead><tbody>`;
// for (const row of car) {
//   str += "<tr>";
//   for (const column of uniqueColumns) {
//     str += `<td>${row[column] ? row[column] : ""}</td>`;
//   }
//   str += "</tr>";
// }
// str += "</tbody></table>";
// document.write(str);
