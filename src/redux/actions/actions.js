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
const setPaymentUrlAction = (payload) => {
  return {
    type: 'PAYMENT_URL/SET',
    payload,
  };
};
const setPricesAction = (payload) => {
  return {
    type: 'PRICES/SET',
    payload,
  };
};
const setDirectionAction = (payload) => {
  return {
    type: 'DIRECTION/SET',
    payload,
  };
};
const setCurrentCountryAction = (payload) => {
  return {
    type: 'COUNTRY/SET',
    payload,
  };
};
const setNextTariffAction = (payload) => {
  return {
    type: 'TARIFF/SET',
    payload,
  };
};
const setRedirectAction = (payload) => {
  return {
    type: 'REDIRECT/SET',
    payload,
  };
};
export const {
  setCurrentUser,
  setPayment,
  setPrices,
  setDirection,
  setCurrentCountry,
  setPaymentUrl,
  setNextTariff,
  setRedirect,
} = bindActionCreators(
  {
    setCurrentUser: setCurrentUserAction,
    setPayment: setPaymentAction,
    setPrices: setPricesAction,
    setDirection: setDirectionAction,
    setCurrentCountry: setCurrentCountryAction,
    setPaymentUrl: setPaymentUrlAction,
    setNextTariff: setNextTariffAction,
    setRedirect: setRedirectAction,
  },
  dispatch
);
