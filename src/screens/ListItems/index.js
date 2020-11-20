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
  const [selectItems, setSelectItems ] = useState([]);


  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => (item.id)}
        renderItem={({ item, index }) => {

          return(
            <View style={styles.containerItem}>
              <TouchableOpacity
                onPress={() => {}}
                style={styles.buttonFood}
              >
                <Text style={styles.textFood}>
                  
                {'  '}{item.food}
                </Text>

                <Text 
                style={styles.textPrice}>
                  R$ {item.price}
                </Text>
              </TouchableOpacity>

              <View style={styles.sideDishContainerColumn}>
                {item?.sideDish?.map((itemMap, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={[styles.buttonAdd, styles.containerRow]}>
                  <Text style={styles.textSideDish}>
                    
                  {'   '}{itemMap.condition}
                  </Text>
                
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