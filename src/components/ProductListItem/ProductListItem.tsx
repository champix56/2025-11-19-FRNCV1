import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
interface IProductListItem {
  id?: number;
  name: string;
  prix: number;
  stock: number;
  img: string;
}
interface IProductListItemProps {
  produit: IProductListItem;
}
const ProductListItem: React.FC<IProductListItemProps> = ({ produit }) => {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image source={{ uri: produit.img }} style={style.image} />
      </View>
      <View style={style.textContainer}>
        <Text style={style.text}>Nom:<Text style={style.textValue}>{produit.name}</Text></Text>
        <Text style={style.text}>Prix:<Text style={style.textValue}>{produit.prix}€</Text></Text>
        <Text style={style.text}>Stock:<Text style={style.textValue}>{produit.stock}</Text></Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor:'grey',
    borderWidth:2,
    borderRadius:5,
    marginBottom:5
  },
  imageContainer: {
    padding:5
  },
  textContainer: {
    flexGrow: 1,
    paddingVertical:5,
    justifyContent:'space-between'
  },
  image: {
    width: 96,
    height: 96,
  },
  text:{

  },
  textValue:{
    fontWeight:"900"
  }
});
export default ProductListItem;
