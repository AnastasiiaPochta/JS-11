//makeProfileTimer

const makeProfileTimer = () => {
  const start = performance.now();
  const timer = () => {
    const end = performance.now();
    return end - start;
  };
  return timer;
};

const timer = makeProfileTimer();
alert("Вимiрюємо час роботи цього alert");
alert(`Час роботи цього аlert ${timer()}`);
const timer2 = makeProfileTimer();
prompt("");
alert(`Час роботи двух аlert та одного prompt ${timer()}`);
alert(`Час роботи prompt та попереднього alert ${timer2()}`);



//makeSaver

const makeSaver = (funcParam) => {
  let savedValue = null;
  let called = false;
  return function () {
    if (!called) {
      savedValue = funcParam();
      called = true;
    }
    return savedValue;
  };
};

var saver = makeSaver(Math.random);
var value1 = saver();
var value2 = saver();

alert(`Random: ${value1} === ${value2}`);

var saver2 = makeSaver(
  () =>
    console.log("saved function called") ||
    [null, undefined, false, "", 0, Math.random()][Math.ceil(Math.random() * 6)]
);
var value3 = saver2();
var value4 = saver2();

console.log(value3 === value4); // теж має бути true

let namePrompt = prompt.bind(window, "Як тебе звуть?");
let nameSaver = makeSaver(namePrompt);
alert(`Привіт! Prompt ще не було!`);
alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`);
alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);



//myBind

function myBind(func, context, defaults) {
  return function (...args) {
    const mergedArgs = [];
    for (let i = 0; i < defaults.length; i++) {
      if (i >= args.length || args[i] === undefined) {
        if (defaults[i] !== undefined) {
          mergedArgs.push(defaults[i]);
        }
      } else {
        mergedArgs.push(args[i]);
      }
    }
    return func.apply(context, mergedArgs);
  };
}

var pow5 = myBind(Math.pow, Math, [, 5]);
var cube = myBind(Math.pow, Math, [, 3]);

console.log(pow5(2)); //32
console.log(pow5(4)); //1024
console.log(cube(3)); //27

var chessMin = myBind(Math.min, Math, [, 4, , 5, , 8, , 9]);
console.log(chessMin(-1, -5, 3, 15)); // результат -5

var zeroPrompt = myBind(prompt, window, [undefined, "0"]);
var someNumber = zeroPrompt("Введіть число"); // викликає prompt("Введіть число","0")



//checkResult

function checkResult(original, validator) {
  function wrapper(...params) {
    let originalResult = original.call(this, ...params);
    while (!validator(originalResult)) {
      originalResult = original.call(this, ...params);
    }
    return originalResult;
  }
  return wrapper;
}

//numberPrompt - це функція, яка буде запускати prompt до тих пір, поки користувач не введе число
const numberPrompt = checkResult(prompt, (x) => !isNaN(+x));
let number = +numberPrompt("Введіть число", "0"); //параметри передаються наскрізь до оригіналу. Не забудьте передати це, використовуючи call або apply

//gamePrompt - це функція, яка буде запускати prompt доти, доки користувач не введе одне зі слів 'камінь', 'ножиці', 'папір'
const gamePrompt = checkResult(prompt, (x) =>
  ["камень", "ножиці", "папір"].includes(x.toLowerCase())
);
const turn = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'");

//RandomHigh. Повертає будь-яке число в діапазоні від 0.5 до 1 завдяки Math.random
const randomHigh = checkResult(Math.random, (x) => x >= 0.5 && x <= 1);
console.log(randomHigh());

//AlwaysSayYes. Дістає користувача вікном confirm поки він не погодиться (не натисне OK)
const alwaysSayYes = checkResult(confirm, (x) => x === true);
const confirmer = alwaysSayYes("Погодься, в тебе немає виходу");

//respectMe. Дістає користувача запуском цієї функції, поки якесь із полів не введено
const fullName = () => {
  const lastName = prompt("Введіть Ваше прізвище").trim();
  const name = prompt("Введіть Ваше ім'я").trim();
  const pobatkovi = prompt("Введіть По-батькові").trim();
  const surname =
    lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();
  const correctName =
    name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  const fatherName =
    pobatkovi.slice(0, 1).toUpperCase() + pobatkovi.slice(1).toLowerCase();
  return {
    lastName,
    name,
    pobatkovi,
    correctName,
    surname,
    fatherName,
    fullName: `${surname} ${correctName} ${fatherName}`,
  };
};

function fullNameValidator(fullName) {
  return (
    fullName.lastName.length > 0 &&
    fullName.name.length > 0 &&
    fullName.pobatkovi.length > 0
  );
}

const respectMe = checkResult(fullName, fullNameValidator);
console.log(respectMe());
