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
        <Text style={{TextAlign:'center', fontSize:18}}>Liste des produits</Text>
        <ScrollView style={{ height: 350 }}>
          {
            products.map((item,position)=><ProductListItem produit={item} key={item.id}/>)
          }
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}
export default App;
