import { combineReducers } from 'redux';

export const reducer = combineReducers({
  currentUser: currentUserReducer,
});

function currentUserReducer(state = {}, action) {
  switch (action.type) {
    case 'USER/SET':
      return action.payload;
    default:
      return state;
  }
}
