import React from 'react'
import { Groups } from '@screens/groups'

import theme from './src/theme'
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Loading } from '@components/Loading';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups/> : <Loading/>}
    </ThemeProvider>
  );
}


