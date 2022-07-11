import { GlobalStore } from 'redux-micro-frontend';

export const globalStore = GlobalStore.Get();

export const imitateError = () => {
  globalStore.DispatchGlobalAction('Home', {
    type: 'API/ERROR/IMITATE',
    payload: null,
  });
};

export const clearErrorState = () => {
  globalStore.DispatchGlobalAction('Home', {
    type: 'API/ERROR/CLEAR',
    payload: null,
  });
};
