import { bindActionCreators } from 'redux';
import { dispatch } from '../store/store';

const setCurrentUserAction = (payload) => {
  return {
    type: 'USER/SET',
    payload,
  };
};

export const { setCurrentUser } = bindActionCreators(
  {
    setCurrentUser: setCurrentUserAction,
  },
  dispatch
);
