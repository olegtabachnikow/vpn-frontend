import { combineReducers } from 'redux';

export const reducer = combineReducers({
  currentUser: currentUserReducer,
  payment: paymentReducer,
  prices: pricesReducer,
});

function currentUserReducer(state = {}, action) {
  switch (action.type) {
    case 'USER/SET':
      return action.payload;
    default:
      return state;
  }
}
function paymentReducer(state = 0, action) {
  switch (action.type) {
    case 'PAYMENT/SET':
      return action.payload;
    default:
      return state;
  }
}

function pricesReducer(state = {}, action) {
  switch (action.type) {
    case 'PRICES/SET':
      return action.payload;
    default:
      return state;
  }
}
