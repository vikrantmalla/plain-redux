import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'

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
  if (action.type === "increment") {
    return { amount: state.amount + 1 };
  }
  if (action.type === "decrement") {
    return { amount: state.amount - 1 };
  }
  if (action.type === "incrementByAmount") {
    return { amount: state.amount + action.payload };
  }
  return state;
}

// Global State
// subscribe() to update the UI in response to state changes

// applyMiddleware is new way to subscribe

// store.subscribe(() => console.log(store.getState()));
// let history = [];
// store.subscribe(() => history.push(store.getState()), console.log(history));



// Action creators
// another way to create a action
function increment() {
  return { type: "increment" }
}

function decrement() {
  return { type: "increment" }
}

function incrementByAmount(value) {
  return { type: "incrementByAmount", payload:value }
}

// Action
// after creating dispatch add to reducer function
// store.dispatch({ type: 'increment' })

// every 2 second this function will trigger
setInterval(() => {
  store.dispatch(increment());
  store.dispatch(decrement());
  store.dispatch(incrementByAmount(5));
}, 2000);

