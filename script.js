//redux Homework

function reducer(state, { type, what, quantity, money }) {
  if (!state) {
    return {
      Beer: { q: 150, price: 99.0},
      Chips: { q: 190, price: 78.0},
      Cigaretts: { q: 250, price: 169.0},
      Casa: money,
      Income: 0
    };
  }
  if (type === "КУПИТИ") {
    if (quantity <= state[what].q) {
      if (money >= quantity * state[what].price) {
        const totalCost = quantity * state[what].price;
        alert(`Ви придбали ${quantity} ${what} за ${totalCost} грн. Ваша здача: ${money - totalCost} грн`)
        return {
          ...state,
          [what]: { ...state[what], q: state[what].q - quantity },
          Casa: money - totalCost,
          Income: state.Income + totalCost
        };
      } else {
        alert('Вибачте, ви внесли недостатньо коштів!');
      }
    } else {
      alert('Вибачте, товар поки що відсутній');
    }
    return state;
  }
}

function createStore(reducer) {
  let state = reducer(undefined, {});
  let cbs = [];

  const getState = () => state;
  const subscribe = (cb) => (
    cbs.push(cb),
    () => (cbs = cbs.filter((c) => c !== cb))
  );

  const dispatch = (action) => {
    const newState = reducer(state, action);
    if (newState !== state) {
      state = newState;
      for (let cb of cbs) cb();
    }
  };

  return {
    getState,
    dispatch,
    subscribe,
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
  inputM.value = '';
  select.value = '';
  inputQ.value = '';
}

const qBeer= document.getElementById("q_beer");
const qChips= document.getElementById("q_chips");
const qCigaretts= document.getElementById("q_cigaretts");

const quantRenew = () => {
  qBeer.innerText = `${store.getState().Beer.q}`;
  qChips.innerText = `${store.getState().Chips.q}`;
  qCigaretts.innerText = `${store.getState().Cigaretts.q}`;
  document.title = `Ми заробили: ${store.getState().Income} грн`;
}
store.subscribe(quantRenew);
quantRenew();

