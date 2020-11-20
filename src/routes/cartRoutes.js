import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons } from '@expo/vector-icons';

import ListItems from '../screens/ListItems';
import ReviewOrder from '../screens/ReviewOrder';

const { Navigator, Screen } = createBottomTabNavigator();

function cartRoutes() {
  return(
    <Navigator 
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#FAFAFC',
        activeBackgroundColor: '#EBEBF5',
        inactiveTintColor: '#C1BCCC',
        activeTintColor: '#32264D',
      }}
    >
      <Screen
        name="ListItems"
        component={ListItems}
        options={{
          tabBarLabel: 'Produtos',
          tabBarIcon: ({ color, size, focused }) => {
            return(
              <Feather name="heart" size={size} color={focused ? '#f53636' : color} />
            );
          }
        }}  

      />
      <Screen 
        name="ReviewOrder"
        component={ReviewOrder}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({ color, size, focused }) => {
            return(
              <Feather name="shopping-cart" size={size} color={focused ? '#00d4df' : color} />
            );
          }
        }}    
      />
    </Navigator>
  )
};

export default cartRoutes;