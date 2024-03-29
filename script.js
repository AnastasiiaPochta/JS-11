//createStore

function createStore(reducer) {
  let state = reducer(undefined, {});
  let cbs = [];

  const getState = () => state;
  const subscribe = (cb) => (
    cbs.push(cb), () => (cbs = cbs.filter((c) => c !== cb))
  );

  const dispatch = (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
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

//promiseReducer

function promiseReducer(state = {}, { type, status, payload, error, key }) {
  if (type === "PROMISE") {
    return {
      ...state,
      [key]: { status, payload, error },
    };
  }
  return state;
}

const actionPending = (key) => ({ type: "PROMISE", status: "PENDING", key });

const actionFulfilled = (key, payload) => ({
  type: "PROMISE",
  status: "FULFILLED",
  payload,
  key,
});

const actionRejected = (key, error) => ({
  type: "PROMISE",
  status: "REJECTED",
  error,
  key,
});

const actionPromise = (key, promise) => async (dispatch) => {
  dispatch(actionPending(key));
  try {
    const payload = await promise;
    dispatch(actionFulfilled(key, payload));
    return payload;
  } catch (error) {
    dispatch(actionRejected(key, error));
  }
};

const store = createStore(promiseReducer);

store.subscribe(() => console.log(store.getState()));

//authReducer

const jwtDecode = (token) => {
  try {
    const arr = token.split(".");
    const data = arr[1];
    const decodedData = JSON.parse(atob(data));
    return decodedData;
  } catch (e) {
    return "undefined";
  }
};

function authReducer(state = {}, { type, token }) {
  if (type === "AUTH_LOGIN") {
    const payload = jwtDecode(token);
    return {
      token,
      payload,
    };
  } else if (type === "AUTH_LOGOUT") {
    return {};
  } else {
    return state;
  }
}

const actionAuthLogin = (token) => ({ type: "AUTH_LOGIN", token });
const actionAuthLogout = () => ({ type: "AUTH_LOGOUT" });

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2Mzc3ZTEzM2I3NGUxZjVmMmVjMWMxMjUiLCJsb2dpbiI6InRlc3Q1IiwiYWNsIjpbIjYzNzdlMTMzYjc0ZTFmNWYyZWMxYzEyNSIsInVzZXIiXX0sImlhdCI6MTY2ODgxMjQ1OH0.t1eQlRwkcP7v9JxUPMo3dcGKprH-uy8ujukNI7xE3A0";

const store2 = createStore(authReducer);
store2.subscribe(() => console.log(store2.getState()));

store2.dispatch(actionAuthLogin(token));
store2.dispatch(actionAuthLogout());

//cartReducer

function cartReducer(state = {}, { type, count, good }) {
  if (type === "CART_ADD") {
    const { _id } = good;
    if (state[_id]) {
      return {
        ...state,
        [_id]: { ...state[_id], count: state[_id].count + count },
      };
    } else {
      return {
        ...state,
        [_id]: { good, count },
      };
    }
  } else if (type === "CART_SUB") {
    const { _id } = good;
    let newCount = state[_id].count - count;
    if (newCount <= 0) {
      const newState = { ...state };
      delete newState[_id];
      return newState;
    } else {
      return {
        ...state,
        [_id]: { ...state[_id], count: newCount },
      };
    }
  } else if (type === "CART_DEL") {
    const { _id } = good;
    const newState = { ...state };
    delete newState[_id];
    return newState;
  } else if (type === "CART_SET") {
    const { _id } = good;
    if (count <= 0) {
      const newState = { ...state };
      delete newState[_id];
      return newState;
    } else {
      if (state[_id]) {
        return {
          ...state,
          [_id]: { ...state[_id], count },
        };
      } else {
        return {
          ...state,
          [_id]: { good, count },
        };
      }
    }
  } else if (type === "CART_CLEAR") {
    return {};
  } else {
    return state;
  }
}

const store3 = createStore(cartReducer);

store3.subscribe(() => console.log(store3.getState())); //

console.log(store3.getState()); //{}

const actionCartAdd = (good, count = 1) => ({ type: "CART_ADD", count, good });
const actionCartSub = (good, count = 1) => ({ type: "CART_SUB", count, good });
const actionCartDel = (good) => ({ type: "CART_DEL", good });
const actionCartSet = (good, count = 1) => ({ type: "CART_SET", count, good });
const actionCartClear = () => ({ type: "CART_CLEAR" });

store3.dispatch(actionCartAdd({ _id: "пиво", price: 50 }));
// {пиво: {good: {_id: 'пиво', price: 50}, count: 1}}
store3.dispatch(actionCartAdd({ _id: "чіпси", price: 75 }));
// {
// пиво: {good: {_id: 'пиво', price: 50}, count: 1},
// чіпси: {good: {_id: 'чіпси', price: 75}, count: 1},
//}
store3.dispatch(actionCartAdd({ _id: "пиво", price: 50 }, 5));
// {
// пиво: {good: {_id: 'пиво', price: 50}, count: 6},
// чіпси: {good: {_id: 'чіпси', price: 75}, count: 1},
//}
store3.dispatch(actionCartSet({ _id: "чіпси", price: 75 }, 2));
// {
// пиво: {good: {_id: 'пиво', price: 50}, count: 6},
// чіпси: {good: {_id: 'чіпси', price: 75}, count: 2},
//}

store3.dispatch(actionCartSub({ _id: "пиво", price: 50 }, 4));
// {
// пиво: {good: {_id: 'пиво', price: 50}, count: 2},
// чіпси: {good: {_id: 'чіпси', price: 75}, count: 2},
//}

store3.dispatch(actionCartDel({ _id: "чіпси", price: 75 }));
// {
// пиво: {good: {_id: 'пиво', price: 50}, count: 2},
//}

store3.dispatch(actionCartClear()); // {}

//gql

async function gql(query, variables) {
  const url = "http://shop-roles.node.ed.asmer.org.ua/graphql";
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: query, variables: variables }),
  });
  const data = await result.json();
  return data;
}

if (localStorage.authToken) {
  headers.Authorization = "Bearer " + localStorage.authToken;
}

//Кореневі категорії
const gqlRootCats = () => {
  const catQuery = `query cats($q: String){
    CategoryFind(query: $q){ 
      _id name
    }
  }`;
  const varRootCats = { q: "[{}]" };
  return gql(catQuery, varRootCats);
};

const actionRootCats = () => actionPromise("rootCats", gqlRootCats());

//Запит для отримання однієї категорії з товарами та картинками
const gqlCatOne = (id) => {
  const catOneQuery = `query oneCatWithGoodsImgs($q: String){
    CategoryFindOne(query: $q){ _id name image{url}
    goods{_id name price images{url}}
  }}`;
  return gql(catOneQuery, { q: JSON.stringify([{ _id: `${id}` }]) });
};

const actionCatOne = (id) => actionPromise("oneCat", gqlCatOne(id));

//Запит на отримання товару з описом та картинками
const gqlGoodOne = (id) => {
  const goodOneQuery = `query catsWithImgsDescription($q: String) {
    GoodFindOne(query: $q) {
      _id
      images {
        url
      }
      name
      price
      description
    }
  }`;
  return gql(goodOneQuery, { q: JSON.stringify([{ _id: `${id}` }]) });
};

const actionGoodOne = (id) => actionPromise("oneGood", gqlGoodOne(id));

//Запит на реєстрацію
const gqlRegister = (log, pass) => {
  const registerQuery = `mutation reg($login: String!, $password: String!) {
    UserUpsert(user: { login: $login, password: $password }) {
      _id
      login
    }
  }`;
  return gql(registerQuery, { login: `${log}`, password: `${pass}` });
};

const actionRegister = (log, pass) =>
  actionPromise("Registration", gqlRegister(log, pass));

//Логін
const actionLogin = (log, pass) => {
  const gqlLogin = (log, pass) => {
    const loginQuery = `query login($login:String, $password:String){
      login(login:$login, password:$password)
    }`;
    return gql(loginQuery, { login: `${log}`, password: `${pass}` });
  };
  return actionPromise("Login", gqlLogin(log, pass));
};

//Запит історії замовлень
const actionHistory = () => {
  const gqlHistory = () => {
    const historyQuery = `query OrderFind ($q: String) {OrderFind (query: $q) {
      _id 
      createdAt 
      total
    }}`;
    return gql(historyQuery, { q: "[{}]" });
  };
  return actionPromise("History", gqlHistory());
};

//Запит оформлення замовлення
const actionOrder = (count, id) => {
  const gqlOrder = (count, id) => {
    const orderQuery = `mutation newOrder($goods: [OrderGoodInput]) {
      OrderUpsert(order: {orderGoods: $goods}) {
        _id createdAt total
      }
    }`;
    return gql(orderQuery, { goods: [{ count, good: { _id: `${id}` } }] });
  };
  return actionPromise("Order", gqlOrder(count, id));
};

// store.dispatch(actionRootCats());
// store.dispatch(actionLogin("ryttyyy", "23232323"));
// store.dispatch(actionRegister("ranastasy", "23232323"));
// store.dispatch(actionCatOne("6262ca7dbf8b206433f5b3d1"));
// store.dispatch(actionGoodOne("62d3099ab74e1f5f2ec1a125"));
// store.dispatch(actionHistory());
// store.dispatch(actionOrder(4, '62d3099ab74e1f5f2ec1a125'));
