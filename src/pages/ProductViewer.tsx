import { Button, View } from 'react-native';
import React from 'react';
import Product from '../components/ui/Products/Product';
import { IProductItem } from '../interfaces/IProducts';
import { StaticScreenProps, useNavigation } from '@react-navigation/native';

// interface IProductViewerProps {
//   route:
// }
const ProductViewer = ({
  route,
}: StaticScreenProps<{ product: IProductItem }>) => {
  const n = useNavigation();
  return (
    <View>
      <Product product={route.params.product} onEditClick={() => {}} />

      <Button
        title="Editer"
        onPress={() => {
          //@ts-ignore
          n.navigate('ProductEditor' as never, {
            product: route.params.product,
          });
        }}
      />
    </View>
  );
};

export default ProductViewer;
