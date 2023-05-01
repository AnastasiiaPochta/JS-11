//redux Homework

function reducer(state, { type, what, quantity, money }) {
  if (!state) {
    return {
      Beer: { q: 150, price: 99.0, photo: "./пиво.png" },
      Chips: { q: 190, price: 78.0, photo: "./chips.png" },
      Cigaretts: { q: 250, price: 169.0, photo: "./ciga.png" },
      Casa: {money, photo: "./casa.png"}
    };
  }
  if (type === "КУПИТИ") {
    if (quantity <= state[what].q) {
      if (money >= quantity * state[what].price) {
        return {
          ...state,
          [what]: { ...state[what], q: state[what].q - quantity },
          Casa: {...state.Casa, money: money - quantity * state[what].price}
        };
      }
    }
    return state;
  }
}

function createStore(reducer) {
  let state = reducer(undefined, {}); //стартова ініціалізація стану, запуск редьюсера зі state === undefined
  let cbs = []; //масив пiдписникiв

  const getState = () => state; //функція, що повертає змінну із замикання
  const subscribe = (cb) => (
    cbs.push(cb), //запам'ятовуємо пiдписника у масиві
    () => (cbs = cbs.filter((c) => c !== cb))
  ); //повертаємо функцію unsubscribe, яка видаляє пiдписника зі списку

  const dispatch = (action) => {
    const newState = reducer(state, action); //пробуємо запустити редьюсер
    if (newState !== state) {
      //перевіряємо, чи зміг ред'юсер обробити action
      state = newState; //якщо зміг, то оновлюємо state
      for (let cb of cbs) cb(); //та запускаємо пiдписникiв
    }
  };

  return {
    getState, //додавання функції getState в результуючий об'єкт
    dispatch,
    subscribe, //додавання subscribe в об'єкт
  };
}

const store = createStore(reducer);

const купиПіваса = (quantity, money) => ({
  type: "КУПИТИ",
  what: "Beer",
  quantity,
  money,
});

store.dispatch(купиПіваса(50, 6000));

console.log(store.getState());

const getContainer = document.getElementById("container");
for (item in store.getState()) {
  let productContainer = document.createElement("div");
  productContainer.id = `${item}`;
  let name = document.createElement("h3");
  name.innerText = item;
  productContainer.append(name);
  let photoDiv = document.createElement("div");
  let photo = document.createElement("img");
  photo.src = store.getState()[item].photo;
  photo.alt = `${item}`;
  photoDiv.append(photo);
  productContainer.append(photoDiv);
  if (store.getState()[item].q) {
    let quantity = document.createElement("h3");
    quantity.innerText = `Залишок : ${store.getState()[item].q}`;
    productContainer.append(quantity);
    let price = document.createElement("h3");
    price.innerText = `Ціна : ${store.getState()[item].price}`;
    productContainer.append(price);
  } else {
    let selectContainer = document.createElement("div");
    let select = document.createElement("select");
    selectContainer.append(select);
    let input = document.createElement('input');
    input.type = 'number';
    selectContainer.append(input);
    let but = document.createElement('button');
    but.innerText = 'Придбати';
    selectContainer.append(but);
    let money =  document.createElement("h3");
    money.innerText = `Доступно коштів: ${store.getState()[item].money}`;
    productContainer.append(selectContainer);
    productContainer.append(money);
  }
  getContainer.append(productContainer);
}
