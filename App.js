
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import { Nunito_400Regular,Nunito_600SemiBold,Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Poppins_400Regular,Poppins_600SemiBold,Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Archivo_400Regular,Archivo_600SemiBold,Archivo_700Bold} from '@expo-google-fonts/archivo';


import Routes from './src/routes/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Archivo_400Regular,
    Archivo_600SemiBold,
    Archivo_700Bold
  });

  if(!fontsLoaded){
    return null;
  }
  
  return (
    <>
      <Routes />
      <StatusBar style="light" statusBarStyle="light" backgroundColor="#01868b"/>
    </>
  );
};