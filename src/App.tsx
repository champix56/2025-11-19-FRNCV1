/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Alert, StatusBar, Text, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Button from './components/Button/Button';
import buttonStyle from './components/Button/Button.style'
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{marginTop:10, paddingVertical:5}}>
        <Button bgcolor='lightblue' onButtonClick={()=>{
          Alert.alert('App clicked');
        }}>
          <Text style={buttonStyle.text}>drftgyhujikol</Text>
        </Button>
         
      </View>
    </SafeAreaProvider>
  );
}
export default App;
