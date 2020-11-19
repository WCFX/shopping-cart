import React from 'react';
import { View, SafeAreaView, Text, FlatList, TouchableOpacity} from 'react-native';
import data from '../../data';

import styles from './styles';

const PaymentScreen = () => {


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return(
            <View style={styles.containerItem}>
              <TouchableOpacity style={styles.buttonFood}>
                <Text style={styles.textFood}>
                  {item.food}
                </Text>
                <Text style={styles.textFood}>
                  {item.price}
                </Text>                
              </TouchableOpacity>

                {item?.sideDish?.map((itemMap) => (
                <>
                  <Text>{itemMap.condition} </Text>
                  <Text>{itemMap.price} </Text>
                </>
                ))}

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