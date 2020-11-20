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
              <View style={styles.principalFood}>

              <TouchableOpacity 
                onPress={() => {}}
                style={styles.buttonFood}
              >
                <Text style={styles.textFood}>
                  
                {'   '}{item.food}
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonAdd, styles.buttonAdd2]}>

                <Text 
                style={styles.textPrice}>
                  <Feather name="plus-circle" size={20} color="#1eba52" />{' '}
                  R$ {item.price}
                </Text>
              </TouchableOpacity>
            </View>
            

              <View style={styles.sideDishContainerColumn}>
                {item?.sideDish?.map((itemMap, index) => (
              <View
                key={index}
                style={styles.sideDishContainerRow}>
                  <Text style={styles.textSideDish}>
                    
                  {'   '}{itemMap.condition}
                  </Text>
                <TouchableOpacity style={styles.buttonAdd}>
                  <Text style={styles.textPrice}>
                  <Feather name="plus-circle" size={20} color="#1eba52"/>{'  '}
                  R$ {itemMap.price}</Text>
                </TouchableOpacity>
                
                </View>
                ))}
              </View>
              
            </View>
          )
        }}
        keyExtractor={(item) => item.id}
      >

      </FlatList>
      <View style={styles.containerOrder}>
        <Text style={styles.textOrder}>Observações</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Tirar cebola, por favor." 
        />
      </View>
    </SafeAreaView>
  );
}

export default ListItems;