//blocks

let a = 10;
{
  let b = 20;
  {
    let c = 30;
    // a = 10, b = 20, c = 30, d - undefined
    b++;
    a *= 10;
  }
  {
    let c = 50;
    // a = 100, b = 21, c = 50, d - undefined
    b += 500;
  }
  {
    const a = 100500;
    const d = "value";
    // a = 100500, b = 521, c - undefined, d - "value"
    {
      let a = -50;
      b = 1000;
      // a = -50, b = 1000, c - undefined, d - "value"
    }
    // a = 100500, b = 1000, c - undefined, d - "value"
  }
  //a = 100, b = 1000, c - undefined, d - undefined
}
//a = 100, b - undefined, c - undefined, d - undefined

//comparison if

const age = +prompt("Скільки вам років?");
if (age < 0) {
  alert("ти ще не народився");
} else if (age < 18) {
  alert("школяр");
} else if (age < 30) {
  alert("молодь");
} else if (age < 45) {
  alert("зрілість");
} else if (age < 60) {
  alert("захід сонця");
} else {
  alert("як пенсія?");
}

//switch: sizes

const userSize = prompt(
  "Введіть Ваш розмір в міжнародному форматі: S, M, L, XL і тд"
);

switch (userSize) {
  case "XXS":
    alert("В США у Вас 8 розмір");
    break;
  case "XS":
    alert("В США у Вас 10 розмір");
    break;
  case "S":
    alert("В США у Вас 12 розмір");
    break;
  case "M":
    alert("В США у Вас 14 розмір");
    break;
  case "L":
    alert("В США у Вас 16 розмір");
    break;
  case "XL":
    alert("В США у Вас 18 розмір");
    break;
  case "XXL":
    alert("В США у Вас 20 розмір");
    break;
  case "XXXL":
    alert("В США у Вас 22 розмір");
    break;
  default:
    alert("Введіть корректно розімр: формат XXS, XS, S...");
}

//switch: if

const color = prompt("Введіть колір");

if (color === "red") {
  document.write("<div style='background-color: red;'>червоний</div>");
  document.write(
    "<div style='background-color: black; color: white;'>чорний</div>"
  );
} else if (color === "black") {
  document.write(
    "<div style='background-color: black; color: white;'>чорний</div>"
  );
} else if (color === "blue") {
  document.write("<div style='background-color: blue;'>синій</div>");
  document.write("<div style='background-color: green;'>зелений</div>");
} else if (color === "green") {
  document.write("<div style='background-color: green;'>зелений</div>");
} else {
  document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
}

//noswitch
