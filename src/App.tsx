/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Alert, StatusBar, Text, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Button from './components/Button/Button';
import buttonStyle from './components/Button/Button.style';
import ProductListItem from './components/ProductListItem/ProductListItem';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ marginTop: 10, paddingVertical: 5 }}>
        <ProductListItem
          produit={{ id: 1, name: '', img: '', prix: 3.99, stock: 6 }}
        ></ProductListItem>
      </View>
    </SafeAreaProvider>
  );
}
export default App;
