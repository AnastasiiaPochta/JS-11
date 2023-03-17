const hwReview = prompt(`Введіть назву завдання: Number: odd або String: lexics і тд...`);


if (hwReview.includes(`Number`)) { // Завдання із назвою Number: odd
    const num = Number(prompt("Введіть число"));
    if (isNaN(num)) {
        alert(`Помилка перетворення числа!`)
    }
    else {
        if (num % 2 == 0) {
            alert(`Число парне!`)
        }
        else {
            alert(`Число непарне!`)
        }
    }
}


else if (hwReview.includes(`String`)) { // Завдання із назвою String: lexics
    const str = prompt("Введіть ваш текст");
    str.includes("блін")
        ? alert("Присутні некоректні слова!")
        : str.includes("бля")
            ? alert("Присутні некоректні слова!")
            : alert("Все ок!");
}


else if (hwReview.includes(`Boolean 1`)) { // Завдання із назвою Boolean 1
    const eigtheenPlus = confirm('Вам вже виповнилося 18 років?');
    const proceed = confirm('Ви надаєте згоду на обробку пресональних даних?');
}


else if (hwReview.includes(`Boolean: if`)) { // Завдання із назвою Boolean: if
    const eigtheenPlus = confirm('Вам вже виповнилося 18 років?');
    if (eigtheenPlus) {
        alert(`Вам можна продовжити перегляд сторінки`)
        const proceed = confirm('Ви надаєте згоду на обробку пресональних даних?');
        if (proceed) {
            alert(`Дякую!`)
        }
        else {
            alert(`Не дуже то і треба було!`)
        }
    }
    else {
        alert(`Нажаль тобі сюди не можна, малюк`)
    }
}


else if (hwReview.includes(`Comparison`)) { // Завдання із назвою Comparison: sizes
    const userSize = prompt('Введіть Ваш розмір в міжнародному форматі: S, M, L, XL і тд');
    if (userSize === 'XXS') {
        alert('В США у Вас 8 розмір')
    }
    else if (userSize === 'XS') {
        alert('В США у Вас 10 розмір')
    }
    else if (userSize === 'S') {
        alert('В США у Вас 12 розмір')
    }
    else if (userSize === 'M') {
        alert('В США у Вас 14 розмір')
    }
    else if (userSize === 'L') {
        alert('В США у Вас 16 розмір')
    }
    else if (userSize === 'XL') {
        alert('В США у Вас 18 розмір')
    }
    else if (userSize === 'XXL') {
        alert('В США у Вас 20 розмір')
    }
    else if (userSize === 'XXXL') {
        alert('В США у Вас 22 розмір')
    }
    else {
        alert('Введіть корректно розімр: формат XXS, XS, S...')
    }
}


else if (hwReview.includes(`Ternary`)) { // Завдання із назвою Ternary
    const isMale = confirm('Ви чоловік?');
    isMale ? alert('Ви чоловік') : alert('Ви жінка');
}


else if (hwReview.includes(`Prompt`)) { // Завдання із назвою Prompt: or
    const age = prompt("How old are you?") || alert("You didn't answer or cancelled, it's a mistake");
    if (age) {
        const currentYear = 2023;
        let yearOfBirth = currentYear - age;
        alert("You were probably born in " + yearOfBirth);
    }
}


else if (hwReview.includes(`Confirm: or`)) { // Завдання із назвою Confirm: or this days
    const shop = confirm("Шопінг?") || alert("Ти бяка!");
}


else if (hwReview.includes(`Confirm: if`)) { // Завдання із назвою Confirm: if this days
    const shop = confirm("Шопінг?");
    if (!shop) {
        alert("Ти - бяка!");
    }
}


else if (hwReview.includes(`Default: or`)) { // Завдання із назвою Default: or
    const name = prompt('Твоє ім\'я?') || 'Іван';
    const middleName = prompt('Твоє по-батькові?') || 'Іванович';
    const lastName = prompt('Твоє прізвище?') || 'Іванов';
    alert(`${name} ${middleName} ${lastName}`);
}


else if (hwReview.includes(`Default: if`)) { // Завдання із назвою Default: if
    let name = prompt('Твоє ім\'я?');
    if (!name) {
        name = 'Іван';
    }
    let middleName = prompt('Твоє по-батькові?');
    if (!middleName) {
        middleName = 'Іванович';
    }
    let lastName = prompt('Твоє прізвище?');
    if (!lastName) {
        lastName = 'Іванов';
    }
    alert(`${name} ${middleName} ${lastName}`);
}


else if (hwReview.includes(`Login`)) { // Завдання із назвою Login and password
    let login = prompt("Введіть логін:");
    if (login === "admin") {
        let password = prompt("Введіть пароль:");
        if (password === "qwerty") {
            alert("Привіт, " + login + "!");
        } else {
            alert("Пароль невірний!");
        }
    } else {
        alert("Логін невірний!");
    }
}


else if (hwReview.includes(`Currency`)) { // Завдання із назвою Currency exchange
    let currency = prompt("Введіть назву валюти (USD або EUR):").toUpperCase();
    let isBuying = confirm("Ви хочете купити цю валюту?");
    let rate;
    if (currency === "USD") {
        rate = isBuying ? 41.5 : 40.0;
    } else if (currency === "EUR") {
        rate = isBuying ? 43.0 : 41.5;
    } else {
        alert("Невідома валюта!");
    }
    if (rate) {
        let amount = parseFloat(prompt("Введіть суму, яку ви хочете обміняти:"));
        let result = isBuying ? amount / rate : amount * rate;
        alert(`Ви отримаєте ${result.toFixed(2)} ${isBuying ? currency : "гривень"}.`);
    }
}


else if (hwReview.includes(`Scissors`)) { // Завдання із назвою Scissors
    const userChoice = prompt("Введіть камінь, ножиці або папір:");
    const computerChoice = Math.random();
    let computerChoiceString;
    if (computerChoice < 0.34) {
        computerChoiceString = "камінь";
    } else if (computerChoice < 0.67) {
        computerChoiceString = "ножиці";
    } else {
        computerChoiceString = "папір";
    }
    alert("Комп'ютер вибрав: " + computerChoiceString);
    let result;
    if (userChoice === computerChoiceString) {
        result = "нічия";
    } else if (userChoice === "камінь") {
        if (computerChoiceString === "ножиці") {
            result = "користувач";
        } else {
            result = "комп'ютер";
        }
    } else if (userChoice === "ножиці") {
        if (computerChoiceString === "папір") {
            result = "користувач";
        } else {
            result = "комп'ютер";
        }
    } else if (userChoice === "папір") {
        if (computerChoiceString === "камінь") {
            result = "користувач";
        } else {
            result = "комп'ютер";
        }
    }
    alert("Переможець: " + result);
}


else {
    alert("Некоректна назва завдання!")
}