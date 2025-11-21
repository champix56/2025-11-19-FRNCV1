import React from 'react';
import CartListUncconected from './CartList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import {
  addProductToCart,
  removeQuantityProductInCartById,
} from '../../../store/cart';

const CartList = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();
  return (
    <CartListUncconected
      products={products}
      addQuantityProductInCartById={prod => {
        dispatch(addProductToCart(prod));
      }}
      removeQuantityProductInCartById={(id: number) => {
        dispatch(removeQuantityProductInCartById(id));
      }}
    />
  );
};

export default CartList;
