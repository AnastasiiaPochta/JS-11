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

// function createPersonClosureDestruct({
//   name = "Анонім",
//   surname = "Анонім",
// } = {}) {
//   let age = 0;
//   let fatherName = "";
//   function getName() {
//     return name;
//   }
//   function getSurname() {
//     return surname;
//   }
//   function getFatherName() {
//     return fatherName;
//   }
//   function getAge() {
//     return age;
//   }
//   function getFullName() {
//     return `${name} ${fatherName} ${surname}`;
//   }
//   function setName(newName) {
//     if (
//       typeof newName === "string" &&
//       newName[0] === newName[0].toUpperCase()
//     ) {
//       name = newName;
//     }
//     return name;
//   }
//   function setSurname(newSurname) {
//     if (
//       typeof newSurname === "string" &&
//       newSurname[0] === newSurname[0].toUpperCase()
//     ) {
//       surname = newSurname;
//     }
//     return surname;
//   }
//   function setFatherName(newFatherName) {
//     if (
//       typeof newFatherName === "string" &&
//       newFatherName[0] === newFatherName[0].toUpperCase()
//     ) {
//       fatherName = newFatherName;
//     }
//     return fatherName;
//   }
//   function setAge(newAge) {
//     if (newAge >= 0 && newAge <= 100) {
//       age = newAge;
//     }
//     return age;
//   }
//   function setFullName(newFullname) {
//     if (typeof newFullname === "string") {
//       const arr = newFullname.split(" ");
//       if (arr.length > 0 && arr[0][0] === arr[0][0].toUpperCase()) {
//         surname = arr[0];
//       }
//       if (arr.length > 1 && arr[1][0] === arr[1][0].toUpperCase()) {
//         name = arr[1];
//       }
//       if (arr.length > 2 && arr[2][0] === arr[2][0].toUpperCase()) {
//         fatherName = arr[2];
//       }
//     }
//     return `${surname} ${name} ${fatherName}`;
//   }
//   return {
//     getName,
//     getSurname,
//     getFatherName,
//     getAge,
//     getFullName,
//     setName,
//     setSurname,
//     setFatherName,
//     setAge,
//     setFullName,
//   };
// }

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

// function personForm(parent, person) {
//   const nameInput = document.createElement("input");
//   nameInput.value = person.getName();
//   const surnameInput = document.createElement("input");
//   surnameInput.value = person.getSurname();
//   const fatherNameInput = document.createElement("input");
//   fatherNameInput.value = person.getFatherName();
//   const ageInput = document.createElement("input");
//   ageInput.value = person.getAge();
//   const fullNameInput = document.createElement("input");
//   fullNameInput.value = person.getFullName();
//   parent.appendChild(nameInput);
//   parent.appendChild(surnameInput);
//   parent.appendChild(fatherNameInput);
//   parent.appendChild(ageInput);
//   parent.appendChild(fullNameInput);

//   nameInput.oninput = () => {
//     person.setName(nameInput.value);
//     nameInput.value = person.getName();
//     fullNameInput.value = person.getFullName();
//   };

//   surnameInput.oninput = () => {
//     person.setSurname(surnameInput.value);
//     surnameInput.value = person.getSurname();
//     fullNameInput.value = person.getFullName();
//   };

//   fatherNameInput.oninput = () => {
//     setter = person.setFatherName(fatherNameInput.value);
//     fatherNameInput.value = person.getFatherName();
//     fullNameInput.value = person.getFullName();
//   };

//   ageInput.oninput = () => {
//     person.setAge(ageInput.value);
//     ageInput.value = person.getAge();
//   };

//   fullNameInput.oninput = () => {
//     person.setFullName(fullNameInput.value);
//     fullNameInput.value = person.getFullName();
//     nameInput.value = person.getName();
//     surnameInput.value = person.getSurname();
//     fatherNameInput.value = person.getFatherName();
//   };
// }
// personForm(formDiv, test);

//getSetForm

function getSetForm(parent, object) {
  let register = {};
  const updateInputs = () => {
    for (key in register) {
      const getKey = `get` + key;
      if (getKey in object) {
        let getValue = object[getKey]();
        register[key].value = getValue;
      }
    }
  };
  for (func in object) {
    const isGet = func.startsWith("get");
    const fieldName = func.slice(3);
    const setKey = `set` + fieldName;
    const getKey = `get` + fieldName;
    if (isGet) {
      const input = document.createElement("input");
      const type = typeof object[getKey]();
      if (type === "boolean") {
        input.type = "checkbox";
      } else if (type === "number") {
        input.type = "number";
      } else {
        input.type = "text";
      }
      if (!(setKey in object)) {
        input.disabled = true;
      }
      input.placeholder = `${fieldName}`;
      input.oninput = () => {
        object[setKey](input.value);
        input.value = object[getKey]();
        updateInputs();
      };

      parent.appendChild(input);
      register[fieldName] = input;
    }
  }
  updateInputs();
}

let car;
{
  let brand = "BMW",
    model = "X5",
    volume = 2.4;
  car = {
    getBrand() {
      return brand;
    },
    setBrand(newBrand) {
      if (newBrand && typeof newBrand === "string") {
        brand = newBrand;
      }
      return brand;
    },

    getModel() {
      return model;
    },
    setModel(newModel) {
      if (newModel && typeof newModel === "string") {
        model = newModel;
      }
      return model;
    },

    getVolume() {
      return volume;
    },
    setVolume(newVolume) {
      newVolume = +newVolume;
      if (newVolume && newVolume > 0 && newVolume < 20) {
        volume = newVolume;
      }
      return volume;
    },

    getTax() {
      return volume * 100;
    },
  };
}

const testDiv = document.getElementById("testdiv");
const testDiv2 = document.getElementById("testdiv2");

getSetForm(formDiv, test);
getSetForm(testDiv, createPersonClosure("Анон", "Анонов"));
getSetForm(testDiv2, car);