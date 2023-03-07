//assign: evaluation

// var a = 5;  
// var b, c;
// b = ((a) * (5)); //додала більше дужок
// console.log(b); //працює так само
// b = ((c) = (b/2)); //додала більше дужок
// console.log(b); //працює так само
// console.log(c); //працює так само
// b = a * 5; //забрала дужки
// console.log(b); //працює так само
// b = c = b/2; //забрала дужки
// console.log(b); //працює так само
// console.log(c); //працює так само
// b = c = (b/2); //переставила дужки - так теж буде працювати


//Number: age

// const age = prompt("How old are you?");
// const currentYear = 2023;
// let yearOfBirth = (currentYear - age);
// alert ("You probably was born in " + yearOfBirth);


//Number: temperature

// const celsius = prompt("Enter the temperature in Celsius");
// let fahrenheit = celsius * (9/5) + 32;
// alert ("The tempeature in Fahrenheit is " + fahrenheit);


//Number: divide

// const firstNum = prompt("Enter the first number");
// const secondNum = prompt("Enter the second number");
// let result = Math.floor(firstNum/secondNum);
// alert ("Result: " + result);


//Number: currency

// const uah = prompt("How much UAH do you want to convert to USD?");
// const rate = 40;
// let usd = (uah/rate).toFixed(2);
// alert ("You receive " + usd + " USD");


//Number: RGB

// const red = + prompt ("Input your number for Red");
// const green = + prompt ("Input your number for Green");
// const blue = + prompt ("Input your number for Blue");
// let rgb = (red).toString(16) + (green).toString(16) + (blue).toString(16);
// if (blue < 16) alert ("Unable to proceed, pls start from number 16");
// else if (green < 16) alert ("Unable to proceed, pls start from number 16");
// else if (red < 16) alert ("Unable to proceed, pls start from number 16");
// else alert ("Color: " + "#" + rgb);


//Number: flats

// const floors = prompt ("How many floors does the building have?");
// const flats = prompt ("How many flats are there on the floor?");
// const flatNum = prompt ("Which apartment do you need to find?");
// if (flatNum <= floors * flats) {
//     const entranceNum = 1;
//     const floorNum = Math.ceil( flatNum / flats);
//     alert(`Entrance: ${entranceNum}, Floor: ${floorNum}`);
// }
// else {
//     const entranceNum = Math.ceil(flatNum/(floors * flats));
//     const flatNumInEntrance = flatNum - (entranceNum - 1) * (floors * flats);
//     const floorNum = Math.ceil(flatNumInEntrance / flats);
//     alert(`Entrance: ${entranceNum}, Floor: ${floorNum}`);
// }






















