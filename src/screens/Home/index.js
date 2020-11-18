import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backgroundImg from '../../assets/background-1.jpeg';

import styles from './styles';

const { navigation } = useNavigation();

const Home = () => {
  return(
    <View style={styles.container}>
      <ImageBackground 
        source={backgroundImg}
        style={styles.backgroundImg}
      >
        <Text style={styles.title}>Vamos para {'\n'}o seu pedido ?</Text>
        <TouchableOpacity style={styles.buttonOrder}>
          <Text style={styles.buttonOrderText}>FINALIZE SEU PEDIDO</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Home;