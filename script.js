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

// function createPersonClosure(name, surname) {
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
//   }
//   function setSurname(newSurname) {
//     if (
//       typeof newSurname === "string" &&
//       newSurname[0] === newSurname[0].toUpperCase()
//     ) {
//       surname = newSurname;
//     }
//   }
//   function setFatherName(newFatherName) {
//     if (
//       typeof newFatherName === "string" &&
//       newFatherName[0] === newFatherName[0].toUpperCase()
//     ) {
//       fatherName = newFatherName;
//     }
//   }
//   function setAge(newAge) {
//     if (newAge >= 0 && newAge <= 100) {
//       age = newAge;
//     }
//   }
//   function setFullName(newFullname) {
//     if (typeof newFullname === "string") {
//       const arr = newFullname.split(" ");
//       if (arr[0][0] === arr[0][0].toUpperCase()) {
//         surname = arr[0];
//       }
//       if (arr[1][0] === arr[1][0].toUpperCase()) {
//         name = arr[1];
//       }
//       if (arr[2][0] === arr[2][0].toUpperCase()) {
//         fatherName = arr[2];
//       }
//     }
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
//   fatherName = "Анонімович",
//   age = 0
// } = {}) {
//   return {
//     name,
//     surname,
//     fatherName,
//     age,
//   };
// }

// const aa = createPersonClosureDestruct(createPerson("Вася", "Пупкін"));
// const bb = createPersonClosureDestruct({ name: "Миколай", age: 75 });
// console.log(aa);
// console.log(bb);



//isSorted

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

// console.log(isSorted(1,2,3,4,6,11,22));
// console.log(isSorted(1,2,2,6,11,22));
// console.log(isSorted(1,2,2,6,1,22));

