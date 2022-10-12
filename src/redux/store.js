import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducer';
const Store = configureStore({ reducer: rootReducers });
export default Store;
