import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View>
      <Text style={{textAlign:'center', marginTop:100, marginBottom:50, fontSize:40, textDecorationLine:'underline'}}>Bienveue</Text>
      <View style={style.buttonView}>
        <Button
          title="Voir produits"
          color="#F7AB8E"
          onPress={() => {
            /* Navigation logic to Products screen */
          }}
        />
      </View>
      <View style={style.buttonView}>
        <Button
          title="Voir panier"
          onPress={() => {
            /* Navigation logic to Products cart */
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  buttonView: {
    padding: 10,
    marginTop: 30,
  },
});
export default Home;
