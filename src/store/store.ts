import { configureStore } from '@reduxjs/toolkit';
import stockReducer, { fetchProducts } from './stock';
import cartReducer, { addProductToCart } from './cart';
const store = configureStore({
  reducer: { stock: stockReducer, cart: cartReducer },
});

export default store;
//typage du store(states et dispatch) invariable
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
let isCartDebugExectuted = false;
store.subscribe(() => {
  console.log('Store updated : ', store.getState());

  if (!isCartDebugExectuted && store.getState().stock.products.length > 0) {
    isCartDebugExectuted = true;
    store.dispatch(addProductToCart(store.getState().stock.products[0]));
    store.dispatch(addProductToCart(store.getState().stock.products[0]));
    store.dispatch(addProductToCart(store.getState().stock.products[1]));
  }
});

store.dispatch(fetchProducts());
