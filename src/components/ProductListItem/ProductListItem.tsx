import { View, Text } from 'react-native';
import React from 'react';
interface IProductListItem {
  id?: number;
  name: string;
  prix: number;
  stock: number;
  img: string;
}
interface IProductListItemProps{
    produit:IProductListItem
}
const ProductListItem: React.FC<IProductListItemProps> = props => {
  return (
    <View>
      <Text>ProductListItem</Text>
    </View>
  );
};

export default ProductListItem;
