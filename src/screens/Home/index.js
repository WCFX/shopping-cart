import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import backgroundImg from '../../assets/background-1.jpeg';

import styles from './styles';


const Home = () => {
  
  const { navigate } = useNavigation();

  function handleNavigateToPayment(){
    navigate('PaymentScreen')
  }

  return(
    <View style={styles.container}>
      <ImageBackground
        
        source={backgroundImg}
        style={styles.backgroundImg}
      >
        <Text style={styles.title}>Vamos para o {'\n'}seu carrinho ?</Text>
        <TouchableOpacity
          onPress={handleNavigateToPayment}  
          style={styles.buttonOrder}
        >
          <Text style={styles.buttonOrderText}>
            <Feather name="shopping-cart" size={24} />
            {'   '}CARRINHO DE COMPRAS
            </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Home;