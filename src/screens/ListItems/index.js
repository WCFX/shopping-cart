import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import data from '../../data';

import styles from './styles';

const ListItems = () => {

  const [cart, setCart ] = useState([]);

  const addToCart = (data) => {
    setCart([...cart, data]);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return(
            <View style={styles.containerItem}>
              <Text>{}</Text>
              <TouchableOpacity 
                onPress={() => {}}
                style={styles.buttonFood}
              >
                <Text style={styles.textFood}>
                {'   '}{item.food}
                </Text>
                <Text 
                style={styles.textPrice}>R${item.price}{'      '}
                  <Feather 
                    style={{ color: '#ca0d00' }}
                    name="minus-circle"
                    size={28}
                  />       
                </Text>
              </TouchableOpacity>

              <View style={styles.sideDishContainerColumn}>
                {item?.sideDish?.map((itemMap, index) => (
                <View
                key={index}
                style={styles.sideDishContainerRow}>
                  <Text style={styles.textSideDish}>
                  {'   '}{itemMap.condition}
                  </Text>
                  <Text style={styles.textPrice}>R${itemMap.price}{'      '}
                    <Feather 
                      style={{ color:'#ca0d00' }}
                      name="minus-circle"
                      size={28}
                    /> 
                  </Text>
                </View>
                ))}
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

export default ListItems;