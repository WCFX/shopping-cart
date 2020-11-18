import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import PaymentScreen from '../screens/PaymentScreen';

const { Navigator, Screen } = createStackNavigator();

export default function routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="PaymentScreen" component={PaymentScreen} />
      </Navigator>
    </NavigationContainer>  
  )
};

