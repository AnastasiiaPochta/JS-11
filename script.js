//redux Homework

function reducer(state, { type, what, quantity, money }) {
  if (!state) {
    return {
      Beer: { q: 150, price: 99.0},
      Chips: { q: 190, price: 78.0},
      Cigaretts: { q: 250, price: 169.0},
      Casa: money
    };
  }
  if (type === "КУПИТИ") {
    if (quantity <= state[what].q) {
      if (money >= quantity * state[what].price) {
        return {
          ...state,
          [what]: { ...state[what], q: state[what].q - quantity },
          Casa: money - quantity * state[what].price
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

const but = document.getElementById("buy");

const inputM = document.getElementById("money");
let money = inputM.value;
inputM.onchange = () => {
  money = inputM.value;
}

const select = document.getElementById("products");
let what = select.value;
select.onchange = () => {
  what = select.value;
}

const inputQ = document.getElementById("quantity");
let quantity = inputQ.value;
inputQ.onchange = () => {
  quantity = inputQ.value;
}

const actionCreator = (what, quantity, money) => ({
  type: "КУПИТИ",
  what,
  quantity,
  money,
});

but.onclick = () => {
  store.dispatch(actionCreator(what, quantity, money));
  console.log(store.getState())
}


