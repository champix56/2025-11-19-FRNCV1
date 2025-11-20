import { Button } from 'react-native';
import React from 'react';
import store from '../../store/store';
import { addProductToStock } from '../../store/stock';

const AddProductButton = () => {
  const dispatch = store.dispatch;
  return (
    <Button
      title="add empty product"
      onPress={() => {
        dispatch(
          addProductToStock({
            name: 'Produit vide',
            prix: 0,
            stock: 0,
            img: '',
            id: Math.random() * 100000,
          }),
        );
      }}
    />
  );
};

export default AddProductButton;
