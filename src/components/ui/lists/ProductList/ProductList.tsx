import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import { IProductItem } from '../../../../interfaces/IProducts';
import store from '../../../../store/store';
interface IProductListProps {
  products: Array<IProductItem>;
  height?: number;
}

const ProductList = ({products, height = 350 }: IProductListProps) => {
  
  return (
    <ScrollView style={{ height: height }}>
      {products.map(item => (
        <ProductListItem produit={item} key={item.id} />
      ))}
    </ScrollView>
  );
};


export default ProductList;
