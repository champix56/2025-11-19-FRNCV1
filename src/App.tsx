/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text, View, Button, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ProductList from './components/ui/lists/ProductList/ProductList.connected';
import { AddProductButtonConnected } from './components/AddProductButton/AddProductButton';
import Banner from './components/ui/Banner/Banner';
function App() {
  return (
      <SafeAreaProvider>
        {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
        <View style={{ paddingTop: 25 }}>
          <Banner text="Ma boutique" />
        </View>
      </SafeAreaProvider>
  );
}
export default App
