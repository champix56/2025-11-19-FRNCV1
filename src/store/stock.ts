import { createSlice } from '@reduxjs/toolkit';
import { IProductListItem } from '../interfaces/IProducts';
interface IStockState {
  products: Array<IProductListItem>;
  loaded: boolean;
}
const initialState: IStockState = {
  products: [],
  loaded: false,
};

const stock = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    addProductToStock(
      state,
      action: { type: string; payload: IProductListItem },
    ) {
      console.log(action);
      state.products.push(action.payload);
    },
    resetStock(state) {
      state.products = [];
      state.loaded = false;
    },
  },
  extraReducers: builder => {
    builder.addCase('cart/addProductToCart', (state, action) => {
      console.log(
        '%c%s',
        'color:red;font-size:25pt;font-weight:900;',
        'stock extra reducer addProductToCart case',
      );
      console.log(action, state);
    });

    builder.addDefaultCase((state, action) => {
      console.log('stock extra reducer default case', state, action);
    });
  },
});

export const { resetStock, addProductToStock } = stock.actions;

const stockReducer = stock.reducer;
export default stockReducer;
