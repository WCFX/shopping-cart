import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/Home';
import PaymentScreen from '../screens/PaymentScreen';
import CounterProvider from '../context/Cart';


const { Navigator, Screen } = createStackNavigator();

export default function routes(){
  return(
    <CounterProvider>
      <NavigationContainer>
        <Navigator 
          screenOptions={{
            title: 'Finalizar Pedido',
            headerStyle: {
              backgroundColor: '#00d4df',
            },
            headerTintColor: '#fff',
          }}
          >
          <Screen
            options={{
              headerShown: false
            }}
            name="Home"
            component={Home}
            />
          <Screen
            name="PaymentScreen"
            component={PaymentScreen}
          />
        </Navigator>
      </NavigationContainer> 
    </CounterProvider>
    
  )
};

