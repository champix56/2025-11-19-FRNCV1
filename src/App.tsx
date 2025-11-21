/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Banner from './components/ui/Banner/Banner';
import store from './store/store';
import { useEffect, useState } from 'react';
import CartList from './components/ui/CartList/CartList.connected';
import { Provider } from 'react-redux';

// import store from './store/store';

function App() {
  const [state, setstate] = useState<Array<TProductCart>>([]);
  useEffect(() => {
    setstate(store.getState().cart.products);
    store.subscribe(() => {
      setstate(store.getState().cart.products);
    });
  }, []);
  console.log(state);
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{ paddingTop: 5 }}>
        <View>
          <Banner text="Bienvenue dans ma boutique" />
        </View>
        <CartList  />
      </SafeAreaProvider>
    </Provider>
  );
}
export default App;
