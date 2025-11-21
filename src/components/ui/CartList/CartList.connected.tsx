import React from 'react'
import CartListUncconected from './CartList'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
const CartList = (props:any) => {
  const products= useSelector((state:RootState) => state.cart.products)
  return (
   <CartListUncconected products={products} {...props}/>
  )
}

export default CartList