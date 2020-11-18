import React from 'react';
import { View, SafeAreaView, Text, FlatList, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

import data from '../../data';

import styles from './styles';

const PaymentScreen = () => {


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
        
          return(
            <View style={styles.containerFlatlist}>

              <View style={styles.containerItem}>
                <TouchableOpacity style={styles.buttonTitle}>
                  <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                  <Text style={styles.price}>{item.price}</Text>
                </TouchableOpacity>

              </View>
              
              <View style={styles.containerItem}>
                <TouchableOpacity>
                  <Text style={styles.description}> {item.description}</Text>
                </TouchableOpacity>
              </View>

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