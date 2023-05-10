//fetch basic

const fetchBasic = (container, json) => {
  const table = document.createElement("table");
  const header = table.insertRow();
  for (let key in json) {
    const text = json[key];
    if (text.length > 0) {
      const headerCell = document.createElement("th");
      headerCell.innerHTML = key;
      header.appendChild(headerCell);
    }
  }
  const data = table.insertRow();
  for (let key in json) {
    const text = json[key];
    if (text.length > 0) {
      const dataCell = document.createElement("td");
      if (Array.isArray(text)) {
        for (let str of text) {
          const formatter = document.createElement("tr");
          formatter.innerHTML = str;
          dataCell.appendChild(formatter);
        }
      } else {
        dataCell.innerHTML = text;
      }
      data.appendChild(dataCell);
    }
  }
  container.appendChild(table);
};

fetch("https://swapi.dev/api/people/1/")
  .then((res) => res.json())
  .then((luke) => fetchBasic(document.body, luke));



//fetch improved

const fetchImproved = (container, json) => {
  const table = document.createElement("table");
  const header = table.insertRow();
  for (let key in json) {
    const text = json[key];
    if (text.length > 0) {
      const headerCell = document.createElement("th");
      headerCell.innerHTML = key;
      header.appendChild(headerCell);
    }
  }
  const data = table.insertRow();
  for (let key in json) {
    const text = json[key];
    if (text.length > 0) {
      const dataCell = document.createElement("td");
      if (Array.isArray(text)) {
        for (let str of text) {
          if (str.includes("https://swapi.dev/api/")) {
            const butt = document.createElement("button");
            butt.innerText = str;
            butt.onclick = () => {
              fetch(`${butt.innerText}`)
                .then((res) => res.json())
                .then((data) => fetchImproved(butt, data));
            };
            dataCell.appendChild(butt);
          } else {
            const formatter = document.createElement("tr");
            formatter.innerHTML = str;
            dataCell.appendChild(formatter);
          }
        }
      } else {
        if (text.includes("https://swapi.dev/api/")) {
          const butt = document.createElement("button");
          butt.innerText = text;
          butt.onclick = () => {
            fetch(`${butt.innerText}`)
              .then((res) => res.json())
              .then((data) => fetchImproved(butt, data));
          };
          dataCell.appendChild(butt);
        } else {
          dataCell.innerHTML = text;
        }
      }
      data.appendChild(dataCell);
    }
  }
  container.appendChild(table);
};

fetch("https://swapi.dev/api/people/1/")
  .then((res) => res.json())
  .then((luke) => fetchImproved(document.body, luke));



//race

const myfetch = fetch("https://swapi.dev/api/people/1");

function delay(ms) {
  function executor(fulfill) {
    setTimeout(() => fulfill(ms), ms);
  }
  return new Promise(executor);
}

const randomTime = Math.floor(Math.random() * 5000);

const delays = delay(randomTime);

const race = Promise.race([myfetch, delays]).then((result) => {
  if (result === randomTime) {
    console.log(`Делей переміг(${result}ms)`);
  } else {
    console.log(`Запит переміг`);
  }
});



//Promisify: confirm

function confirmPromise(text) {
  return new Promise((resolve, reject) => {
    const result = confirm(text);
    if (result) {
      resolve();
    } else {
      reject();
    }
  });
}

confirmPromise("Проміси це складно?").then(
  () => console.log("не так вже й складно"),
  () => console.log("respect за посидючість і уважність")
);



//Promisify: prompt

function promptPromise(text) {
  return new Promise((resolve, reject) => {
    const result = prompt(text);
    if (result === null) {
      reject();
    } else {
      resolve(result);
    }
  });
}

promptPromise("Як тебе звуть?").then(
  (name) => console.log(`Тебе звуть ${name}`),
  () => console.log("Ну навіщо морозитися, нормально ж спілкувалися")
);



//Promisify: LoginForm

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
  parent.appendChild(submitButton);

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

function loginPromise(parent){
  function executor(resolve, reject){
    const form = new LoginForm(parent);

  }
  return new Promise(executor)
}

loginPromise(document.body).then(({login, password}) => console.log(`Ви ввели ${login} та ${password}`))
