import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

// action name constants
const increment = "increment";
const decrement = "decrement";
const incrementByAmount = "incrementByAmount";

// Store
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(reducer, applyMiddleware(logger.default));

// Reducer
// function that takes a current state value
// action object describing "what happened", and returns a new state value
// A reducer's function signature is: (state, action) => newState
function reducer(state = { amount: 1 }, action) {
  // immutability
  // always create a state copy
  // match action type name
  switch (action.type) {
    case increment:
      return { amount: state.amount + 1 };
    case decrement:
      return { amount: state.amount - 1 };
    case incrementByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

// Global State
// subscribe() to update the UI in response to state changes

// applyMiddleware is new way to subscribe

// store.subscribe(() => console.log(store.getState()));
// let history = [];
// store.subscribe(() => history.push(store.getState()), console.log(history));

// Action creators
// another way to create a action
function inc() {
  return { type: increment };
}

function dec() {
  return { type: increment };
}

function incByAmt(value) {
  return { type: incrementByAmount, payload: value };
}

// Action
// after creating dispatch add to reducer function
// store.dispatch({ type: 'increment' })

// every 2 second this function will trigger
setInterval(() => {
  // store.dispatch(inc());
  // store.dispatch(dec());
  store.dispatch(incByAmt(5));
}, 2000);
