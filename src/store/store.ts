import { configureStore } from '@reduxjs/toolkit';
import stockReducer, { addProductToStock } from './stock';
import {products} from '../../db.json'
const store = configureStore({
  reducer: stockReducer,
});





export default store;
//typage du store(states et dispatch) invariable
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



store.subscribe(() => {
  console.log('Store updated : ', store.getState());
});


store.dispatch(addProductToStock(products[0]));
store.dispatch(addProductToStock(products[1]));
store.dispatch(addProductToStock(products[2])); 
