import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';

import styles from './styles';

const ReviewOrder = () => {
  return(
    <View style={styles.container}>
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
          <Text style={styles.textOrder}>Método de pagamento</Text>
        </View>

      </ScrollView>
    </View>
  )
}

export default ReviewOrder;