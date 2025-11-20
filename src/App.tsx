/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect, useState } from 'react';
import {
  Alert,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import ProductListItem from './components/ProductListItem/ProductListItem';
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [counter, setcounter] = useState(0);
  const [counter2, setcounter2] = useState(100);
  useEffect(() => {
    console.log('counter1:' + counter);
  }, [counter]);

  useEffect(() => {
    console.log('init component');
    setcounter(1);
    setcounter2(101);
    return () => {
      console.log('demontage du composant');
    };
  }, []);
  // useEffect(() => {
  //  console.log('tous les refresh!!!!!!');  
  // })
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <View style={{ paddingTop: 25 }}>
        {/* <View>
          <ProductListItem
            produit={{
              id: 1,
              name: 'coca zero 33cl',
              img: 'https://www.bieres64-40.fr/wp-content/uploads/2022/12/cocazero33.png',
              prix: 1.99,
              stock: 6,
            }}
          />
          <ProductListItem
            produit={{
              id: 2,
              name: 'Kouign aman',
              img: 'https://biscuiterie-lafabrique.fr/wp-content/uploads/2024/09/Kouign-amann-praline-rose-La-Fabrique-Chavagne-e1747217497199.png',
              prix: 3.85,
              stock: 0,
            }}
          />
          <ProductListItem
            produit={{
              id: 3,
              name: 'beurre salé',
              img: 'https://dojwn62xby8qn.cloudfront.net/public/offer_presentations/slideshows/original/16389-1640171519.png?1640171519',
              prix: 4.85,
              stock: 2,
            }}
          />
        </View> */}
        <View style={{ borderTopWidth: 1, borderTopColor: 'black' }}>
          <Text style={{ textAlign: 'center' }}>Counter : {counter}</Text>
          <Button
            title="Ajouter 1"
            onPress={() => {
              setcounter(counter + 1);
              //console.log(counter);
            }}
          />
        </View>
        <View style={{ borderTopWidth: 1, borderTopColor: 'black' }}>
          <Text style={{ textAlign: 'center' }}>Counter : {counter2}</Text>
          <Button
            title="Ajouter 1 a c2"
            onPress={() => {
              setcounter2(counter2 + 1);
              //console.log(counter);
            }}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
export default App;
