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

const noSwitch = (key, cases, defaultKey = "default") => {
  if (key in cases) {
    return cases[key]();
  } else {
    return cases[defaultKey]();
  }
};

const drink = prompt("Що ви любите пити");
noSwitch(drink, {
  воду: () => console.log("Найздоровіший вибір!"),
  чай() {
    console.log("Смачна та корисна штука. Не перестарайтеся з цукром");
  },
  пиво: () => console.log("Добре влітку, та в міру"),
  віскі: function () {
    console.log("Та ви, батечку, естет! Не забудьте лід і сигару");
  },
  default() {
    console.log("шото я не зрозумів");
  },
});



//closure calc

const buttonsDiv = document.getElementById("buttons");
fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    const rates = data.rates;
    const currencies = Object.keys(rates);
    for (const currency of currencies) {
      const btn = document.createElement("button");
      btn.innerText = currency;
      btn.onclick = () => {
        const sum = prompt(
          `Яку суму ${currency} ви хочете конвертувати в USD?`
        );
        const convert = (sum / rates[currency]).toFixed(2);
        return alert(`Ви отримаєте ${convert} USDT`);
      };
      buttonsDiv.appendChild(btn);
    }
  });



//closure calc 2

const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const amount = document.getElementById("amount");
const resultDiv = document.getElementById("result");
const rateDiv = document.getElementById("rate");

fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    const rates = data.rates;
    const currencies = Object.keys(rates);
    for (const currency of currencies) {
      const optn = document.createElement("option");
      optn.innerText = currency;
      fromSelect.appendChild(optn);
    }
    for (const currency of currencies) {
      const optn = document.createElement("option");
      optn.innerText = currency;
      toSelect.appendChild(optn);
    }
    const convertCurrency = () => {
      const cur1 = fromSelect.value;
      const cur2 = toSelect.value;
      const crossRate = rates[cur2] / rates[cur1];
      const result = crossRate * amount.value;
      rateDiv.innerText = crossRate;
      resultDiv.innerText = result;
    };
    fromSelect.onchange = convertCurrency;
    toSelect.onchange = convertCurrency;
    amount.oninput = convertCurrency;
  });


  
//countries and cities

fetch(
  "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const countries = Object.keys(data);
    const countriesSelect = document.createElement("select");
    const citiesSelect = document.createElement("select");
    const city = document.createElement("option");
    city.innerText = " ";
    citiesSelect.appendChild(city);
    for (const country of countries) {
      const optn = document.createElement("option");
      optn.innerText = country;
      countriesSelect.appendChild(optn);
    }
    document.body.appendChild(countriesSelect);
    document.body.appendChild(citiesSelect);
    const cityFunc = () => {
      citiesSelect.innerHTML = "";
      const selected = countriesSelect.value;
      const cities = data[selected];
      for (const city of cities) {
        const optn = document.createElement("option");
        optn.innerText = city;
        citiesSelect.appendChild(optn);
      }
    };
    countriesSelect.onchange = cityFunc;
  });
