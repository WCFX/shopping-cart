import React, { useState } from 'react';
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

const PaymentScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return(
            <View style={styles.containerItem}>
              <Text></Text>
              <TouchableOpacity 
                onPress={() => {}}
                style={styles.buttonFood}
              >
                <Text style={styles.textFood}>
                {'   '}{item.food}
                </Text>
                <Text style={styles.textPrice}>R$ {item.price}{'      '}
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
      <ScrollView 
        style={styles.containerOrder}
      >
        <View style={styles.containerOrderValue}>
          <Text style={styles.totalItensText}>Total itens</Text>
          <Text style={styles.totalItensText}>R$0.00</Text>
        </View>

        <View style={styles.containerOrderValue}>
          <Text style={styles.totalItensText}>Taxa de entrega</Text>
          <Text style={styles.totalItensText}>R$5.00</Text>
        </View>

        <View style={styles.containerOrderValue}>
          <Text style={styles.totalItensText}>Total do pedido</Text>
          <Text style={styles.totalItensText}>R$0.00</Text>
        </View>

        <View style={styles.containerOrder}>
          <Text style={styles.textOrder}>Observações</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Tirar cebola, por favor." 
          />
        </View>

        <View style={styles.containerOrder}>
          <Text style={styles.textOrder}>Método de pagamento</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default PaymentScreen;