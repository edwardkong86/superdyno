import { configureStore } from '@reduxjs/toolkit'
// import { composeWithDevTools } from 'redux-devtools-extension';
import { globalStore } from '../globalStoreUtils';
import AuthReducer from './AuthReducer';

export const store = configureStore({
    reducer: {
        router: AuthReducer,
    }
  })

globalStore.RegisterStore('Home', store);
