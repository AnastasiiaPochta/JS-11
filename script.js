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