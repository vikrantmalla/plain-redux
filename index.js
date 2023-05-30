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
  return state;
}

// Global State
// subscribe() to update the UI in response to state changes

// applyMiddleware is new way to subscribe

// store.subscribe(() => console.log(store.getState()));
// let history = [];
// store.subscribe(() => history.push(store.getState()), console.log(history));

// Action
// after creating dispatch add to reducer function
// store.dispatch({ type: 'increment' })

// every 2 second this function will trigger
setInterval(() => {
  store.dispatch({ type: "increment" });
}, 2000);
