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



// //promiseReducer

// function promiseReducer(state = {}, { type, status, payload, error, key}) {
//   if (type === "PROMISE") {
//     return {
//       ...state,
//       [key]: { status, payload, error },
//     };
//   }
//   return state;
// }

// const actionPending = (key) => ({ type: "PROMISE", status: "PENDING", key });

// const actionFulfilled = (key, payload) => ({
//   type: "PROMISE",
//   status: "FULFILLED",
//   payload,
//   key,
// });

// const actionRejected = (key, error) => ({
//   type: "PROMISE",
//   status: "REJECTED",
//   error,
//   key,
// });

// const delay = (ms) => new Promise((ok) => setTimeout(() => ok(ms), ms));

// const actionPromise = (key, promise) => async (dispatch) => {
//   dispatch(actionPending(key));
//   try {
//     const payload = await promise;
//     dispatch(actionFulfilled(key, payload));
//     return payload;
//   } catch (error) {
//     dispatch(actionRejected(key, error));
//   }
// };

// const store = createStore(promiseReducer);

// store.subscribe(() => console.log(store.getState())); //має запускатися 6 разів

// store.dispatch(actionPromise("delay", delay(1000)));

// store.dispatch(
//   actionPromise(
//     "luke",
//     fetch("https://swapi.dev/api/people/1").then((res) => res.json())
//   )
// );

// store.dispatch(
//   actionPromise(
//     "tatooine",
//     fetch("https://swapi.dev/api/planets/1").then((res) => res.json())
//   )
// );



// //authReducer

// const jwtDecode = (token) => {
//   try {
//     const arr = token.split(".");
//     const data = arr[1];
//     const decodedData = JSON.parse(atob(data));
//     return decodedData;
//   } catch (e) {
//     return "undefined";
//   }
// };

// function authReducer(state = {}, { type, token }) {
//   if (type === "AUTH_LOGIN") {
//     const payload = jwtDecode(token);
//     return {
//       token,
//       payload,
//     };
//   } else if (type === "AUTH_LOGOUT") {
//     return {};
//   } else {
//     return state;
//   }
// }

// const actionAuthLogin = (token) => ({ type: "AUTH_LOGIN", token });
// const actionAuthLogout = () => ({ type: "AUTH_LOGOUT" });

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2Mzc3ZTEzM2I3NGUxZjVmMmVjMWMxMjUiLCJsb2dpbiI6InRlc3Q1IiwiYWNsIjpbIjYzNzdlMTMzYjc0ZTFmNWYyZWMxYzEyNSIsInVzZXIiXX0sImlhdCI6MTY2ODgxMjQ1OH0.t1eQlRwkcP7v9JxUPMo3dcGKprH-uy8ujukNI7xE3A0";

// const store = createStore(authReducer);
// store.subscribe(() => console.log(store.getState()));

// store.dispatch(actionAuthLogin(token));
// store.dispatch(actionAuthLogout());



// //cartReducer

// function cartReducer(state = {}, { type, count, good }) {
//   if (type === "CART_ADD") {
//     const { _id } = good;
//     if (state[_id]) {
//       return {
//         ...state,
//         [_id]: { ...state[_id], count: state[_id].count + count },
//       };
//     } else {
//       return {
//         ...state,
//         [_id]: { good, count },
//       };
//     }
//   } else if (type === "CART_SUB") {
//     const { _id } = good;
//     let newCount = state[_id].count - count;
//     if (newCount <= 0) {
//       const newState = { ...state };
//       delete newState[_id];
//       return newState;
//     } else {
//       return {
//         ...state,
//         [_id]: { ...state[_id], count: newCount },
//       };
//     }
//   } else if (type === "CART_DEL") {
//     const { _id } = good;
//     const newState = { ...state };
//     delete newState[_id];
//     return newState;
//   } else if (type === "CART_SET") {
//     const { _id } = good;
//     if (count <= 0) {
//       const newState = { ...state };
//       delete newState[_id];
//       return newState;
//     } else {
//       if (state[_id]) {
//         return {
//           ...state,
//           [_id]: { ...state[_id], count },
//         };
//       } else {
//         return {
//           ...state,
//           [_id]: { good, count },
//         };
//       }
//     }
//   } else if (type === "CART_CLEAR") {
//     return {};
//   } else {
//     return state;
//   }
// }

// const store = createStore(cartReducer);

// store.subscribe(() => console.log(store.getState())); //

// console.log(store.getState()); //{}

// const actionCartAdd = (good, count = 1) => ({ type: "CART_ADD", count, good });
// const actionCartSub = (good, count = 1) => ({ type: "CART_SUB", count, good });
// const actionCartDel = (good) => ({ type: "CART_DEL", good });
// const actionCartSet = (good, count = 1) => ({ type: "CART_SET", count, good });
// const actionCartClear = () => ({ type: "CART_CLEAR" });

// store.dispatch(actionCartAdd({ _id: "пиво", price: 50 }));
// // {пиво: {good: {_id: 'пиво', price: 50}, count: 1}}
// store.dispatch(actionCartAdd({ _id: "чіпси", price: 75 }));
// // {
// // пиво: {good: {_id: 'пиво', price: 50}, count: 1},
// // чіпси: {good: {_id: 'чіпси', price: 75}, count: 1},
// //}
// store.dispatch(actionCartAdd({ _id: "пиво", price: 50 }, 5));
// // {
// // пиво: {good: {_id: 'пиво', price: 50}, count: 6},
// // чіпси: {good: {_id: 'чіпси', price: 75}, count: 1},
// //}
// store.dispatch(actionCartSet({ _id: "чіпси", price: 75 }, 2));
// // {
// // пиво: {good: {_id: 'пиво', price: 50}, count: 6},
// // чіпси: {good: {_id: 'чіпси', price: 75}, count: 2},
// //}

// store.dispatch(actionCartSub({ _id: "пиво", price: 50 }, 4));
// // {
// // пиво: {good: {_id: 'пиво', price: 50}, count: 2},
// // чіпси: {good: {_id: 'чіпси', price: 75}, count: 2},
// //}

// store.dispatch(actionCartDel({ _id: "чіпси", price: 75 }));
// // {
// // пиво: {good: {_id: 'пиво', price: 50}, count: 2},
// //}

// store.dispatch(actionCartClear()); // {}
