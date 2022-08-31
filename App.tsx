import { StyleSheet, Text, View } from 'react-native';
import {NativeBaseProvider, StatusBar } from 'native-base';
import {
  useFonts,
  Inter_400Regular, 
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter';

import { Home } from './src/screens/home';

import { THEME } from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold});

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Home/> : ''}
    </NativeBaseProvider>  
  );
}

