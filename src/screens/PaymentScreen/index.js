import React from 'react';
import { View, SafeAreaView, Text, FlatList } from 'react-native';

import dataInform from '../../data';

import styles from './styles';

const PaymentScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataInform}
        renderItem={({ item }) => {
          return(
            <View>
              <Text 
                style={styles.title}
              >
                {item.title}
              </Text>

              <Text
                style={styles.description}
              >
                {item.description}
              </Text>
              
              <Text
                style={styles.price}
              >
                {item.price}
              </Text>
            </View>
          )
        }}
        keyExtractor={(item) => item.id}
      >

    </FlatList>
    </SafeAreaView>
  );
}

export default PaymentScreen;