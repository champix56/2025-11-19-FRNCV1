import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import { IProductListItem } from '../../interfaces/IProducts';
import store from '../../store/store';
interface IProductListProps {
  //   products: Array<IProductListItem>;
  height?: number;
}

const ProductList = ({ height = 350 }: IProductListProps) => {
  const [products, setproducts] = useState<Array<IProductListItem>>([]);
  useEffect(() => {
    setproducts(store.getState().stock.products);
    store.subscribe(() => {
      setproducts(store.getState().stock.products);
    });
  }, []);
  return (
    <ScrollView style={{ height: height }}>
      {products.map(item => (
        <ProductListItem produit={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

export default ProductList;
