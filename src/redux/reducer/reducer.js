import { combineReducers } from 'redux';

export const reducer = combineReducers({
  currentUser: currentUserReducer,
  payment: paymentReducer,
  prices: pricesReducer,
  direction: currentDirectionReducer,
  currentCountry: currentCountryReducer,
  paymentUrl: paymentUrlReducer,
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
function paymentUrlReducer(state = 'success', action) {
  switch (action.type) {
    case 'PAYMENT_URL/SET':
      return action.payload;
    default:
      return state;
  }
}

function currentCountryReducer(state = 0, action) {
  switch (action.type) {
    case 'COUNTRY/SET':
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

function currentDirectionReducer(state = true, action) {
  switch (action.type) {
    case 'DIRECTION/SET':
      return action.payload;
    default:
      return state;
  }
}
