import React from 'react';
import ProductListUnconnected from './ProductList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
interface IProductListProps {
    height?: number;
  }
const ProductList = (props:IProductListProps) => {
  const products=useSelector((state:RootState)=>state.stock.products);
  return (
    <ProductListUnconnected {...props} products={products} />
  );
};

export default ProductList;
