import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import backgroundImg from '../../assets/background-1.jpeg';

import styles from './styles';


const Home = () => {
  
  const { navigate } = useNavigation();

  function handleNavigateToPayment(){
    navigate('ListItems')
  }

  return(
    <View style={styles.container}>
      <ImageBackground
        
        source={backgroundImg}
        style={styles.backgroundImg}
      >
        <Text style={styles.title}>Venha conhecer{'\n'}nosso cardápio</Text>
        <TouchableOpacity
          onPress={handleNavigateToPayment}  
          style={styles.buttonOrder}
        >
          <Text style={styles.buttonOrderText}>
            <Feather name="coffee" size={24} />
            {'   '}BORA MATAR A FOME ?
            </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Home;