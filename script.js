//createPerson

// function createPerson(name, surname) {
//   return {
//     name,
//     surname,
//     getFullName: function () {
//       if (this.fatherName) {
//         return `${this.name} ${this.fatherName} ${this.surname}`;
//       } else {
//         return `${this.name} ${this.surname}`;
//       }
//     },
//   };
// }

// const a = createPerson("Вася", "Пупкін");
// const b = createPerson("Ганна", "Іванова");
// const c = createPerson("Єлизавета", "Петрова");

// console.log(a.getFullName()); //Вася Пупкін
// a.fatherName = "Іванович";
// console.log(a.getFullName()); //Вася Іванович Пупкін

// console.log(b.getFullName()); //Ганна Іванова

//createPersonClosure

function createPersonClosure(name, surname) {
  let age = 0;
  let fatherName = "";
  function getName() {
    return name;
  }
  function getSurname() {
    return surname;
  }
  function getFatherName() {
    return fatherName;
  }
  function getAge() {
    return age;
  }
  function getFullName() {
    return `${surname} ${name} ${fatherName}`;
  }
  function setName(newName) {
    if (
      typeof newName === "string" &&
      newName[0] === newName[0].toUpperCase()
    ) {
      name = newName;
    }
    return name;
  }
  function setSurname(newSurname) {
    if (
      typeof newSurname === "string" &&
      newSurname[0] === newSurname[0].toUpperCase()
    ) {
      surname = newSurname;
    }
    return surname;
  }
  function setFatherName(newFatherName) {
    if (
      typeof newFatherName === "string" &&
      newFatherName[0] === newFatherName[0].toUpperCase()
    ) {
      fatherName = newFatherName;
    }
    return fatherName;
  }
  function setAge(newAge) {
    if (newAge >= 0 && newAge <= 100) {
      age = newAge;
    }
    return age;
  }
  function setFullName(newFullname) {
    if (typeof newFullname === "string") {
      const arr = newFullname.split(" ");
      if (arr.length > 0 && arr[0][0] === arr[0][0].toUpperCase()) {
        surname = arr[0];
      }
      if (arr.length > 1 && arr[1][0] === arr[1][0].toUpperCase()) {
        name = arr[1];
      }
      if (arr.length > 2 && arr[2][0] === arr[2][0].toUpperCase()) {
        fatherName = arr[2];
      }
    }
    return `${surname} ${name} ${fatherName}`;
  }
  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  };
}

// const a = createPersonClosure("Вася", "Пупкін");
// const b = createPersonClosure("Ганна", "Іванова");
// console.log(a.getName());
// a.setAge(15);
// a.setAge(150);
// b.setFullName("Петрова Ганна Миколаївна");
// console.log(b.getFatherName());

//createPersonClosureDestruct

function createPersonClosureDestruct({
  name = "Анонім",
  surname = "Анонім",
} = {}) {
  let age = 0;
  let fatherName = "";
  function getName() {
    return name;
  }
  function getSurname() {
    return surname;
  }
  function getFatherName() {
    return fatherName;
  }
  function getAge() {
    return age;
  }
  function getFullName() {
    return `${name} ${fatherName} ${surname}`;
  }
  function setName(newName) {
    if (
      typeof newName === "string" &&
      newName[0] === newName[0].toUpperCase()
    ) {
      name = newName;
    }
    return name;
  }
  function setSurname(newSurname) {
    if (
      typeof newSurname === "string" &&
      newSurname[0] === newSurname[0].toUpperCase()
    ) {
      surname = newSurname;
    }
    return surname;
  }
  function setFatherName(newFatherName) {
    if (
      typeof newFatherName === "string" &&
      newFatherName[0] === newFatherName[0].toUpperCase()
    ) {
      fatherName = newFatherName;
    }
    return fatherName;
  }
  function setAge(newAge) {
    if (newAge >= 0 && newAge <= 100) {
      age = newAge;
    }
    return age;
  }
  function setFullName(newFullname) {
    if (typeof newFullname === "string") {
      const arr = newFullname.split(" ");
      if (arr.length > 0 && arr[0][0] === arr[0][0].toUpperCase()) {
        surname = arr[0];
      }
      if (arr.length > 1 && arr[1][0] === arr[1][0].toUpperCase()) {
        name = arr[1];
      }
      if (arr.length > 2 && arr[2][0] === arr[2][0].toUpperCase()) {
        fatherName = arr[2];
      }
    }
    return `${surname} ${name} ${fatherName}`;
  }
  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  };
}

// const a = createPersonClosureDestruct(createPerson("Вася", "Пупкін"));
// const b = createPersonClosureDestruct({ name: "Миколай", age: 75 });
// console.log(a.getName()) //Вася
// a.setAge(15)
// a.setAge(150) //не має спрацювати
// console.log(a.getAge()) //15
// b.setFullName("Петрова Ганна Олександрівна")
// console.log(b.getFatherName()) //Олександрівна

//isSorted;

// function isSorted(...arr) {
//   if (arr.length <= 1) {
//     return true;
//   }
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (typeof arr[i] !== "number" || typeof arr[i + 1] !== "number") {
//       return false;
//     }
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isSorted(1, 2, 3, 4, 6, 11, 22));
// console.log(isSorted(1, 2, 2, 6, 11, 22));
// console.log(isSorted(1, 2, 2, 6, 1, 22));

//Test isSorted

// function isSorted(...arr) {
//   while ((element = +prompt("Введи елемент для масиву"))) {
//     arr.push(element);
//     alert("Дякую, цей елемент додано");
//     if (element === null) {
//       break;
//     }
//   }
//   if (arr.length <= 1) {
//     return true;
//   }
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (typeof arr[i] !== "number" || typeof arr[i + 1] !== "number") {
//       return false;
//     }
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isSorted());

//personForm

const formDiv = document.getElementById("formdiv");
const test = createPersonClosure("Ганна", "Іванова");
test.setAge(15);
test.setFullName("Петрова Ганна Миколаївна");

function personForm(parent, person) {
  const funcs = Object.keys(person);
  for (i = 0; i < 5; i++) {
    const input = document.createElement("input");
    let text = person[funcs[i]];
    let value = text();
    input.value = `${value}`;
    parent.appendChild(input);
    ////Навісити кожному з них обробник події типу nameInput.oninput = () => {
    //Тут намагаємося міняти person використовуючи person.setName.
    // Наприклад, при зміні поля введення імені повинен запускатися setName(якийсь инпут.value)
    // Функції set... повертають значення, і його потрібно занести назад до input.
    //}
    //Зверніть увагу, що при зміні ПІБ повинні змінитися поля ім'я, по батькові та прізвище
  }
}

// function personForm(parent, person) {
//   const inputFields = [
//     { label: "Ім'я", getter: person.getName, setter: person.setName },
//     { label: "Прізвище", getter: person.getSurname, setter: person.setSurname },
//     {
//       label: "По батькові",
//       getter: person.getFatherName,
//       setter: person.setFatherName,
//     },
//     { label: "Вік", getter: person.getAge, setter: person.setAge },
//     {
//       label: "Повне ім'я",
//       getter: person.getFullName,
//       setter: person.setFullName,
//     },
//   ];
//   for (field of inputFields) {
//     const container = document.createElement("div");
//     const label = document.createElement("label");
//     label.innerText = field.label;
//     container.appendChild(label);
//     const input = document.createElement("input");
//     input.type = "text";
//     input.value = field.getter();
//     container.appendChild(input);
//     parent.appendChild(container);
//   }
// }

personForm(formDiv, test);
