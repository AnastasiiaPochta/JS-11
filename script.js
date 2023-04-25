// //Person

// function Person(name, surname) {
//    this.name = name;
//    this.surname = surname;
//    this.getFullName = () => {
//       if (this.fatherName) {
//         return `${this.name} ${this.fatherName} ${this.surname}`;
//       } else {
//         return `${this.name} ${this.surname}`;
//       }
//     };
// }

// const a = new Person("Вася", "Пупкін")
// const b = new Person("Ганна", "Іванова")
// const c = new Person("Єлизавета", "Петрова")

// a.fatherName = 'Іванович'
// console.log(a.getFullName()) // Вася Іванович Пупкін
// console.log(b.getFullName()) // Ганна Іванова
// console.log(c.getFullName()) // Єлизавета Петрова

// // Person Prototype

// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }

// Person.prototype.getFullName = function () {
//   if (this.fatherName) {
//     return `${this.name} ${this.fatherName} ${this.surname}`;
//   } else {
//     return `${this.name} ${this.surname}`;
//   }
// };

// const a = new Person("Вася", "Пупкін");
// const b = new Person("Ганна", "Іванова");
// const c = new Person("Єлизавета", "Петрова");

// a.fatherName = "Іванович";
// console.log(a.getFullName()); // Вася Іванович Пупкін
// console.log(b.getFullName()); // Ганна Іванова
// console.log(c.getFullName()); // Єлизавета Петрова

//Password

function Password(parent, open) {
  const inputPassword = document.createElement("input");
  inputPassword.placeholder = "Password";
  inputPassword.oninput = () => this.setValue(inputPassword.value);
  parent.appendChild(inputPassword);

  const checkVisible = document.createElement("input");
  checkVisible.type = "checkbox";
  checkVisible.oninput = () => this.setOpen(checkVisible.checked);
  parent.appendChild(checkVisible);

  this.getValue = () => inputPassword.value;

  this.setValue = (newValue) => {
    inputPassword.value = newValue;
    if (typeof this.onChange === "function") {
      this.onChange(inputPassword.value);
    }
  };

  this.getOpen = () => open;

  this.setOpen = (newOpen) => {
    open = newOpen;
    if (open) {
      inputPassword.type = "text";
      checkVisible.checked = true;
    } else {
      inputPassword.type = "password";
      checkVisible.checked = false;
    }
    if (typeof this.onOpenChange === "function") {
      this.onOpenChange(open);
    }
  };

  this.setStyle = (newStyle) => {
    inputPassword.style.border = newStyle;
    checkVisible.style.marginRight = "10px";
  };

  this.setOpen(open);

  this.setStyle("1px solid grey");
}

// let p = new Password(document.body, true);
// p.onChange = (data) => console.log(data);
// p.onOpenChange = (open) => console.log(open);
// p.setValue("qwerty");
// console.log(p.getValue());
// p.setOpen(false);
// console.log(p.getOpen());

// //LoginForm

// const container = document.getElementById("loginForm");

// const inputLogin = document.createElement("input");
// inputLogin.placeholder = "Login";
// let login = "";
// inputLogin.oninput = () => {
//   login = inputLogin.value;
//   disabledButton();
// };
// container.appendChild(inputLogin);

// const inputPass = new Password(container, false);
// let password = "";
// inputPass.onChange = (data) => {
//   password = data;
//   disabledButton();
// };

// const submitButton = document.createElement("input");
// submitButton.type = "submit";
// submitButton.value = "Відправити";
// submitButton.onclick = () => {
//   console.log("Sending login and password:", login, password);
//   inputLogin.value = "";
//   inputPass.setValue("");
//   disabledButton();
// };
// disabledButton();
// container.appendChild(submitButton);

// function disabledButton() {
//   if (login.length < 1 || password.length < 1) {
//     submitButton.disabled = true;
//   } else {
//     submitButton.disabled = false;
//   }
// }

//LoginForm Constructor

function LoginForm(parent, open) {
  const inputLogin = document.createElement("input");
  inputLogin.placeholder = "Login";
  inputLogin.oninput = () => {
    this.setLogin(inputLogin.value);
    this.disabledButton();
  };
  parent.appendChild(inputLogin);

  const inputPass = new Password(parent, open);
  inputPass.onChange = () => {
    this.disabledButton();
  };

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Відправити";
  submitButton.onclick = () => {
    console.log(
      `Sending login and password: ${this.getLogin()}, ${inputPass.getValue()}`
    );
    this.setLogin("");
    inputPass.setValue("");
    this.disabledButton();
  };
  container.appendChild(submitButton);

  this.getLogin = () => inputLogin.value;

  this.setLogin = (newLogin) => {
    inputLogin.value = newLogin;
  };

  this.disabledButton = () => {
    if (this.getLogin().length < 1 || inputPass.getValue().length < 1) {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  };
  this.disabledButton();
}

const container = document.getElementById("loginForm");
const formnew = new LoginForm(container, false);

// //Password Verify

// const passwordContainer = document.getElementById("password-container");

// const password1 = new Password(passwordContainer, false);
// const password2 = new Password(passwordContainer, false);

// password1.onChange = (value) => {
//   if (value !== password2.getValue()) {
//     password2.setStyle("2px solid red");
//   } else {
//     password2.setStyle("");
//   }
// };

// password1.onOpenChange = (open) => {
//   if (open) {
//     if (password2.getOpen() === true) {
//       password2.setOpen(false);
//     }
//   } else {
//     if (password2.getOpen() === false) {
//       password2.setOpen(true);
//     }
//   }
// };

// password2.onChange = (value) => {
//   if (value !== password1.getValue()) {
//     password2.setStyle("2px solid red");
//   } else {
//     password2.setStyle("");
//   }
// };

// password2.onOpenChange = (open) => {
//   if (open) {
//     if (password1.getOpen() === true) {
//       password1.setOpen(false);
//     }
//   } else {
//     if (password1.getOpen() === false) {
//       password1.setOpen(true);
//     }
//   }
// };
