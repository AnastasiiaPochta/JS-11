//String: greeting

// const name = prompt("What's your name?");
// alert (`Hello, ${name}!`);



//String: gopni4ek

// const str = prompt("Input your text here");
// const lines = str.split(',').join(', блін');
// alert (lines);



//String: capitalize

// const str = prompt("ВвЕдіть щоСь дУжЕ крИвО");
// const result = str.slice(0, 1).toUpperCase()+str.slice(1).toLowerCase();
// alert(result);



//String: word count

// const str = prompt("Введіть рядок, щоб порахувати кількість слів в ньому");
// const wordsArr = str.split(' ');
// alert (`В цьому рядку ${wordsArr.length} слів.`);



//String: credentials

// const lastName = prompt("Введіть Ваше прізвище").trim();
// const name = prompt("Введіть Ваше ім'я").trim();
// const pobatkovi = prompt("Введіть По-батькові").trim();
// const correctLastNane = lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();
// const correctName = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
// const correctPobatkovi = pobatkovi.slice(0, 1).toUpperCase() + pobatkovi.slice(1).toLowerCase();
// const fullName = `${correctLastNane} ${correctName} ${correctPobatkovi}`;
// alert (fullName);



//String: beer

// const str = "Було жарко. Василь пив пиво вприкуску з креветками.";
// const index = str.indexOf('пиво');
// const result = `${str.slice(0, index)}чай${str.slice(index + 4)}`;
// alert(result);



//String: no tag

// const str = prompt("Введіть рядок");
// const indexOne = str.indexOf('<');
// const indexTwo = str.indexOf('>');
// const result = `${str.slice(0, indexOne)}${str.slice(indexTwo + 2)}`; //Додала 2 щоб не включити останній символ тегу > та зайвий пробіл.
// alert (result);



//String: big tag

// const str = prompt("Введіть рядок");
// const indexOne = str.indexOf('<');
// const indexTwo = str.indexOf('>');
// const result = `${str.slice(0, indexOne)}${str.slice(indexOne, indexTwo + 1).toUpperCase()}${str.slice(indexTwo + 1)}`;
// alert (result);



//String: new line

// const str = prompt("Введіть багаторядковий рядок. Ви можете вводити '\\n' як маркер нового рядка.");
// const result = str.split('\\n').join('\n');
// console.log (result);



//String: youtube

// const youtubeLinkRegex = /http(?:s)?:\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?\=]*)?/;
// const inputText = prompt("Введіть текст з посиланням на YouTube");
// const match = inputText.match(youtubeLinkRegex);
// if (match) {
//   const videoId = match[1];
//   const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0"</iframe>`;
//   document.write(embedCode);
// } else {
//   document.write("Посилання на YouTube не знайдено.");
// }



























