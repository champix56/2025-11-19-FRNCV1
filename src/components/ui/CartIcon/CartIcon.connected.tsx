import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import CartIconUnconnected from './CartIcon';


const CartIcon = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  return (
    <CartIconUnconnected
      quantity={cartProducts.reduce((acc, prod) => acc + prod.quantity, 0)}
    />
  );
};

export default CartIcon;
