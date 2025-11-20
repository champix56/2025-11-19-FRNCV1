import { IProductListItem } from '../interfaces/IProducts';
import { products } from '../../db.json';
import { configureStore } from '@reduxjs/toolkit';

interface IStoreState {
  counter: number;
  products: Array<IProductListItem>;
}
const initialState: IStoreState = {
  counter: 0,
  products: products,
};

const reducer = (
  state = initialState,
  action: { type: string; payload: any },
) => {
  switch (action.type) {
    case 'RESET_PRODUCT_LIST':
      return { ...state, products: [] };
    case 'DELETE_PRODUCT_IN_LIST_BY_ID':
      const position = state.products.findIndex(p => p.id === action.payload);
      console.log(position);
      if (position > -1) {
        return state;
      }
      return {
        ...state,
        products: [
          ...state.products.slice(0, position-1),
          ...state.products.slice(position + 1),
        ],
      };

    default:
      return state;
  }
};

//constructeur d'actions
export const deleteProductInListById = (id: number) => {
  return { type: 'DELETE_PRODUCT_IN_LIST_BY_ID', payload: id };
};

const store = configureStore({ reducer:reducer, devTools:true });

store.subscribe(() => {
  console.log('store changed : ', store.getState());
});
store.dispatch(deleteProductInListById(2));
store.dispatch(deleteProductInListById(3));
