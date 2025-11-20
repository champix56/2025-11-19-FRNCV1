/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Text,
  useColorScheme,
  View,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProductListItem from './components/ProductListItem/ProductListItem';
import { products } from '../db.json';

function App() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <View style={{ paddingTop: 25 }}>
        <ScrollView style={{ height: 350 }}>
          {
            products.map((item,position)=><ProductListItem produit={item} key={item.id}/>)
          }
          {/* <FlatList
            data={products}
            renderItem={item => <ProductListItem produit={item} />}
            keyExtractor={(item:any) => item.id}
          /> */}
          {/* <ProductListItem
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
          /> */}
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}
export default App;
