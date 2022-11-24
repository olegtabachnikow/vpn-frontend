import { bindActionCreators } from 'redux';
import { dispatch } from '../store/store';

const setCurrentUserAction = (payload) => {
  return {
    type: 'USER/SET',
    payload,
  };
};
const setPaymentAction = (payload) => {
  return {
    type: 'PAYMENT/SET',
    payload,
  };
};
const setPricesAction = (payload) => {
  return {
    type: 'PRICES/SET',
    payload,
  };
};
export const { setCurrentUser, setPayment, setPrices } = bindActionCreators(
  {
    setCurrentUser: setCurrentUserAction,
    setPayment: setPaymentAction,
    setPrices: setPricesAction,
  },
  dispatch
);
